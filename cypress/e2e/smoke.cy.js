beforeEach(() => {
  cy.visit('/')
  cy.get('#onetrust-accept-btn-handler').click();
  cy.get('.changeShipping').click();
  cy.get('#gle_selectedCountry').select('US');
  cy.get('.glSaveBtn').click();
  // cy.get('.backToShop').click()
})

// Add to Cart
describe('Cart and Checkout', () => {
  it('Add to cart and enter checkout', () => {
    cy.wait(3000)
    cy.get('#ui-id-5').click({force:true});
    cy.get(':nth-child(1) > .product-item-info > .details > .product > .product-item-link').click();
    cy.get('.swatch-select').select('110');
    cy.get('#option-label-size-139-item-151').click();
    cy.get('#product-addtocart-button > span').click();
    cy.wait(3000)
    cy.get('.showcart').click();
    cy.wait(3000)
    cy.get('.methods > :nth-child(1) > .action > span').click();
    cy.wait(3000)
    cy.get('#CheckoutData_BillingFirstName').type("Teste");
    cy.get('#CheckoutData_BillingLastName').type("Teste");
    cy.get('#CheckoutData_Email').type("teste@teste.com.br");
    cy.get('#CheckoutData_BillingAddress1').type("Teste");
    cy.get('#CheckoutData_BillingAddress2').type("Teste");
    cy.get('#BillingCity').type("Teste");
    cy.get('#BillingZIP').type("Teste");
    cy.get('BillingStateID').select('12771');
    cy.get('#CheckoutData_BillingPhone').type("11999999999");
  })

})
