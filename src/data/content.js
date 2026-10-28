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
  Layers,
  FileCheck,
  Clock,
  AlertTriangle,
  Users,
} from "lucide-react";

export const brand = {
  name: "ImFree",
  tagline: "Nền tảng kết nối và chia sẻ nguồn lực nhàn rỗi dành cho sinh viên",
  subTagline: "Dự án tham gia AISC2026 • Phát triển bởi Rimberio",
  footerText: "ImFree — Nền tảng kết nối và chia sẻ nguồn lực nhàn rỗi dành cho sinh viên. Dự án tham gia AISC2026 phát triển bởi nhóm Rimberio.",
};

export const navLinks = [
  { to: "/", label: "Trang chủ" },
  { to: "/tinh-nang", label: "Tính năng" },
  { to: "/ve-chung-toi", label: "Về chúng tôi" },
];

export const contact = {
  emails: ["contact@imfree.id.vn", "rimberio.aisc2026@gmail.com"],
  socials: [
    { label: "Facebook Page", href: "https://facebook.com" },
    { label: "GitHub Repository", href: "https://github.com/phamhuy273/imfree-web" },
    { label: "Cộng đồng UIT", href: "https://uit.edu.vn" },
  ],
  phones: ["0987 654 321", "0912 345 678"],
};

// =========================================================================
// 1. TRANG CHỦ: HÀNG 4 TỪ KHÓA CỐT LÕI (SLIDE 1 CỦA ĐỀ TÀI AISC2026)
// =========================================================================
export const highlights = [
  { icon: Layers, label: "Kết nối cung - cầu" },
  { icon: Camera, label: "Chia sẻ tài sản" },
  { icon: ShieldCheck, label: "Tin cậy & Xác thực" },
  { icon: Users, label: "Cộng đồng sinh viên" },
];

// =========================================================================
// TRANG CHỦ: HỆ SINH THÁI TÍNH NĂNG (BENTO GRID - TỔNG QUAN GIẢI PHÁP SLIDE 5 & 27)
// =========================================================================
export const modules = [
  {
    icon: Camera,
    title: "Asset Sharing — Trọng tâm phiên bản MVP",
    text: "Mô hình cho thuê tài sản nhàn rỗi (máy ảnh, camera, thiết bị âm thanh, máy chiếu...) giúp sinh viên giải quyết nhu cầu ngắn hạn mà không cần bỏ tiền triệu mua mới.",
  },
  {
    icon: FileCheck,
    title: "Secure Exchange — Kiểm soát rủi ro toàn diện",
    text: "Quy trình ghi nhận minh bạch ở từng mốc: Before Verification (chụp ảnh hiện trạng trước khi dùng) và After Verification (đối chiếu khi hoàn trả) kèm giữ cọc Deposit.",
  },
  {
    icon: Star,
    title: "Trust Profile — Vòng lặp xây dựng niềm tin",
    text: "Cơ chế tích lũy uy tín qua từng giao dịch: Giao dịch thành công → Đánh giá 5 sao thực tế → Lưu vết lịch sử → Trust Profile minh bạch cho các giao dịch tiếp theo.",
  },
  {
    icon: Wrench,
    title: "Skill & Time Sharing — Định hướng mở rộng",
    text: "Sau khi hoàn thiện Pilot tài sản, hệ thống mở rộng khai thác thêm 2 nguồn lực nhàn rỗi: Kỹ năng chuyên môn và 2–4 giờ thời gian rảnh mỗi ngày của sinh viên.",
  },
];

