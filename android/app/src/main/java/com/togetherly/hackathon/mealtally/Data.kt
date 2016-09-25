package com.togetherly.hackathon.mealtally

data class MealCountForm(
        var siteName: String = "Dr. Roberto Cruz Alu Rock",
        var mealType: String = "Breakfast",
        var vendorReceived: String = "0",
        var carryOver: String = "0",
        var childrenFoodCount: String = "0",
        var adultFoodCount: String = "0",
        var staffFoodCount: String = "0",
        var damaged: String = "0",
        var wasted: String = "0"
)
