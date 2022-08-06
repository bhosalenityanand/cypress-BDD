Feature: Automation testing site

    Scenario: user login with the valid username and password
        Given first user visit the Automation page
        And user enter the username & password
            | username                    |  | password        |
            | bhosalenityanand5@gmail.com |  | Nityanandb@2000 |
        When user click the login button
        Then user will see the dashboard


    Scenario Outline:two or more than two user login by the single test case
        Given first user visit the Automation page
        And user enter the <username> & <password>
        When user click the login button
        Then The Dashboard shoule be visible

        Examples:
            | username                       | password        |
            | bhosalenityanand5@gmail.com    | Nityanandb@2000 |
            | nityanandbhosale2000@gmail.com | Nityanandb@1999  |
            | sadanandbhosale24@gmail.com    | Sadanandb@1998  |


