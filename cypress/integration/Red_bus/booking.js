import {Given, And, When,Then} from "cypress-cucumber-preprocessor/steps"

Given('First visit the redBus site',function(){
    cy.visit('https://www.redbus.in/')
})