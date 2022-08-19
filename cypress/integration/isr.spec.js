/* eslint-disable no-param-reassign */
describe("Shows page", () => {
  it("isr data check and skip client side bundle", () => {
    cy.request("/shows")
      .its("body")
      .then((html) => {
        html = html.replace('<script src="/bundle.js"></script>', "");
        cy.state("document").write(html);
      });
    cy.findAllByText(/2022 apr 1[456]/i).should("have.length.of", 3);
  });
});
describe("Bands page", () => {
  it("isr data check and skip client side bundle", () => {
    cy.request("/bands")
      .its("body")
      .then((html) => {
        html = html.replace('<script src="/bundle.js"></script>', "");
        cy.state("document").write(html);
      });
    // cy.get("h2").should("have:text", "avalanche of cheese");
    cy.findAllByRole("heading", { name: /avalanche of cheese/i }).should(
      "exist"
    );
    cy.findAllByRole("heading", { name: /the joyous nun riot/i }).should(
      "exist"
    );
    cy.findAllByRole("heading", { name: /shamrock pete/i }).should("exist");
    cy.findAllByRole("heading", { name: /The Wandering Bunnies/i }).should(
      "exist"
    );
  });
});
