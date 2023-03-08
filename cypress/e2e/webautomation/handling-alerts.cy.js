/// <reference types = "cypress" />

describe('Learning how to handle alerts', function () {

  it('Hanles alert box without confirm',()=>{
    cy.visit('http://www.webdriveruniversity.com/Popup-Alerts/index.html')
    cy.get('#button1').click();
    cy.on('window:alert',(str)=>{
      expect(str).to.eq('I am an alert box!');
      return true;
    })
  })


  it('Hanles alert box without confirm by clicking on ok button',()=>{
    cy.visit('http://www.webdriveruniversity.com/Popup-Alerts/index.html')
    cy.get('#button4').click();
    cy.on('window:confirm',(str)=>{
      expect(str).to.eq('Press a button!');
      return true;
    })
    cy.get('#confirm-alert-text').contains('You pressed OK!')
  })

  it('Hanles alert box without confirm by clicking on cancel button',()=>{
    cy.visit('http://www.webdriveruniversity.com/Popup-Alerts/index.html')
    cy.get('#button4').click();
    cy.on('window:confirm',(str)=>{
      expect(str).to.eq('Press a button!');
      return false;
    })
    cy.get('#confirm-alert-text').contains('You pressed Cancel!')
  })

  it('Hanles alert box witha stub',()=>{
    cy.visit('http://www.webdriveruniversity.com/Popup-Alerts/index.html')
    const stub =cy.stub();
    cy.on('window:confirm',stub);

    cy.get('#button4').click().then(()=>{
      expect(stub.getCall(0)).to.be.calledWith('Press a button!')
    }).then(()=>{
      return true;
      cy.get('#confirm-alert-text').contains('You pressed Ok!')
    })
  })
});
