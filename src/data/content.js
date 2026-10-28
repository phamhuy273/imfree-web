import {
  Camera,
  Wrench,
  ShieldCheck,
  Star,
  Target,
  Heart,
  TrendingUp,
  UserCheck,
  Coins,
  Lock,
  Search,
  CheckCircle2,
  Scale,
  Package,
  Layers,
  FileCheck,
  Clock,
  Users,
  Compass,
  Zap,
} from "lucide-react";

export const brand = {
  name: "ImFree",
  tagline: "Nền tảng kết nối và chia sẻ nguồn lực nhàn rỗi dành cho sinh viên",
  subTagline: "Dự án AISC2026 • Đội ngũ phát triển ImFree",
  footerText: "ImFree — Nền tảng kết nối và chia sẻ nguồn lực nhàn rỗi dành cho sinh viên (Dự án tham gia AISC2026). Bắt đầu từ việc giúp sinh viên chia sẻ tài sản nhàn rỗi một cách thuận tiện và đáng tin cậy.",
};

export const navLinks = [
  { to: "/", label: "Trang chủ" },
  { to: "/tinh-nang", label: "Tính năng" },
  { to: "/ve-chung-toi", label: "Về chúng tôi" },
];

export const contact = {
  emails: ["contact@imfree.id.vn", "imfree.aisc2026@gmail.com"],
  socials: [
    { label: "Facebook Page", href: "https://facebook.com" },
    { label: "GitHub Repository", href: "https://github.com/phamhuy273/imfree-web" },
    { label: "Cộng đồng UIT", href: "https://uit.edu.vn" },
  ],
  phones: ["0987 654 321", "0912 345 678"],
};

// =========================================================================
// 1. TRANG CHỦ: HÀNG 4 TỪ KHÓA CỐT LÕI (SLIDE 1 - AISC2026)
// =========================================================================
export const highlights = [
  { icon: Layers, label: "Kết nối" },
  { icon: Camera, label: "Chia sẻ" },
  { icon: ShieldCheck, label: "Tin cậy" },
  { icon: Users, label: "Cộng đồng" },
];

// =========================================================================
// TRANG CHỦ: BENTO GRID - HỆ SINH THÁI GIẢI PHÁP (SLIDE 5 & 27)
// =========================================================================
export const modules = [
  {
    icon: Camera,
    title: "Asset Sharing — Trọng tâm phiên bản MVP",
    text: "Tập trung giải quyết bài toán cho thuê tài sản nhàn rỗi (máy ảnh, camera, thiết bị âm thanh, máy chiếu...) nhằm kiểm chứng mô hình ban đầu tại trường đại học.",
  },
  {
    icon: ShieldCheck,
    title: "Quy trình giao dịch có kiểm soát rủi ro",
    text: "Kiểm soát xuyên suốt: Trước giao dịch (xác minh & thỏa thuận) → Trong giao dịch (ghi nhận bằng chứng) → Sau giao dịch (đối chiếu tình trạng) → Khi có tranh chấp (hỗ trợ xử lý).",
  },
  {
    icon: Star,
    title: "Xây dựng niềm tin trong cộng đồng sinh viên",
    text: "Chu trình uy tín khép kín: Giao dịch → Hoàn tất & Đánh giá 5 sao → Lịch sử giao dịch → Trust Profile → Tạo độ tin cậy vững chắc cho các giao dịch tiếp theo.",
  },
  {
    icon: Clock,
    title: "Skill & Time Sharing — Định hướng mở rộng sau",
    text: "Sau khi Pilot thành công tại UIT, hệ thống sẽ mở rộng khai thác thêm 2 nguồn lực nhàn rỗi: Dịch vụ kỹ năng chuyên môn và 2–4 giờ thời gian rảnh mỗi ngày của sinh viên.",
  },
];

