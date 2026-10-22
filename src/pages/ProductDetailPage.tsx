import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ShoppingBag,
  ShieldCheck,
  Star,
  Check,
  Truck,
  Wrench,
  ArrowRight,
  Link2,
  Plus,
  Minus,
} from 'lucide-react';
import { PRODUCTS, Product } from '../data/catalog';
import { formatEgp } from '../utils/shopLogic';
import { ProductCard } from '../components/ProductCard';

interface ProductDetailPageProps {
  onAddToCart: (product: Product, quantity?: number) => void;
  onQuickView: (product: Product) => void;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({
  onAddToCart,
  onQuickView,
}) => {
  const { slug } = useParams<{ slug: string }>();
  const product = PRODUCTS.find((p) => p.slug === slug) || PRODUCTS[0];

  const [activeImage, setActiveImage] = useState(product.image);
  const [quantity, setQuantity] = useState(1);
  const [addedFeedback, setAddedFeedback] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  useEffect(() => {
    setActiveImage(product.image);
    setQuantity(1);
  }, [product]);

  const relatedProducts = PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 4);

  const handleAdd = () => {
    onAddToCart(product, quantity);
    setAddedFeedback(true);
    setTimeout(() => setAddedFeedback(false), 1800);
  };

  const handleCopyProductLink = () => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(window.location.href).catch(() => {});
    }
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      {/* Breadcrumb + Direct Product URL Share */}
      <div className="bg-white rounded-xl border border-slate-200 p-4 flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-slate-700">
          <Link to="/" className="hover:text-[#D9460F] font-semibold">
            الرئيسية
          </Link>
          <span aria-hidden="true">/</span>
          <Link to="/shop" className="hover:text-[#D9460F] font-semibold">
            المتجر
          </Link>
          <span aria-hidden="true">/</span>
          <Link
            to={`/shop?category=${product.category}`}
            className="hover:text-[#D9460F] font-semibold"
          >
            {product.categoryLabel}
          </Link>
          <span aria-hidden="true">/</span>
          <span className="font-extrabold text-slate-900">{product.name}</span>
        </div>

        <button
          type="button"
          onClick={handleCopyProductLink}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-orange-50 text-slate-800 hover:text-[#D9460F] text-xs font-bold border border-slate-200 transition-colors cursor-pointer"
        >
          {copiedLink ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-600" />
              <span className="text-emerald-700">تم نسخ رابط المنتج</span>
            </>
          ) : (
            <>
              <Link2 className="w-3.5 h-3.5 text-[#D9460F]" />
              <span>مشاركة رابط المنتج</span>
            </>
          )}
        </button>
      </div>

      {/* Main Contiguous Purchase Module */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Gallery Column */}
        <div className="lg:col-span-5 space-y-4">
          <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white aspect-[3/4] shadow-xs">
            <img
              src={activeImage}
              alt={product.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>

          {product.gallery.length > 1 && (
            <div className="grid grid-cols-3 gap-3">
              {product.gallery.map((imgUrl, idx) => (
                <button
                  key={imgUrl + idx}
                  type="button"
                  onClick={() => setActiveImage(imgUrl)}
                  aria-label={`صورة ${idx + 1} لمنتج ${product.name}`}
                  className={`rounded-xl overflow-hidden border-2 aspect-[4/3] cursor-pointer transition-all ${
                    activeImage === imgUrl
                      ? 'border-[#D9460F] ring-2 ring-orange-200'
                      : 'border-slate-200 opacity-80 hover:opacity-100'
                  }`}
                >
                  <img
                    src={imgUrl}
                    alt={`${product.name} - ${idx + 1}`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Purchase & Specs Column */}
        <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6">
          <div className="space-y-3 border-b border-slate-200 pb-6">
            <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-slate-600">
              <span className="text-[#C2410C]">{product.categoryLabel}</span>
              <span aria-hidden="true">·</span>
              <span className="font-mono-num text-slate-800">
                كود الموديل: {product.code}
              </span>
              <span aria-hidden="true">·</span>
              <span className="text-emerald-700">متوفر للتوريد والتركيب الفوري</span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              {product.name}
            </h1>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              {product.subtitle}
            </p>

            <div className="flex items-center gap-3 text-xs text-slate-700 pt-1">
              <span className="inline-flex items-center gap-1 font-bold text-amber-600">
                <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                <span className="font-mono-num">{product.rating.toFixed(1)}</span>
                <span>({product.reviewCount} تقييم من عملاء جنرال غاز)</span>
              </span>
            </div>

            <div className="pt-2 flex items-baseline gap-4">
              <span className="text-3xl font-extrabold text-[#C2410C] font-mono-num tabular-nums">
                {formatEgp(product.price)}
              </span>
              {product.originalPrice && (
                <span className="text-base text-slate-500 line-through font-mono-num tabular-nums">
                  {formatEgp(product.originalPrice)}
                </span>
              )}
              <span className="text-xs font-bold text-slate-600">
                شامل الضمان وفحص الأمان
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm text-slate-800 leading-relaxed">
            {product.description}
          </p>

          {/* Technical Specifications Table */}
          <div className="bg-slate-50 rounded-xl border border-slate-200 p-4 space-y-2.5 text-xs sm:text-sm">
            <h2 className="font-extrabold text-slate-900 text-sm pb-1 border-b border-slate-200">
              المواصفات الفنية والقياسية
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div>
                <span className="text-slate-600 block text-xs">اللون والتشطيب:</span>
                <span className="font-bold text-slate-900">{product.colorLabel}</span>
              </div>
              <div>
                <span className="text-slate-600 block text-xs">الأبعاد القياسية:</span>
                <span className="font-bold text-slate-900 font-mono-num">
                  {product.dimensionsCm}
                </span>
              </div>
              {product.coverageAreaSqm > 0 && (
                <div>
                  <span className="text-slate-600 block text-xs">مساحة التغطية الحرارية:</span>
                  <span className="font-bold text-slate-900 font-mono-num">
                    حتى {product.coverageAreaSqm} متر مربع
                  </span>
                </div>
              )}
              <div>
                <span className="text-slate-600 block text-xs">معدل استهلاك الغاز:</span>
                <span className="font-bold text-slate-900 font-mono-num">
                  {product.consumptionGramPerHour}
                </span>
              </div>
              <div className="sm:col-span-2">
                <span className="text-slate-600 block text-xs">الخامات المصنعة:</span>
                <span className="font-bold text-slate-900">{product.material}</span>
              </div>
            </div>
          </div>

          {/* Safety Features List */}
          <div className="space-y-2">
            <h3 className="text-sm font-extrabold text-slate-900 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>عوامل الأمان والحماية في الموديل:</span>
            </h3>
            <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
              {product.safetyFeatures.map((feat) => (
                <li key={feat} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#D9460F] shrink-0" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quantity & Add to Cart Action Bar */}
          <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center gap-4">
            <div className="inline-flex items-center border border-slate-300 rounded-xl bg-white">
              <button
                type="button"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                aria-label="تقليل الكمية"
                className="p-3 text-slate-700 hover:bg-slate-100 cursor-pointer"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="px-5 text-sm font-extrabold font-mono-num tabular-nums text-slate-900">
                {quantity}
              </span>
              <button
                type="button"
                onClick={() => setQuantity((q) => q + 1)}
                aria-label="زيادة الكمية"
                className="p-3 text-slate-700 hover:bg-slate-100 cursor-pointer"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>

            <button
              type="button"
              onClick={handleAdd}
              className={`flex-1 py-3.5 px-6 rounded-xl font-extrabold text-sm sm:text-base flex items-center justify-center gap-2 transition-colors cursor-pointer ${
                addedFeedback
                  ? 'bg-emerald-700 text-white'
                  : 'bg-[#D9460F] hover:bg-orange-700 text-white shadow-sm'
              }`}
            >
              {addedFeedback ? (
                <>
                  <Check className="w-5 h-5" />
                  <span>تمت الإضافة إلى سلة المشتريات</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-5 h-5" />
                  <span>
                    أضف إلى السلة ({formatEgp(product.price * quantity)})
                  </span>
                </>
              )}
            </button>
          </div>

          {/* Trust Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-700">
            <div className="flex items-center gap-2 bg-slate-50 p-3 rounded-lg border border-slate-200">
              <Truck className="w-4 h-4 text-[#D9460F] shrink-0" />
              <span>توريد وتركيب فوري لجميع المحافظات</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-50 p-3 rounded-lg border border-slate-200">
              <Wrench className="w-4 h-4 text-[#D9460F] shrink-0" />
              <span>ضمان معتمد وتوافر جميع قطع الغيار الأصلية</span>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products Section */}
      {relatedProducts.length > 0 && (
        <section className="space-y-6 pt-8 border-t border-slate-200">
          <div className="flex items-center justify-between">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              موديلات مشابهة من نفس الفئة
            </h2>
            <Link
              to="/shop"
              className="text-xs sm:text-sm font-bold text-[#C2410C] hover:underline inline-flex items-center gap-1"
            >
              <ArrowRight className="w-4 h-4" />
              <span>العودة للمتجر الكامل</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((rel) => (
              <ProductCard
                key={rel.id}
                product={rel}
                onAddToCart={(p) => onAddToCart(p, 1)}
                onQuickView={onQuickView}
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
