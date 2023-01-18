import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import contactsPage from "../pages/ContactsPage";
import contactRegistrationPage from "../pages/ContactRegistrationPage";

beforeEach(() => {
    cy.viewport(1600, 720);
});

Given("I am on Contacts page", () => {
    contactsPage.open();
});

When("I click New Contact button", () => {
    contactsPage.clickNewContactButton();
});


When("I fill all required fields", () => {
    contactRegistrationPage.fillRequiredFields();
});

When("I click Save button", () => {
    contactRegistrationPage.clickSaveButton();
});


Then("the contact is created successfully", () => {
    contactRegistrationPage.verifyContactRegistration();
});