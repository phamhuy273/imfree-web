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

// Hàng 4 chip dưới hero
export const highlights = [
  { icon: Camera, label: "Cho thuê tài sản" },
  { icon: Wrench, label: "Chia sẻ kỹ năng" },
  { icon: Star, label: "Trust Profile (Đánh giá sao)" },
  { icon: ShieldCheck, label: "Bảo chứng đặt cọc (Deposit)" },
];

// 4 module chính: dùng cho bento (Trang chủ) và lưới 2×2 (Tính năng)
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

// 3 card lớn ở cuối trang Tính năng
export const highlightCards = [
  {
    title: "Discovery — Khám phá Tài sản & Kỹ năng",
    text: "Dễ dàng tìm kiếm máy ảnh, thiết bị hoặc người có kỹ năng phù hợp ngay tại khuôn viên trường và ký túc xá.",
  },
  {
    title: "Trust Profile — Minh bạch qua từng lượt sao",
    text: "Hồ sơ xác thực sinh viên kèm số sao đánh giá và lịch sử giao dịch rõ ràng, không lo rủi ro khi giao dịch.",
  },
  {
    title: "Deposit & Escrow — Bảo chứng giao dịch",
    text: "Cơ chế giữ cọc an toàn, chỉ giải phóng khi hai bên đã đối chiếu hoàn tất tình trạng tài sản hoặc dịch vụ.",
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
