Feature: Displaying errors

  I want to be informed about errors in the form
  once the input field loses focus.

  Scenario: Writing an invalid email into an email field
    Given the form contains an email field
    When the user enters an invalid email
    When the user focuses the next input field
    Then the email field should display an error message
    Then the email field should have a red border-bottom
    Then the email field should contain the error icon
