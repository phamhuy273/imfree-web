import { useState, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  Search,
  Camera,
  BookOpen,
  Laptop,
  Heart,
  Star,
  CheckCircle2,
  SlidersHorizontal,
  Clock,
  Sparkles,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

const SIMULATED_ITEMS = [
  {
    id: 1,
    category: "camera",
    title: "Canon EOS 700D + Kit 18-55mm",
    subtitle: "Kèm thẻ nhớ tốc độ cao & 2 pin chính hãng",
    price: "100.000đ",
    unit: "/ngày",
    deposit: "500.000đ",
    provider: "Huy Quang",
    badge: "UIT Đã xác minh",
    rating: "5.0",
    reviews: "14 giao dịch",
    status: "Còn trống",
    statusColor: "emerald",
    icon: Camera,
  },
  {
    id: 2,
    category: "skill",
    title: "Gia sư Lập trình C++ & OOP cho K23",
    subtitle: "Hỗ trợ làm đồ án môn học & luyện thuật toán",
    price: "120.000đ",
    unit: "/buổi",
    deposit: "0đ",
    provider: "Hải Nam",
    badge: "Thủ khoa môn UIT",
    rating: "4.9",
    reviews: "22 buổi dạy",
    status: "Nhận lịch hẹn",
    statusColor: "blue",
    icon: BookOpen,
  },
  {
    id: 3,
    category: "device",
    title: "Micro Thu Âm Rode Wireless GO",
    subtitle: "Phục vụ quay podcast, thuyết trình NCKH",
    price: "80.000đ",
    unit: "/ngày",
    deposit: "300.000đ",
    provider: "Ngọc Mai",
    badge: "UIT Đã xác minh",
    rating: "5.0",
    reviews: "8 giao dịch",
    status: "Còn trống",
    statusColor: "emerald",
    icon: Laptop,
  },
];

const CATEGORIES = [
  { id: "all", label: "Tất cả (MVP)" },
  { id: "camera", label: "Máy ảnh & Quay phim" },
  { id: "skill", label: "Chia sẻ kỹ năng" },
  { id: "device", label: "Thiết bị số" },
];

export default function AppWindow() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] });
  const scale = useTransform(scrollYProgress, [0, 1], [0.94, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [36, 0]);

  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [likedItems, setLikedItems] = useState({});
  const [selectedItem, setSelectedItem] = useState(null);

  // Lọc sản phẩm theo danh mục và từ khóa tìm kiếm
  const filteredItems = SIMULATED_ITEMS.filter((item) => {
    const matchCat = activeCategory === "all" || item.category === activeCategory;
    const matchQuery =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.provider.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchQuery;
  });

  const toggleItemLike = (id, e) => {
    e.stopPropagation();
    setLikedItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <motion.div
      ref={ref}
      style={{ scale, y }}
      className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-line/90 bg-white shadow-[0_25px_60px_-15px_rgba(42,86,204,0.12)]"
    >
      {/* 1. THANH TIÊU ĐỀ TRÌNH DUYỆT / ỨNG DỤNG */}
      <div className="flex items-center gap-4 border-b border-line bg-gradient-to-r from-slate-50 via-brand-50/30 to-slate-50 px-5 py-3.5">
        <div className="flex gap-2" aria-hidden="true">
          <span className="size-3 rounded-full bg-rose-400/90 shadow-2xs" />
          <span className="size-3 rounded-full bg-amber-400/90 shadow-2xs" />
          <span className="size-3 rounded-full bg-emerald-400/90 shadow-2xs" />
        </div>

        {/* Thanh tìm kiếm có thể nhập tương tác thực tế */}
        <div className="relative flex h-10 flex-1 items-center gap-2 rounded-full border border-line bg-white/95 px-4 text-sm shadow-inner-xs focus-within:border-brand-500 focus-within:ring-2 focus-within:ring-brand-100 transition-all">
          <Search className="size-4 text-slate-400 shrink-0" aria-hidden="true" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Tìm kiếm máy ảnh, laptop, gia sư lập trình UIT..."
            className="w-full bg-transparent text-xs sm:text-sm text-ink placeholder:text-slate-400 focus:outline-none"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="text-xs text-slate-400 hover:text-ink cursor-pointer px-1.5"
            >
              ✕
            </button>
          )}
        </div>

        {/* Logo ImFree thu nhỏ */}
        <div className="hidden sm:flex items-center gap-2 pr-1">
          <span className="text-xs font-semibold text-brand-700 bg-brand-50 px-2.5 py-1 rounded-full border border-brand-200/60">
            Interactive Simulator
          </span>
        </div>
      </div>

      {/* 2. NỘI DUNG ỨNG DỤNG MÔ PHỎNG */}
      <div className="p-5 sm:p-7">
        {/* Bộ lọc Danh mục tương tác nhanh */}
        <div className="flex items-center justify-between gap-3 overflow-x-auto pb-4 border-b border-line/60">
          <div className="flex items-center gap-2 shrink-0">
            {CATEGORIES.map((cat) => {
              const active = cat.id === activeCategory;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                    active
                      ? "bg-brand-600 text-white shadow-soft"
                      : "bg-slate-100/90 text-slate-600 hover:text-ink hover:bg-slate-200/70"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          <div className="hidden sm:flex items-center gap-1.5 text-xs text-muted font-medium shrink-0">
            <SlidersHorizontal className="size-3.5" />
            <span>Khuôn viên: UIT Campus</span>
          </div>
        </div>

        {/* Danh sách thẻ sản phẩm hiển thị tương tác */}
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item) => {
            const isLiked = likedItems[item.id];
            const Icon = item.icon;

            return (
              <motion.article
                key={item.id}
                layout
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                onClick={() => setSelectedItem(item)}
                className="group relative flex flex-col justify-between rounded-2xl border border-line bg-white p-4.5 shadow-xs hover:border-brand-300 hover:shadow-card transition-all cursor-pointer overflow-hidden"
              >
                {/* Phần trên: Icon + Huy hiệu tình trạng */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="size-11 rounded-xl bg-brand-50 border border-brand-100/80 flex items-center justify-center text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300">
                      <Icon className="size-5" />
                    </div>

                    <div className="flex items-center gap-1.5">
                      <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                        {item.status}
                      </span>
                    </div>
                  </div>

                  <h4 className="text-sm sm:text-base font-bold text-ink group-hover:text-brand-600 transition-colors">
                    {item.title}
                  </h4>
                  <p className="mt-1 text-xs text-muted line-clamp-2 leading-relaxed">
                    {item.subtitle}
                  </p>
                </div>

                {/* Phần giữa: Thông tin người cho thuê (Trust Profile) */}
                <div className="mt-4 pt-3 border-t border-line/60">
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1.5 font-medium text-ink">
                      <span>{item.provider}</span>
                      <CheckCircle2 className="size-3.5 text-brand-600" />
                    </div>

                    <div className="flex items-center gap-1 text-amber-600 font-semibold">
                      <Star className="size-3 fill-amber-400 text-amber-400" />
                      <span>{item.rating}</span>
                      <span className="text-[10px] text-muted font-normal">({item.reviews})</span>
                    </div>
                  </div>

                  {/* Phần đáy: Giá thuê + Nút yêu thích */}
                  <div className="mt-3 flex items-center justify-between">
                    <div>
                      <span className="text-base sm:text-lg font-extrabold text-brand-600">
                        {item.price}
                      </span>
                      <span className="text-[11px] text-muted">{item.unit}</span>
                    </div>

                    <button
                      onClick={(e) => toggleItemLike(item.id, e)}
                      className={`size-8 rounded-full border flex items-center justify-center transition-all cursor-pointer ${
                        isLiked
                          ? "bg-rose-50 border-rose-200 text-rose-500 scale-105"
                          : "bg-slate-50 border-slate-200/70 text-slate-400 hover:text-rose-500"
                      }`}
                      aria-label="Thích tài sản"
                    >
                      <Heart className={`size-4 ${isLiked ? "fill-rose-500" : ""}`} />
                    </button>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Hướng dẫn tương tác nhanh */}
        <div className="mt-6 flex items-center justify-between text-xs text-muted pt-4 border-t border-line/50 flex-wrap gap-2">
          <div className="flex items-center gap-1.5 text-brand-700 font-medium">
            <Sparkles className="size-3.5 text-brand-600" />
            <span>Mô phỏng trải nghiệm ứng dụng thực tế: Bạn có thể bấm chọn danh mục hoặc tìm kiếm để thử nghiệm!</span>
          </div>
          <span className="font-mono text-[11px]">3 tài sản khả dụng</span>
        </div>
      </div>

      {/* 3. MODAL CHI TIẾT KHI BẤM CHỌN TÀI SẢN (Interactive Detail Drawer) */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              className="relative w-full max-w-md rounded-3xl bg-white p-6 shadow-card border border-line"
            >
              <div className="flex items-start justify-between">
                <div className="size-12 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center">
                  <selectedItem.icon className="size-6" />
                </div>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="size-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:text-ink cursor-pointer"
                >
                  ✕
                </button>
              </div>

              <div className="mt-4">
                <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full">
                  {selectedItem.status}
                </span>
                <h3 className="text-lg font-bold text-ink mt-2">{selectedItem.title}</h3>
                <p className="text-xs text-muted mt-1">{selectedItem.subtitle}</p>
              </div>

              <div className="mt-4 p-3.5 rounded-xl bg-slate-50 border border-slate-200/70 space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-muted">Giá thuê niêm yết:</span>
                  <span className="font-bold text-brand-600">{selectedItem.price}{selectedItem.unit}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted">Tiền đặt cọc (Deposit):</span>
                  <span className="font-semibold text-ink">{selectedItem.deposit}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted">Chủ tài sản:</span>
                  <span className="font-semibold text-ink flex items-center gap-1">
                    {selectedItem.provider} <CheckCircle2 className="size-3 text-brand-600" />
                  </span>
                </div>
              </div>

              <div className="mt-5 flex gap-3">
                <button
                  onClick={() => setSelectedItem(null)}
                  className="flex-1 py-2.5 rounded-full border border-line text-sm font-semibold text-ink hover:bg-slate-50 transition cursor-pointer"
                >
                  Đóng
                </button>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="flex-1 py-2.5 rounded-full bg-brand-600 text-white text-sm font-semibold hover:bg-brand-700 transition shadow-soft cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <span>Gửi Booking</span>
                  <ArrowRight className="size-4" />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
