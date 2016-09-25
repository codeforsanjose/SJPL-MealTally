package com.togetherly.hackathon.mealtally

import android.animation.Animator
import android.graphics.Typeface
import android.os.AsyncTask
import android.support.v7.app.AppCompatActivity
import android.os.Bundle
import android.text.Editable
import android.text.TextWatcher
import android.text.format.DateFormat
import android.util.Log
import android.view.View
import android.view.animation.AccelerateDecelerateInterpolator
import android.widget.Button
import android.widget.EditText
import android.widget.LinearLayout
import android.widget.TextView
import com.transitionseverywhere.*
import com.yalantis.contextmenu.lib.ContextMenuDialogFragment
import com.yalantis.contextmenu.lib.MenuObject
import com.yalantis.contextmenu.lib.MenuParams
import kotlinx.android.synthetic.main.activity_main.*
import kotlinx.android.synthetic.main.food_counter.*
import kotlinx.android.synthetic.main.scene_form_1.*
import org.jetbrains.anko.*
import org.json.JSONObject
import java.io.DataOutputStream
import java.net.HttpURLConnection
import java.net.URL
import java.util.*

class MainActivity : AppCompatActivity() {

    val mealCountForm = MealCountForm()

    lateinit var mealsFromVendor: EditText
    lateinit var mealsLeftover: EditText
    lateinit var totalMeals: TextView
    lateinit var breakfastText: TextView
    lateinit var AMSnackText: TextView
    lateinit var lunchText: TextView
    lateinit var PMSnackText: TextView
    lateinit var supperText: TextView
    lateinit var mealTypeText: TextView

    lateinit var childrenButton: Button
    lateinit var adultsButton: Button
    lateinit var staffButton: Button
    lateinit var childrenMinusButton: Button
    lateinit var adultsMinusButton: Button
    lateinit var staffMinusButton: Button
    lateinit var totalServedCount: TextView

    lateinit var nextButton: Button
    lateinit var nextArrowHelper: View
    lateinit var currentScene: Scene
    lateinit var formOne: Scene
    lateinit var formTwo: Scene

    companion object {
        private val animationTimer = 100L
        private val transitionTimer = 300L

        private val locationMenuObjects = arrayListOf(
                MenuObject("Dr. Roberto Cruz Alum Rock"),
                MenuObject("HillView"),
                MenuObject("Biblioteca"),
                MenuObject("Joyce Ellington"),
                MenuObject("Tully Community"),
                MenuObject("Educational Park"),
                MenuObject("Other")
        )
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val date = DateFormat.format("yyyy-MMMM-dd", Date().time)
        dateTextView.text = date.toString()

        // Scenes
        formOne = Scene.getSceneForLayout(sceneRoot, R.layout.scene_form_1, this)
        formTwo = Scene.getSceneForLayout(sceneRoot, R.layout.scene_form_2, this)

        val transitionSet = TransitionSet()
        transitionSet.addTransition(ChangeBounds())
        transitionSet.addTransition(ChangeTransform())
        transitionSet.duration = transitionTimer
        transitionSet.interpolator = AccelerateDecelerateInterpolator()

        currentScene = formOne
        TransitionManager.go(currentScene)

        // B-e-a-u-t-i-f-u-l
        val top = sceneRoot.findViewById(R.id.top) as LinearLayout
        top.animate()
                .scaleY(0.0f)
                .setDuration(0)
                .start()
        top.animate()
                .scaleY(1.0f)
                .setDuration(200)
                .start()

        setNextArrowListener(transitionSet)
        setListeners(false)
        setFoodCounts()
    }

