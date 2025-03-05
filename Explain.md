Giải thích về cách làm:
1. Xây dựng cấu trúc dự án:
Làm theo mô hình POM bao gồm các mục chính:

e2e: chứa testcase
fixture: chứa data test
pageObjects: chứa các hàm xử lý element dành riêng cho từng page
support: command: chứa các hàm dùng chung
e2e.js dùng để import commands, xử lý lỗi, setup global hooks
cypress.config.js dùng để cấu hình Cypress (timeout, base URL, retries, viewport...)
.gitignore: setup để git tự động các file nặng như nodemodules, các dữ liệu nhảy cảm mà chúng ta không muốn bị lộ ví dụ như các file tài khoản đăng nhập,…

2. Về Style viết testcase:
Viết theo style elements thay vì dạng contructor truyền thông giúp codebase sạch, dễ đọc và bảo trì. Đặc biệt khi viết theo style elements các IDE như VS Code sẽ hỗ trợ ctrl+click() để điều hướng đến hàm, thuận tiện cho việc xem code






