# README - Hướng Dẫn Cài Đặt và Chạy Test Script với Cypress

## Giới Thiệu
Dự án này sử dụng **Cypress** để tự động hóa kiểm thử. Hướng dẫn này giúp bạn cài đặt và chạy test một cách dễ dàng.

## 1. Yêu Cầu Hệ Thống
Trước khi bắt đầu, hãy đảm bảo bạn đã cài đặt:
- **Node.js** (khuyến nghị phiên bản LTS) - tải tại [nodejs.org](https://nodejs.org/)
- **Git** - tải tại [git-scm.com](https://git-scm.com/)

## 2. Clone Repository
Tải mã nguồn của dự án về máy bằng cách chạy lệnh:
```sh
git clone <URL_REPO_GITHUB>
cd <TÊN_DỰ_ÁN>
```

## 3. Cài Đặt Dependencies
Cài đặt các package cần thiết bằng lệnh:
```sh
npm install
```

## 4. Chạy Test với Cypress
Có thể chạy test bằng giao diện hoặc CLI:

### 4.1 Chạy bằng Cypress Test Runner
```sh
npx cypress open
```
Sau đó chọn file test cần chạy.

### 4.2 Chạy test trên Terminal (Headless mode)
```sh
npx cypress run
```

## 5. Xem Kết Quả Test
- Nếu chạy trên UI, kết quả hiển thị trực tiếp trên Cypress Test Runner.
- Nếu chạy bằng terminal, kết quả sẽ hiển thị trên console hoặc lưu vào thư mục `cypress/reports` (nếu có cấu hình).

## 6. Troubleshooting (Xử Lý Lỗi)
Nếu gặp lỗi khi chạy test, thử các bước sau:
- Kiểm tra log trên terminal để xem chi tiết lỗi.
- Đảm bảo đã cài đặt đúng Node.js và dependencies.
- Xóa thư mục `node_modules` và file `package-lock.json`, sau đó chạy lại:
  ```sh
  rm -rf node_modules package-lock.json
  npm install
  ```
- Kiểm tra và cập nhật Cypress nếu cần:
  ```sh
  npx cypress cache clear
  npm install cypress@latest
  ```

## 7. Đóng Góp & Hỗ Trợ
Nếu bạn gặp vấn đề hoặc có đề xuất, vui lòng tạo issue trên GitHub hoặc liên hệ với nhóm phát triển.

## 🔹 **Lưu ý**
Tôi đã cài thư viện XPath vào dự án, nhưng nếu gặp lỗi XPath, hãy cài thư viện XPath bằng lệnh:
```sh
npm install cypress-xpath
```

---
✨ **Happy Testing! 🚀**

