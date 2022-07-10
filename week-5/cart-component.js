/*
=====================================================
Title: cart-component.js
Author: Patrick Wolff
Date: 26 June 2022
Description: Cart component for Bobs Auto Repair app
=====================================================
*/

export class CartComponent extends HTMLElement {
    constructor(){

    //Calling super() function for the HTMLElement parent object
    super(HTMLElement);
    }

    connectedCallback() {
        this.innerHTML =
        ` <i id="cartIcon" class="fa fa-shopping-cart"> </i> (<span id="cart-count"></span>) `;
    }
}

//Define new custom element, pass in string value cart-component and Cart Component class
customElements.define("cart-component", CartComponent);