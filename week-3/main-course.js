/*
* Title: main-course.js
* Author: Patrick Wolff
* Date: 12 June 2022
* Description: Module main-course.js
*/

import { Product } from "./product.js";

export class MainCourse extends Product {
    constructor(name, price) {
        super(name, price);
    }
}