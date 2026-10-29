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
  Zap,
  AlertTriangle,
  MessageSquare,
  ShieldAlert,
  ClipboardCheck,
} from "lucide-react";

export const brand = {
  name: "ImFree",
  tagline: "Nền tảng kết nối và chia sẻ nguồn lực nhàn rỗi dành cho sinh viên",
  subTagline: "Đội ngũ sinh viên phát triển ImFree",
  footerText: "ImFree — Nền tảng kết nối và chia sẻ nguồn lực nhàn rỗi dành cho sinh viên. Bắt đầu từ việc giúp sinh viên chia sẻ tài sản nhàn rỗi một cách thuận tiện và đáng tin cậy.",
};

export const navLinks = [
  { to: "/", label: "Trang chủ" },
  { to: "/tinh-nang", label: "Tính năng" },
  { to: "/ve-chung-toi", label: "Về chúng tôi" },
];

export const contact = {
  emails: ["contact@imfree.id.vn", "support@imfree.id.vn"],
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
    title: "Asset Sharing",
    subtitle: "Trọng tâm MVP",
    text: "Chia sẻ máy ảnh và thiết bị học tập nhàn rỗi, giúp sinh viên tối ưu chi phí và tận dụng tài sản sẵn có.",
    highlights: [
      "Xác thực sinh viên UIT qua email trường",
      "Tiết kiệm 70-80% chi phí sử dụng",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Kiểm soát rủi ro",
    subtitle: "Quy trình an toàn 4 mốc",
    text: "Quy trình 4 mốc rõ ràng: Thỏa thuận minh bạch, đối soát phụ kiện và ghi nhận ảnh hiện trạng khi bàn giao.",
    highlights: [
      "Checklist đối soát phụ kiện trực quan",
      "Ảnh hiện trạng trước và sau sử dụng",
    ],
  },
  {
    icon: Star,
    title: "Xây dựng niềm tin",
    subtitle: "Hệ thống đánh giá sau giao dịch",
    text: "Tích lũy điểm tín nhiệm sau mỗi lượt mượn, tạo cơ sở bảo chứng vững chắc giữa cộng đồng sinh viên.",
    highlights: [
      "Hồ sơ Trust Profile 5 sao minh bạch",
      "Đánh giá thực tế từ bạn học cùng trường",
    ],
  },
  {
    icon: Clock,
    title: "Skill & Time Sharing",
    subtitle: "Định hướng mở rộng",
    text: "Kết nối kỹ năng chuyên môn (gia sư, thiết kế, lập trình) và thời gian rảnh theo lịch học linh hoạt.",
    highlights: [
      "Gia sư & Hỗ trợ đồ án công nghệ",
      "Linh hoạt theo khung giờ rảnh mỗi ngày",
    ],
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
// 2. TRANG TÍNH NĂNG: TOÀN BỘ 3 GIAI ĐOẠN ĐẦY ĐỦ (SLIDE 7-20)
// =========================================================================

// GIAI ĐOẠN 01: DISCOVER & TRUST (SLIDE 8-11)
export const stage1Discover = [
  {
    icon: Search,
    title: "1. Search & Filter — Tìm kiếm tài sản",
    text: "Nhập từ khóa 'camera', lọc theo mức giá, thời gian thuê và tiêu chí phù hợp. Hệ thống hiển thị danh sách tài sản đang được đăng cho thuê thay vì tìm kiếm rời rạc qua người quen.",
    tag: "Tiếp cận nguồn cung phù hợp",
  },
  {
    icon: Layers,
    title: "2. Asset Detail — Xem chi tiết tài sản",
    text: "Chọn tài sản để xem hình ảnh thực tế, mô tả thông số, tình trạng, giá thuê, thời gian khả dụng và các điều kiện thuê do Provider cung cấp trước khi gửi yêu cầu.",
    tag: "Đầy đủ thông tin đánh giá",
  },
  {
    icon: Star,
    title: "3. Provider's Trust Profile — Đánh giá độ tin cậy",
    text: "Xem hồ sơ Provider: trạng thái xác minh sinh viên UIT, đánh giá số sao và lịch sử giao dịch hoàn tất nhằm giảm bất cân xứng thông tin trước khi bàn giao hoặc đặt cọc.",
    tag: "Giảm bất cân xứng thông tin",
  },
  {
    icon: FileCheck,
    title: "4. Booking Request — Gửi yêu cầu thuê",
    text: "Chọn thời gian thuê, gửi lời nhắn và đề xuất các thông tin cần xác nhận. Yêu cầu chuyển đến Provider để chuyển nhu cầu tìm kiếm thành yêu cầu giao dịch cụ thể.",
    tag: "Chuyển thành yêu cầu cụ thể",
  },
];

// GIAI ĐOẠN 02: SECURE EXCHANGE (SLIDE 12-16)
export const stage2Exchange = [
  {
    icon: CheckCircle2,
    title: "1. Agreement — Xác nhận thỏa thuận",
    text: "Provider chấp nhận yêu cầu. Hai bên thống nhất thời gian, địa điểm bàn giao/hoàn trả, giá thuê, tiền đặt cọc (Deposit) và điều kiện liên quan trên ứng dụng trước khi thanh toán.",
    tag: "Thống nhất điều khoản rõ ràng",
  },
  {
    icon: Camera,
    title: "2. Before Verification — Tình trạng ban đầu",
    text: "Provider chụp ảnh và hoàn thành checklist phụ kiện. Seeker kiểm tra khi nhận rồi xác nhận đã nhận tài sản — mốc ghi nhận chính thức trước khi sử dụng.",
    tag: "Mốc quan trọng: Trước sử dụng",
  },
  {
    icon: Clock,
    title: "3. Usage & Grace Period — Sử dụng & đối soát",
    text: "Thời gian thuê bắt đầu sau khi xác nhận nhận tài sản. Grace Period là khoảng thời gian quy định trước để kiểm tra hoạt động và báo lỗi sau bàn giao.",
    tag: "Khoảng thời gian kiểm tra an tâm",
  },
  {
    icon: ClipboardCheck,
    title: "4. After Verification & Return — Ghi nhận & hoàn trả",
    text: "Seeker chụp ảnh, hoàn thành checklist trước khi trả. Provider đối chiếu ảnh và checklist ban đầu rồi xác nhận đã nhận lại tài sản.",
    tag: "Mốc quan trọng: Đối chiếu khi trả",
  },
  {
    icon: ShieldCheck,
    title: "5. Inspection & Completion — Kiểm tra & hoàn tất",
    text: "Provider kiểm tra sau hoàn trả. Không có vấn đề: hai bên đánh giá sao và kết thúc giao dịch, giải phóng tiền cọc. Có hư hỏng: chuyển sang Protection & Resolution.",
    tag: "Nghiệm thu & Giải phóng cọc",
  },
];

// GIAI ĐOẠN 03: PROTECTION & RESOLUTION (SLIDE 17-20)
export const stage3Resolution = [
  {
    icon: AlertTriangle,
    title: "1. Open Dispute — Mở tranh chấp",
    text: "Gửi yêu cầu, mô tả sự cố phát sinh và cung cấp ảnh, video, checklist hoặc thời điểm phát hiện. Đầu vào: loại sự cố, mô tả chi tiết và bằng chứng ban đầu.",
    tag: "Tiếp nhận khiếu nại minh bạch",
  },
  {
    icon: Layers,
    title: "2. Evidence Review — Đối chiếu & phân loại",
    text: "Đối chiếu tình trạng trước-sau (Before vs After Verification), điều khoản thỏa thuận và phản hồi hai bên; phân loại lỗi sau khi nhận, hư hỏng khi hoàn trả hoặc thiếu phụ kiện.",
    tag: "Xác định bản chất bằng chứng",
  },
  {
    icon: Scale,
    title: "3. Negotiation & Mediation — Thương lượng",
    text: "Hai bên trao đổi phương án giải quyết. Nếu chưa thống nhất, ImFree xem xét hồ sơ, đối chiếu chính sách nền tảng và đề xuất hướng xử lý phù hợp dựa trên bằng chứng.",
    tag: "Hòa giải dựa trên bằng chứng",
  },
  {
    icon: CheckCircle2,
    title: "4. Resolution & Case Closure — Kết quả & đóng vụ việc",
    text: "Ghi nhận trạng thái; lập settlement gồm khắc phục hoặc bồi hoàn (nếu có). Hoàn tất thì đóng và lưu vào lịch sử, hồ sơ uy tín. Nếu chưa đủ bằng chứng: giữ trạng thái 'Chờ xử lý'.",
    tag: "Lập Settlement & Cập nhật uy tín",
  },
];

// =========================================================================
// 3. TRANG VỀ CHÚNG TÔI: ĐỘI NGŨ & GIÁ TRỊ CỐT LÕI (SLIDE 1, 27, 28)
// =========================================================================
export const team = [
  {
    name: "Phạm Viết Quang Huy",
    initials: "QH",
    major: "Kỹ thuật Phần mềm - UIT",
    role: "Thành viên",
    isLead: false,
  },
  {
    name: "Phạm Tuyết Ngân",
    initials: "TN",
    major: "Thương mại điện tử - UIT",
    role: "Thành viên",
    isLead: false,
  },
  {
    name: "Nguyễn Đặng Phước",
    initials: "ĐP",
    major: "Thương mại điện tử - UIT",
    role: "Trưởng nhóm",
    isLead: true,
  },
  {
    name: "Nguyễn Ngọc Thu Trâm",
    initials: "TT",
    major: "Thương mại điện tử - UIT",
    role: "Thành viên",
    isLead: false,
  },
  {
    name: "Phạm Lê Công Thanh",
    initials: "CT",
    major: "Thương mại điện tử - UIT",
    role: "Thành viên",
    isLead: false,
  },
];

export const values = [
  {
    icon: Layers,
    title: "Connection",
    text: "Kết nối sinh viên sở hữu tài sản nhàn rỗi với sinh viên đang có nhu cầu sử dụng thực tế trong khuôn viên trường.",
  },
  {
    icon: Camera,
    title: "Sharing",
    text: "Khởi đầu từ việc giúp sinh viên chia sẻ những tài sản đang nhàn rỗi một cách thuận tiện và tối ưu chi phí.",
  },
  {
    icon: ShieldCheck,
    title: "Trust-First",
    text: "Lấy xác thực sinh viên, hồ sơ Trust Profile và cơ chế bảo chứng đặt cọc làm nền tảng gia tăng độ an toàn và tin cậy cho giao dịch.",
  },
  {
    icon: Users,
    title: "Community",
    text: "Xây dựng môi trường giao dịch văn minh, uy tín được tích lũy qua chính lịch sử giao dịch thực tế của sinh viên.",
  },
  {
    icon: Target,
    title: "Technology Feasibility",
    text: "MVP tập trung vào Asset Sharing tại UIT, phát triển phiên bản phục vụ Pilot có kiểm soát trước khi mở rộng.",
  },
  {
    icon: Zap,
    title: "Operational Feasibility",
    text: "Áp dụng Concierge Matching hỗ trợ thủ công ban đầu, theo dõi, tiếp nhận phản hồi, điều chỉnh và từng bước ổn định quy trình.",
  },
];
