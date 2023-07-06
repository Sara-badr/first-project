Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

it('visit website blazedemo',()=>{
  cy.visit('/')
})

it('check destination of the week! The Beach! button is clickable',()=>{
  cy.visit('/')
  cy.contains('destination of the week! The Beach!').click()
})

it('select one element from departure cities',()=>{
  cy.visit('/')
  cy.get('[name="fromPort"]').last()
  cy.get('[name="toPort"]').first()
})

it('click on Find Flights button',()=>{
  cy.visit('/')
  cy.get('.btn.btn-primary').click()
})

it('select cheapest flight',()=>{
  cy.visit('/')
  cy.get('[name="fromPort"]').last()
  cy.get('[name="toPort"]').first()
  cy.get('.btn.btn-primary').click()
  cy.get('[type="submit"]').eq(2).click()
})

it('should submit with valid data',()=>{
  cy.visit('/')
  cy.get('[name="fromPort"]').last()
  cy.get('[name="toPort"]').first()
  cy.get('.btn.btn-primary').click()
  cy.get('[type="submit"]').eq(2).click()

  
    cy.fixture('Data').then((Data)=>{

      cy.get('#inputName').type(Data.name)
      cy.get('#address').type(Data.address)
      cy.get('#city').type(Data.city)
      cy.get('#state').type(Data.state)
      cy.get('#zipCode').type(Data.zipCode)
      cy.get('#cardType').select(Data.cardtype)
      cy.get('#creditCardNumber').type(Data.creditcardnumber)
      cy.get('#creditCardMonth').type(Data.month)
      cy.get('#creditCardYear').type(Data.year)
      cy.get('#nameOnCard').type(Data.nameoncard)

    })
  
    cy.get('#rememberMe').check()
    cy.contains('Purchase Flight').click()
  
  })
  
 
    
  