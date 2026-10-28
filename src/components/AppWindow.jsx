import { useState, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  Search,
  Heart,
  Star,
  MapPin,
  SlidersHorizontal,
  Sparkles,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const SIMULATED_ITEMS = [
  {
    id: 1,
    category: "camera",
    title: "Canon EOS 80D",
    subtitle: "Kèm ống kính Kit 18-55mm IS STM, thẻ nhớ 64GB & 2 pin",
    image: "/canon-80d.png",
    price: "100.000đ",
    unit: "/ ngày",
    deposit: "500.000đ",
    rating: "4.9",
    reviews: "2",
    location: "KTX 4",
    provider: "Huy Quang • UIT",
    status: "Còn trống",
  },
  {
    id: 2,
    category: "projector",
    title: "Máy chiếu Epson",
    subtitle: "Độ sáng cao 3.600 Lumens, kết nối HDMI/VGA phục vụ thuyết trình",
    image: "/may-chieu.png",
    price: "40.000đ",
    unit: "/ ngày",
    deposit: "300.000đ",
    rating: "4.9",
    reviews: "12",
    location: "Đông Hòa",
    provider: "Minh Tuấn • UIT",
    status: "Còn trống",
  },
  {
    id: 3,
    category: "skill",
    title: "Poster Design",
    subtitle: "Thiết kế poster sự kiện, banner CLB, slide thuyết trình học thuật",
    image: "/poster-design.png",
    price: "100.000đ",
    unit: "/ project",
    deposit: "0đ",
    rating: "4.9",
    reviews: "91",
    location: "Online",
    provider: "Bảo Ngọc • UIT",
    status: "Nhận yêu cầu",
  },
];

const CATEGORIES = [
  { id: "all", label: "Tất cả (MVP)" },
  { id: "camera", label: "Máy ảnh (Canon 80D)" },
  { id: "projector", label: "Máy chiếu (Epson)" },
  { id: "skill", label: "Thiết kế (Poster)" },
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
      item.location.toLowerCase().includes(searchQuery.toLowerCase());
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
            placeholder="Tìm kiếm Canon 80D, Máy chiếu Epson, Poster Design..."
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

        {/* Danh sách 3 thẻ sản phẩm đúng chuẩn hình ảnh cung cấp */}
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item) => {
            const isLiked = likedItems[item.id];

            return (
              <motion.article
                key={item.id}
                layout
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                onClick={() => setSelectedItem(item)}
                className="group relative flex items-center gap-3 rounded-2xl border border-line bg-white p-3 sm:p-3.5 shadow-xs hover:border-brand-300 hover:shadow-card transition-all cursor-pointer overflow-hidden"
              >
                {/* Ảnh đại diện sản phẩm */}
                <div className="size-18 sm:size-20 rounded-xl overflow-hidden shrink-0 bg-slate-50 border border-slate-100 shadow-2xs">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Nội dung thông tin chi tiết */}
                <div className="flex-1 min-w-0 flex flex-col justify-between self-stretch py-0.5">
                  {/* Hàng 1: Tiêu đề + Nút thả tim */}
                  <div className="flex items-start justify-between gap-1">
                    <h4 className="text-sm font-bold text-ink truncate group-hover:text-brand-600 transition-colors">
                      {item.title}
                    </h4>
                    <button
                      onClick={(e) => toggleItemLike(item.id, e)}
                      className={`size-7 rounded-full flex items-center justify-center shrink-0 transition-colors cursor-pointer ${
                        isLiked
                          ? "bg-rose-50 text-rose-500"
                          : "bg-slate-50 hover:bg-rose-50 text-slate-400 hover:text-rose-500"
                      }`}
                      aria-label="Yêu thích"
                    >
                      <Heart className={`size-3.5 ${isLiked ? "fill-rose-500" : ""}`} />
                    </button>
                  </div>

                  {/* Hàng 2: Giá thuê */}
                  <div className="text-sm font-extrabold text-brand-600 -mt-0.5">
                    {item.price} <span className="text-[11px] font-semibold text-brand-500/90">{item.unit}</span>
                  </div>

                  {/* Hàng 3: Đánh giá sao bên trái + Địa điểm bên phải */}
                  <div className="flex items-center justify-between text-[11px] text-muted mt-1 pt-1 border-t border-slate-100">
                    <div className="flex items-center gap-1 text-amber-600 font-semibold">
                      <Star className="size-3 fill-amber-400 text-amber-400" />
                      <span>{item.rating}</span>
                      <span className="text-muted/80 font-normal">({item.reviews})</span>
                    </div>

                    <div className="flex items-center gap-1 text-slate-500">
                      <MapPin className="size-3 text-slate-400 shrink-0" />
                      <span className="truncate max-w-[80px]">{item.location}</span>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Hướng dẫn tương tác nhanh */}
        <div className="mt-5 flex items-center justify-between text-xs text-muted pt-3.5 border-t border-line/50 flex-wrap gap-2">
          <div className="flex items-center gap-1.5 text-brand-700 font-medium">
            <Sparkles className="size-3.5 text-brand-600" />
            <span>Mô phỏng ứng dụng thực tế: Bạn có thể lọc danh mục hoặc tìm kiếm để tương tác trực tiếp!</span>
          </div>
          <span className="font-mono text-[11px]">3 tài sản khả dụng</span>
        </div>
      </div>

      {/* 3. MODAL CHI TIẾT KHI BẤM CHỌN TÀI SẢN (Interactive Detail Drawer) - Vừa vặn, đầy đủ thông tin uy tín */}
      <AnimatePresence>
        {selectedItem && (
          <div
            onClick={() => setSelectedItem(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 12 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-[420px] rounded-2xl bg-white p-5 sm:p-5.5 shadow-2xl border border-slate-200"
            >
              {/* Header: Thumbnail + Tên + Badge + Đánh giá sao + Nút đóng */}
              <div className="flex items-start gap-3.5">
                <div className="size-15 sm:size-16 rounded-xl overflow-hidden bg-slate-50 border border-slate-200/80 shrink-0 shadow-2xs">
                  <img src={selectedItem.image} alt={selectedItem.title} className="size-full object-cover" />
                </div>
                <div className="flex-1 min-w-0 pr-1">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="inline-block text-[10.5px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                      {selectedItem.status}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200/70">
                      <Star className="size-3 fill-amber-400 text-amber-400" />
                      {selectedItem.rating}
                      <span className="font-normal text-muted/80">({selectedItem.reviews})</span>
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-ink truncate leading-snug mt-1.5">
                    {selectedItem.title}
                  </h3>
                  <p className="text-xs text-muted leading-relaxed line-clamp-2 mt-0.5">
                    {selectedItem.subtitle}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="size-7 sm:size-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-400 hover:text-ink transition cursor-pointer shrink-0 -mt-0.5 -mr-0.5"
                  aria-label="Đóng"
                >
                  ✕
                </button>
              </div>

              {/* Thông số giao dịch & Đánh giá người cho thuê */}
              <div className="mt-3.5 p-3.5 rounded-xl bg-slate-50/80 border border-slate-200/70 space-y-2 text-xs">
                <div className="flex justify-between items-center">
                  <span className="text-muted">Giá niêm yết:</span>
                  <span className="font-bold text-brand-600 text-sm">
                    {selectedItem.price} <span className="font-normal text-xs text-muted">{selectedItem.unit}</span>
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted">Tiền đặt cọc (Deposit):</span>
                  <span className="font-semibold text-ink">{selectedItem.deposit}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted">Địa điểm bàn giao:</span>
                  <span className="font-semibold text-ink flex items-center gap-1">
                    <MapPin className="size-3 text-slate-400" />
                    {selectedItem.location}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted">Chủ tài sản / Cung cấp:</span>
                  <span className="font-semibold text-ink flex items-center gap-1.5">
                    {selectedItem.provider}
                    <span className="inline-flex items-center text-[10px] font-semibold text-brand-700 bg-brand-50 px-1.5 py-0.5 rounded border border-brand-200/60">
                      UIT KYC
                    </span>
                    <CheckCircle2 className="size-3.5 text-brand-600" />
                  </span>
                </div>
                <div className="flex justify-between items-center pt-2 border-t border-slate-200/60">
                  <span className="text-muted">Đánh giá người đó:</span>
                  <div className="flex items-center gap-1.5">
                    <span className="inline-flex items-center gap-1 font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200/70">
                      <Star className="size-3.5 fill-amber-400 text-amber-400" />
                      {selectedItem.rating} / 5.0
                    </span>
                    <span className="text-[11px] text-muted font-medium">({selectedItem.reviews} đánh giá uy tín)</span>
                  </div>
                </div>
              </div>

              {/* Nút hành động */}
              <div className="mt-4 flex gap-2.5">
                <button
                  onClick={() => setSelectedItem(null)}
                  className="flex-1 py-2.5 rounded-xl border border-line text-xs sm:text-sm font-semibold text-ink hover:bg-slate-50 transition cursor-pointer"
                >
                  Đóng
                </button>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="flex-1 py-2.5 rounded-xl bg-brand-600 text-white text-xs sm:text-sm font-semibold hover:bg-brand-700 transition shadow-soft cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <span>Gửi Booking</span>
                  <ArrowRight className="size-3.5" />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
