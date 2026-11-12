# Quy tắc dự án: Trang chủ Học viện MCI (bản luyện tập)

Bài luyện tập của học viên lớp CA04SE10. **Không phải website chính thức của MCI.** Không đăng công khai dưới tên MCI.
Chủ dự án không biết lập trình: mọi giải thích viết bằng tiếng Việt, ngắn gọn, dễ hiểu. Lập kế hoạch và chờ chủ dự án đồng ý trước khi làm thay đổi lớn.

## Nguồn nội dung
- Nguồn duy nhất: `noi_dung/trang_chu_MCI.md`. Số liệu, câu chữ chép **đúng nguyên văn**, không thêm, bớt hay "làm đẹp".
- Các khối trên trang phải **đủ và đúng thứ tự** như trong tệp nội dung.
- Không bịa tên người, tên doanh nghiệp, lời học viên, số điện thoại, email.

## Bắt buộc trên trang
- Dải đầu trang: "Bản luyện tập của học viên lớp CA04SE10, không phải website chính thức của MCI".
- Không dùng logo, ảnh của MCI. Thay bằng khối màu và biểu tượng SVG tự vẽ.
- Giảng viên, Bản tin, Hình ảnh/video, Cảm nhận học viên, Đối tác: để giữ chỗ trong ngoặc vuông, ví dụ `[Tên giảng viên]`, `[Tiêu đề bài viết]`, `[Cảm nhận học viên]`.
- Hotline, Email: giữ chỗ như trong tệp nội dung, không ghi số/email thật.

## Form Đăng ký tư vấn
- Gồm: Họ tên, Số điện thoại, Khóa học quan tâm; nút "Gửi thông tin".
- **Không lưu, không gửi dữ liệu đi đâu.** Bấm Gửi chỉ hiện lời cảm ơn.

## Kỹ thuật
- `index.html` ở thư mục gốc. Chỉ HTML, CSS, JavaScript thuần (`style.css`, `script.js`).
- Không tải thư viện, phông chữ, ảnh hay bất cứ thứ gì từ mạng.
- Phải xem tốt trên điện thoại (kiểm tra ở khổ ~375px, không có thanh cuộn ngang).

## Bảo mật
- Không bao giờ đưa tệp `.env`, khóa bí mật, mật khẩu, token lên GitHub. `.gitignore` đã chặn sẵn; không gỡ các dòng đó.
