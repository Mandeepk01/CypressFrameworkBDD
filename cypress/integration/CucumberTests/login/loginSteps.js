import { Given , And , Then , When} from "cypress-cucumber-preprocessor/steps";

Given('Login to the application', () => {
   cy.visit('http://zero.webappsecurity.com/login.html')
  
  })
  
  When('Enter valid Credentials', () => {
    cy.get('#user_login').type('username')
    cy.get('#user_password').type('password')
  })
  
  Then('click Login', () => {
    cy.get('input[name="submit"]').type('username')
  })
  
  And('See the homepage', () => {
    cy.get('a:contains("Zero Bank")').should('be.visible')
  })
  