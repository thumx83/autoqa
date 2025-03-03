export default class ShoppingPage {
    elements = {
      searchBar: () => cy.get("input[type='text']"),
      discountFilter: () => cy.contains("Discount"),
      firstProduct: () => cy.get(".product-list .product-item").first(),
      productPrice: () => cy.get(".product-price"),
      discountedPrice: () => cy.get(".discounted-price"),
      addToCartButton: () => cy.contains("Add to Cart"),
      cartButton: () => cy.contains("Cart"),
      cartTotal: () => cy.get(".cart-total"),
    };
  
    searchProduct(productName) {
      this.elements.searchBar().type(productName).type("{enter}");
    }
  
    filterDiscountedProducts() {
      this.elements.discountFilter().click();
    }
  
    selectFirstProduct() {
      this.elements.firstProduct().click();
    }
  
    verifyProductPrice() {
      this.elements.productPrice().should("be.visible");
    }
  
    verifyDiscountedPrice() {
      this.elements.discountedPrice().should("be.visible");
    }
  
    addToCart() {
      this.elements.addToCartButton().click();
    }
  
    goToCart() {
      this.elements.cartButton().click();
    }
  
    verifyCartTotal() {
      this.elements.cartTotal().should("be.visible");
    }
  }
  
// class ShoppingPage {
//     constructor() {
//       this.elements = {
//         searchBar: () => cy.get("input[type='text']"),
//         discountFilter: () => cy.contains("Discount"),
//         firstProduct: () => cy.get(".product-list .product-item").first(),
//         productPrice: () => cy.get(".product-price"),
//         discountedPrice: () => cy.get(".discounted-price"),
//         addToCartButton: () => cy.contains("Add to Cart"),
//         cartButton: () => cy.contains("Cart"),
//         cartTotal: () => cy.get(".cart-total"),
//       };
//     }
  
//     searchProduct(productName) {
//       this.elements.searchBar().type(productName).type("{enter}");
//     }
  
//     filterDiscountedProducts() {
//       this.elements.discountFilter().click();
//     }
  
//     selectFirstProduct() {
//       this.elements.firstProduct().click();
//     }
  
//     verifyProductPrice() {
//       this.elements.productPrice().should("be.visible");
//     }
  
//     verifyDiscountedPrice() {
//       this.elements.discountedPrice().should("be.visible");
//     }
  
//     addToCart() {
//       this.elements.addToCartButton().click();
//     }
  
//     goToCart() {
//       this.elements.cartButton().click();
//     }
  
//     verifyCartTotal() {
//       this.elements.cartTotal().should("be.visible");
//     }
//   }
  
//   export default new ShoppingPage();
  
