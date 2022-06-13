/*
* Title: appetizer.js
* Author: Patrick Wolff
* Date: 12 June 2022
* Description: Module appetizer.js
*/

import { Product } from "./product.js";

export class Appetizer extends Product {
    constructor(name, price) {
        super(name, price);
    }
}