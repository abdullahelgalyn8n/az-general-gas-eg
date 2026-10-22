import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Eye, Star, Check, ArrowUpLeft } from 'lucide-react';
import { Product } from '../data/catalog';
import { formatEgp } from '../utils/shopLogic';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onQuickView: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart,
  onQuickView,
}) => {
  const [imgError, setImgError] = useState(false);
  const [justAdded, setJustAdded] = useState(false);

  const handleAdd = () => {
    onAddToCart(product);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1400);
  };

  return (
    <article className="group bg-white rounded-xl border border-slate-200/90 hover:border-slate-300 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md flex flex-col overflow-hidden">
      {/* 3:4 Product Image Container */}
      <div className="relative aspect-[3/4] w-full bg-slate-100 overflow-hidden">
        {!imgError ? (
          <Link
            to={`/product/${product.slug}`}
            className="block w-full h-full focus-visible:outline-none"
          >
            <img
              src={product.image}
              alt={product.name}
              referrerPolicy="no-referrer"
              onError={() => setImgError(true)}
              className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-300"
            />
          </Link>
        ) : (
          <Link
            to={`/product/${product.slug}`}
            className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-b from-slate-100 to-slate-200 text-slate-700"
          >
            <span className="text-sm font-bold text-slate-900 mb-1">
              {product.name}
            </span>
            <span className="text-xs font-mono-num text-slate-600">
              {product.code}
            </span>
          </Link>
        )}

        {/* Bottom Corner Single Kicker Tag (if badgeText exists) */}
        {product.badgeText && (
          <div className="absolute bottom-3 right-3 bg-slate-900/90 backdrop-blur-xs text-white text-xs font-bold px-2.5 py-1 rounded-md shadow-xs">
            {product.badgeText}
          </div>
        )}

        {/* Quick View Action Button */}
        <button
          type="button"
          onClick={() => onQuickView(product)}
          aria-label={`معاينة سريعة لمنتج ${product.name}`}
          className="absolute top-3 left-3 p-2.5 rounded-lg bg-white/95 hover:bg-slate-900 text-slate-800 hover:text-white border border-slate-200 shadow-xs transition-colors cursor-pointer"
        >
          <Eye className="w-4 h-4" />
        </button>
      </div>

      {/* Product Content Body — High-Contrast White Mode */}
      <div className="p-5 flex-1 flex flex-col justify-between gap-4 bg-white">
        <div className="space-y-2">
          {/* Unboxed Metadata Line */}
          <div className="flex items-center justify-between gap-2 text-xs text-slate-600 font-medium">
            <span>{product.categoryLabel}</span>
            <span aria-hidden="true">·</span>
            <span className="font-mono-num text-slate-700 font-semibold">
              {product.code}
            </span>
          </div>

          {/* Product Name */}
          <h3 className="text-base font-bold text-slate-900 leading-snug group-hover:text-[#D9460F] transition-colors">
            <Link
              to={`/product/${product.slug}`}
              className="hover:underline focus-visible:outline-2 focus-visible:outline-orange-600 rounded"
            >
              {product.name}
            </Link>
          </h3>

          {/* Short Subtitle */}
          <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
            {product.subtitle}
          </p>

          {/* Technical Metadata Line */}
          <div className="pt-1 flex items-center gap-2 text-xs text-slate-700">
            <span className="inline-flex items-center gap-1 font-bold text-amber-600">
              <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
              <span className="font-mono-num tabular-nums">{product.rating.toFixed(1)}</span>
            </span>
            <span aria-hidden="true" className="text-slate-300">
              ·
            </span>
            <span>{product.colorLabel}</span>
            {product.coverageAreaSqm > 0 && (
              <>
                <span aria-hidden="true" className="text-slate-300">
                  ·
                </span>
                <span className="font-mono-num tabular-nums">
                  تغطية {product.coverageAreaSqm} م²
                </span>
              </>
            )}
          </div>
        </div>

        {/* Price & Action Footer */}
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-3">
          <div>
            <div className="text-base font-extrabold text-[#C2410C] font-mono-num tabular-nums">
              {formatEgp(product.price)}
            </div>
            {product.originalPrice && (
              <div className="text-xs text-slate-500 line-through font-mono-num tabular-nums">
                {formatEgp(product.originalPrice)}
              </div>
            )}
          </div>

          <div className="flex items-center gap-1.5">
            <Link
              to={`/product/${product.slug}`}
              aria-label={`صفحة تفاصيل ${product.name}`}
              className="p-2 rounded-lg border border-slate-200 text-slate-700 hover:text-slate-950 hover:bg-slate-100 transition-colors"
            >
              <ArrowUpLeft className="w-4 h-4" />
            </Link>
            <button
              type="button"
              onClick={handleAdd}
              className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 cursor-pointer ${
                justAdded
                  ? 'bg-emerald-700 text-white'
                  : 'bg-slate-900 hover:bg-[#D9460F] text-white'
              }`}
            >
              {justAdded ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>تمت الإضافة</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>أضف للسلة</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};
