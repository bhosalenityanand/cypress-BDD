Feature:I have to buy the product from the amazon site

    Scenario: I have buy the shoes from amazon site
        Given first I visit the amazon site
        And I type the Shoes in the search bar and click on search button
        Then I validate the search page are actually searched for shoes
        And user apply the filter to get product in his budget
        And Now user check the filters are applied and result are being filtered oe not
        And User choose the shoes
        Then User check the detail of shoes like size,prize and discount
        When user add the product in the cart
        Then user check the added msg
    
    



    