import { Given,When,And,Then } from "@badeball/cypress-cucumber-preprocessor";
import LandingPage from '../../../../support/pageObjects/LandingPage';
import LoginPage from "../../../../support/pageObjects/LoginPage";


const landingPage=new LandingPage()
const loginPage=new LoginPage()

Given('I am on Landing page',()=>
{

})

When('I click on Login button on Landing page',()=>
{
    landingPage.getLoginButton().click()
})
When ('I provide credential to Login',()=>
{
    loginPage.getemailText().type('anandgoni@gmail.com')
    loginPage.getpasswordText().type('Abcdefghi8')
})
When ('Click on Login button to sign in',()=>
{
    cy.wait(100)
    loginPage.getloginButton().click()
})

When ('Click on Next button on welcome alert',()=>{
    loginPage.getNextnButton().click()
    cy.wait(100)
    loginPage.getNextnButton().click()
    cy.wait(100)
})

Then ('Click on Take me to Dashboard button',()=>{
    loginPage.gettakeMetoDashboardnButton().click()
})