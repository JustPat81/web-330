/*
* Title: dessert.js
* Author: Patrick Wolff
* Date: 12 June 2022
* Description: Module dessert.js
*/

import { Product } from "./product.js";

export class Dessert extends Product {
    constructor(name, price) {
        super(name, price);
    }
}