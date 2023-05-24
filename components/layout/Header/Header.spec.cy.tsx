import Header from './Header';

describe('Header', () => {
  beforeEach(() => {
    cy.mount(<Header />);
  });

  it('displays the Komon logo', () => {
    cy.get('header')
      .find('img')
      .should('be.visible')
      .should('have.attr', 'src', '/komon.svg')
      .and('have.attr', 'alt', 'Komon Logo');
  });

  it('displays the Dashboard text', () => {
    cy.get('header').contains('Dashboard').should('be.visible');
  });

  it('displays the avatar image', () => {
    cy.get('header')
      .find('img')
      .last()
      .should('be.visible')
      .and('have.attr', 'alt', 'Avatar')
      .and('have.attr', 'src');
  });
});
