/// <reference types =cypress />

describe('Test file upload when they are are located in fixtures', function () {

  before(function(){
    cy.fixture('example.json').then(function(contents){
      globalThis.content=contents;
    })
  })


  it('should upload no file', function () {
    cy.visit('http://www.webdriveruniversity.com/File-Upload/index.html')
    cy.get('#myFile').selectFile('cypress/fixtures/example.json');
    cy.log(`${content.firstname}`);
  });
});

describe('trying with fixtures', function () {
  it('should ', function () {
    cy.fixture('example.json').as('content')
    cy.get('@content').then(function(contents){
      cy.log(contents.firstname);

    })
  });
});
