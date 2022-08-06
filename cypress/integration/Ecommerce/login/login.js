import {Given , And ,  When , Then} from "cypress-cucumber-preprocessor/steps"


Given('login to orange HRM',function(){
    cy.visit('https://opensource-demo.orangehrmlive.com/index.php/auth/login')
    cy.log('test1')
})

And('Fill the user name as given',function(){
    cy.get('[id ="txtUsername"]').type('Admin')
})

And('Fill the password as given',function(){
    cy.get('[id ="txtPassword"]').type('admin123')
})

When('click on the login button',function(){
    cy.get('[id ="btnLogin"]').click()
})

Then('validate the dashboard',function(){
    cy.get('.head h1').should('have.text','Dashboard')
})


// verify the invalid

And('Fill the username as given',function(){
    cy.get('[id ="txtUsername"]').type('Admin')
    cy.log('test2')
})

And('Fill the password as given',function(){
    cy.get('[id ="txtPassword"]').type('admin1')
})

Then('validate the error message for user',function(){
    cy.get('#spanMessage').should('have.text','Invalid credentials')
})