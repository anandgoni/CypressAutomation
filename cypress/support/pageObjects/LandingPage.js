class LandingPage
{
getSignUpButton()
{
return cy.contains('Sign up')
}
getLoginButton()
{
return cy.contains('Log in')
}
getFirstNameText()
{
return cy.get('#firstName-sign-up')
}
getLasttNameText()
{
return cy.get('#lastName-sign-up')
}
getEmailText()
{
return cy.get('#email-sign-up')
}
getCompanyNameText()
{
return cy.get('#companyName-sign-up')
}
getEmployerConfirmationChkBox()
{
return cy.get('#employerConfirmation')
}
getTermsConsentChkBox()
{
return cy.get('#termsConsent')
}
getSubmitButton()
{
return cy.contains('Submit')
}
getpasswordText()
{
return cy.get('#password')
}
getconfirmasswordText()
{
return cy.get('#confirmpassword')
}
getcompleteSignupButton()
{
return cy.contains('Complete signup')
}

}

export default LandingPage;