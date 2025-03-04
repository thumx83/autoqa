// Import các lệnh tùy chỉnh từ commands.js
import './commands'
import 'cypress-xpath';


// Bỏ qua lỗi JS không mong muốn để tránh test bị fail
Cypress.on('uncaught:exception', (err, runnable) => {
  return false; // Trả về false để bỏ qua lỗi ngoài ý muốn
});

// Chạy trước mỗi test case
beforeEach(() => {
  cy.log('🚀 Bắt đầu test mới...');
});
