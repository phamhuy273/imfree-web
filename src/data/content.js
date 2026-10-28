import {
  Camera,
  Wrench,
  ShieldCheck,
  Star,
  Target,
  Heart,
  Handshake,
  TrendingUp,
  UserCheck,
  Coins,
  Lock,
  Sparkles,
  Award,
  Search,
  CheckCircle2,
  Scale,
  Package,
} from "lucide-react";

export const brand = {
  name: "ImFree",
  slogan: "Biến nguồn lực nhàn rỗi thành giá trị thực",
  footerText: "Nền tảng kết nối và chia sẻ nguồn lực nhàn rỗi (Tài sản & Kỹ năng) dành riêng cho sinh viên.",
};

export const navLinks = [
  { to: "/", label: "Trang chủ" },
  { to: "/tinh-nang", label: "Tính năng" },
  { to: "/ve-chung-toi", label: "Về chúng tôi" },
];

export const contact = {
  emails: ["contact@imfree.id.vn", "support@imfree.id.vn"],
  socials: [
    { label: "Facebook", href: "https://facebook.com" },
    { label: "GitHub", href: "https://github.com/phamhuy273/imfree-web" },
    { label: "LinkedIn", href: "https://linkedin.com" },
  ],
  phones: ["0987 654 321", "0912 345 678"],
};

// Hàng 4 chip dưới hero trang chủ
export const highlights = [
  { icon: Camera, label: "Cho thuê tài sản" },
  { icon: Wrench, label: "Chia sẻ kỹ năng" },
  { icon: Star, label: "Trust Profile (Đánh giá sao)" },
  { icon: ShieldCheck, label: "Bảo chứng đặt cọc (Deposit)" },
];

// ==========================================
// 1. TRANG CHỦ: HỆ SINH THÁI TÍNH NĂNG (BENTO GRID - TỔNG QUAN CẤP CAO)
// ==========================================
export const modules = [
  {
    icon: Camera,
    title: "Asset Sharing — Cho thuê tài sản",
    text: "Tận dụng máy ảnh, máy chiếu, thiết bị công nghệ nhàn rỗi với cơ chế giữ cọc Deposit và ảnh chụp đối chiếu tình trạng minh bạch.",
  },
  {
    icon: Wrench,
    title: "Skill Sharing — Chia sẻ kỹ năng",
    text: "Cung cấp và tiếp cận các dịch vụ kỹ năng sinh viên như thiết kế đồ họa, quay dựng video, gia sư chuyên ngành và hỗ trợ đồ án.",
  },
  {
    icon: Star,
    title: "Trust Profile — Hồ sơ uy tín bằng sao",
    text: "Hệ thống đánh giá 5 sao và nhận xét thực tế sau mỗi giao dịch, giúp xây dựng hồ sơ uy tín vững chắc trong cộng đồng sinh viên.",
  },
  {
    icon: ShieldCheck,
    title: "Safety & Dispute — Bảo vệ & Xử lý sự cố",
    text: "Xác thực danh tính sinh viên 100%, bảo vệ bằng hợp đồng giao dịch P2P và cơ chế hỗ trợ xử lý khiếu nại dựa trên bằng chứng.",
  },
];

// 4 card "lợi ích" ở Trang chủ
export const benefits = [
  {
    icon: UserCheck,
    title: "An tâm tuyệt đối",
    text: "Xác thực danh tính sinh viên, kiểm tra Trust Profile và đánh giá sao thực tế trước khi quyết định giao dịch.",
  },
  {
    icon: Coins,
    title: "Tạo thêm thu nhập",
    text: "Biến máy móc ít dùng và kỹ năng chuyên môn của bản thân thành nguồn thu nhập chính đáng trong thời gian sinh viên.",
  },
  {
    icon: TrendingUp,
    title: "Tiết kiệm chi phí",
    text: "Tiếp cận các trang thiết bị đắt tiền ngắn hạn mà không cần tốn hàng triệu đồng mua mới.",
  },
  {
    icon: Lock,
    title: "Tích lũy uy tín",
    text: "Hồ sơ Trust Profile được cộng dồn sao sau mỗi lần hoàn tất giao dịch tốt đẹp, tạo dựng danh tiếng lâu dài.",
  },
];

// ==========================================
// 2. TRANG TÍNH NĂNG: ĐI SÂU VÀO CƠ CHẾ VẬN HÀNH & PHÂN HỆ MVP (KHÔNG TRÙNG LẶP)
// ==========================================

