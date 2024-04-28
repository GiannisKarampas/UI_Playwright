import {test} from "../fixtures/fixtures";
import {expect} from "@playwright/test";
import {Logger} from "../utils/common/logger.utils";
import {createRandomUser} from "../utils/interfaces/userObject";

const logger = Logger.loggerSetup();
const user = createRandomUser();
const username = user.firstName;
const userLastName = user.lastName.toLowerCase();
const userBirthday = "1995-06-04";
const userEmail = user.email.toLowerCase();
const userPassword = "123456789";
const userAddress = user.address.toLowerCase();
const userCity = "Thessaloniki";
const userState = "Central Macedonia";
const userPostalCode = "56429";
const userCountry = "Greece";

test("Sign up with a new user, add a new contact and validate it on contact details page", async ({page, newContact}) => {
    const signupButton = page.locator("#signup");
    const firstName = page.locator("#firstName");
    const lastName = page.locator("#lastName");
    const email = page.locator("#email");
    const password = page.locator("#password");
    const submitButton = page.locator("#submit");

    const headers = page.locator(".contactTableHead tr th");
    const cells = page.locator(".contactTableBodyRow td");

    // Create a new user
    await page.goto(process.env.URL);
    await signupButton.click();
    await firstName.fill(username);
    await lastName.fill(userLastName);
    await email.fill(userEmail);
    await password.fill(userPassword);
    await submitButton.click();

    // Add new contact
    await newContact.createNewContact(username, userLastName, userBirthday, userEmail, userAddress, userCity, userState, userPostalCode, userCountry);

    // Validate the contact on details page
    await expect(headers).toHaveCount(7);
    const headersText = await headers.evaluateAll((list) => list.map((element) => element.textContent));
    expect.soft(headersText).toEqual(["Name", "Birthdate", "Email", "Phone", "Address", "City, State/Province, Postal Code", "Country"]);

    let cellsText = await cells.evaluateAll((list) => list.map((element) => element.textContent.trim()));
    cellsText.shift();
    logger.info("Cells: " + cellsText);
    expect(cellsText).toEqual([`${username} ${userLastName}`, userBirthday, userEmail, "", userAddress, `${userCity} ${userState} ${userPostalCode}`, userCountry]);
});
