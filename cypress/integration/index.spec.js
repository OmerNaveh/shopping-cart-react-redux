describe('testing shopping cart',()=>{
    beforeEach(()=>{
        cy.visit('http://localhost:3000')
    })
    it('should be able to load',()=>{
        cy.contains('Shopping Cart')
    })
    it('should be able to add item to cart',()=>{
        cy.contains('iphone - 100$ | 5')
        cy.contains('Add to cart').click()
        cy.contains('iphone - 100$ | 4')
        cy.get('.total').contains('Total: 100$')
    })
    it('should clear cart when clicking on checkout btn',()=>{
        cy.contains('Add to cart').click()
        cy.contains('checkout').click()
        cy.get('.total').contains('Total: 0$')
        cy.get('.cart').find('p').should('have.length',0)
    })
    it('should add several items to cart',()=>{
        cy.get('.addProduct').click({ multiple: true })
        cy.get('.addProduct').click({ multiple: true })
        cy.get('.cart').find('p').should('have.length',3)
    })
    it('should not be able to add an item to cart if its quantity is 0',()=>{
        for(let i=0; i<5; i++){
            cy.contains('Add to cart').click()
        }
        cy.get('.quantity:first').contains(0)
        cy.contains('Add to cart').click()
        cy.get('.quantity:first').contains(0)
    })

})