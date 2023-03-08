/// <reference types = "cypress" />

describe('',()=>{

  it('Check if grapes gets choosen',()=>{
    cy.visit('http://www.webdriveruniversity.com/Autocomplete-TextField/autocomplete-textfield.html')
    cy.get('[id="myInput"]').type('G');
    cy.get('#myInputautocomplete-list >div').each(($el,index,$list)=>{
       const choosenValue= "Grapes";
       let value=$el.text();

       if(value===choosenValue){

         cy.wrap($el).click()
       }

    })
    cy.get('[id="submit-button"]').click()
    cy.url().should('include','Grapes');
  })
})