// =========================================================================
// TRANG CHỦ: VÌ SAO NÊN CHỌN IMFREE (DỰA TRÊN SỐ LIỆU KHẢO SÁT 105 SV UIT - SLIDE 3)
// =========================================================================
export const benefits = [
  {
    icon: UserCheck,
    title: "58,1% Sinh viên có nhu cầu",
    text: "Hơn một nửa sinh viên từng có nhu cầu thuê/mượn tài sản công nghệ ngắn hạn nhưng chỉ tìm kiếm rời rạc qua bạn bè, người quen.",
  },
  {
    icon: Coins,
    title: "49,5% Sẵn sàng cho thuê",
    text: "Nguồn cung dồi dào từ các bạn sinh viên sở hữu đồ dùng ít dùng, mong muốn tạo ra thêm dòng tiền thu nhập chính đáng cho bản thân.",
  },
  {
    icon: Lock,
    title: "Xóa tan 90,5% e ngại",
    text: "Giải quyết triệt để nỗi lo lớn nhất khi giao dịch với người lạ nhờ lớp xác thực sinh viên qua email trường và bằng chứng đối chiếu.",
  },
  {
    icon: ShieldCheck,
    title: "Bảo chứng đặt cọc (Deposit)",
    text: "Cơ chế ký quỹ tự động và quy trình giải quyết tranh chấp (Dispute) bảo vệ quyền lợi trọn vẹn cho cả Provider lẫn Seeker.",
  },
];

// =========================================================================
// 2. TRANG TÍNH NĂNG: TRANSACTION FLOW 3 GIAI ĐOẠN CHÍNH (SLIDE 7-20, 41-43)
// =========================================================================

// Lưới 4 ô (2x2): Giai đoạn 1 Discover & Trust (Slide 8-11, 43)
export const discoverSteps = [
  {
    icon: Search,
    step: "01",
    title: "Search & Filter — Tìm kiếm tài sản",
    text: "Nhập từ khóa thiết bị (ví dụ 'camera'), lọc nhanh theo mức giá, thời gian thuê và vị trí khuôn viên trường/KTX để tiếp cận đúng nguồn cung mong muốn.",
    tag: "Tiếp cận nguồn cung phù hợp",
  },
  {
    icon: Layers,
    step: "02",
    title: "Asset Detail — Xem chi tiết tài sản",
    text: "Xem đầy đủ hình ảnh thực tế, mô tả thông số kỹ thuật, tình trạng phụ kiện đi kèm, giá thuê theo ngày và các điều kiện nhận trả do Provider quy định.",
    tag: "Đầy đủ thông tin đối chiếu",
  },
  {
    icon: Star,
    step: "03",
    title: "Provider's Trust Profile — Kiểm tra uy tín",
    text: "Xem hồ sơ Provider: trạng thái xác minh sinh viên UIT, số sao đánh giá trung bình và lịch sử các đơn hàng đã hoàn tất trước khi quyết định đặt cọc.",
    tag: "Giảm bất cân xứng thông tin",
  },
  {
    icon: FileCheck,
    step: "04",
    title: "Booking Request — Gửi yêu cầu thuê",
    text: "Chọn khoảng thời gian thuê, số lượng ngày, gửi lời nhắn cụ thể và đề xuất thỏa thuận. Yêu cầu được gửi trực tiếp đến Provider trước khi thanh toán.",
    tag: "Chuyển thành yêu cầu cụ thể",
  },
];

// Lưới 3 card lớn: 3 Giai đoạn cốt lõi của quy trình giao dịch (Slide 7, 41-43)
export const transactionStages = [
  {
    icon: Search,
    stageNum: "Giai đoạn 01",
    title: "Discover & Trust (Khám phá & Tin cậy)",
    text: "Giúp người dùng tìm kiếm tài sản cần thuê và đánh giá độ tin cậy của đối tác thông qua bộ lọc thông minh và hồ sơ Trust Profile minh bạch.",
    featurePoint: "Tìm kiếm & Đánh giá đối tác",
  },
  {
    icon: ShieldCheck,
    stageNum: "Giai đoạn 02",
    title: "Secure Exchange (Giao dịch an toàn)",
    text: "Quản lý xuyên suốt quá trình xác nhận, thanh toán phí thuê, giữ cọc Deposit, ghi nhận ảnh trước khi dùng (Before Verification) và đối chiếu khi trả (After Verification).",
    featurePoint: "Đối chiếu ảnh 2 chiều & Giữ cọc",
  },
  {
    icon: Scale,
    stageNum: "Giai đoạn 03",
    title: "Protection & Resolution (Bảo vệ & Trọng tài)",
    text: "Hệ thống hỗ trợ tiếp nhận và giải quyết sự cố, tranh chấp phát sinh một cách có căn cứ dựa trên lịch sử đối chiếu ảnh/video và chính sách của ImFree.",
    featurePoint: "Xử lý tranh chấp minh bạch",
  },
];

