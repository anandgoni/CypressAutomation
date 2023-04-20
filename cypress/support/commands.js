
Cypress.Commands.add('selectDate',(day,month,year)=>{
        cy.get('button[data-e2e="select-month"]').click()
        cy.get('div[data-testid="daypicker-panel"]> div:nth-child(3) > button').contains(month).click()
        cy.get('button[data-e2e="select-year"]').click()
        cy.get('div[data-testid="daypicker-panel"]> div:nth-child(3) > button[class*="year"]').contains(year).click()
        cy.get('.DayPicker-Day-Number').contains(day).click() 
})

