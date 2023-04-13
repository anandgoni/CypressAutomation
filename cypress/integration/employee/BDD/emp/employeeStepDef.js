import { Given, When, And, Then } from "@badeball/cypress-cucumber-preprocessor";
import LandingPage from '../../../../support/pageObjects/LandingPage';
import LoginPage from "../../../../support/pageObjects/EmployeePage";
import EmployeePage from "../../../../support/pageObjects/EmployeePage";


const employeePage = new EmployeePage
let empRecordCount = 1
When('Click on Employee Menu', () => {
    employeePage.getemployeeMenu().click()

})
When('Click on Add Employee button', () => {
    employeePage.getaddEmployeeButton().click()
})
When('Enter all the fields to Add new Employee', () => {

    cy.fixture('employee.json').then(function (data) {
        cy.wait(500)
        employeePage.getaddFirstNameText().type(data[empRecordCount - 1].firstName)
        employeePage.getaddLastNameText().type(data[empRecordCount - 1].lastName)
        employeePage.getaddEmailText().type(data[empRecordCount - 1].emailAddr)
        employeePage.getaddPhoneNumberText().type(data[empRecordCount - 1].phoneeNum)
        employeePage.getaddstartDatePicker().click()
        const date = data[empRecordCount - 1].startDate
        const [day, month, year] = date.split('-')
        cy.selectDate(day,month,year)
        employeePage.getaddJobTitleText().type(data[empRecordCount - 1].jobtitle)
    })
})
When('I click on Save new employee to add new employee', () => {
    employeePage.getSaveNewEmployeeButton().click()
    empRecordCount = empRecordCount + 1
})
When('I click on Add another employee button to add employee', () => {
    employeePage.getaddAnotherEmployeeButton().click()
})
When('Close New Employee added window', () => {
    employeePage.getCloseModalIcon().click()
})
Then('Verify the added Employee records are displayed under employee tab', () => {
    let elementindex = 1
    empRecordCount = empRecordCount - 1
    cy.fixture('employee.json').then(function (data) {
        while (empRecordCount > 0) {
            let firstname = data[empRecordCount - 1].firstName
            let lastname = data[empRecordCount - 1].lastName
            cy.get('h5').then(($element) => {
                cy.get('div[class*="grid"] > div:nth-child(' + elementindex + ') > div > div > h5').should("have.text", firstname + ' ' + lastname)
                elementindex = elementindex + 1
            })
            empRecordCount = empRecordCount - 1
        }

    })
})