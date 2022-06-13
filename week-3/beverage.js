/*
* Title: beverage.js
* Author: Patrick Wolff
* Date: 12 June 2022
* Description: Module beverage.js
*/

import { Product } from "./product.js";

export class Beverage extends Product {
    constructor(name, price) {
        super(name, price);
    }
}