/// <reference types = "cypress" />

describe('Handling Iframes',()=>{

  beforeEach(()=>{
    cy.visit('http://www.webdriveruniversity.com/index.html')
  })

  it('using iframes',()=>{

      cy.get('#iframe').invoke('removeAttr','target').click({force:true});

    cy.get('#frame').then(($iframe)=>{
      const dombody=$iframe.contents().find('body');
      cy.wrap(dombody).as('bodycontent');
    })

    cy.get('@bodycontent').find('#button-find-out-more').click()
    cy.get('@bodycontent').find('#myModal').then((value)=>{
      cy.wrap(value).invoke('text').should('contain','Welcome to webdriveruniversity.com we sell a wide range of electrical goods such as laptops, game consoles, cameras...');
    })


  })

  it.skip('Verify if Iframes content can be verified',()=>{
    cy.get('#iframe').invoke('removeAttr','target').click({force:true});

    cy.get('#frame').then((content)=>{
      const value =content.contents().find('body');
      cy.wrap(value).as('framebody')
    })

    cy.get('@framebody').find('#div-main-nav').find('li').contains('Our Products').click()
    cy.get('@framebody').find('[data-target="#myModal"]').as('newdom');
    cy.get('@newdom').click({force:true});
      cy.get('@framebody').find('#myModal').find('.modal-body').as('new');
      cy.get('@new').then((message)=>{
        expect(message.text()).to.contain('Please Note: All orders must be over the value of £50, adding additional coupon codes to the basket are excluded from this offer. To receive 30% off please add the following code to the basket: NEWCUSTOMER773322 .\n' +
          '\n')
      cy.get('@framebody').find('[data-dismiss="modal"]').click()
    })

  })

})

