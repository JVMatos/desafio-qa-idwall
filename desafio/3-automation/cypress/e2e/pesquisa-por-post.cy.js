Cypress.on('uncaught:exception', (err, runnable) => {
	// Previne que o Cypress falhe por conta de um erro no código do blog.
	return false;
});

const publi = 'Veja como implementar o Privacy by Design nos seus processos'
describe('Pesquisa por Post', () => {
	it('Deve acessar o blog e buscar por um post dentro da plataforma', () => {
		cy.visit('/', { failOnStatusCode: false });
		cy.get('.penci-mainlogo').should('be.visible')
		cy.get('div#top-search').click();
		cy.get('input.search-input').type(
			`${publi}{enter}`
		);
		cy.contains('a', publi).should('be.visible')
	});
});
