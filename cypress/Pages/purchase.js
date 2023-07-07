class Purchase{
purchase(){
    return cy.fixture('Data').then((Data)=>{
  
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

}

clickrememberme(){
    return cy.get('#rememberMe').check()
}

clickpurchaseflight(){
    return cy.contains('Purchase Flight').click()
}

}
export default Purchase