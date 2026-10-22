import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ShieldCheck,
  Wrench,
  Sparkles,
  Compass,
  CheckCircle2,
  Flame,
  Instagram,
} from 'lucide-react';
import {
  CATEGORIES,
  CategoryId,
  PRODUCTS,
  SERVICES,
  SOLUTION_CARDS,
  Product,
} from '../data/catalog';
import { ProductCard } from '../components/ProductCard';

interface HomePageProps {
  onAddToCart: (product: Product) => void;
  onQuickView: (product: Product) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onAddToCart,
  onQuickView,
}) => {
  const [activeTab, setActiveTab] = useState<CategoryId>('all');

  const filteredLatest =
    activeTab === 'all'
      ? PRODUCTS.slice(0, 8)
      : PRODUCTS.filter((p) => p.category === activeTab).slice(0, 8);

  const bestSellers = PRODUCTS.filter((p) => p.isBestSeller).slice(0, 4);

  const serviceIcons = [Wrench, Compass, Sparkles, ShieldCheck];

  return (
    <div className="space-y-20 pb-10">
      {/* 1. Hero Section — High Contrast Split & Measured Scrim */}
      <section className="relative bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/assets/products/lifestyle-evening-patio.jpg"
            alt="دفايات جنرال غاز في الأماكن المفتوحة والتراسات"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-slate-950/95 via-slate-950/85 to-slate-950/70" />
        </div>

        <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-orange-400">
              <Flame className="w-4 h-4" />
              <span>خبرة أكثر من 12 عاماً في السوق المصري والشرق الأوسط</span>
            </div>

            <h1
              className="text-3xl sm:text-5xl font-extrabold leading-tight tracking-tight text-white"
              style={{ textWrap: 'balance' }}
            >
              جنرال غاز –{' '}
              <span className="text-[#FF6B2C]">General Gas EG</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl font-medium">
              المتخصصون في جميع أنواع دفايات الغاز من الهرمية والمربعة والراوند إلى
              دفايات الكافيهات والمطاعم والمساكن: تدفئة مثالية وآمنة في الأماكن
              المفتوحة والمغلقة مع خدمة التوريد والتركيب والضمان الشامل.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                to="/shop"
                className="px-7 py-3.5 rounded-lg bg-[#D9460F] hover:bg-orange-600 text-white font-extrabold text-sm sm:text-base transition-colors inline-flex items-center gap-2 shadow-lg whitespace-nowrap shrink-0"
              >
                <span>تسوق المتجر الكامل</span>
                <ArrowLeft className="w-4 h-4" />
              </Link>
              <Link
                to="/services"
                className="px-6 py-3.5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold text-sm sm:text-base transition-colors whitespace-nowrap shrink-0"
              >
                خدمات التوريد وحاسبة المساحة
              </Link>
            </div>

            {/* Key Metrics Strip */}
            <div className="pt-6 border-t border-white/15 grid grid-cols-3 gap-6 max-w-lg">
              <div>
                <div className="text-2xl font-extrabold text-white font-mono-num tabular-nums">
                  +12 عاماً
                </div>
                <div className="text-xs text-slate-300 mt-0.5">
                  ريادة في مصر والشرق الأوسط
                </div>
              </div>
              <div>
                <div className="text-2xl font-extrabold text-[#FF6B2C] font-mono-num tabular-nums">
                  100% أمان
                </div>
                <div className="text-xs text-slate-300 mt-0.5">
                  صمام فصل غاز وحساس ميلان
                </div>
              </div>
              <div>
                <div className="text-2xl font-extrabold text-white font-mono-num tabular-nums">
                  35 م²
                </div>
                <div className="text-xs text-slate-300 mt-0.5">
                  تغطية حرارية للدفاية الواحدة
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-slate-900 aspect-[4/3]">
              <img
                src="/assets/products/lifestyle-cube-flame.jpg"
                alt="دفايات جنرال غاز الهرمية والمربعة"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/95 via-slate-950/70 to-transparent p-5 flex items-center justify-between">
                <div>
                  <p className="text-xs text-orange-300 font-bold">
                    الأكثر طلباً للموسم الشتوي
                  </p>
                  <p className="text-sm font-extrabold text-white">
                    الدفايات الهرمية والمربعة وأحجار اللافا
                  </p>
                </div>
                <Link
                  to="/shop"
                  className="px-3.5 py-2 rounded-lg bg-white text-slate-950 text-xs font-extrabold hover:bg-orange-50 transition-colors whitespace-nowrap"
                >
                  استعرض الأسعار
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Four Core Service Pillars (High-Contrast White Mode Cards) */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((srv, idx) => {
            const IconComponent = serviceIcons[idx % serviceIcons.length];
            return (
              <div
                key={srv.id}
                className="bg-white rounded-xl p-6 border border-slate-200/90 hover:border-slate-300 transition-all flex flex-col justify-between gap-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-200/70 text-[#D9460F] flex items-center justify-center">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono-num font-bold text-slate-500">
                      {srv.number}.
                    </span>
                  </div>
                  <h2 className="text-lg font-extrabold text-slate-900">
                    {srv.title}
                  </h2>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {srv.shortDescription}
                  </p>
                </div>

                <Link
                  to="/services"
                  className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#C2410C] hover:text-slate-950 underline underline-offset-4 transition-colors"
                >
                  <span>تسوق واعرف المزيد</span>
                  <ArrowLeft className="w-3.5 h-3.5" />
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Four Architectural Heater Solution Cards with Measured Contrast Scrims */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <p className="text-xs font-extrabold text-[#C2410C] tracking-wide">
              تشكيلة متكاملة لكل مساحة
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              حلول التدفئة المعتمدة من جنرال غاز
            </h2>
          </div>
          <Link
            to="/shop"
            className="text-sm font-bold text-slate-800 hover:text-[#D9460F] inline-flex items-center gap-1.5"
          >
            <span>عرض جميع الفئات في المتجر</span>
            <ArrowLeft className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SOLUTION_CARDS.map((card) => (
            <div
              key={card.id}
              className="group relative rounded-2xl overflow-hidden border border-slate-300 aspect-[3/4] flex flex-col justify-end p-6 text-white shadow-sm"
            >
              <img
                src={card.image}
                alt={card.title}
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {/* Measured High-Contrast Scrim so white & orange text is 100% legible */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/75 to-slate-950/30" />

              <div className="relative z-10 space-y-3">
                <p className="text-xs font-bold text-orange-300">
                  {card.subtitle}
                </p>
                <h3 className="text-xl font-extrabold text-white">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  {card.description}
                </p>
                <p className="text-[11px] font-mono-num text-slate-300 pt-1">
                  {card.specs}
                </p>
                <div className="pt-2">
                  <Link
                    to={`/shop?category=${card.categoryFilter}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#D9460F] hover:bg-orange-600 text-white text-xs font-extrabold transition-colors"
                  >
                    <span>استعرض الموديلات</span>
                    <ArrowLeft className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Organized Product Catalog Section ("الأحدث" with Authentic Arabic Category Tabs) */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200 pb-6">
          <div className="space-y-1">
            <span className="text-sm font-extrabold text-[#C2410C]">
              General Gas Catalog
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              أحدث موديلات الدفايات ومستلزمات الأمان
            </h2>
            <p className="text-sm text-slate-700">
              اختر الفئة المناسبة لمساحتك واستعرض الأسعار والمواصفات الفنية الكاملة لكل موديل.
            </p>
          </div>

          {/* Interactive Filter Controls (Replacing broken English template tabs with real categories) */}
          <div
            role="tablist"
            aria-label="تصنيف المنتجات"
            className="flex flex-wrap items-center gap-1.5 p-1.5 bg-slate-100 rounded-xl border border-slate-200"
          >
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                role="tab"
                aria-selected={activeTab === cat.id}
                type="button"
                onClick={() => setActiveTab(cat.id)}
                className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  activeTab === cat.id
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'text-slate-700 hover:text-slate-950 hover:bg-white/60'
                }`}
              >
                {cat.shortName}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredLatest.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              onQuickView={onQuickView}
            />
          ))}
        </div>

        <div className="text-center pt-4">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-slate-900 hover:bg-[#D9460F] text-white font-bold text-sm transition-colors shadow-xs"
          >
            <span>تصفح جميع المنتجات في المتجر ({PRODUCTS.length} منتج)</span>
            <ArrowLeft className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 5. About General Gas Split Showcase (High-Contrast Light Surface) */}
      <section className="bg-white border-y border-slate-200 py-16">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Split Row 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-extrabold text-[#C2410C] tracking-wide">
                لماذا جنرال غاز؟
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
                جنرال غاز –{' '}
                <span className="text-[#D9460F]">General Gas</span> جميع أنواع
                دفايات الغاز
              </h2>
              <p className="text-base text-slate-700 leading-relaxed">
                12 عاماً من الخبرة في السوق المصري والشرق الأوسط. بفخر، تدعم جنرال
                غاز عملاءها عبر تقديم دفايات عالية الجودة تجمع بين الراحة، الأمان،
                والتوفير في الطاقة، لتكون الخيار الأمثل لكل بيت وفي أي مكان.
              </p>
              <p className="text-sm text-slate-700 leading-relaxed">
                نحن لا نوفر مجرد دفايات غاز بل نقدم حلول تدفئة متكاملة تناسب مختلف
                الاحتياجات من المنازل والشقق إلى الكافيهات، المطاعم والأماكن
                المفتوحة بفضل فريق متخصص وخدمة ما بعد البيع تضمن لعملائنا تجربة
                رائدة.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  'توفير دفايات مناسبة للشقق والمنازل والفلل',
                  'دفايات مخصصة للأماكن المفتوحة والتراسات',
                  'بيع جميع أنواع دفايات الغاز (جملة وتجزئة)',
                  'حلول تدفئة متكاملة للمطاعم والكافيهات والفنادق',
                ].map((point) => (
                  <div
                    key={point}
                    className="flex items-center gap-2 text-sm font-bold text-slate-800"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#D9460F] shrink-0" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-3">
                <Link
                  to="/about"
                  className="px-6 py-3 rounded-lg bg-slate-900 hover:bg-[#D9460F] text-white font-bold text-sm transition-colors"
                >
                  اقرأ المزيد عن شركتنا
                </Link>
                <Link
                  to="/shop"
                  className="px-6 py-3 rounded-lg border border-slate-300 bg-white hover:bg-slate-100 text-slate-900 font-bold text-sm transition-colors"
                >
                  تسوق الآن
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5 items-stretch">
              <div className="rounded-2xl overflow-hidden border border-slate-200 aspect-[3/4]">
                <img
                  src="/assets/products/lifestyle-outdoor-cafe.jpg"
                  alt="تجهيز الكافيهات والمطاعم بدفايات جنرال غاز"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden border border-slate-200 aspect-[3/4]">
                <img
                  src="/assets/products/lifestyle-evening-patio.jpg"
                  alt="دفايات جنرال غاز المسائية في التراسات"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Split Row 2: Iconic Dark Quote Box + Lava Stones Burner Photo */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            <div className="lg:col-span-6 bg-slate-950 text-white rounded-2xl p-8 sm:p-12 flex flex-col justify-center space-y-5 border border-slate-800">
              <div className="text-2xl sm:text-3xl font-extrabold">
                General-<span className="text-[#FF6B2C]">Gas</span>
              </div>
              <blockquote className="text-base sm:text-lg text-slate-200 leading-relaxed font-medium">
                «منذ تأسيسها، حرصت جنرال غاز على أن تكون شريكاً موثوقاً في مجال
                حلول التدفئة بالغاز داخل مصر والشرق الأوسط. نحن نؤمن أن الدفء ليس
                مجرد رفاهية، بل حاجة أساسية تكتمل معها الراحة في المنازل،
                الكافيهات، المطاعم، والحدائق.»
              </blockquote>
              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-sm font-extrabold text-orange-400 hover:text-orange-300 underline underline-offset-8"
                >
                  <span>تواصل معنا لطلب معاينة أو عرض سعر</span>
                  <ArrowLeft className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 rounded-2xl overflow-hidden border border-slate-200 aspect-[16/10] lg:aspect-auto">
              <img
                src="/assets/products/lifestyle-lava-stones.jpg"
                alt="شعلة جنرال غاز مع أحجار اللافا البركانية"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6. Best Sellers Section ("الأكثر مبيعاً") */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-sm font-extrabold text-[#C2410C]">
            General Gas Best Sellers
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            الأكثر مبيعاً في السوق المصري
          </h2>
          <p className="text-sm text-slate-700">
            الموديلات الأعلى تقييماً والأكثر اعتماداً لدى الكافيهات والمطاعم والفلل السكنية.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestSellers.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              onQuickView={onQuickView}
            />
          ))}
        </div>

        {/* Social Handle Card (Matching reference bottom Instagram card with clean contrast) */}
        <div className="pt-6 flex justify-center">
          <Link
            to="/contact"
            className="bg-white border border-slate-300 hover:border-[#D9460F] rounded-xl px-10 py-6 text-center shadow-xs transition-all group"
          >
            <div className="flex items-center justify-center gap-2 text-slate-900 group-hover:text-[#D9460F] font-extrabold text-base">
              <Instagram className="w-5 h-5 text-[#D9460F]" />
              <span>INSTAGRAM · FACEBOOK · TIKTOK</span>
            </div>
            <p className="text-xs font-mono-num text-slate-600 mt-1">
              @GeneralGasEg • تابع أحدث التوريدات والعروض اليومية
            </p>
          </Link>
        </div>
      </section>
    </div>
  );
};
