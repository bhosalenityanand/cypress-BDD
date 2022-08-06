import { Given, Then, And, When } from "cypress-cucumber-preprocessor/steps"

Given('first user visit the Automation page',function(){
    cy.visit('http://practice.automationtesting.in/my-account/')
})

And('user enter the username & password',function(dataTables){
    dataTables.hashes().forEach(element => {
        cy.get('#username').type(element.username)
        cy.get('#password').type(element.password)
    });
  
})

When('user click the login button',function(){
    cy.get('input[name="login"]').click()
})

Then('user will see the dashboard',function(){
    cy.get('li.is-active a').should('have.text','Dashboard')
})

// when two or morw user run in the single test case then

And('user enter the {word} & {word}',function(username,password){
    cy.get('#username').type(username)
    cy.get('#password').type(password)
})

Then('The Dashboard shoule be visible',function(){
    cy.get('li.is-active a').should('have.text','Dashboard')
})