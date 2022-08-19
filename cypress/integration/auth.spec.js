describe("Login test", () => {
  // it("should succefully logged in", () => {
  //   cy.task("db:reset").visit("/reservations/0");
  //   cy.findByRole("heading", { name: /Sign in to your account/i }).should(
  //     "exist"
  //   );
  //   cy.findByRole("button", { name: /purchase/i }).should("not.exist");
  //   cy.findByLabelText(/email address/i)
  //     .clear()
  //     .type(Cypress.env("TEST_USER_EMAIL"));
  //   cy.findByLabelText(/password/i)
  //     .clear()
  //     .type(Cypress.env("TEST_PASSWORD"));
  //   cy.findByRole("main").within(() => {
  //     cy.findByRole("button", { name: /sign in/i }).click();
  //     cy.findByRole("heading", { name: /The Wandering Bunnies/i }).should(
  //       "exist"
  //     );
  //   });
  // });

  // it("login failed", () => {
  //   cy.task("db:reset").visit("/user");
  //   cy.findByText(/Welcome test@test.test/i).should("not.exist");
  //   cy.findByRole("heading", { name: /Sign in to your account/i }).should(
  //     "exist"
  //   );
  //   cy.findByLabelText(/email address/i)
  //     .clear()
  //     .type(Cypress.env("TEST_USER_EMAIL"));
  //   cy.findByLabelText(/password/i)
  //     .clear()
  //     .type("sdkfjaskdfj");
  //   cy.findByRole("main").within(() => {
  //     cy.findByRole("button", { name: /sign in/i }).click();
  //     cy.findByText(/Sign in failed/i).should("exist");
  //   });
  //   cy.findByLabelText(/password/i)
  //     .clear()
  //     .type(Cypress.env("TEST_PASSWORD"));
  //   cy.findByRole("main").within(() => {
  //     cy.findByRole("button", { name: /sign in/i }).click();
  //   });
  //   cy.findByText(/Welcome test@test.test/i).should("exist");
  //   cy.findByRole("button", { name: Cypress.env("TEST_USER_EMAIL") }).should(
  //     "exist"
  //   );
  //   cy.findByRole("button", { name: /sign out/i }).should("exist");
  // });

  // it("redirect to sign in for protected page", () => {
  //   cy.fixture("protected-page.json").then((urls) => {
  //     urls.forEach(($url) => {
  //       cy.visit($url);
  //       cy.findByLabelText(/email address/i).should("exist");
  //       cy.findByLabelText(/password/i).should("exist");
  //     });
  //   });
  // });

  // it("dont show sing in page when alredy signed in", () => {
  //   cy.task("db:reset").signIn(
  //     Cypress.env("TEST_USER_EMAIL"),
  //     Cypress.env("TEST_PASSWORD")
  //   );
  //   cy.visit("/reservations/0");
  //   cy.findByRole("heading", { name: /Sign in to your account/i }).should(
  //     "not.exist"
  //   );
  // });

  it("purchase more", () => {
    cy.task("db:reset").signIn(
      Cypress.env("TEST_USER_EMAIL"),
      Cypress.env("TEST_PASSWORD")
    );
    cy.visit("/user");
    cy.findByRole("button", { name: /purchase more tickets/i }).click();
    cy.findByRole("heading", { name: /Upcoming Shows/i }).should("exist");
  });
});
