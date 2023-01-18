class ContactRegistrationPage {
    firstName = "//input[@id='first_name']";
    lastName = "//input[@id='last_name']";
    title = "//input[@id='title']";
    company = "//input[@id='company_id']";
    email = "//input[@id='email']";
    phoneNumber1 = "//input[@id='phone_number1']";
    phoneNumber2 = "//input[@id='phone_number2']";
    saveButton = "//button[@aria-label='Save']";
    message = "//div[@role='alert']";
   
    fillRequiredFields() {
        cy.fixture("contactTestData").then((testData) => {                    
            cy.xpath(this.firstName).type(testData.firstName);
            cy.xpath(this.lastName).type(testData.lastName);
            cy.xpath(this.title).type(testData.title);
            cy.xpath(this.company).type(testData.company);
            cy.xpath(this.phoneNumber1).type(testData.phoneNumber1);
            cy.xpath(this.phoneNumber2).type(testData.phoneNumber2);    
        })
    }

    clickSaveButton(){
        cy.xpath(this.saveButton).click();
    }

    verifyContactRegistration() {
        return cy.xpath(this.message).should('have.text', 'Element created')
    }
}
const contactregistrationpage = new ContactRegistrationPage();
export default contactregistrationpage