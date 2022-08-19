import { generateNewBand } from "../../__tests__/__mocks__/fakeData/newBand";
import { generateRandomId } from "../../lib/features/reservations/utils";

it("should load refreshed page from chache after new band added", () => {
  // check new band is not preset
  cy.task("db:reset");
  cy.visit("/bands");
  cy.findByRole("heading", { name: /Avalanche of Cheese/i }).should(
    "not.exist"
  );
  // add new band via post request to api

  const id = generateRandomId();
  const band = generateNewBand(id);
  const secret = Cypress.env("REVALIDATION_SECRET");
  cy.request("POST", `/api/bands?secret=${secret}`, { newBand: band }).then(
    (response) => {
      expect(response.body.revalidated).to.equal(true);
    }
  );

  // reload page, new band should appear
  cy.reload();
  cy.findByRole("heading", { name: /Avalanche of Cheese/i }).should("exist");
});
