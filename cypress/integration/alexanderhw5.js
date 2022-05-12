describe("Is the 'One Click Buy' window present after tapping on the appropriate button", function test () {
    it ("One Click Buy functionality", function oneClickBuy () {
        cy.once('uncaught:exception', () => false);
        cy.viewport(1920, 1080);
        cy.visit("https://time.am/?lang=en&currency=AMD");
        cy.get('.nav__item').eq(1).click();
        cy.get('.products__item-image').eq(0).click();
        cy.get('.oneclickbuy > .js-modal').should('be.visible').click();
        cy.get('#btn-requestonclick').should('be.visible').end();
    })
})