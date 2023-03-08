/// <reference types = "cypress" />

describe('Verify usage of variables and commands  ', () => {

  beforeEach(()=>{
    cy.visit('https://www.automationteststore.com/');
  })

  it('Navigate to specifics products ', () => {
    cy.get('#categorymenu').find('li').contains('Makeup');
    cy.get('#categorymenu').find('li').contains('Skincare');
  })

  it('should check number of element on homepage', () => {
    cy.get('.thumbnail').its('length').should('be.eq',16);
  })

  it('should check title of a product on homepage', () => {
    cy.get('.thumbnail').eq(0).find('a[data-id=50]').invoke('prop','title').should('eq','Add to Cart')
  })

  it('should check if adding up all number sums up to estimated value',()=>{
let finalPrice=0;
    cy.get('.oneprice').then(($el,index,$list)=>{
      let total =0;
      let value =$el.text().split('$');
      for (let i=0;i<value.length;i++){
        let newvalue =Number(value[i]);
        total +=newvalue;
      }
      cy.log(total)
      cy.get('.pricenew').then(($el,index,$list)=>{
        let pricenewtotal =0;
        let newvalue =$el.text().split('$');
        for (let i=0;i<newvalue.length;i++){
          let newdiscountvalue = Number(newvalue[i]);
          pricenewtotal +=newdiscountvalue;
        }
        cy.log(pricenewtotal);

        finalPrice=pricenewtotal+total;
        cy.log(finalPrice)
      })
    }).then(()=>{
      expect(finalPrice).to.eq(669)
    })



  })

  it('should check if navigating to two super domains works ',()=>{
    cy.origin('https://www.webdriveruniversity.com',()=>{
      cy.visit('/index.html')
      cy.get('#automation-test-store').invoke('removeAttr','target').click({force:true});
    })
  })

  it('should verify sum once gain ',()=>{
    cy.get('#categorymenu').find('li').contains('Skincare').click()
      .url().should('include','category&path=43');
    cy.get('.pricenew').then(($el,index,list)=>{
      let total=0;
      let textualContent = $el.text().split('$');
      for(let i=0;i<textualContent.length;i++){
        total=total+Number(textualContent[i])
      }
      cy.log(total)
    })




  })
})
