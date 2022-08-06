import { Given, And, When,Then } from "cypress-cucumber-preprocessor/steps"

Given('Visit Practice Automation Site',()=>{
    cy.visit('http://practice.automationtesting.in/my-account/')
})

And ("User log-in using username and password",(dataTables)=>{
    dataTables.hashes().forEach(element=>{
        cy.get('#username').type(element.username)   // here you are spelling mistake of element
        cy.get('#password').type(element.password)   // and i also change your passw beacuse it is invalid
    });
})

When('User click on submit button',()=>{
    cy.get('input[name="login"]').click()
    cy.wait(2000)
})

Then('Dashboard should be visible',function(){
    cy.get('li.is-active a').should('have.text','Dashboard')
})