# Ui Forms 
## Demo with Storybook / Cypress / Cucumber

The tests are not executable, as there's no code yet,
and the code I wrote is just a sketch, not what it will look like in the end.

This is just a demo to show what I have in mind when it comes to the new `ui-forms` lib.
The idea is as follows:

1. Specs are written as `.feature` files in `cypress/integration/`
  1. These will be added as PRs, so all devs can have a say when it comes to a lib
     that everyone will use for forms.
1. Demos of the `ui-forms` library are placed into the `stories`
1. After both the feature has been defined and a story exists, 
   the step definitions can be written in `cypress/integration/[feature name]/*.js`

Cypress allows to override the paths where it will look for files, so we could
place a `specs` folder on the root level instead of inside the cypress folder
as these should be cypress independent.
