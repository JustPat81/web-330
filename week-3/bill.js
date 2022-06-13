/*
* Title: bill.js
* Author: Patrick Wolff
* Date: 12 June 2022
* Description: Module bill.js
*/

import { Product } from "./product.js";

export class Bill {
    constructor(_beverages, _appetizers, _mainCourses, _desserts) {
        this._beverages = [];
        this._appetizers = [];
        this._mainCourses = [];
        this_desserts = [];
    }

    addBeverage(beverage) {
        this._beverages.push(beverage)
    }

    addAppetizer(appetizer) {
        this._appetizers.push(appetizer)
    }

    addMainCourse(mainCourse) {
        this._mainCourses.push(mainCourse)
    }

    addDessert(dessert) {
        this.desserts.push(dessert)
    }

    getTotal() {
        let total = 0;

        let beverageTotal = this._beverages.forEach(function(beverage) {
            total += parseFloat(beverage.price);
        })

        let appetizerTotal = this._appetizers.forEach(function(appetizer) {
            total += parseFloat(appetizer.price);
        })

        let mainCourseTotal = this._mainCourses.forEach(function(mainCourse) {
            total += parseFloat(mainCourse.price);
        })

        let dessertTotal = this._desserts.forEach(function(dessert) {
            total += parseFloat(dessert.price);
        })

        console.log(total);
        //Returning total variable set to 2 decimal places.
        return total.toFixed(2);
    }
}