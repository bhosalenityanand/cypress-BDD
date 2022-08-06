import { Given, Then, When, And } from "cypress-cucumber-preprocessor/steps"

let url = "https://www.facebook.com/login/"

Given('first open the facebook page',function(){
    cy.visit(url)
})

Then('I have to enter the email and Passward',function(){
    cy.get('[id="email"]').type('sadanandbhosale24@gmail.com')
    cy.get('[id="pass"]').type('sid24sid')
    cy.wait('@pass')
    // .wait('@pass')
})

When('I click on the login button',function(){
    cy.get('[name="login"]').click('{force:true}')
})