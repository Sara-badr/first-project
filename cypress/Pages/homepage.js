class HomePage{
     urlText(){
        return cy.contains('destination of the week! The Beach!')
    }


clickurlText(){
    return cy.contains('destination of the week! The Beach!').click()
}
     hoveronlink(){
        return cy.contains('destination of the week! The Beach!').trigger('mouseover'),
        cy.contains('destination of the week! The Beach!').trigger('mouseout')
    
    }

    choosecity(){
        return cy.get('[name="fromPort"]').last(),
        cy.get('[name="toPort"]').first()
    }

    hoveronfindflight(){
        return  cy.get('.btn.btn-primary').trigger('mouseover'),
        cy.get('.btn.btn-primary').trigger('mouseout')
    }

    clickonfindfligt(){
        return cy.get('.btn.btn-primary').click()
    }
    
    
}
export default HomePage