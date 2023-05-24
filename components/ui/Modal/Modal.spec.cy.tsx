import Modal from './Modal';

describe('Modal component', () => {
  it('Renders when open is true', () => {
    const onClose = cy.stub();
    const onConfirm = cy.stub();

    cy.mount(
      <Modal
        open={true}
        onClose={onClose}
        onConfirm={onConfirm}
      >
        <div>Modal Content</div>
      </Modal>
    );

    cy.get('.fixed').should('not.have.class', 'hidden');
    cy.contains('Modal Content').should('exist');
  });

  it('Does not render when open is false', () => {
    const onClose = cy.stub();
    const onConfirm = cy.stub();

    cy.mount(
      <Modal
        open={false}
        onClose={onClose}
        onConfirm={onConfirm}
      >
        <div>Modal Content</div>
      </Modal>
    );

    cy.get('.fixed').should('have.class', 'hidden');
  });

  it('Calls onClose function on close button click', () => {
    const onClose = cy.stub();
    const onConfirm = cy.stub();

    cy.mount(
      <Modal
        open={true}
        onClose={onClose}
        onConfirm={onConfirm}
        type="confirm"
      >
        <div>Modal Content</div>
      </Modal>
    );

    cy.get('button').contains('Cancel').click();
    cy.wrap(onClose).should('have.been.called');
  });

  it('Calls onConfirm function on confirm button click', () => {
    const onClose = cy.stub();
    const onConfirm = cy.stub();

    cy.mount(
      <Modal
        open={true}
        onClose={onClose}
        onConfirm={onConfirm}
        type="confirm"
      >
        <div>Modal Content</div>
      </Modal>
    );

    cy.get('button').contains('Ok').click();
    cy.wrap(onConfirm).should('have.been.called');
  });
});
