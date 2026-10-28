# imfree.id.vn - Website Giới Thiệu Đề Tài Nghiên Cứu

Website giới thiệu đề tài và sản phẩm công nghệ của nhóm, được xây dựng bằng **React (Vite) + Tailwind CSS v4** với kiến trúc thư mục chuẩn modular, tách biệt hoàn toàn giữa dữ liệu (data), giao diện (UI components) và các trang (pages).

---

## 📁 Cấu Trúc Thư Mục Chuẩn (Modular Structure)

```text
d:\DBC WEB\
├── public/                     # Tài nguyên tĩnh công khai (favicon, logo, icons)
├── src/
│   ├── components/             # Các khối giao diện chia nhỏ (Component)
│   │   ├── common/             # UI tái sử dụng (Button, Container, SectionTitle)
│   │   ├── layout/             # Khung sườn website (Navbar, Footer)
│   │   ├── home/               # Các khối trên Trang Chủ (Hero, Features Overview...)
│   │   ├── features/           # Các khối trên Trang Tính Năng (Showcase, FeatureGrid...)
│   │   └── about/              # Các khối trên Trang Về Chúng Tôi (Goals, Team, Values...)
│   │
│   ├── data/                   # 💡 NƠI CHỈNH SỬA NỘI DUNG (Không cần đụng vào code JSX!)
│   │   ├── siteConfig.js       # Tên web, slogan, domain, email, SĐT, social links
│   │   ├── navigation.js       # Các tab trên thanh điều hướng Menu
│   │   ├── featuresData.js     # Danh sách các tính năng, icon, mô tả chi tiết
│   │   ├── teamData.js         # Thông tin thành viên nhóm (Tên, ngành học, vai trò, ảnh)
│   │   └── aboutData.js        # Mục tiêu đề tài, thị trường, giá trị cốt lõi
│   │
│   ├── pages/                  # 3 trang chính theo đúng wireframe
│   │   ├── HomePage.jsx        # Trang chủ
│   │   ├── FeaturesPage.jsx    # Trang Tính năng
│   │   └── AboutPage.jsx       # Trang Về chúng tôi
│   │
│   ├── App.jsx                 # Điều hướng (Routing) và layout tổng
│   ├── main.jsx                # File khởi chạy ứng dụng
│   └── index.css               # Cấu hình Tailwind CSS và font chữ
│
├── dist/                       # Thư mục mã nguồn sau khi build (Dùng để upload lên Hosting)
├── package.json
└── vite.config.js
```

---

## 🚀 Hướng Dẫn Sử Dụng

### 1. Chạy thử trên máy tính (Local Development)
```bash
npm run dev
```
Trình duyệt sẽ mở tại `http://localhost:5173`. Bạn có thể vừa sửa vừa xem trực tiếp kết quả (Hot Reloading).

### 2. Đóng gói dự án (Build Production)
```bash
npm run build
```
Lệnh này sẽ tạo ra thư mục **`dist/`** chứa các file HTML, CSS và JavaScript hoàn chỉnh (chỉ nặng khoảng ~350 KB).

---

## ✍️ Hướng Dẫn Chỉnh Sửa Nội Dung
* Muốn sửa tên đề tài, số điện thoại, email: Mở `src/data/siteConfig.js`.
* Muốn sửa tên bạn bè, thành viên nhóm, ngành học: Mở `src/data/teamData.js`.
* Muốn sửa nội dung các tính năng: Mở `src/data/featuresData.js`.
* Muốn sửa mục tiêu nghiên cứu: Mở `src/data/aboutData.js`.