    private fun bindViews() {

        mealsFromVendor = sceneRoot.findViewById(R.id.mealsVendorCount) as EditText
        mealsLeftover = sceneRoot.findViewById(R.id.mealsLeftoverCount) as EditText
        breakfastText = sceneRoot.findViewById(R.id.breakfastText) as TextView
        AMSnackText = sceneRoot.findViewById(R.id.AMSnackText) as TextView
        lunchText = sceneRoot.findViewById(R.id.lunchText) as TextView
        PMSnackText = sceneRoot.findViewById(R.id.PMSnackText) as TextView
        supperText = sceneRoot.findViewById(R.id.supperText) as TextView
        mealTypeText = sceneRoot.findViewById(R.id.mealTypeText) as TextView
        totalMeals = sceneRoot.findViewById(R.id.mealsTotalCount) as TextView

        childrenButton = sceneRoot.findViewById(R.id.childrenFoodButton) as Button
        adultsButton = sceneRoot.findViewById(R.id.adultsFoodButton) as Button
        staffButton = sceneRoot.findViewById(R.id.staffFoodButton) as Button
        childrenMinusButton = sceneRoot.findViewById(R.id.childrenMinusButton) as Button
        adultsMinusButton = sceneRoot.findViewById(R.id.adultsMinusButton) as Button
        staffMinusButton = sceneRoot.findViewById(R.id.staffMinusButton) as Button
        totalServedCount = sceneRoot.findViewById(R.id.totalServedText) as TextView
    }

    private fun setListeners(enableButtons: Boolean) {

        bindViews()

        mealsFromVendor.addTextChangedListener(mealsTextChangeListener())
        mealsLeftover.addTextChangedListener(mealsTextChangeListener())

        if (enableButtons) {
            childrenButton.setOnClickListener(foodCountPlusListener())
            adultsButton.setOnClickListener(foodCountPlusListener())
            staffButton.setOnClickListener(foodCountPlusListener())
            childrenMinusButton.setOnClickListener(foodCountMinusListener(childrenButton))
            adultsMinusButton.setOnClickListener(foodCountMinusListener(adultsButton))
            staffMinusButton.setOnClickListener(foodCountMinusListener(staffButton))
        } else {
            childrenButton.enabled = false
            adultsButton.enabled = false
            staffButton.enabled = false
            childrenMinusButton.enabled = false
            adultsMinusButton.enabled = false
            staffMinusButton.enabled = false
        }
    }

    private fun adjustForScenes() {
        val isEnabled = if (currentScene != formTwo) true else false
        setListeners(isEnabled)
    }

    private fun setFoodCounts(children: String = "0", adults: String = "0", staff: String = "0") {
        childrenButton.text = children
        adultsButton.text = adults
        staffButton.text = staff
    }

    private fun calculateTotalServed() {
        val childrenServed = childrenButton.text.toString().toInt()
        val adultsServed = adultsButton.text.toString().toInt()
        val staffServed = staffButton.text.toString().toInt()

        totalServedCount.animate()
            .setDuration(animationTimer)
            .scaleX(1.3f)
            .scaleY(1.3f)
            .setListener(object: Animator.AnimatorListener {
                override fun onAnimationRepeat(animation: Animator?) {
                }

                override fun onAnimationEnd(animation: Animator?) {
                    totalServedCount.animate()
                            .setDuration(animationTimer)
                            .scaleY(1.0f)
                            .scaleX(1.0f)
                            .start()
                }

                override fun onAnimationCancel(animation: Animator?) {
                }

                override fun onAnimationStart(animation: Animator?) {
                }
            })
        totalServedText.text = (childrenServed + adultsServed + staffServed).toString()

        mealCountForm.childrenFoodCount = childrenServed.toString()
        mealCountForm.adultFoodCount = adultsServed.toString()
        mealCountForm.staffFoodCount = staffServed.toString()
    }

    fun foodCountPlusListener() = View.OnClickListener {
        if (it is Button) {
            it.text = if (it.text.length == 0) "0" else (it.text.toString().toInt() + 1).toString()
        }
        calculateTotalServed()

        it.animate()
            .setDuration(animationTimer)
            .scaleX(1.3f)
            .scaleY(1.3f)
            .setListener(object: Animator.AnimatorListener {
                override fun onAnimationRepeat(animation: Animator?) {
                }

                override fun onAnimationEnd(animation: Animator?) {
                    it.animate()
                        .setDuration(animationTimer)
                        .scaleY(1.0f)
                        .scaleX(1.0f)
                        .start()
                }

                override fun onAnimationCancel(animation: Animator?) {
                }

                override fun onAnimationStart(animation: Animator?) {
                }
            })
            .start()
    }

