Giải thích về cách làm:
1. Xây dựng cấu trúc dự án:
Làm theo mô hình POM bao gồm các mục chính:

e2e: chứa testcase
fixture: chứa data test
pageObjects: chứa các hàm xử lý element dành riêng cho từng page
support: command: chứa các hàm dùng chung
e2e.js dùng để import commands, xử lý lỗi, setup global hooks
cypress.config.js dùng để cấu hình Cypress (timeout, base URL, retries, viewport...)
.gitignore: setup để git tự động bỏ qua các file nặng như nodemodules, các dữ liệu nhảy cảm mà chúng ta không muốn bị lộ ví dụ như các file tài khoản đăng nhập,…

2. Về Style viết testcase:
Viết theo style elements thay vì dạng contructor truyền thông giúp codebase sạch, dễ đọc và bảo trì. Đặc biệt khi viết theo style elements các IDE như VS Code sẽ hỗ trợ ctrl+click() để điều hướng đến hàm, thuận tiện cho việc xem code

3. Giải thích file TestCase
1. Import các trang (Page Objects)
javascript
import Checkout from "../pageObjects/Checkout";
import LoginPage from "../pageObjects/LoginPage";
import ShoppingPage from "../pageObjects/ShoppingPage";

- Các lớp Checkout, LoginPage, và ShoppingPage được import từ thư mục `pageObjects`.

2. Khởi tạo đối tượng của các trang
javascript
const login = new LoginPage()
const checkout = new Checkout()
const shopping = new ShoppingPage()

- Tạo các instance của các trang để sử dụng trong các test case.

3. Cấu trúc bài kiểm thử
javascript
describe("E-commerce Automation Test", () => {

- `describe` nhóm các bài kiểm thử liên quan đến thương mại điện tử.

3.1 `beforeEach` - Thiết lập trước khi chạy mỗi bài kiểm thử
javascript
beforeEach(() => {
    cy.fixture("userCredentials").as("userData");
    cy.fixture("productData").as("productData");
    cy.restoreCookies();
    cy.visit("https://shopee.vn/");
});

- Tải dữ liệu test từ file fixture: `userCredentials` (chứa thông tin tài khoản) và `productData` (chứa thông tin sản phẩm).
- Khôi phục cookies để duy trì phiên đăng nhập.
- Truy cập trang Shopee.

3.2 Test Case 1: Đăng nhập với thông tin hợp lệ
javascript
it.only("Login with valid credentials", function () {
    cy.login(this.userData.validUser.username, this.userData.validUser.password)
    cy.saveCookies();
});

- Chạy duy nhất test này (`it.only`).
- Gọi hàm `cy.login` để đăng nhập với tài khoản hợp lệ.
- Lưu cookies để duy trì trạng thái đăng nhập.

3.3 Test Case 2: Đăng nhập với thông tin không hợp lệ
javascript
it("Login with invalid credentials", function () {
    cy.login(this.userData.invalidUser.username, this.userData.invalidUser.password)
    login.verifyLoginFailure();
});

- Đăng nhập với thông tin không hợp lệ và kiểm tra lỗi đăng nhập.

3.4 Test Case 3: Tìm kiếm, lọc, và thêm sản phẩm giảm giá vào giỏ hàng
javascript
it("Search, filter, and add discounted product to cart", function () {
    shopping.searchProduct(this.productData.productKeyword);
    shopping.filterDiscountedProducts();
    shopping.selectFirstProduct();
    shopping.verifyProductPrice();
    shopping.verifyDiscountedPrice();
    shopping.addToCart();
    shopping.goToCart();
    shopping.verifyCartTotal();
});

- Tìm kiếm sản phẩm theo từ khóa từ file `productData`.
- Lọc sản phẩm giảm giá, chọn sản phẩm đầu tiên.
- Xác nhận giá và giá giảm giá.
- Thêm vào giỏ hàng, truy cập giỏ hàng và xác minh tổng giá.

3.5 Test Case 4: Thanh toán bằng COD và hủy đơn hàng
javascript
it("Checkout with COD and cancel order", function () {
    shopping.goToCart();
    checkout.proceedToCheckout();
    checkout.selectPaymentMethod(this.productData.paymentMethod);
    checkout.placeOrder();
    checkout.cancelOrder();
    checkout.verifyOrderCancelled();
});

- Truy cập giỏ hàng và tiến hành thanh toán.
- Chọn phương thức thanh toán (COD - Thanh toán khi nhận hàng).
- Đặt hàng và hủy đơn.
- Xác nhận đơn hàng đã bị hủy.

3.6 Test Case 5: Kiểm thử giao diện trên các thiết bị khác nhau
javascript
it("Verify responsive design on different devices", () => {
    const breakpoints = ["macbook-15", "ipad-2", "iphone-x"];
    
    breakpoints.forEach((bp) => {
      cy.checkResponsive(bp);
      cy.log(`Testing on ${bp}`);
    });
});

- Chạy kiểm thử trên nhiều thiết bị (`Macbook-15", "iPad-2", "iPhone-X"`).
- Gọi `cy.checkResponsive(bp);` để kiểm tra giao diện trên từng kích thước màn hình.
- Ghi log để hiển thị thiết bị đang test.






