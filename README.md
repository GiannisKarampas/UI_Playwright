
**QA Mindset: Test Cases for Vendor Machine**

***User Story 1: Purchase with Cash***
**Test Case 1.1**
Insert exact amount of coins for a product (e.g., enter product code and insert the exact amount shown on the display).
Expected Result: Product is provided and no change is returned.
**Test Case 1.2**
Insert more money than the required amount for a product with various coin combinations (e.g., Euro 1, Euro 2, etc.).
Expected Result: Product is provided and correct change is returned.
**Test Case 1.3**
Insert less money than the required amount for a product.
Expected Result: Machine displays message. Product isn’t provided.

***User Story 2: Purchase with Contactless Credit Card***
**Test Case 2.1**
Simulate a successful contactless payment for a product.
Expected Result: Product is provided and receipt is printed.
**Test Case 2.2**
Pay with an expired credit card.
Expected Result: Machine displays a decline message. No product.

***User Story 3: Machine gives back change on the bottom side of it***
**Test Case 3.1**
Verify change is provided correctly from the correct side for various scenarios in Test Case 1.2.
Expected Result: Coins are returned in the correct denominations to match the overpayment.

***User Story 4: Receipt Printing***
**Test Case 4.1**
Verify receipt is printed for a successful purchase with cash (Test Case 1.1).
Expected Result: Receipt includes product name, price, date, time, and payment method (cash).
**Test Case 4.2**
Verify receipt is printed for a successful purchase with contactless card (Test Case 2.1).
Expected Result: Receipt includes product name, price, date, time, and payment method (contactless).
**Test Case 4.3**
Verify receipt clarity (readable font, no smudges).
Expected Result: Receipt information is clear and easy to read.

***User Story 5 & 6: Product Selection***
**Test Case 5.1**
Select a product by entering the correct code using the keypad.
Expected Result: Machine displays the product information and prompts for payment.
**Test Case 5.2**
Enter an invalid product code.
Expected Result: Machine displays an error message indicating invalid product code.
**Test Case 5.3**
Try to select multiple products at once.
Expected Result: Machine allows selection of only one product at a time.

***User Story 7: Keypad Functionality***
**Test Case 7.1**
Enter product code using numbers 0-9.
Expected Result: Machine recognizes the entered number.
**Test Case 7.2**
Use the Enter button to confirm the selection.
Expected Result: Machine processes the selection and prompts for payment.
**Test Case 7.3**
Use the Cancel button before payment.
Expected Result: Selection is cancelled, and the machine returns to the initial state.

***User Story 8: Payment Order Flexibility***
**Test Case 8.1**
Enter product code first, then insert money.
Expected Result: Machine displays the price and allows payment after product selection.
**Test Case 8.2**
Insert money first, then enter product code.
Expected Result: Machine displays available products after receiving payment and allows product selection.