    private fun foodCountMinusListener(counter: Button) = View.OnClickListener {

        // Minus food count
        counter.text = if (counter.text.toString() <= "0") "0" else (counter.text.toString().toInt() - 1).toString()
        calculateTotalServed()

        val counterButtonAnimation = counter.animate()
                .setDuration(animationTimer)
                .scaleX(0.7f)
                .scaleY(0.7f)
                .setListener(object : Animator.AnimatorListener {
                    override fun onAnimationRepeat(animation: Animator?) {
                    }

                    override fun onAnimationEnd(animation: Animator?) {
                        counter.animate()
                                .setDuration(100)
                                .scaleY(1.0f)
                                .scaleX(1.0f)
                                .start()
                    }

                    override fun onAnimationCancel(animation: Animator?) {
                    }

                    override fun onAnimationStart(animation: Animator?) {
                    }
                })
        // Run animations simultaneously using endWithAction { }
        it.animate()
                .setDuration(animationTimer)
                .scaleX(1.1f)
                .scaleY(1.1f)
                .setListener(object : Animator.AnimatorListener {
                    override fun onAnimationRepeat(animation: Animator?) {
                    }

                    override fun onAnimationEnd(animation: Animator?) {
                        it.animate()
                                .setDuration(100)
                                .scaleY(1.0f)
                                .scaleX(1.0f)
                                .start()
                    }

                    override fun onAnimationCancel(animation: Animator?) {
                    }

                    override fun onAnimationStart(animation: Animator?) {
                    }
                }).withEndAction { counterButtonAnimation.start() }.start()
    }

    private fun setNextArrowListener(transition: Transition) {
        currentScene = if (currentScene == formTwo) formOne else formTwo

        nextButton = sceneRoot.findViewById(R.id.nextButton) as Button
        nextArrowHelper = sceneRoot.findViewById(R.id.nextArrowTopHelper) as View

        nextButton.onClick { goScene(currentScene, transition) }
        nextArrowHelper.onClick { goScene(currentScene, transition) }
    }

    private fun goScene(scene: Scene, transition: Transition = ChangeBounds()) {

        bindViews()

        // Save food count between scene transitions
        val childrenFoodCount = childrenButton.text.toString()
        val adultsFoodCount = adultsButton.text.toString()
        val staffFoodCount = staffButton.text.toString()

        TransitionManager.go(scene, transition)
        setNextArrowListener(transition)
        adjustForScenes()
        setFoodCounts(childrenFoodCount, adultsFoodCount, staffFoodCount)
        calculateTotalServed()
        setMealCountFormValues()
    }

    private fun setMealCountFormValues() {
        bindViews()


    }

    private fun submitForm(siteName: String, mealType: String, vendorReceived: String, carryOver: String, childrenFoodCount: String,
                           adultFoodCount: String, staffFoodCount: String, damaged: String, wasted: String) {
        // YYYY-MM-DD
        val date = DateFormat.format("yyyy-MM-d", Date().time)
        Log.d("Date", date.toString())

        val requestBody = """
            {
                "date": "$date.toString()",
                "siteName": "$siteName",
                "meal": {
                "type": "$mealType",
                "vendorReceived": $vendorReceived,
                "carryOver": $carryOver,
                "consumed": {
                    "child": $childrenFoodCount,
                    "adult": $adultFoodCount,
                    "volunteer": $staffFoodCount
                    },
                "damaged": $damaged,
                "wasted": $wasted
                }
            }
        """

        val jsonObject = JSONObject(requestBody)

        AsyncTask.execute {

            val url = URL("https://serene-chamber-33070.herokuapp.com/mealDev")
            val httpUrlConnection = url.openConnection() as HttpURLConnection
            httpUrlConnection.setRequestMethod("POST")
            httpUrlConnection.doInput = true
            httpUrlConnection.connectTimeout = 10000
            httpUrlConnection.doOutput = true
            httpUrlConnection.useCaches = false
            httpUrlConnection.setRequestProperty("Content-Type", "application/json")

            val wr = DataOutputStream(httpUrlConnection.outputStream)
            wr.writeBytes(jsonObject.toString())
            wr.flush()
            wr.close()

            httpUrlConnection.connect()

            Log.i("Status code", httpUrlConnection.responseCode.toString())
        }

    }

