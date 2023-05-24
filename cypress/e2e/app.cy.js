describe('Basic navigation to "Tasks"', () => {
  it('Should navigate to the tasks page', () => {
    cy.visit('http://localhost:3000/');

    cy.get('a[href*="/tasks"]').click();

    cy.url().should('include', '/tasks');

    cy.get('h1').contains('Tasks');
  });
});

describe('Add integration', () => {
  it('Should add new item to integrations list', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#integrations-menu').click();

    cy.url().should('include', '/integrations');
    cy.get('h1').contains('Integrations');
    cy.get('a[href*="/integrations/new"]').click();

    cy.url().should('include', '/integrations/new');
    cy.get('#instagram-btn').click();

    cy.wait(2000);

    cy.get('[data-cy="profile-card"]').should('exist');
    cy.get('#label-input').type('Test Integration!');
    cy.get('#add-connection-btn').click();

    cy.get('#integrations-list div:first').contains('Test Integration!');
    cy.get('#snackbar').contains('Integration added: Test Integration!');

    cy.clearLocalStorage();
  });
});

describe('Create integration and repost integration post', () => {
  it('Should add new item to integrations list', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#integrations-menu').click();

    cy.url().should('include', '/integrations');
    cy.get('h1').contains('Integrations');
    cy.get('a[href*="/integrations/new"]').click();

    cy.url().should('include', '/integrations/new');
    cy.get('#twitter-btn').click();

    cy.wait(2000);

    cy.get('[data-cy="profile-card"]').should('exist');
    cy.get('#label-input').type('Test Integration!');
    cy.get('#add-connection-btn').click();

    cy.get('#integrations-list div:first').contains('Test Integration!');
    cy.get('#snackbar').contains('Integration added: Test Integration!');

    cy.get('#integrations-list div:first').click();

    cy.wait(500);

    cy.get('#post-grid div:first').should('exist');
    cy.get('#post-grid > div:first .repost-btn').click();

    cy.get('#snackbar').contains('Reposted on Komon');

    cy.clearLocalStorage();
  });
});
