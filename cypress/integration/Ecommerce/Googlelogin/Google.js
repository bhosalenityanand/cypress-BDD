import { Given, Then, When, And } from "cypress-cucumber-preprocessor/steps"

Given('First i open the google search engine',function(){
    cy.visit('https://www.google.com/')
})

Then('I see the {string} in title',function(title){
    cy.title().should('include',title)
})

Then('Also i see the {string} in the url',function(url){
    cy.url().should('include',url)
})

When('I search for the W3s school',function(){
    cy.get('input[type="text"]').type('W3school')
    cy.get('[role="option"]').find('span').each(function(el){
        if(el.text().includes('w3school')){
            el.click()
        }
    })
})