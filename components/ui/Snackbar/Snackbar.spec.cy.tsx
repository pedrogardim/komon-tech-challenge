import { SnackbarProvider, useSnackbar } from './Snackbar';

const TestComponent: React.FC<{ message: string }> = ({ message }) => {
  const { openSnackbar } = useSnackbar();

  return (
    <button
      id="test-btn"
      onClick={() => openSnackbar(message)}
    >
      Open Snackbar
    </button>
  );
};

describe('SnackbarContext', () => {
  it('Displays a snackbar when openSnackbar is called', () => {
    const message = 'Test Message';

    cy.mount(
      <SnackbarProvider>
        <TestComponent message={message} />
      </SnackbarProvider>
    );

    cy.get('#test-btn').click();
    cy.get('#snackbar').should('contain', message);
  });

  it('Closes the snackbar when the close button is clicked', () => {
    const message = 'Test Message 2';

    cy.mount(
      <SnackbarProvider>
        <TestComponent message={message} />
      </SnackbarProvider>
    );

    cy.get('#test-btn').click();
    cy.get('#snackbar').should('contain', message);

    cy.get('#snackbar button').click();
    cy.get('#snackbar').should('not.contain', message);
  });
});
