package com.togetherly.hackathon.mealtally

import android.animation.Animator
import android.support.v7.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.view.animation.AccelerateDecelerateInterpolator
import android.widget.Button
import android.widget.ImageView
import com.transitionseverywhere.*
import kotlinx.android.synthetic.main.activity_main.*
import org.jetbrains.anko.enabled
import org.jetbrains.anko.onClick

class MainActivity : AppCompatActivity() {

    lateinit var childrenButton: Button
    lateinit var adultsButton: Button
    lateinit var staffButton: Button
    lateinit var nextArrow: ImageView
    lateinit var nextButton: Button
    lateinit var currentScene: Scene
    lateinit var formOne: Scene
    lateinit var formTwo: Scene
    lateinit var formThree: Scene

    companion object {

    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

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
    }
    private fun setFoodCountListeners(isEnabled: Boolean) {

        bindFoodCounters()

        if (isEnabled) {
            childrenButton.enabled = true
            adultsButton.enabled = true
            staffButton.enabled = true

            childrenButton.setOnClickListener(foodCountPlusListener())
            adultsButton.setOnClickListener(foodCountPlusListener())
            staffButton.setOnClickListener(foodCountPlusListener())
        } else {
            childrenButton.enabled = false
            adultsButton.enabled = false
            staffButton.enabled = false
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
            .scaleY(1.2f)
            .setListener(object: Animator.AnimatorListener {
                override fun onAnimationRepeat(animation: Animator?) {
                }

                override fun onAnimationEnd(animation: Animator?) {
                    it.animate()
                        .setDuration(100)
                        .scaleX(1.0f)
                        .scaleY(1.0f)
                        .start()
                }

                override fun onAnimationCancel(animation: Animator?) {
                }

                override fun onAnimationStart(animation: Animator?) {
                }
            })
            .start()
    }

    private fun setNextArrowListener(transition: Transition) {
        nextArrow = sceneRoot.findViewById(R.id.nextArrowTop) as ImageView
        nextButton = sceneRoot.findViewById(R.id.nextButton) as Button
        currentScene = if (currentScene == formTwo) formOne else formTwo
        nextArrow.onClick {
            goScene(currentScene, transition)
        }
        nextButton.onClick {
            goScene(currentScene, transition)
        }
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

}
