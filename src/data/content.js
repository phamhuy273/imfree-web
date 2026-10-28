import {
  Camera,
  Wrench,
  Clock,
  ShieldCheck,
  Target,
  Lightbulb,
  Handshake,
  Heart,
  TrendingUp,
  UserCheck,
  Coins,
  Lock,
} from "lucide-react";

export const brand = {
  name: "ImFree",
  slogan: "Biến nguồn lực nhàn rỗi thành giá trị thực",
  footerText: "Nền tảng kết nối và chia sẻ nguồn lực nhàn rỗi (Tài sản, Kỹ năng, Thời gian) dành riêng cho sinh viên.",
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
  { icon: Clock, label: "Thời gian nhàn rỗi" },
  { icon: ShieldCheck, label: "Điểm uy tín Trust Score" },
];

// 4 module chính: dùng cho bento (Trang chủ) và lưới 2×2 (Tính năng)
export const modules = [
  {
    icon: Camera,
    title: "Asset Sharing — Cho thuê tài sản",
    text: "Tận dụng máy ảnh, máy chiếu, thiết bị công nghệ nhàn rỗi với cơ chế giữ cọc Deposit và ảnh chụp đối chiếu tình trạng.",
  },
  {
    icon: Wrench,
    title: "Skill Sharing — Chia sẻ kỹ năng",
    text: "Cung cấp dịch vụ dựa trên kỹ năng cá nhân như thiết kế, quay chụp, gia sư học tập và hỗ trợ đồ án thực tế.",
  },
  {
    icon: Clock,
    title: "Time Sharing — Thời gian nhàn rỗi",
    text: "Chuyển hóa 2–4 giờ thời gian rảnh rỗi mỗi ngày thành giá trị thiết thực và thu nhập chính đáng cho bản thân.",
  },
  {
    icon: ShieldCheck,
    title: "Trust System — Hệ thống uy tín",
    text: "Nền tảng xác thực sinh viên, chấm điểm Trust Score và hỗ trợ xử lý khiếu nại minh bạch dựa trên bằng chứng.",
  },
];

// 4 card "lợi ích" ở Trang chủ
export const benefits = [
  {
    icon: UserCheck,
    title: "An tâm tuyệt đối",
    text: "Xác thực danh tính sinh viên 100%, bảo vệ giao dịch bằng cơ chế giữ cọc và kiểm tra tình trạng tài sản.",
  },
  {
    icon: Coins,
    title: "Tạo thêm thu nhập",
    text: "Biến đồ dùng đắp chiếu và kỹ năng cá nhân thành nguồn tài chính thiết thực phục vụ đời sống sinh viên.",
  },
  {
    icon: TrendingUp,
    title: "Tiết kiệm chi phí",
    text: "Dễ dàng tiếp cận các thiết bị công nghệ đắt tiền ngắn hạn mà không cần tốn hàng triệu đồng mua mới.",
  },
  {
    icon: Lock,
    title: "Tích lũy uy tín",
    text: "Uy tín được cộng dồn qua từng giao dịch thành công (Trust Score), không còn nỗi lo giao dịch với người lạ.",
  },
];

// 3 card lớn ở cuối trang Tính năng
export const highlightCards = [
  {
    title: "Discovery — Khám phá nguồn lực",
    text: "Dễ dàng tìm kiếm máy ảnh, thiết bị hoặc người có kỹ năng phù hợp ngay tại khuôn viên trường và ký túc xá.",
  },
  {
    title: "Trust & Safety — Lớp bảo vệ an toàn",
    text: "Hồ sơ xác thực sinh viên, hiển thị điểm uy tín và lịch sử đánh giá minh bạch trước khi quyết định giao dịch.",
  },
  {
    title: "Deposit & Escrow — Bảo chứng giao dịch",
    text: "Cơ chế giữ cọc và thanh toán tạm giữ, chỉ giải phóng khi hai bên đã đối chiếu hoàn tất và hài lòng.",
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
    text: "Bắt đầu từ câu hỏi: 'Sinh viên đang có gì chưa dùng hết?' để biến thành giá trị thực.",
  },
  {
    icon: ShieldCheck,
    title: "Niềm tin từ cộng đồng",
    text: "Xây dựng môi trường giao dịch an tâm dành riêng cho sinh viên với danh tính đã xác minh.",
  },
  {
    icon: Handshake,
    title: "Mạng lưới cung - cầu 2 chiều",
    text: "Mỗi sinh viên linh hoạt đóng vai trò người cung cấp hoặc người sử dụng tùy theo từng giao dịch.",
  },
  {
    icon: Heart,
    title: "Trải nghiệm sinh viên tối ưu",
    text: "Giao diện tinh gọn, thao tác nhanh chóng và hỗ trợ giải quyết tranh chấp có căn cứ.",
  },
  {
    icon: Lightbulb,
    title: "Đổi mới mô hình P2P Campus",
    text: "Tiên phong áp dụng mô hình kinh tế chia sẻ trong khuôn viên trường đại học và ký túc xá.",
  },
  {
    icon: TrendingUp,
    title: "Tối ưu hóa giá trị tài sản",
    text: "Kéo dài vòng đời thiết bị, giảm lãng phí tài nguyên và hỗ trợ tài chính cho sinh viên.",
  },
];
