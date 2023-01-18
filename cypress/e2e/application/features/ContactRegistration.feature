@feature("ContactRegistration")
Feature: Registration of contact

@suite("Regression")
Scenario: Create a contact
Given I am on Contacts page
When I click New Contact button
And I fill all required fields
And I click Save button
Then the contact is created successfully