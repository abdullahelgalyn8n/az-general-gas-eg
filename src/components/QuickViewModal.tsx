import React from 'react';
import { Link } from 'react-router-dom';
import { X, ShoppingBag, ShieldCheck, ArrowUpLeft, Star } from 'lucide-react';
import { Product } from '../data/catalog';
import { formatEgp } from '../utils/shopLogic';

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({
  product,
  onClose,
  onAddToCart,
}) => {
  if (!product) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-label={`معاينة سريعة لمنتج ${product.name}`}
    >
      <div className="bg-white rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl border border-slate-200 grid grid-cols-1 md:grid-cols-2">
        {/* Product Image */}
        <div className="relative bg-slate-100 aspect-[3/4] md:aspect-auto md:h-full">
          <img
            src={product.image}
            alt={product.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-3 right-3 bg-slate-900/85 text-white text-xs font-mono-num px-2.5 py-1 rounded">
            كود الموديل: {product.code}
          </div>
        </div>

        {/* Details */}
        <div className="p-6 flex flex-col justify-between gap-5">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#D9460F]">
                {product.categoryLabel}
              </span>
              <button
                type="button"
                onClick={onClose}
                aria-label="إغلاق المعاينة"
                className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <h2 className="text-xl font-extrabold text-slate-900">
              {product.name}
            </h2>

            <div className="flex items-center gap-3 text-xs text-slate-700">
              <span className="inline-flex items-center gap-1 font-bold text-amber-600">
                <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                <span className="font-mono-num">{product.rating.toFixed(1)}</span>
                <span>({product.reviewCount} تقييم)</span>
              </span>
              <span aria-hidden="true">·</span>
              <span>اللون: {product.colorLabel}</span>
            </div>

            <div className="flex items-baseline gap-3 pt-1">
              <span className="text-2xl font-extrabold text-[#C2410C] font-mono-num tabular-nums">
                {formatEgp(product.price)}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-slate-500 line-through font-mono-num tabular-nums">
                  {formatEgp(product.originalPrice)}
                </span>
              )}
            </div>

            <p className="text-sm text-slate-700 leading-relaxed">
              {product.description}
            </p>

            {/* Technical Specs Box */}
            <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-200 space-y-1.5 text-xs text-slate-800">
              <div className="flex justify-between">
                <span className="text-slate-600">الأبعاد القياسية:</span>
                <span className="font-bold font-mono-num">{product.dimensionsCm}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">معدل استهلاك الغاز:</span>
                <span className="font-bold font-mono-num">
                  {product.consumptionGramPerHour}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">الخامات والتشطيب:</span>
                <span className="font-bold">{product.material}</span>
              </div>
            </div>

            <div className="space-y-1">
              <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>مواصفات الأمان المعتمدة:</span>
              </div>
              <ul className="text-xs text-slate-700 space-y-1 pr-5 list-disc">
                {product.safetyFeatures.slice(0, 3).map((feat) => (
                  <li key={feat}>{feat}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-200 flex items-center gap-3">
            <button
              type="button"
              onClick={() => {
                onAddToCart(product);
                onClose();
              }}
              className="flex-1 py-3 px-4 rounded-lg bg-[#D9460F] hover:bg-orange-700 text-white font-bold text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>أضف إلى السلة</span>
            </button>
            <Link
              to={`/product/${product.slug}`}
              onClick={onClose}
              className="py-3 px-4 rounded-lg border border-slate-300 hover:bg-slate-100 text-slate-900 font-bold text-sm flex items-center gap-1.5 transition-colors whitespace-nowrap"
            >
              <span>صفحة المنتج</span>
              <ArrowUpLeft className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
