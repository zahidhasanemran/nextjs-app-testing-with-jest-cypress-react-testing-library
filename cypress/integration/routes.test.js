import { generateNewBand } from "../../__tests__/__mocks__/fakeData/newBand";
import { generateRandomId } from "../../lib/features/reservations/utils";

it("display correct heading navigation to show nav", () => {
  cy.visit("/");
  cy.findByRole("button", { name: /shows/i }).click();
  cy.findByRole("heading", { name: /upcoming shows/i }).should("exist");
});

it("correct heading, when navigate to brands page", () => {
  cy.visit("/");
  cy.findByRole("button", { name: /bands/i }).click();
  cy.findByRole("heading", { name: /Our Illustrious Performers/i }).should(
    "be.visible"
  );
});

it("reset db and test a route that created at build time", () => {
  cy.task("db:reset").visit("/bands/19361");
  cy.findByRole("heading", { name: /Shamrock Pete/i }).should("exist");
});

it("should show error message with band not found as band id", () => {
  cy.task("db:reset").visit("/bands/1234");
  cy.get("h2").should(
    "have.text",
    "Could not retrieve band data: Error: band not found"
  );
});

it("get route that was nto build at build tiem ", () => {
  const id = generateRandomId();
  const newBand = generateNewBand(id);
  cy.task("db:reset").task("addBand", newBand).visit(`/bands/${id}`);
  cy.get("h2").should("have.text", "Avalanche of Cheese");
});
