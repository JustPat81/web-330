/*
===========================================================
Title: product.js
Author: Patrick Wolff
Date: 26 June 2022
Description: Product component for Bob's Auto Repair app
===========================================================
*/

export class Product {
    constructor(name, price){
        this.name = name;
        this.price = price;

        //Add a new property for id
        this.id = Math.random().toString(16).slice(2); 
    }
}