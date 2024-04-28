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
const userAddress = user.address.toLowerCase();
const userCity = "Thessaloniki";
const userState = "Central Macedonia";
const userPostalCode = "56429";
const userCountry = "Greece";

test("Delete a contact.", async ({page, login, newContact}) => {
    const cells = page.locator(".contactTableBodyRow");
    const cellsContent = page.locator(".contactTableBodyRow td");
    const deleteBtn = page.locator("#delete");

    // Login
    await login.loginUser();

    // Check if there is contact
    // await cells.waitFor({state: "visible", timeout: 2000});
    // const cellsCount = await cellsContent.count();
    // logger.info("Cells: " + cellsCount);
    if (!await cells.isVisible()) {
        await newContact.createNewContact(username, userLastName, userBirthday, userEmail, userAddress, userCity, userState, userPostalCode, userCountry);
    }
    await page.locator(".contactTableBodyRow td:nth-child(2)").click();
    page.on("dialog", async (dialog) => {
        console.log(dialog.message());
        await dialog.accept();
    });

    await deleteBtn.click();

    await expect(page.locator('.contactTable')).toBeVisible();
    await expect(cells).toHaveCount(0);
});
