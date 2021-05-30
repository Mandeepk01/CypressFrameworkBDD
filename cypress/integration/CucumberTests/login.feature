Feature: Login Tests

Login Test Cases


Scenario:  Login with invalid username
Given Login to the application
When I type username as "hello"
And I type password as "password"
Then click Login
And See the errorMessage

Scenario: Login with valid credentials
Given Login to the application
When I type username as "username"
And I type password as "password"
Then click Login
And See the homepage

Scenario: Login with multiple credentials
Given Login to the application
When I type the credentials
| uname | pword |
| username | password |
| hello | world |
Then click Login




