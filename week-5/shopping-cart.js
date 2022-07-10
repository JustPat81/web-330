/*
=================================================================
Title: shopping-cart.js
Author: Patrick Wolff
Date: 26 June 2022
Description: Shopping cart component for Bob's Auto Repair app
===========================================================
*/

export class ShoppingCart {
    constructor(products) {
        this.products = [];
    }

    count() {
        //Returning length of products array
        return this.products.length;
    }

    addProduct(product) {
        //Adding product object to products array
        this.products.push(product);
    }

    *[Symbol.iterator]() {
        for (let i of this.products) { 
            yield i;
        }
    }
}