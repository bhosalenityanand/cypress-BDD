Feature: visit to the grossary site and buy the product

    Scenario: visit to the green grossary site and buy the product
        Given first user visit to the grossary url page
        And user search the product which is start with Ap
        And user select the Apple product and add to cart
        Then user select the proceed to cheakout the order
        When user place the order and select the country
        Then user will get the thank you message