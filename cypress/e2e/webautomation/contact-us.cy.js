/// <reference types = "cypress" />
var randomLastName = require('random-lastName');
var randomFirstName = require('random-firstName');
var randomExt = require("random-ext");
// Generates random email
var randomEmail = randomExt.stringPattern("x@x.com", {
  x: [randomExt.restrictedString, [randomExt.CHAR_TYPE.LOWERCASE], 20, 1],
});

describe('Test Contact us page   ', () => {
  before(function(){
    cy.fixture('example').then(function(userData){
      globalThis.userdata=userData;
    })

  cy.visit('/Contact-Us/contactus.html')
})
  beforeEach(()=>{
    cy.visit('/Contact-Us/contactus.html',{timeout:1000})
  })

  it('should check if page header is present', () => {
    cy.get('h2[name=contactme]').click({force:true});
  })

  it('should check if field first name  is present and has a placeholder as well as a border and coloured red ', () => {
    cy.verifyproperties('input[name=first_name]','First Name');
  })

  it('should check if field Last name  is present and has a placeholder as well as a border and coloured red ', () => {
    cy.verifyproperties('input[name=last_name]','Last Name');
  })

  it('should check if field Email address is present and has a placeholder as well as a border and coloured red ', () => {
    cy.get('input[name=email]').should(($input)=>{
      expect($input).to.exist;
      expect($input).to.have.attr('placeholder','Email Address');
      expect($input).to.have.class('feedback-input');
      expect($input).to.have.css('border','5px solid rgb(244, 89, 80)');
    });

    cy.verifyproperties('input[name=email]','Email Address');
  })

  it('should check if field Comment is present and has a placeholder as well as a border and coloured red ', () => {
    cy.get('textarea[name=message]').should(($input)=>{
      expect($input).to.exist;
      expect($input).to.have.attr('placeholder','Comments');
      expect($input).to.have.class('feedback-input');
      expect($input).to.have.css('border','5px solid rgb(244, 89, 80)');
    });
  })

  it('should check if button reset is present and be clickable ', () => {
    cy.get('.contact_button').first().should(($input)=>{
      expect($input).to.exist;
      expect($input).to.have.attr('value','RESET');
    });
  })

  it('should check if button Submit is present and be clickable ', () => {
    cy.get('.contact_button').last().should(($input)=>{
      expect($input).to.exist;
      expect($input).to.have.attr('value','SUBMIT');
    });
  })

  it('should check if filled form can be reset ',function(){
cy.get("input[name=first_name]").type(userdata.firstname)
  .get('input[name=last_name]').type(randomLastName())
  .get('input[name=email]').type(randomEmail)
  .get('textarea[name=message]').type('Message comment ')
  .get('.contact_button').first().click()
  .get('input[name=last_name]').should('be.empty')
  .get('input[name=last_name]').should('be.empty')
  .get('input[name=email]').should('be.empty')
  .get('textarea[name=message]').should('be.empty');
  })

  it('should verify that filled form with erroneous email  cannot be sent with successful reply',()=>{
    cy.get("input[name=first_name]").type(randomFirstName())
      .get('input[name=last_name]').type(randomLastName())
      .get('input[name=email]').type(randomLastName())
      .get('textarea[name=message]').type('Message comment ')
      .get('.contact_button').last().click()
      .then(()=>{
        cy.get('body').should('contain','Error: Invalid email address')
      });
  })

  it('should verify that filled form with missing first name cannot be sent with successful reply',()=>{
    cy.get('input[name=last_name]').type(randomLastName())
      .get('input[name=email]').type(randomLastName())
      .get('textarea[name=message]').type('Message comment ')
      .get('.contact_button').last().click()
      .then(()=>{
        cy.get('body').should('contain','Error: all fields are required')
      });
  })

  it('should verify that filled form with missing last name cannot be sent with successful reply',()=>{
    cy.get('input[name=first_name]').type(randomFirstName())
      .get('input[name=last_name]').type(randomLastName())
      .get('input[name=email]').type(randomLastName())
      .get('.contact_button').last().click()
      .then(()=>{
        cy.get('body').should('contain','Error: all fields are required')
      });
  })

  it('should verify that filled form with missing first name and wrong email format cannot be sent with successful reply',()=>{
    cy.get('input[name=last_name]').type(randomLastName())
      .get('input[name=email]').type('sam#gmail.com')
      .get('.contact_button').last().click()
      .then(()=>{
        cy.get('body').should('contain','Error: all fields are required')
      });
  })

  it('should verify that filled form with missing comment cannot be sent with successful reply',()=>{
    cy.get('input[name=first_name]').type(randomFirstName())
      .get('input[name=email]').type(randomLastName())
      .get('textarea[name=message]').type('Message comment ')
      .get('.contact_button').last().click()
      .then(()=>{
        cy.get('body').should('contain','Error: all fields are required')
      });
  })

  it('should check if filled form can be sent',()=>{
    cy.get("input[name=first_name]").type(randomFirstName())
      .get('input[name=last_name]').type(randomLastName())
      .get('input[name=email]').type(randomEmail)
      .get('textarea[name=message]').type('Message comment ')
      .get('.contact_button').last().click()
      .then(()=>{
        cy.get('#contact_reply > h1').should('have.text','Thank You for your Message!')
      });
  })


})
