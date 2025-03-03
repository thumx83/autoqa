export default class CheckoutPage {
    elements = {
      checkoutButton: () => cy.contains("Checkout"),
      paymentMethod: (method) => cy.contains(method),
      placeOrderButton: () => cy.contains("Place Order"),
      myOrdersButton: () => cy.contains("My Orders"),
      cancelOrderButton: () => cy.contains("Cancel Order"),
      orderCancelledMessage: () => cy.contains("Order Cancelled"),
    };
  
    proceedToCheckout() {
      this.elements.checkoutButton().click();
    }
  
    selectPaymentMethod(paymentMethod) {
      this.elements.paymentMethod(paymentMethod).click();
    }
  
    placeOrder() {
      this.elements.placeOrderButton().click();
    }
  
    cancelOrder() {
      this.elements.myOrdersButton().click();
      this.elements.cancelOrderButton().click();
    }
  
    verifyOrderCancelled() {
      this.elements.orderCancelledMessage().should("be.visible");
    }
  }

  
