import Icon from './Icon';

describe('Icon component', () => {
  it('Renders with default properties', () => {
    const icon = 'close';

    cy.mount(<Icon icon={icon} />);

    cy.get('img').should('have.attr', 'src', `/icons/${icon}.svg`);
    cy.get('img').should('have.attr', 'alt', icon);
    cy.get('img').should('have.attr', 'width', '20');
    cy.get('img').should('have.attr', 'height', '20');
    cy.get('img').should('not.have.class', 'invert');
  });

  it('Renders with custom properties', () => {
    const icon = 'close';
    const size = 30;
    const color = 'white';
    const className = 'customClass';

    cy.mount(
      <Icon
        icon={icon}
        size={size}
        color={color}
        className={className}
      />
    );

    cy.get('img').should('have.attr', 'src', `/icons/${icon}.svg`);
    cy.get('img').should('have.attr', 'alt', icon);
    cy.get('img').should('have.attr', 'width', `${size}`);
    cy.get('img').should('have.attr', 'height', `${size}`);
    cy.get('img').should('have.class', 'invert');
    cy.get('img').should('have.class', className);
  });
});
