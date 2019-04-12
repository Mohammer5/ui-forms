import React from 'react'
import { storiesOf } from '@storybook/react'
import {
    Form,
    InputField,
    Button,
} from '../index'

const required = label => value =>
    value !== ''
        ? `${label} must not be empty`
        : undefined

const validEmail = value => !value.match(/.*@.*\.[a-z]{,2}/)
    ? 'The email you provided is not valid'
    : undefined

const matches = (name, label) => (value, values) =>
    value === values[name]
        ? `The value must match the value of "${label}"`
        : undefined

const minLength = (length, label) => value =>
    value.length < length
        ? `${label} must have at least ${length} characters`
        : undefined

const containsCapitalChars = (label = 'value') => value =>
    !value.match(/[A-Z]/)
        ? `The ${label} you provided must contain capital letters`
        : undefined

const containsSpecialChars = label => value =>
    !value.match(/[!@#$%^&*()_|]/)
        ? `The ${label} you provided must contain at least one special character`
        : undefined

storiesOf('form', module)
    .add('Registration form', () => (
        <Form onSubmit={console.log}>
            <InputField
                name="name"
                validators={required('Full name')}
                label="Full name"
            />

            <InputField
                name="email"
                validators={[required('E-mail'), validEmail]}
                label="E-mail"
            />

            <InputField
                name="email-confirmation"
                validators={[required('E-mail'), matches('email', 'E-mail')]}
                label="E-mail confirmation"
            />

            <InputField
                name="password"
                type="password"
                validators={[
                    required('Password'),
                    minLength(8, 'Password'),
                    containsCapitalChars('Password'),
                    containsSpecialChars('Password'),
                ]}
                label="Password"
            />

            <Button
                label="Register"
                type="submit"
            />
        </Form>
    ))
