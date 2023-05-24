import Sidemenu, { menuItems } from './Sidemenu';

describe('Sidemenu', () => {
  beforeEach(() => {
    cy.mount(<Sidemenu />);
  });

  it('displays the correct menu items', () => {
    cy.get('ul')
      .children()
      .should('have.length', 4)
      .each(($menuItem, index) => {
        cy.wrap($menuItem)
          .find('span')
          .should('have.text', menuItems[index].label);
      });
  });
});
