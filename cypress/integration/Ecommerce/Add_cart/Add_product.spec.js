
let url = 'https://rahulshettyacademy.com/seleniumPractise/#/'

export class Shopy{

   visit(url){
        cy.visit(url)
   }

   searchproduct(value){
    cy.get('[class="search-keyword"]').type(value)
    // cy.get('[type="submit"]').click()
    this.clickItem('[type="submit"]')
   }

   productname(value){
    cy.get('[class="product-name"]').each(function(el,index){
        // cy.log(el.text())
        if(el.text()==value){
             cy.get('[class="product-action"] button').eq(index).click()
            // cy.contains('ADD TO CART').eq(index).click()
        }
    })
   }

   proceedproduct(){
    // cy.get('[alt="Cart"]').click()
    this.clickItem('[alt="Cart"]')
    cy.get('[class="action-block"]').first().click()
   }

   placeOrder(country){
    cy.contains('Place Order').click()
    // this.clickItem('Place Order')
    cy.get('select').select(country)
    // cy.get('[class="chkAgree"]').click()
    this.clickItem('[class="chkAgree"]')
    // cy.get('button').click()
    this.clickItem('button')
   }

   message(){
    cy.contains("Thank you, your order has been placed successfully You'll be redirected to Home page shortly!!").should('be.visible')
   }


   clickItem(element){
    cy.get(element).click()
    }


}