// =========================================================================
// TRANG CHỦ: SỐ LIỆU KHẢO SÁT 105 SINH VIÊN UIT (SLIDE 3)
// =========================================================================
export const benefits = [
  {
    icon: UserCheck,
    title: "58,1% Sinh viên có nhu cầu",
    text: "Từng phát sinh nhu cầu thuê hoặc mượn tài sản thiết bị phục vụ học tập, đồ án và hoạt động ngoại khóa.",
  },
  {
    icon: Coins,
    title: "49,5% Sẵn sàng cho thuê",
    text: "Sẵn sàng chia sẻ tài sản nhàn rỗi của bản thân để tạo thêm thu nhập chính đáng trong thời gian học tập.",
  },
  {
    icon: Lock,
    title: "90,5% Phân vân về niềm tin",
    text: "E ngại hoặc không an tâm khi giao dịch với người lạ, đặt ra nhu cầu cấp thiết về một môi trường xác thực sinh viên.",
  },
  {
    icon: ShieldCheck,
    title: "72,4% Rào cản lớn nhất",
    text: "Rào cản lớn nhất là không biết đối tác có đáng tin cậy hay không — ImFree giải quyết bằng Trust Profile và kiểm soát rủi ro.",
  },
];

// =========================================================================
// 2. TRANG TÍNH NĂNG: LUỒNG GIAO DỊCH 3 GIAI ĐOẠN CHÍNH (SLIDE 7-20)
// =========================================================================

// Lưới 4 ô (2x2): Giai đoạn 1 Discover & Trust (Slide 8-11)
export const discoverSteps = [
  {
    icon: Search,
    step: "01",
    title: "1. Search & Filter — Tìm kiếm tài sản",
    text: "Nhập từ khóa 'camera', lọc theo mức giá, thời gian thuê và tiêu chí phù hợp. Hệ thống hiển thị danh sách tài sản đang được đăng cho thuê thay vì tìm kiếm rời rạc qua người quen.",
    tag: "Tiếp cận nguồn cung phù hợp",
  },
  {
    icon: Layers,
    step: "02",
    title: "2. Asset Detail — Xem chi tiết tài sản",
    text: "Chọn tài sản để xem hình ảnh, mô tả, tình trạng, giá thuê, thời gian khả dụng và các điều kiện thuê do Provider cung cấp trước khi quyết định gửi yêu cầu.",
    tag: "Đầy đủ thông tin đánh giá",
  },
  {
    icon: Star,
    step: "03",
    title: "3. Provider's Trust Profile — Đánh giá độ tin cậy",
    text: "Xem hồ sơ Provider: trạng thái xác minh sinh viên UIT, đánh giá số sao, lịch sử giao dịch hoàn tất nhằm giảm bất cân xứng thông tin trước khi bàn giao hoặc đặt cọc.",
    tag: "Giảm bất cân xứng thông tin",
  },
  {
    icon: FileCheck,
    step: "04",
    title: "4. Booking Request — Gửi yêu cầu thuê",
    text: "Chọn thời gian thuê, gửi lời nhắn và đề xuất các thông tin cần xác nhận. Yêu cầu chuyển đến Provider để chuyển nhu cầu tìm kiếm thành yêu cầu giao dịch cụ thể.",
    tag: "Chuyển thành giao dịch cụ thể",
  },
];

// Lưới 3 card lớn: 3 Giai đoạn cốt lõi theo quy trình Slide 7
export const transactionStages = [
  {
    icon: Search,
    stageNum: "Giai đoạn 01",
    title: "Discover & Trust (Khám phá & Tin cậy)",
    text: "Giúp người dùng tìm kiếm tài sản nhàn rỗi phù hợp và đánh giá độ tin cậy của đối tác thông qua bộ lọc thông minh và hồ sơ Trust Profile sinh viên.",
    featurePoint: "Kết nối cung - cầu minh bạch",
  },
  {
    icon: ShieldCheck,
    stageNum: "Giai đoạn 02",
    title: "Secure Exchange (Giao dịch an toàn)",
    text: "Quản lý xuyên suốt: Xác nhận thỏa thuận (Agreement) → Tình trạng ban đầu (Before Verification) → Sử dụng & Grace Period → Đối chiếu khi hoàn trả (After Verification) → Kiểm tra hoàn tất.",
    featurePoint: "Ghi nhận mốc trước & sau khi dùng",
  },
  {
    icon: Scale,
    stageNum: "Giai đoạn 03",
    title: "Protection & Resolution (Bảo vệ & Xử lý)",
    text: "Tiếp nhận và hỗ trợ xử lý các sự cố, tranh chấp phát sinh (Open Dispute → Evidence Review → Negotiation & Mediation → Resolution & Settlement) có căn cứ bằng chứng rõ ràng.",
    featurePoint: "Bảo vệ giao dịch bằng bằng chứng",
  },
];

