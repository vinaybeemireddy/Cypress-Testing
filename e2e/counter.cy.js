describe("template spec", () => {
  it("application is loading or not", () => {
    cy.visit("http://localhost:3000/");
  });

  it("checking for heading and button", () => {
    cy.visit("http://localhost:3000/");

    //get the element using cy.get("name")
    const counter_heading = cy.get("h2");

    //we check  if it is present.
    counter_heading.should("exist");

    const button1 = cy.get('[data-testid="add"]');
    button1.should("exist");
  });

  it("should have text countent", () => {
    cy.visit("http://localhost:3000/");

    const heading = cy.get("h2");
    heading.should("exist");

    heading.should("have.text", "Count:0");

    cy.get(".button").eq(0).should("have.text", "Add");
    cy.get(".button").eq(1).should("have.text", "Reduce");
  });

  it("check the functionality", () => {
    cy.visit("http://localhost:3000/");

    cy.get("h2").should("have.text", "Count:0");

    cy.get("[data-testid=add]").click();

    cy.get("h2").should("have.text", "Count:1");
    cy.get("[data-testid=add]").click();
    cy.get("[data-testid=add]").click();
    cy.get("[data-testid=add]").click();
    cy.get("[data-testid=add]").click();
    cy.get("h2").should("have.text", "Count:5");
  });
});

//1 . we checked if the app is loading
//2 . we checked if button and header is present.
//3. we have counter:0
//4 functionality

//get
// tag
//class
//data-testid
//id
// should()
//exist
//have.text, "count:1"
