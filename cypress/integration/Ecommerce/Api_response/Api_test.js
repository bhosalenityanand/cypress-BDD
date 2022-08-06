import {Given, then, And, When, Then} from "cypress-cucumber-preprocessor/steps"

  let id
  let key
// Given('first user sent the api request for multiple user list',()=>{
//    cy.request({
//     method:"GET",
//     url:"https://reqres.in/api/users?page=2"
//    }).as('userlist')
// })

// Then('user cheak the response of user list',()=>{
//     cy.get('@userlist').then((resp)=>{
//         // cy.log(resp)
//         expect(resp.status).to.eq(200)
//         expect(resp.statusText).to.eq('OK')
//         expect(resp.body.page).to.eq(2)
        
//     })
    
// })

Given('user post the api reqest for creat id with {word} and {word} and {word}',(name,jobrole,Age)=>{
   cy.request({
    method:"POST",
    url:"https://reqres.in/api/users",
    body:{
        "name":name,
        "jobrole":jobrole,
        "Age":Age
    }
   }).as('usercreated')
})

Then('user be created by the its {word} and {word} and {word}',(name,jobrole,Age)=>{
    cy.get('@usercreated').then((response)=>{
        cy.log(response)
        expect(response.status).to.eq(201)
        expect(response.statusText).to.eq('Created')
        expect(response.body.name).to.eqls(name)
        expect(response.body.jobrole).to.eqls(jobrole)
        expect(response.body.Age).to.eqls(Age)
        let obj =response.body
        for(let key in obj){
            cy.log(key,obj[key])
        }
       id =  response.body.id
    //    cy.log(id)
    })
})

Given('user update its existing info via PUT Api request with {word},{word} and {word}',(name,jobrole,Age)=>{
        cy.request({
            method:"PUT",
            url:`https://reqres.in/api/users/${id}`,
            body:{
                'name':name,
                'jobrole':jobrole,
                'Age':Age
            }
        }).as('updateuser')       
})

Then('user cheak the updated info with {word},{word} and {word}',(name,jobrole,Age)=>{
    cy.get('@updateuser').then((resp)=>{
        cy.log(resp)
    })
})


