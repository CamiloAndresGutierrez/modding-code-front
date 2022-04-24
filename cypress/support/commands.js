// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (username, password, appState = { targetUrl: "/" }) => {
    Cypress.log({
        name: 'loginViaAuth0',
    });

    const client_id = 'coVHlZIfzl16fbMQEYrjLcU6vaHWFdZR'
    const audience = 'coVHlZIfzl16fbMQEYrjLcU6vaHWFdZR'
    const scope = 'openid profile email'

    const options = {
        method: 'POST',
        url: `https://dev-38jrsauv.us.auth0.com/oauth/token`,
        body: {
            grant_type: 'password',
            username: username,
            password: password,
            audience: audience,
            scope: scope,
            client_id: client_id,
            client_secret: 'ygKBvWcFZvoreb6N1lkxnsTvwiHvcpzOv1PeRrwHsp5Y-E1kBkehFY1qfiqiwceh',
        },
    };

    cy.request(options).then(({ body }) => {
        const { access_token, expires_in, id_token, token_type } = body
        cy.window().then((win) => {
            win.localStorage.setItem(
                `@@auth0spajs@@::${client_id}::${audience}::${scope}`, // Could also be ::default:: instead of ::${audience}::
                JSON.stringify({
                    body: {
                        client_id,
                        access_token,
                        id_token,
                        scope,
                        expires_in,
                        token_type,
                        decodedToken: { user: JSON.parse(Buffer.from(id_token.split('.')[1], 'base64').toString('ascii')) },
                        audience
                    },
                    expiresAt: Math.floor(Date.now() / 1000) + expires_in
                })
            )
        })
        cy.visit(`http://localhost:3000/`)
    })
});
