Feature: Ecommerce Site: Practice Automation Site

    Scenario: Login with valid Credentials
        Given Visit Practice Automation Site
        And User log-in using username and password
            | username                     | password    |
            | kshirsagarshweta20@gmail.com | Shweta@1010 |
        When User click on submit button
        Then Dashboard should be visible