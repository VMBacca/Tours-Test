describe("Tours App", () => {
  beforeEach(() => {
    cy.intercept("GET", "https://course-api.com/react-tours-project", {
      statusCode: 200,
      body: [
        {
          id: "1",
          name: "Mocked Tour",
          info: "Mocked data",
          image: "https://via.placeholder.com/150",
          price: "100",
        },
      ],
    }).as("getTours");

    cy.visit("http://localhost:3000");
    cy.wait("@getTours");
  });

  it("should load tours and allow user to remove a tour", () => {
    cy.get(".single-tour").should("have.length", 1);

    cy.contains("Mocked Tour").should("exist");

    cy.contains(/not interested/i).click();

    cy.get(".single-tour").should("have.length", 0);
  });

  it("should reload tours when clicking refresh", () => {
    cy.contains(/not interested/i).click();

    cy.get(".single-tour").should("have.length", 0);

    cy.contains("refresh").click();

    cy.get(".single-tour").should("have.length", 1);
  });
});
