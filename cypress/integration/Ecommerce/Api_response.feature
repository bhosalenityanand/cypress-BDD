Feature:To hit regres Api and cheak its response

    # Scenario: hit Get api and cheak its response
    #     Given first user sent the api request for multiple user list
    #     Then user cheak the response of user list


    Scenario Outline: user creat the its info by post Api request
        Given user post the api reqest for creat id with <name> and <jobrole> and <Age>
        Then user be created by the its <name> and <jobrole> and <Age>
        Examples:
            | name     | jobrole        | Age |
            | satyjeet | developer      | 26  |
            | rahul    | tester         | 28  |
            | sourbh   | data_Anylist   | 27  |
            | jayesh   | data_scientist | 29  |


    Scenario Outline: users update its info by put Api request
        Given user update its existing info via PUT Api request with <name>,<jobrole> and <Age>
        Then user cheak the updated info with <name>,<jobrole> and <Age>
        Examples:
            | name    | jobrole            | Age |
            | rohit1  | AI_engineer2       | 30  |
            | Girish1 | meachine_learning2 | 29  |
            | jayesh1 | Web_developer2     | 25  |
            | satish1 | Software_engineer2 | 32  |