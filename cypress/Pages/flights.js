class flights{
selectflight(){
  return cy.get('[type="submit"]').eq(2).click()

}

}
export default flights