// =========================================================================
// 3. TRANG VỀ CHÚNG TÔI: KHẢO SÁT, TÍNH KHẢ THI & CHIẾN LƯỢC TIẾP CẬN (SLIDE 3, 25, 28)
// =========================================================================
export const surveyStats = [
  { value: "58.1%", label: "Sinh viên từng phát sinh nhu cầu thuê/mượn tài sản" },
  { value: "50.5%", label: "Từng tìm kiếm hoặc sử dụng kỹ năng của sinh viên khác" },
  { value: "49.5%", label: "Sẵn sàng cho thuê tài sản nhàn rỗi để có thêm thu nhập" },
  { value: "72.4%", label: "Lo lắng lớn nhất: Không biết người giao dịch có tin cậy không" },
];

export const coldStartSteps = [
  { step: "01", title: "Khoanh vùng Micro-market", desc: "Tập trung trước mắt tại cộng đồng UIT, các CLB, đội thi và ban tổ chức sự kiện sinh viên." },
  { step: "02", title: "Gom nhu cầu thực tế (Demand-first)", desc: "Xác định các thiết bị có nhu cầu thuê cao (máy ảnh, camera, âm thanh) trước khi kêu gọi đăng đồ đại trà." },
  { step: "03", title: "Tuyển chọn Provider phù hợp", desc: "Chủ động kết nối các sinh viên có thiết bị nhàn rỗi tương ứng với nhu cầu đã gom." },
  { step: "04", title: "Concierge Matching (Hỗ trợ trực tiếp)", desc: "Nhóm sáng lập trực tiếp hướng dẫn bàn giao, kiểm tra tình trạng và bảo đảm giao dịch an toàn ban đầu." },
  { step: "05", title: "Mở rộng khi có thanh khoản", desc: "Chỉ mở rộng sang các trường thuộc ĐHQG-HCM và KTX khi cụm giao dịch tại UIT vận hành trơn tru." },
];

export const team = [
  { name: "Phạm Viết Quang Huy", major: "Khoa học Máy tính - UIT", role: "Đồng sáng lập / Trưởng nhóm" },
  { name: "Hoàng Nam", major: "Kỹ thuật Phần mềm - UIT", role: "Frontend & Mobile Developer" },
  { name: "Phương Linh", major: "Thiết kế Đồ họa / UI-UX", role: "Product Designer" },
  { name: "Thành viên nhóm 4", major: "Hệ thống Thông tin - UIT", role: "Backend & Data Architect" },
  { name: "Thành viên nhóm 5", major: "An toàn Thông tin - UIT", role: "Trust & Safety Specialist" },
];

export const values = [
  {
    icon: Layers,
    title: "Kết nối (Connection)",
    text: "Kết nối nguồn cung đang 'đắp chiếu' với những nhu cầu sử dụng thực tế chưa được đáp ứng trong trường.",
  },
  {
    icon: Camera,
    title: "Chia sẻ (Sharing)",
    text: "Thúc đẩy văn hóa chia sẻ tài nguyên trong cộng đồng sinh viên, giảm thiểu lãng phí và tối ưu chi phí.",
  },
  {
    icon: ShieldCheck,
    title: "Tin cậy (Trust-first)",
    text: "Xây dựng niềm tin vững chắc bằng xác thực sinh viên, hồ sơ Trust Profile và cơ chế bảo chứng cọc rõ ràng.",
  },
  {
    icon: Users,
    title: "Cộng đồng (Community)",
    text: "Lấy môi trường đại học làm cái nôi phát triển, hướng tới mạng lưới chia sẻ nguồn lực liên trường bền vững.",
  },
  {
    icon: Target,
    title: "Kiểm soát rủi ro (Risk Control)",
    text: "Giao dịch có mốc ghi nhận trước/sau (Before & After Verification) và xử lý sự cố có căn cứ dữ liệu.",
  },
  {
    icon: Award,
    title: "Kiểm chứng thực tế (Pragmatic MVP)",
    text: "Mô hình được kiểm chứng từ khảo sát 105 sinh viên UIT và thử nghiệm thực tế trước khi nhân rộng quy mô.",
  },
];
