class EmployeePage{
    getemployeeMenu(){
        return cy.get('[title="Employees"]')
    }
    getaddEmployeeButton(){
        return cy.contains('Add employee')
    }
    getaddFirstNameText(){
        return cy.get('#firstName')
    }
    getaddLastNameText(){
        return cy.get('#lastName')
    }
    getaddEmailText(){
        return cy.get('#email')
    }
    getaddPhoneNumberText(){
        return cy.get('#phoneNumber')
    }
    getaddstartDatePicker(){
        return cy.get('#startDate')
    }
    getDatePicker(){
        return cy.get('[data-testid="daypicker-panel"]')
    }
    getDatePickerYear(){
        return cy.get('[data-testid="daypicker-panel"]')
    }
    getDatePickerMonth(){
        return cy.get('.DayPicker-Month')
    }
    getDatePickerDay(){
        return cy.get('.DayPicker-Day')
    }
    getaddJobTitleText(){
        return cy.get('#jobTitle')
    }
    getSaveNewEmployeeButton(){
        return cy.get('button:contains("Save new employee")')
    }
    getCancelButton(){
        return cy.contains('button:contains("Cancel")')
    }
    getaddAnotherEmployeeButton(){
        return cy.get('button:contains("Add another employee")')
    }
    getGoToProfileButton(){
        return cy.get('button:contains("Go to profile")')
    }
    getGoToRotasButton(){
        return cy.get('button:contains("Go to rotas")')
    }
    getCloseModalIcon(){
        return cy.get('#close-modal')
    }
}

export default EmployeePage;