import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import chaiColors from 'chai-colors'

chai.use(chaiColors)

/**
 * Constants
 * =========
 */
const EMAIL_FIELD_SELECTOR = '[type="email"][name="email"]'

/**
 * Given
 * =====
 */
const story = 'form--registration-form'
Given('the form contains an email field', () => {
    cy.goToStory(story)
})

/**
 * When
 * ====
 */
When('the user enters an invalid email', () => {
    cy.get(EMAIL_FIELD_SELECTOR).type('invalid@email')
})

When('the user focuses the next input field', () => {
    cy.get(EMAIL_FIELD_SELECTOR).then(([ input ]) => {
        cy.get('[type]').then($inputs => {
            const inputs = $inputs.toArray()
            const emailIndex = inputs.indexOf(input)

            cy
                .wrap(inputs[emailIndex + 1])
                .focus()
        })
    })
})

/**
 * Then
 * ====
 */
Then('the email field should display an error message', () => {
    cy.get(EMAIL_FIELD_SELECTOR)
        .parent('field')
        .find('.hint-text')
        .should('contain', 'The email is invalid')
})

Then('the email field should have a red border-bottom', () => {
    cy.get(EMAIL_FIELD_SELECTOR)
        .parent('field')
        .find('input')
        .should('have.css', 'border-bottom')
        .and('be.colored', 'red')
})

Then('the email field should contain the error icon', () => {
    cy.get(EMAIL_FIELD_SELECTOR)
        .parent('field')
        .find('.status-icon')
        .should('have.class', 'error')
})
