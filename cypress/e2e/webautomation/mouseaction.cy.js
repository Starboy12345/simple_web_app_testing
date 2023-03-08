/// <reference types = "cypress" />

describe('Scroll into view ', function () {

  it('should sroll to a position ', function () {
    cy.visit('http://www.webdriveruniversity.com/')
    cy.scrollTo(3000,1020);//scroll to the designated position using x and y abscisses
  });

  it('should srollintoview element', function () {
    cy.visit('http://www.webdriveruniversity.com/')
    cy.get('[id="actions"]').scrollIntoView().invoke('removeAttr','target').click({force:true});//scroll the element in to view
  });

  it('should draganddrop element', function () {
    cy.visit('http://www.webdriveruniversity.com/')
    cy.get('[id="actions"]').scrollIntoView().invoke('removeAttr','target').click({force:true});
    //scroll the element in to view
    cy.get('[id="draggable"]').trigger('mousedown',{which: 1 })
    cy.get('[id="droppable"]').trigger('mousemove').trigger('mouseup',{force:true});
  });

  it('should doubleclick element', function () {
    cy.visit('http://www.webdriveruniversity.com/')
    cy.get('[id="actions"]').scrollIntoView().invoke('removeAttr','target').click({force:true});
    //scroll the element in to view
    //cy.get('[id="double-click"]').trigger('dblclick',{which: 1 })
    cy.get('[id="double-click"]').dblclick()
  });


  it('should click hold and assert element', function () {
    cy.visit('http://www.webdriveruniversity.com/')
    cy.get('[id="actions"]').scrollIntoView().invoke('removeAttr','target').click({force:true});
    //scroll the element in to view
    //cy.get('[id="double-click"]').trigger('dblclick',{which: 1 })
    cy.get('[id="click-box"]').trigger('mouseover').trigger('mousedown').should('have.attr','style','background: rgb(0, 255, 0); font-size: 30px;');
  });

  it('should hover over element', function () {
    cy.visit('http://www.webdriveruniversity.com/')
    cy.get('[id="actions"]').scrollIntoView().invoke('removeAttr','target').click({force:true});
    //scroll the element in to view
    //cy.get('[id="double-click"]').trigger('dblclick',{which: 1 })
    cy.get('[id="div-hover"]').contains('Hover Over Me First!').trigger('mouseover');
    cy.get('[id="div-hover"]').contains('Hover Over Me Second!').invoke('show');
  });


});
