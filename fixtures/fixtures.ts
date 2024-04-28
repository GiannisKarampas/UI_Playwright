import {mergeTests, test as base} from "@playwright/test";
import {test as LoginFixture} from "./login.fixtures";
import {test as ContactFixture} from "./contact.fixtures";

export const test = mergeTests(LoginFixture, ContactFixture);