    override fun onBackPressed() {
        // Disable back
    }

    // Set in XML
    fun locationOnClick(view: View) {
        for (menuObj in locationMenuObjects) {
            menuObj.color = resources.getColor(R.color.colorPrimaryDarkHint, null)
            menuObj.bgDrawable = resources.getDrawable(R.drawable.ic_keyboard_arrow_left)
        }
        val menuParams = MenuParams()
        menuParams.setMenuObjects(locationMenuObjects)
        menuParams.animationDuration = animationTimer.toInt()
        supportActionBar?.let { menuParams.actionBarSize = it.height }
        menuParams.setClosableOutside(true)

        val dialogFragment = ContextMenuDialogFragment.newInstance(menuParams)
        dialogFragment.show(supportFragmentManager, "ContextMenuDialogFragment")
        dialogFragment.setItemClickListener { view, position ->
            val locationText = sceneRoot.findViewById(R.id.locationText) as Button
            locationText.setText(locationMenuObjects[position].title)
            mealCountForm.siteName = locationMenuObjects[position].title
        }
    }

    fun animateEditTextOnClick(view: View) {
        view.animate()
                .setDuration(animationTimer)
                .scaleX(1.3f)
                .scaleY(1.3f)
                .setListener(object: Animator.AnimatorListener {
                    override fun onAnimationRepeat(animation: Animator?) {
                    }

                    override fun onAnimationEnd(animation: Animator?) {
                        view.animate()
                                .setDuration(animationTimer)
                                .scaleY(1.0f)
                                .scaleX(1.0f)
                                .start()
                    }

                    override fun onAnimationCancel(animation: Animator?) {
                    }

                    override fun onAnimationStart(animation: Animator?) {
                    }
                })
                .start()
    }

    fun mealsTextChangeListener() = object: TextWatcher {
        override fun afterTextChanged(s: Editable?) {
        }

        override fun beforeTextChanged(s: CharSequence?, start: Int, count: Int, after: Int) {
        }

        override fun onTextChanged(s: CharSequence?, start: Int, before: Int, count: Int) {
            calculateTotalMeals()
        }
    }

    fun calculateTotalMeals() {
        val mealsVendor = if (mealsFromVendor.text.toString().isEmpty()) 0 else mealsFromVendor.text.toString().toInt()
        val mealsLeft = if (mealsLeftover.text.toString().isEmpty()) 0 else mealsLeftover.text.toString().toInt()
        val total = mealsVendor + mealsLeft
        totalMeals.text = total.toString()

        totalMeals.animate()
            .setDuration(animationTimer)
            .scaleX(1.4f)
            .scaleY(1.4f)
            .start()

        totalMeals.animate()
                .setDuration(animationTimer)
                .scaleX(1.0f)
                .scaleY(1.0f)
                .start()

        mealCountForm.vendorReceived = mealsVendor.toString()
        mealCountForm.carryOver = mealsLeft.toString()
    }

    fun selectMealType(view: View) {
        bindViews()

        resetMealType(breakfastText)
        resetMealType(AMSnackText)
        resetMealType(lunchText)
        resetMealType(PMSnackText)
        resetMealType(supperText)

        (view as TextView).textColor = resources.getColor(R.color.white, null)
        view.backgroundColor = resources.getColor(R.color.colorPrimary, null)
        view.setTypeface(null, Typeface.BOLD)

        mealCountForm.mealType = view.text.toString()
    }

    private fun resetMealType(target: TextView) {
        target.textColor = resources.getColor(R.color.darkerGray, null)
        target.backgroundColor = resources.getColor(R.color.colorNeutral, null)
        target.setTypeface(null, Typeface.NORMAL)
    }
}
