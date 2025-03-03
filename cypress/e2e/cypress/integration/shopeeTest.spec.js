import Checkout from "../../../pageObjects/Checkout";
import LoginPage from "../../../pageObjects/LoginPage";
import ShoppingPage from "../../../pageObjects/ShoppingPage";

const login = new LoginPage()
const checkout = new Checkout()
const shopping = new ShoppingPage()

//   🚀 Lợi ích của cách viết này
// ✔ elements giúp quản lý selector dễ dàng
// ✔ Không cần constructor, code ngắn gọn hơn
// ✔ Ctrl + Click sẽ hoạt động đúng khi click vào hàm


describe("E-commerce Automation Test", () => {
  beforeEach(() => {
    cy.fixture("userCredentials").as("userData");
    cy.fixture("productData").as("productData");
  });

  it("Login with valid credentials", function () {
    cy.login(this.userData.validUser.username,this.userData.validUser.password)
    login.verifyLoginSuccess();
  });

  it("Login with invalid credentials", function () {
    cy.login(this.userData.invalidUser.username,this.userData.invalidUser.password)
    login.verifyLoginFailure();
  });

  it("Search, filter, and add discounted product to cart", function () {
    login.visit();
    cy.login(this.userData.validUser.username, this.userData.validUser.password);

    shopping.searchProduct(this.productData.productKeyword);
    shopping.filterDiscountedProducts();
    shopping.selectFirstProduct();
    shopping.verifyProductPrice();
    shopping.verifyDiscountedPrice();
    shopping.addToCart();
    shopping.goToCart();
    shopping.verifyCartTotal();
  });

  it("Checkout with COD and cancel order", function () {
    shopping.goToCart();
    checkout.proceedToCheckout();
    checkout.selectPaymentMethod(this.productData.paymentMethod);
    checkout.placeOrder();
    checkout.cancelOrder();
    checkout.verifyOrderCancelled();
  });

  it("Verify responsive design on different devices", () => {
    const breakpoints = ["macbook-15", "ipad-2", "iphone-x"];

    breakpoints.forEach((bp) => {
      cy.checkResponsive(bp);
      cy.log(`Testing on ${bp}`);
    });
  });
});

