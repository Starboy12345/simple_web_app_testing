/// <reference types ="cypress" />

describe('Date pickers ', function () {

  it('should verify if the picked date ios correct',()=> {
    cy.visit('http://www.webdriveruniversity.com/Datepicker/index.html')
    let date = new Date();
    date.setDate(date.getDate()+310);//setting the date
    let futureday =date.getDate();
    //cy.log(`Current day is ${futureday}`)
    let futureMonth =date.toLocaleString('default',{month:'long'});
    let futureMonthshort =date.getMonth();
    cy.log(futureMonthshort);
    //cy.log(`Current Month is ${futureMonth}`)
    let futureYear =date.getFullYear();
    //cy.log(`Current Year is ${futureYear}`)
    cy.get('.input-group-addon').click();
    function selectDATEandYear(){
      cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then((currentDate)=>{
        if (!currentDate.text().includes(futureYear)){
          cy.get('.next').first().click()
          selectDATEandYear()
        }
      }).then(()=>{
        cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then((currentDate)=>{
          if (!currentDate.text().includes(futureMonth)){
            cy.get('.next').first().click()
            selectDATEandYear()
          }
        })
      })
    }
    function SelectDAY(){
      cy.get('.day').contains(futureday).click()
    }
    selectDATEandYear()
    SelectDAY();
  });

});
