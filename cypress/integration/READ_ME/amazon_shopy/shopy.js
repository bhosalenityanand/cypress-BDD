///<reference types="cypress" />

import { Given,Then,When,And, } from "cypress-cucumber-preprocessor/steps"



let name ="US Polo Association"
let prize = 1891
let discount = "(37% off)"

Given('first I visit the amazon site',function(){
    cy.visit('https://www.amazon.in/')
})

And('I type the Shoes in the search bar and click on search button',function(){
    cy.get('#twotabsearchtextbox').type('shoes')
    cy.get('.autocomplete-results-container').find('.s-suggestion-container').each(function(el){
        cy.wrap(el).invoke('text').then(function(txt){
            // cy.log(txt.trim())
            if(txt.trim() == "shoes for men"){
                cy.wrap(el).click({force:true})
            }
        })
        
    })
    
})

Then('I validate the search page are actually searched for shoes',function(){
    cy.url().should('contains','shoes')
})

And('user apply the filter to get product in his budget',function(){
    cy.get('#low-price').type(1000)
    cy.get('#high-price').type(2000)
    cy.get('.a-button-input').click()

})

And('Now user check the filters are applied and result are being filtered oe not',function(){
    cy.get('.a-price-whole').each(function(el){
        let value = Number(el.text().replace('₹','').replace(',',''))
        // cy.log(value)
        if(value >= 1000){
           expect(value).to.within(1000,2000)
        }
    })
})

And('User choose the shoes',function(){
    cy.get('[class="a-size-base-plus a-color-base a-text-normal"]').each(function(el){
        let value =el.text()
        // cy.log(value)
        if(value == "Men's Abor Sneakers"){
            cy.wrap(el).parent().invoke('removeAttr','target').click()
        }
    })
})

Then('User check the detail of shoes like size,prize and discount',function(){
    cy.get('[class="a-size-large a-spacing-none"]').find('span').first().should('contain',name)
    cy.get('.a-offscreen').each(function(el){
        let value = Number(el.text().replace('₹','').replace(',',''))
        // cy.log(value)
        if(value == prize){
            cy.wrap(el).should('have.text','₹1,891.00')
        }
    })
    cy.get('[id="native_dropdown_selected_size_name"]').find('.dropdownAvailable').each(function(el,index){
        let size = el.text()
        // cy.log(size)
        if(size === ' 9 UK (10 US) '){
            cy.wrap(el).click({force: true})
            // cy.get('.dropdownAvailable').eq(index).click({force:true})
        }
    })
    cy.get('[class="a-native-dropdown a-declarative"] ').eq(1).children().eq(1).click({force: true} )
})

When('user add the product in the cart',function(){
   cy.get('#add-to-cart-button').click()
})

Then('user check the added msg',function(){
    //cy.get('#sw-atc-details-single-container > div.a-section.a-padding-medium.sw-atc-message-section > div.a-section.a-spacing-none.a-padding-none > span').find('span').should('have.text','Added to Car')
})