import {expect, Locator, Page} from "@playwright/test";

export class NewContact {
    readonly page: Page;
    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly email: Locator;
    readonly newContact: Locator;
    readonly dob: Locator;
    readonly address: Locator;
    readonly city: Locator;
    readonly state: Locator;
    readonly postalCode: Locator;
    readonly country: Locator;
    readonly submitButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.newContact = page.locator("#add-contact");
        this.firstName = page.locator("#firstName");
        this.lastName = page.locator("#lastName");
        this.email = page.locator("#email");
        this.dob = page.locator("#birthdate");
        this.address = page.locator("#street1");
        this.city = page.locator("#city");
        this.state = page.locator("#stateProvince");
        this.postalCode = page.locator("#postalCode");
        this.country = page.locator("#country");
        this.submitButton = page.locator("#submit");
    }

    async createNewContact(username, userLastName, userBirthday, userEmail, useAddress, userCity, userState, userPostalCode, userCountry) {
        // Add new contact
        await this.newContact.click();
        await this.firstName.fill(username);
        await this.lastName.fill(userLastName);
        await this.dob.fill(userBirthday);
        await this.email.fill(userEmail);
        await this.address.fill(useAddress);
        await this.city.fill(userCity);
        await this.state.fill(userState);
        await this.postalCode.fill(userPostalCode);
        await this.country.fill(userCountry);
        await this.submitButton.click();
    }
}
