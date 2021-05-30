import { Given , And , Then , When} from "cypress-cucumber-preprocessor/steps";

Given('Login to the application', () => {
   cy.visit('http://zero.webappsecurity.com/login.html')
  })
  
  When('I type username as {string}',username=> {
    cy.get('#user_login').type(username)
  })
  And('I type password as {string}',password=> {
    cy.get('#user_password').type(password)
  })
  Then('click Login', () => {
    cy.get('input[name="submit"]').click()
  })
  And('See the errorMessage', () => {
    cy.get('div:contains("Login and/or password are wrong.")').should('be.visible')
  })
  And('See the homepage', () => {
    cy.get('a:contains("Zero Bank")').should('be.visible')
  })
  When('I type the credentials',function(dataTable) {
    cy.get('#user_login').type(dataTable.rawTable[1][0])
    cy.get('#user_password').type(dataTable.rawTable[1][1])
    cy.get('#user_login').type(dataTable.rawTable[2][0])
    cy.get('#user_password').type(dataTable.rawTable[2][1])
  })

 