/// <reference types='cypress' />

const baseUrl = 'http://localhost:3000';

describe('Auth0 login', function () {
    context("Problem solving", () => {
        it('should successfully login as a student and see /categories page', () => {
            cy.login('camilo.andres@gmail.com', 'KjSw*%gsM-V.cH5')
        });
    });
});
