/// <reference types ="cypress" />

describe('JSON OBJECTS', function () {

  it('should show json objects ', function () {

    const personObjects ={
      "firstname":"Florent",
      "lastname":"Houetchekpo",
      "age":25,
      "leisure":
        [{
        "Sport":"baasketball"
        }],
      "values":["brown",25,"groomvalue"]
    }
    cy.log(personObjects.values[0])

    expect(personObjects.values[0]).to.eq('brown');

  });

});
