/// <reference types = "cypress" />

describe('Land on the homepage ', () => {

  beforeEach(()=>{
    cy.visit('/');
  })

  it('check if webdriver university url is correct ', () => {
    cy.url().should('include','http://www.webdriveruniversity.com/')
  })

  it('check if all the links on the home page are present ', () => {
      cy.get('h1').then((links)=>{
         expect(links).to.have.length(18);
      })

    cy.get('h1').each((header) => {
      // Get the text content of the header
      const headerText = header.text().trim()
      console.log(headerText)
      // Check if the header corresponds to its text content
      expect(header.prop('textContent')).to.equal(headerText)
    })
  })

})

