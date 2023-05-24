import Input from './Input';

describe('Input component', () => {
  it('Renders properly', () => {
    const label = 'Test Label';
    const placeholder = 'Test Placeholder';
    const id = 'test-id';

    const onChange = cy.stub();

    cy.mount(
      <Input
        onChange={onChange}
        label={label}
        placeholder={placeholder}
        id={id}
      />
    );

    cy.get('h1').contains(label);
    cy.get('input').should('have.attr', 'placeholder', placeholder);
    cy.get('input').should('have.attr', 'id', id);
  });

  it('Displays error', () => {
    const error = 'Test Error';
    const onChange = cy.stub();

    cy.mount(
      <Input
        onChange={onChange}
        error={error}
      />
    );

    cy.get('span').contains(error);
    cy.get('div').should('have.class', 'border-red-500');
  });

  it('Calls onChange function on input value change', () => {
    const onChange = cy.stub();

    cy.mount(<Input onChange={onChange} />);

    cy.get('input').type('Test');

    cy.wrap(onChange).should('have.been.calledWith', 'Test');
  });
});