// =========================================================================
// 3. TRANG VỀ CHÚNG TÔI: TÍNH KHẢ THI, COLD-START & KẾT LUẬN (SLIDE 21-29)
// =========================================================================

// Động cơ thanh khoản xử lý Cold-start của P2P (Slide 25)
export const liquidityEngineSteps = [
  {
    step: "01",
    code: "CHOOSE MICRO-MARKET",
    title: "Khoanh vùng tại UIT",
    desc: "Tập trung trước mắt vào các câu lạc bộ, đội thi học thuật và ban tổ chức sự kiện sinh viên tại trường.",
  },
  {
    step: "02",
    code: "DEMAND MAP FIRST",
    title: "Gom nhu cầu thực tế trước",
    desc: "Xác định các thiết bị có nhu cầu thuê thực tế cao (máy ảnh, camera, âm thanh) thay vì kêu gọi đăng đồ đại trà.",
  },
  {
    step: "03",
    code: "SEED MATCHING SUPPLY",
    title: "Chủ động tuyển Provider",
    desc: "Khi có nhu cầu cụ thể mới chủ động tìm kiếm các bạn sinh viên đang có tài sản nhàn rỗi phù hợp.",
  },
  {
    step: "04",
    code: "CONCIERGE MATCHING",
    title: "Ghép nối & hỗ trợ trực tiếp",
    desc: "Nhóm sáng lập trực tiếp mai mối, hướng dẫn bàn giao, kiểm tra tình trạng ban đầu để đảm bảo giao dịch an toàn.",
  },
  {
    step: "05",
    code: "EXPAND ONLY WHEN LIQUID",
    title: "Mở rộng khi cụm đã trơn tru",
    desc: "Chỉ mở rộng sang các trường thuộc ĐHQG-HCM và KTX khi cụm giao dịch tại UIT vận hành ổn định và có khách quay lại.",
  },
];

// Đội ngũ sáng lập: Đội ngũ 5 thành viên UIT (Slide 28)
export const team = [
  { name: "Phạm Viết Quang Huy", major: "Khoa học Máy tính - UIT", role: "Đồng sáng lập / Trưởng nhóm" },
  { name: "Thành viên nhóm 2", major: "Kỹ thuật Phần mềm - UIT", role: "Frontend & Mobile Developer" },
  { name: "Thành viên nhóm 3", major: "Công nghệ Thông tin - UIT", role: "UI/UX Designer" },
  { name: "Thành viên nhóm 4", major: "Hệ thống Thông tin - UIT", role: "Backend & Data Architect" },
  { name: "Thành viên nhóm 5", major: "An toàn Thông tin - UIT", role: "Trust & Safety Specialist" },
];

// Giá trị cốt lõi & Tính khả thi (Slide 1, 27, 28)
export const values = [
  {
    icon: Layers,
    title: "Kết nối (Connection)",
    text: "Kết nối sinh viên sở hữu tài sản nhàn rỗi với sinh viên đang có nhu cầu sử dụng thực tế trong khuôn viên trường.",
  },
  {
    icon: Camera,
    title: "Chia sẻ (Sharing)",
    text: "Khởi đầu từ việc giúp sinh viên chia sẻ những tài sản đang nhàn rỗi một cách thuận tiện và tối ưu chi phí.",
  },
  {
    icon: ShieldCheck,
    title: "Tin cậy (Trust-first)",
    text: "Lấy xác thực sinh viên, hồ sơ Trust Profile và cơ chế bảo chứng đặt cọc làm nền tảng an toàn cho mọi giao dịch.",
  },
  {
    icon: Users,
    title: "Cộng đồng (Community)",
    text: "Xây dựng môi trường giao dịch văn minh, uy tín được tích lũy qua chính lịch sử giao dịch thực tế của sinh viên.",
  },
  {
    icon: Target,
    title: "Khả thi về Công nghệ",
    text: "MVP tập trung vào Asset Sharing tại UIT, phát triển phiên bản phục vụ Pilot có kiểm soát trước khi mở rộng.",
  },
  {
    icon: Zap,
    title: "Khả thi về Vận hành",
    text: "Áp dụng Concierge Matching hỗ trợ thủ công ban đầu, theo dõi → phản hồi → điều chỉnh → ổn định.",
  },
];
