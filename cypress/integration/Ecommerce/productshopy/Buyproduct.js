import {Given, Then, When, And} from "cypress-cucumber-preprocessor/steps"

Given('first user visit to the grossary site',function(){
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    cy.log('testcase 1')
})

And('user search the product which is start with latter Ap',function(){
    cy.get('[class="search-keyword"]').type('Ap')
    cy.get('[type="submit"]').click()
    cy.log('testcase2')
})

And('user select the Apple product and add to cart',function(){
    cy.get('[class="product-name"]').each(function(el,index){
        // cy.log(el.text())
        if(el.text()=="Apple - 1 Kg"){
             cy.get('[class="product-action"] button').eq(index).click()
            // cy.contains('ADD TO CART').eq(index).click()
        }
    })
    cy.log('testcase3')
})

Then('user select the proceed to cheakout the order',function(){
    cy.get('[alt="Cart"]').click()
    cy.get('[class="action-block"]').first().click()
})

When('user place the order and select the country',function(){
    cy.contains('Place Order').click()
    cy.get('select').select('India')
    cy.get('[class="chkAgree"]').click()
    cy.get('button').click()
})

Then('user will get the thank you message',function(){
    cy.contains("Thank you, your order has been placed successfully You'll be redirected to Home page shortly!!").should('be.visible')
})





