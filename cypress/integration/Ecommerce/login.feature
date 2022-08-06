Feature: Ecommerce site: Orange 
    Scenario: verify the login with valid credentials
        Given login to orange HRM
         And Fill the user name as given 
         And Fill the password as given
         When click on the login button
         Then validate the dashboard


     Scenario: verify the login functionality for invalid credential
         Given login to orange HRM
         And Fill the username as given
         And Fill the password as given
         When click on the login button
         Then validate the error message for user


