class LoginPage
{
    getemailText()
    {
        return cy.get('#email')
    }
    getpasswordText()
    {
        return cy.get('#password')
    }
    getloginButton()
    {
        return cy.get('button:contains("Login")')
    }
    getNextnButton()
    {
        return cy.get('button:contains("Next")')
    }
    gettakeMetoDashboardnButton()
    {
        return cy.get('button:contains("Take me to the dashboard")')
    }
    
}
export default LoginPage;