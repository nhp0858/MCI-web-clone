# Trang chủ Học viện MCI (bản luyện tập)

Bản luyện tập của học viên lớp CA04SE10, không phải website chính thức của MCI.

## Triển khai

Trang này là **trang tĩnh**: chỉ có `index.html`, `style.css`, `script.js`. Không cần cài đặt, không cần build, không cần biến môi trường hay khóa bí mật nào. Railway tự nhận ra trang HTML tĩnh (nhờ `index.html` ở thư mục gốc) và tự dựng máy chủ để phục vụ.

> **Lưu ý trước khi làm:** khi bấm *Generate Domain*, trang sẽ có địa chỉ công khai, ai có link cũng xem được. Tệp `noi_dung/trang_chu_MCI.md` ghi "Không đăng công khai dưới tên MCI". Chỉ chia sẻ link trong lớp, và xóa domain hoặc xóa project khi không cần nữa (xem bước 5).

### Bước 1. Đăng nhập Railway
1. Vào https://railway.com và đăng nhập (chọn **Login with GitHub** cho tiện).

### Bước 2. Tạo project từ repo GitHub
1. Trên dashboard, bấm **New Project**.
2. Chọn **Deploy from GitHub repo**.
3. Nếu chưa thấy repo, bấm **Configure GitHub App** và cấp quyền cho Railway đọc repo `MCI-web-clone`.
4. Chọn repo `nhp0858/MCI-web-clone`. Railway bắt đầu tự build và triển khai.

### Bước 3. Kiểm tra nhánh và kết quả build
1. Bấm vào ô dịch vụ (service) vừa tạo → tab **Settings** → mục **Source**: kiểm tra nhánh đang dùng là `trang-chu-luyen-tap` (nhánh chứa code). Nếu khác, đổi sang nhánh này.
2. Mở tab **Deployments**: chờ trạng thái chuyển sang **Success** (thường vài phút).
3. Nếu báo **Failed**, bấm vào bản triển khai đó để xem nhật ký (logs), chụp màn hình phần báo lỗi để nhờ hỗ trợ.

### Bước 4. Tạo đường link để xem trang
1. Vẫn trong service → **Settings** → **Networking** → **Public Networking**.
2. Bấm **Generate Domain**. Railway tạo link dạng `https://<tên>.up.railway.app`.
3. Mở link, kiểm tra:
   - Dải vàng "Bản luyện tập…" hiện trên cùng.
   - Trên điện thoại: nút ☰ mở được menu.
   - Form: bấm **Gửi thông tin** khi nhập đúng thì hiện lời cảm ơn.

### Bước 5. Cập nhật và gỡ trang
- **Cập nhật:** mỗi lần có thay đổi mới được đưa lên nhánh `trang-chu-luyen-tap` trên GitHub, Railway tự triển khai lại.
- **Ẩn trang (giữ project):** Settings → Networking → xóa domain (biểu tượng thùng rác cạnh domain).
- **Gỡ hẳn:** vào project → **Settings** → **Danger** → xóa project.

### Chi phí
Railway tính phí theo tài nguyên sử dụng. Xem gói và hạn mức hiện tại của tài khoản tại trang **Usage/Billing** trên Railway trước khi để trang chạy lâu dài.
