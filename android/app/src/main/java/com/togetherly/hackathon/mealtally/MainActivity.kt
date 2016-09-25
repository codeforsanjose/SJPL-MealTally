package com.togetherly.hackathon.mealtally

import android.animation.Animator
import android.support.v7.app.AppCompatActivity
import android.os.Bundle
import android.text.format.DateFormat
import android.util.Log
import android.view.View
import android.view.animation.AccelerateDecelerateInterpolator
import android.view.animation.AnimationSet
import android.widget.Button
import com.github.kittinunf.fuel.Fuel
import com.transitionseverywhere.*
import kotlinx.android.synthetic.main.activity_main.*
import org.jetbrains.anko.enabled
import org.jetbrains.anko.onClick
import java.util.*

class MainActivity : AppCompatActivity() {

    lateinit var childrenButton: Button
    lateinit var adultsButton: Button
    lateinit var staffButton: Button
    lateinit var childrenMinusButton: Button
    lateinit var adultsMinusButton: Button
    lateinit var staffMinusButton: Button

    lateinit var nextButton: Button
    lateinit var nextArrowHelper: View
    lateinit var currentScene: Scene
    lateinit var formOne: Scene
    lateinit var formTwo: Scene
    lateinit var formThree: Scene

    companion object {

    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
                submitForm("FROM JOHNNY", "AM Food", "23", "12", "123", "333", "1", "1", "2")


        // Scenes
        formOne = Scene.getSceneForLayout(sceneRoot, R.layout.scene_form_1, this)
        formTwo = Scene.getSceneForLayout(sceneRoot, R.layout.scene_form_2, this)
        formThree = Scene.getSceneForLayout(sceneRoot, R.layout.scene_form_3, this)

        val transitionSet = TransitionSet()
        transitionSet.addTransition(ChangeBounds())
        transitionSet.addTransition(ChangeTransform())
        transitionSet.duration = 600
        transitionSet.interpolator = AccelerateDecelerateInterpolator()

        currentScene = formOne
        TransitionManager.go(currentScene)

        setNextArrowListener(transitionSet)
        setFoodCountListeners(false)
        setFoodCounts()
    }

    private fun bindFoodCounters() {
        childrenButton = sceneRoot.findViewById(R.id.childrenFoodButton) as Button
        adultsButton = sceneRoot.findViewById(R.id.adultsFoodButton) as Button
        staffButton = sceneRoot.findViewById(R.id.staffFoodButton) as Button
        childrenMinusButton = sceneRoot.findViewById(R.id.childrenMinusButton) as Button
        adultsMinusButton = sceneRoot.findViewById(R.id.adultsMinusButton) as Button
        staffMinusButton = sceneRoot.findViewById(R.id.staffMinusButton) as Button

    }
    private fun setFoodCountListeners(isEnabled: Boolean) {

        bindFoodCounters()

        if (isEnabled) {
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
        setFoodCountListeners(isEnabled)
    }

    private fun setFoodCounts(children: String = "0", adults: String = "0", staff: String = "0") {
        childrenButton.text = children
        adultsButton.text = adults
        staffButton.text = staff
    }

    private fun foodCountPlusListener() = View.OnClickListener {
        if (it is Button) {
            it.text = if (it.text.length == 0) "0" else (it.text.toString().toInt() + 1).toString()
        }

        it.animate()
            .setDuration(100)
            .scaleX(1.3f)
            .scaleY(1.3f)
            .setListener(object: Animator.AnimatorListener {
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
            })
            .start()
    }

    private fun foodCountMinusListener(counter: Button) = View.OnClickListener {

        // Minus food count
        counter.text = if (counter.text.toString() <= "0") "0" else (counter.text.toString().toInt() - 1).toString()

        val counterButtonAnimation = counter.animate()
                .setDuration(100)
                .scaleX(0.7f)
                .scaleY(0.7f)
                .setListener(object: Animator.AnimatorListener {
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

        val minusButtonAnimation =  it.animate()
                .setDuration(100)
                .scaleX(1.1f)
                .scaleY(1.1f)
                .setListener(object: Animator.AnimatorListener {
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
                }).withEndAction { counterButtonAnimation.start() }.start() // Run animations simultaneously

    }

    private fun setNextArrowListener(transition: Transition) {
        nextButton = sceneRoot.findViewById(R.id.nextButton) as Button
        nextArrowHelper = sceneRoot.findViewById(R.id.nextArrowTopHelper) as View
        currentScene = if (currentScene == formTwo) formOne else formTwo
        nextButton.onClick { goScene(currentScene, transition) }
        nextArrowHelper.onClick { goScene(currentScene, transition) }

    }

    private fun goScene(scene: Scene, transition: Transition = ChangeBounds()) {

        bindFoodCounters()

        // Save food count between scene transitions
        val childrenFoodCount = childrenButton.text.toString()
        val adultsFoodCount = adultsButton.text.toString()
        val staffFoodCount = staffButton.text.toString()

        TransitionManager.go(scene, transition)
        setNextArrowListener(transition)
        adjustForScenes()
        setFoodCounts(childrenFoodCount, adultsFoodCount, staffFoodCount)
    }

    private fun submitForm(siteName: String, mealType: String, vendorReceived: String, carryOver: String, childrenFoodCount: String,
                           adultFoodCount: String, staffFoodCount: String, damaged: String, wasted: String) {
        // YYYY-MM-DD
        val date = DateFormat.format("yyyy MMMM d", Date().time)
        Log.d("Date", date.toString())

        val body = """
            "date": "2016-09-01T07:00:00.000Z",
            "siteName": "$siteName",
            "meal": {
            "type": , "$mealType"
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
        """
        Fuel.post("https://serene-chamber-33070.herokuapp.com/mealDev").body(body).response { request, response, result ->
            when (response.httpStatusCode) {
                500 -> Log.i("Status code 500", "Error")
                200 -> Log.i("Status code 200", "Success")
            }
        }


    }

}
