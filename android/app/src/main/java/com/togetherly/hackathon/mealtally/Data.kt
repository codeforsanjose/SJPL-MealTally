package com.togetherly.hackathon.mealtally

import android.util.Log

data class MealCountForm(
        var siteName: String = "Dr. Roberto Cruz Alu Rock",
        var mealType: String = "Breakfast",
        var vendorReceived: String = "0",
        var childrenFoodCount: String = "0",
        var adultFoodCount: String = "0",
        var carryOver: String = "0",
        var staffFoodCount: String = "0",
        var damaged: String = "0",
        var wasted: String = "0") {

    fun getTotalMeals(): String {

        val vendor = vendorReceived.toString().toInt()
        val leftover = carryOver.toString().toInt()

        Log.d("vendor", vendor.toString())
        Log.d("leftOver", leftover.toString())
        Log.d("total", (vendor + leftover).toString())

        return (vendor + leftover).toString()
    }

    fun getTotalServed(): String {

        val children = childrenFoodCount.toString().toInt()
        val adults = adultFoodCount.toString().toInt()
        val staff = staffFoodCount.toString().toInt()

        val total = (children + adults + staff)
        return total.toString()
    }
}
