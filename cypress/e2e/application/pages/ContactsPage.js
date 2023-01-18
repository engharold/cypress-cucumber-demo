class ContactsPage {
    url = "https://marmelab.com/react-admin-crm/#/contacts";
    newContact = "//a[@aria-label='New Contact']";
    
    open() {
        cy.visit(this.url);
    }
    
    clickNewContactButton() {
        cy.xpath(this.newContact).click();
        return this;
    }
}
const contactspage = new ContactsPage();
export default contactspage