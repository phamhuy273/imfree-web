import {
  Package,
  Wrench,
  Users,
  ShieldCheck,
  Target,
  Lightbulb,
  Handshake,
  Heart,
  Sparkles,
  Rocket,
  Layers,
  Repeat,
} from "lucide-react";

export const brand = {
  name: "ImFree",
  slogan: "Giải pháp kết nối và tối ưu hóa tài nguyên",
  footerText: "Nền tảng chia sẻ và quản trị thông minh dành cho sinh viên và cộng đồng trẻ.",
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

// Hàng 4 chip dưới hero
export const highlights = [
  { icon: Sparkles, label: "Tiết kiệm chi phí" },
  { icon: Rocket, label: "Kết nối nhanh chóng" },
  { icon: Layers, label: "Đa dạng tài nguyên" },
  { icon: Repeat, label: "Giao dịch an toàn" },
];

// 4 module chính: dùng cho bento (Trang chủ) và lưới 2×2 (Tính năng)
export const modules = [
  {
    icon: Package,
    title: "Thuê tài sản",
    text: "Dễ dàng tìm kiếm và thuê các thiết bị học tập, công nghệ ngắn hạn với chi phí tối ưu nhất.",
  },
  {
    icon: Wrench,
    title: "Chia sẻ kỹ năng",
    text: "Mạng lưới kết nối các bạn trẻ trao đổi kinh nghiệm, kỹ năng chuyên môn và dự án thực tế.",
  },
  {
    icon: Users,
    title: "Gói đăng ký chung",
    text: "Tối ưu chi phí học tập và nghiên cứu bằng việc chia sẻ các tài khoản dịch vụ bản quyền hợp pháp.",
  },
  {
    icon: ShieldCheck,
    title: "Hệ thống uy tín",
    text: "Cơ chế đánh giá minh bạch, xác thực danh tính sinh viên đảm bảo an tâm tuyệt đối.",
  },
];

// 4 card "lợi ích" ở Trang chủ
export const benefits = [
  {
    icon: Sparkles,
    title: "Tối ưu ngân sách",
    text: "Giảm thiểu chi phí mua sắm thiết bị đắt tiền phục vụ đồ án và học tập.",
  },
  {
    icon: Rocket,
    title: "Tiết kiệm thời gian",
    text: "Tìm kiếm người có cùng nhu cầu chỉ trong vài thao tác đơn giản.",
  },
  {
    icon: ShieldCheck,
    title: "Đảm bảo tin cậy",
    text: "Quy trình xác thực sinh viên chặt chẽ qua email trường học.",
  },
  {
    icon: Users,
    title: "Cộng đồng năng động",
    text: "Xây dựng mạng lưới hỗ trợ học thuật và việc làm bền vững.",
  },
];

// 3 card lớn ở cuối trang Tính năng
export const highlightCards = [
  {
    title: "Bảng điều khiển trực quan",
    text: "Theo dõi mọi giao dịch, lịch đặt hẹn và tiến độ trao đổi ngay trên một màn hình.",
  },
  {
    title: "Tìm kiếm thông minh",
    text: "Bộ lọc nâng cao theo khu vực trường học, mức giá và đánh giá cộng đồng.",
  },
  {
    title: "Bảo chứng giao dịch",
    text: "Hợp đồng điện tử đơn giản hóa cùng quy chế giải quyết tranh chấp công bằng.",
  },
];

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
    title: "Thực tiễn & Hiệu quả",
    text: "Giải quyết đúng bài toán khó khăn về tài chính của sinh viên.",
  },
  {
    icon: Lightbulb,
    title: "Đổi mới sáng tạo",
    text: "Ứng dụng mô hình kinh tế chia sẻ vào môi trường đại học.",
  },
  {
    icon: Handshake,
    title: "Hợp tác & Kết nối",
    text: "Tạo dựng văn hóa sẻ chia cùng phát triển trong cộng đồng.",
  },
  {
    icon: Heart,
    title: "Trải nghiệm thân thiện",
    text: "Giao diện tinh gọn, dễ sử dụng trên cả điện thoại và máy tính.",
  },
  {
    icon: ShieldCheck,
    title: "An toàn & Minh bạch",
    text: "Mọi thông tin thành viên và giao dịch đều được bảo vệ.",
  },
  {
    icon: Rocket,
    title: "Phát triển bền vững",
    text: "Tối ưu hóa vòng đời thiết bị, giảm phát thải rác điện tử.",
  },
];
