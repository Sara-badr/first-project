import flights from "../Pages/flights"
import HomePage from "../Pages/homepage"
import purchase from "../Pages/purchase"


Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})



const homepageobject = new HomePage()
const flightsobject = new flights()
const purchaseobject = new purchase()



it('visit website blazedemo', () => {
  cy.visit('/')
})

beforeEach(() => {
  cy.visit('/')
})

it('check destination of the week! The Beach! button is clickable', () => {

  homepageobject.clickurlText()

})

it('hover on link check destination of the week! The Beach!', () => {

  homepageobject.hoveronlink()
})

it('select one element from departure cities', () => {

  homepageobject.choosecity()
})

it('hover on Find flight button', () => {

  homepageobject.hoveronfindflight()
})

it('click on Find Flights button', () => {

  homepageobject.clickonfindfligt()
})

it('select cheapest flight', () => {

  homepageobject.choosecity()
  homepageobject.clickonfindfligt()
  flightsobject.selectflight()

})

it('should submit with valid data', () => {

  homepageobject.choosecity()
  homepageobject.clickonfindfligt()
  flightsobject.selectflight()
  purchaseobject.purchase()

})

it('click on checkbox Remember me', () => {
  homepageobject.choosecity()
  homepageobject.clickonfindfligt()
  flightsobject.selectflight()
  purchaseobject.purchase()
  purchaseobject.clickrememberme()
})

it('click on Purchase Flight button', () => {
  homepageobject.choosecity()
  homepageobject.clickonfindfligt()
  flightsobject.selectflight()
  purchaseobject.purchase()
  purchaseobject.clickrememberme()
  purchaseobject.clickpurchaseflight()

})



