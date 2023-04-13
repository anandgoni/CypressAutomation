/// <reference types="Cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LandingPage from '../../../../support/pageObjects/LandingPage';
const landingPage = new LandingPage()
let name
Given('I open brightHR Portal', () => {
    cy.visit(Cypress.env('url'))
})

// When I add items to Cart
When('I click on SignUp button', function () {
    cy.wait(200)
    landingPage.getSignUpButton().click()
})
When('I fill details to create account', function (dataTable) {
    landingPage.getFirstNameText().trigger('mouseover')
    landingPage.getFirstNameText().type(dataTable.rawTable[1][0])
    landingPage.getLasttNameText().type(dataTable.rawTable[1][1])
    landingPage.getEmailText().type(dataTable.rawTable[1][2])
    landingPage.getCompanyNameText().type(dataTable.rawTable[1][3])
    landingPage.getEmployerConfirmationChkBox().check()
    landingPage.getTermsConsentChkBox().check()
})
When('Click on Submit to create new Account', () => {
    landingPage.getSubmitButton().click()
    cy.wait(200)
})

When('create password to signup new user', (dataTable) => {
    const newUrl = "https://account.brighthr.com/signup/5776bcce-0a70-4b61-9a6a-532680b321bd"
    cy.visit(newUrl)
    cy.wait(200)
    cy.origin(newUrl, () => {
        landingPage.getpasswordText().type(dataTable.rawTable[1][0])
        landingPage.getconfirmPasswordText().type(dataTable.rawTable[1][0])
        landingPage.getcompleteSignupButton().click();
    })

})