// Lưới 4 ô (2x2): Chu trình giao dịch lõi 4 bước
export const coreCycle = [
  {
    icon: Search,
    step: "01",
    title: "Khám phá & Đăng tải (Discovery)",
    text: "Người cho thuê hoặc cung cấp kỹ năng đăng tải thông tin, mức giá và điều kiện. Người có nhu cầu tìm kiếm nhanh theo campus, KTX và thời gian.",
    tag: "Bộ lọc thông minh",
  },
  {
    icon: UserCheck,
    step: "02",
    title: "Xác thực & Lớp tin cậy (Trust & Verification)",
    text: "Xác thực danh tính 100% sinh viên qua email trường. Hai bên kiểm tra Trust Profile, lịch sử giao dịch và đánh giá sao trước khi bắt đầu.",
    tag: "Minh bạch 100%",
  },
  {
    icon: Camera,
    step: "03",
    title: "Bàn giao & Giữ cọc (Handover & Deposit)",
    text: "Ghi nhận hiện trạng tài sản bằng ảnh/video trực tiếp trên app trước khi giao. Kích hoạt cơ chế ký quỹ (Deposit) giữ tiền cọc an toàn.",
    tag: "Bảo chứng tài sản",
  },
  {
    icon: Star,
    step: "04",
    title: "Nghiệm thu & Đánh giá sao (Rating & Review)",
    text: "Xác nhận đối chiếu tình trạng khi hoàn trả tài sản để giải phóng tiền cọc. Hai bên chấm sao cho nhau, bồi đắp uy tín cho các giao dịch sau.",
    tag: "Tích lũy uy tín",
  },
];

// Lưới 3 card lớn: 3 Phân hệ công nghệ cốt lõi của nền tảng MVP
export const mvpModules = [
  {
    icon: Package,
    badge: "Phân hệ 01",
    title: "Hệ Thống Cho Thuê Tài Sản (Asset Sharing)",
    text: "Quản lý danh mục thiết bị, lịch đặt thuê linh hoạt theo ngày/giờ, quản lý tiền đặt cọc (Deposit) và tự động nhắc nhở lịch hẹn trả đồ.",
    featurePoint: "Bàn giao có ảnh đối chiếu",
  },
  {
    icon: Sparkles,
    badge: "Phân hệ 02",
    title: "Thị Trường Dịch Vụ Kỹ Năng (Skill Marketplace)",
    text: "Không gian kết nối dịch vụ chuyên môn giữa sinh viên (design, lập trình, gia sư, quay chụp). Thống nhất phạm vi công việc và giải ngân minh bạch.",
    featurePoint: "Thỏa thuận rõ ràng",
  },
  {
    icon: Scale,
    badge: "Phân hệ 03",
    title: "Trung Tâm An Toàn & Trọng Tài (Trust & Safety)",
    text: "Bộ công cụ bảo vệ người dùng, hỗ trợ giải quyết tranh chấp (Dispute System) công bằng và có căn cứ dựa trên lịch sử ảnh đối chiếu và hợp đồng.",
    featurePoint: "Trọng tài minh bạch",
  },
];

// ==========================================
// 3. TRANG VỀ CHÚNG TÔI
// ==========================================
export const team = [
  { name: "Phạm Viết Quang Huy", major: "Khoa học Máy tính" },
  { name: "Thành viên nhóm 2", major: "Kỹ thuật Phần mềm" },
  { name: "Thành viên nhóm 3", major: "Công nghệ Thông tin" },
  { name: "Thành viên nhóm 4", major: "Hệ thống Thông tin" },
  { name: "Thành viên nhóm 5", major: "An toàn Thông tin" },
];

export const values = [
  {
    icon: Target,
    title: "Nguồn lực nhàn rỗi làm trung tâm",
    text: "Tập trung khai thác 2 nguồn lực lớn của sinh viên: Tài sản cá nhân và Kỹ năng chuyên môn.",
  },
  {
    icon: Star,
    title: "Niềm tin từ Trust Profile",
    text: "Xây dựng môi trường giao dịch an tâm với danh tính xác thực và hệ thống đánh giá bằng sao minh bạch.",
  },
  {
    icon: Handshake,
    title: "Mạng lưới cung - cầu 2 chiều",
    text: "Mỗi sinh viên linh hoạt đóng vai trò người cung cấp hoặc người sử dụng tùy theo từng nhu cầu.",
  },
  {
    icon: Heart,
    title: "Trải nghiệm sinh viên tối ưu",
    text: "Giao diện tinh gọn, thao tác tiện lợi và cơ chế hỗ trợ xử lý tranh chấp công bằng, có căn cứ.",
  },
  {
    icon: Sparkles,
    title: "Đổi mới kinh tế chia sẻ",
    text: "Tiên phong ứng dụng mô hình chia sẻ tài nguyên P2P ngay trong khuôn viên các trường đại học.",
  },
  {
    icon: Award,
    title: "Tối ưu hóa giá trị thực",
    text: "Kéo dài vòng đời thiết bị, giải quyết bài toán kinh tế và hỗ trợ bạn bè cùng phát triển.",
  },
];
