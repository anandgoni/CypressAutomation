Feature: Employee record validation feature
#1. Navigate to the employee tab on the left-hand side of the panel and add an employee by filling in all the fields, including optional ones.
#2. Add another employee.
#3. Navigate to the employee tab and verify that both the employees are displayed.

# This scenarios to be ignored, just created to create new account    
    @Regression
    Scenario: Verify Signup on Landing Page
    Given I open brightHR Portal
    When I click on SignUp button
    And I fill details to create account
    |firstName | lastName |email | companyName |
    |Anand | Goni   | abcded@brighthr.com| Bright HR|
    #And Click on Submit to create new Account
    #And create password to signup new user
    #|password|
    #|Abdcefghi8|


    @Regression
    Scenario: Login to Bright Portal
    Given I open brightHR Portal
    When I click on Login button on Landing page
    And I provide credential to Login
    |email | Password |
    |anandgoni@gmail.com | Abcdefghi8   | 
    And Click on Login button to sign in
    And Click on Next button on welcome alert
    And Click on Take me to Dashboard button
    And Click on Employee Menu 
    And Click on Add Employee button
    And Enter all the fields to Add new Employee
    And I click on Save new employee to add new employee
    And I click on Add another employee button to add employee
    And Enter all the fields to Add new Employee
    And I click on Save new employee to add new employee
    And Close New Employee added window
    Then Verify the added Employee records are displayed under employee tab