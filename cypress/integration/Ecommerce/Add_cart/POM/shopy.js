import { Given, Then, And, When } from "cypress-cucumber-preprocessor/steps";

import { Shopy } from "../../Add_cart/Add_product.spec";

const AddCart = new Shopy

Given('first user visit to the grossary url page',function(){
     AddCart.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
})

And('user search the product which is start with Ap',function(){
     AddCart.searchproduct('Ap')
})

And('user select the Apple product and add to cart',function(){
     AddCart.productname('Apple')
})

Then('user select the proceed to cheakout the order',function(){
     AddCart.proceedproduct()
})

When('user place the order and select the country',function(){
     AddCart.placeOrder('India')
})

Then('user will get the thank you message',function(){
     AddCart.message()
})