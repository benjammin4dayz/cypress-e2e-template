import { Backend, Frontend } from "../../support/bookcars";

describe("Backend Template", () => {
  it("Logs in with valid credentials", () => {
    cy.backendLogin();
    cy.getCookie("bc-x-access-token-backend").should("exist");
  });

  it("Rejects invalid credentials", () => {
    cy.backendLogin("fWgol86bxW02FRtlmcEX", "0WiGTVUfBI5WTT8oq6Yr");
    cy.getCookie("bc-x-access-token-backend").should("not.exist");
  });

  it("Displays the sign-in page", () => {
    cy.visit(Backend.SignInPage.url);
    cy.get(Backend.SignInPage.elements.emailInput).should("be.visible");
    cy.get(Backend.SignInPage.elements.passwordInput).should("be.visible");
    cy.get(Backend.SignInPage.elements.submitButton).should("be.visible");
  });
});

describe("Frontend Template", () => {
  it("Logs in with valid credentials", () => {
    cy.frontendLogin();
    cy.getCookie("bc-x-access-token-frontend").should("exist");
  });

  it("Rejects invalid credentials", () => {
    cy.frontendLogin("fWgol86bxW02FRtlmcEX", "0WiGTVUfBI5WTT8oq6Yr");
    cy.getCookie("bc-x-access-token-frontend").should("not.exist");
  });

  it("Displays the homepage", () => {
    cy.visit(Frontend.HomePage.url);
    cy.get(Frontend.HomePage.elements.logo).should("be.visible");
  });
});
