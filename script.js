// ===== Menu trên điện thoại: bấm nút ☰ để mở/đóng =====
const toggle = document.querySelector('.menu-toggle');
const menu = document.getElementById('main-menu');

toggle.addEventListener('click', () => {
  const isOpen = menu.classList.toggle('open');
  toggle.setAttribute('aria-expanded', isOpen);
  toggle.setAttribute('aria-label', isOpen ? 'Đóng menu' : 'Mở menu');
});

// Bấm vào một mục menu thì tự đóng menu lại
menu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menu.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Mở menu');
  });
});

// ===== Form Đăng ký tư vấn =====
// Bản luyện tập: KHÔNG lưu, KHÔNG gửi dữ liệu đi đâu. Bấm Gửi chỉ hiện lời cảm ơn.
const form = document.getElementById('consult-form');
const thanks = document.getElementById('thanks');

function showError(input, errorId, message) {
  document.getElementById(errorId).textContent = message;
  input.classList.toggle('invalid', Boolean(message));
}

form.addEventListener('submit', (event) => {
  event.preventDefault(); // chặn việc gửi form đi

  const name = form.elements.name;
  const phone = form.elements.phone;
  const course = form.elements.course;
  let ok = true;

  // Họ tên: không được để trống
  if (name.value.trim() === '') {
    showError(name, 'e-name', 'Vui lòng nhập họ tên.');
    ok = false;
  } else {
    showError(name, 'e-name', '');
  }

  // Số điện thoại Việt Nam: 10 số bắt đầu bằng 0, hoặc +84 và 9 số
  const digits = phone.value.replace(/[\s.-]/g, '');
  if (digits === '') {
    showError(phone, 'e-phone', 'Vui lòng nhập số điện thoại.');
    ok = false;
  } else if (!/^(0\d{9}|\+84\d{9})$/.test(digits)) {
    showError(phone, 'e-phone', 'Số điện thoại chưa đúng (ví dụ: 09xx xxx xxx).');
    ok = false;
  } else {
    showError(phone, 'e-phone', '');
  }

  // Khóa học: phải chọn một khóa
  if (course.value === '') {
    showError(course, 'e-course', 'Vui lòng chọn khóa học quan tâm.');
    ok = false;
  } else {
    showError(course, 'e-course', '');
  }

  if (!ok) return;

  // Hợp lệ: ẩn form, hiện lời cảm ơn, xóa dữ liệu đã nhập
  form.reset();
  form.hidden = true;
  thanks.hidden = false;
  thanks.focus();
});
