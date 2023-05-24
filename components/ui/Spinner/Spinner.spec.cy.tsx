import Spinner from './Spinner';

describe('Spinner component', () => {
  it('Renders properly', () => {
    cy.mount(<Spinner />);
    cy.get('img').should('exist');
    cy.get('img').should('have.class', 'animate-spin');
  });

  it('Applies size prop properly', () => {
    const size = 128;
    cy.mount(<Spinner size={size} />);
    cy.get('img').should('have.attr', 'height', size.toString());
    cy.get('img').should('have.attr', 'width', size.toString());
    cy.get('img').should('have.class', `h-[${size}px]`);
    cy.get('img').should('have.class', `w-[${size}px]`);
  });
});
