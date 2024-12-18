describe("template spec", () => {
  it("passes", () => {
    cy.visit("https://example.cypress.io/todo");
  });

  it("should have an input box", () => {
    cy.visit("https://example.cypress.io/todo");

    cy.get("input.new-todo").should("exist");
  });

  it("input should let us type in it ", () => {
    cy.visit("https://example.cypress.io/todo");

    cy.get("input.new-todo").type("Learn testing");
  });

  it("should add a new -todo", () => {
    cy.visit("https://example.cypress.io/todo");

    cy.get("input.new-todo").type("learn react {enter}");

    cy.get("ul.todo-list").children().should("have.length", 3);
  });

  it("should delete todo", () => {
    cy.visit("https://example.cypress.io/todo");

    cy.get("button.destroy").eq(1).invoke("show").click();
    cy.get("ul.todo-list").children().should("have.length", 1);
  });
});

//try researching about the following things
//intercepting request.
//mock function.

//beforeEach
//afterEach
//beforeAll
//afterAll
