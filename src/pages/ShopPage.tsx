import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import {
  SlidersHorizontal,
  RotateCcw,
  Star,
  LayoutGrid,
  Columns3,
  Search,
  Check,
} from 'lucide-react';
import {
  CATEGORIES,
  CategoryId,
  PRODUCTS,
  Product,
} from '../data/catalog';
import {
  filterAndSortProducts,
  formatEgp,
  ProductFilterState,
  SortOption,
} from '../utils/shopLogic';
import { ProductCard } from '../components/ProductCard';

interface ShopPageProps {
  onAddToCart: (product: Product) => void;
  onQuickView: (product: Product) => void;
  initialSearchQuery: string;
}

const COLOR_OPTIONS: Array<{
  id: ProductFilterState['color'];
  label: string;
  swatchClass: string;
}> = [
  { id: 'all', label: 'جميع الألوان', swatchClass: 'bg-gradient-to-tr from-slate-900 via-slate-400 to-amber-700' },
  { id: 'black', label: 'أسود مطفي إلكتروستاتيك', swatchClass: 'bg-slate-950' },
  { id: 'stainless', label: 'استانلس ستيل فضي', swatchClass: 'bg-slate-400' },
  { id: 'white', label: 'أبيض لؤلؤي', swatchClass: 'bg-white border border-slate-400' },
  { id: 'bronze', label: 'برونزي ميتاليك', swatchClass: 'bg-amber-800' },
];

export const ShopPage: React.FC<ShopPageProps> = ({
  onAddToCart,
  onQuickView,
  initialSearchQuery,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = (searchParams.get('category') as CategoryId) || 'all';

  const [filters, setFilters] = useState<ProductFilterState>({
    category: CATEGORIES.some((c) => c.id === categoryParam) ? categoryParam : 'all',
    minPrice: 0,
    maxPrice: 40000,
    color: 'all',
    onlyInStock: false,
    onlyOnSale: false,
    searchQuery: initialSearchQuery || '',
    sortBy: 'featured',
  });

  const [gridCols, setGridCols] = useState<2 | 3>(3);

  useEffect(() => {
    if (
      categoryParam &&
      CATEGORIES.some((c) => c.id === categoryParam) &&
      categoryParam !== filters.category
    ) {
      setFilters((prev) => ({ ...prev, category: categoryParam }));
    }
  }, [categoryParam]);

  useEffect(() => {
    if (initialSearchQuery !== undefined && initialSearchQuery !== filters.searchQuery) {
      setFilters((prev) => ({ ...prev, searchQuery: initialSearchQuery }));
    }
  }, [initialSearchQuery]);

  const handleCategoryChange = (cat: CategoryId) => {
    setFilters((prev) => ({ ...prev, category: cat }));
    if (cat === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams);
  };

  const handleResetFilters = () => {
    setFilters({
      category: 'all',
      minPrice: 0,
      maxPrice: 40000,
      color: 'all',
      onlyInStock: false,
      onlyOnSale: false,
      searchQuery: '',
      sortBy: 'featured',
    });
    setSearchParams({});
  };

  const filteredProducts = filterAndSortProducts(PRODUCTS, filters);
  const topRatedSidebar = [...PRODUCTS]
    .sort((a, b) => b.rating - a.rating || b.reviewCount - a.reviewCount)
    .slice(0, 4);

  return (
    <div className="pb-16">
      {/* Shop Page Banner — Authentic General Gas Catalog Header (Fixing the broken template typewriter header) */}
      <section className="relative bg-slate-950 text-white py-14 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0">
          <img
            src="/assets/products/lifestyle-evening-patio.jpg"
            alt="متجر دفايات جنرال غاز"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/60" />
        </div>

        <div className="relative max-w-[1280px] mx-auto text-center space-y-6">
          <div className="space-y-2">
            <p className="text-xs font-extrabold tracking-widest text-orange-400 uppercase">
              GENERAL GAS EGYPT OFFICIAL STORE
            </p>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
              متجر دفايات جنرال غاز (Shop)
            </h1>
            <p className="text-sm sm:text-base text-slate-200 max-w-2xl mx-auto">
              تصفح جميع موديلات الدفايات الهرمية، المربعة البوكس، دفايات الراوند والمشروم، وقطع الغيار الإيطالية الأصلية بضمان جنرال غاز.
            </p>
          </div>

          {/* Category Quick Navigation Strip in Banner */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            {CATEGORIES.map((cat) => {
              const count =
                cat.id === 'all'
                  ? PRODUCTS.length
                  : PRODUCTS.filter((p) => p.category === cat.id).length;
              const active = filters.category === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => handleCategoryChange(cat.id)}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                    active
                      ? 'bg-[#D9460F] text-white shadow-md'
                      : 'bg-white/10 hover:bg-white/20 text-slate-100 border border-white/15'
                  }`}
                >
                  <span>{cat.shortName}</span>
                  <span className="font-mono-num text-xs opacity-90">
                    ({count})
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Storefront Content: Sidebar Filters + Product Grid */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        {/* Top Controls Bar */}
        <div className="bg-white rounded-xl border border-slate-200 p-4 mb-8 flex flex-wrap items-center justify-between gap-4 shadow-2xs">
          {/* Breadcrumb & Count */}
          <div className="flex items-center gap-2 text-sm text-slate-700">
            <Link to="/" className="hover:text-[#D9460F] font-semibold">
              الرئيسية
            </Link>
            <span aria-hidden="true">/</span>
            <span className="font-extrabold text-slate-900">المتجر</span>
            <span aria-hidden="true" className="text-slate-300">
              ·
            </span>
            <span className="text-xs font-bold text-slate-700">
              عرض{' '}
              <span className="font-mono-num text-slate-950">
                {filteredProducts.length}
              </span>{' '}
              من أصل{' '}
              <span className="font-mono-num text-slate-950">
                {PRODUCTS.length}
              </span>{' '}
              منتج
            </span>
          </div>

          {/* Search, Sort & Grid Toggle */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="search"
                value={filters.searchQuery}
                onChange={(e) =>
                  setFilters((prev) => ({ ...prev, searchQuery: e.target.value }))
                }
                placeholder="ابحث بالاسم أو الكود (مثال: 111، 213)..."
                aria-label="بحث في المتجر"
                className="pr-9 pl-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-lg text-slate-900 placeholder:text-slate-500 focus:outline-none focus:border-[#D9460F] w-56 sm:w-64"
              />
            </div>

            <select
              aria-label="ترتيب المنتجات"
              value={filters.sortBy}
              onChange={(e) =>
                setFilters((prev) => ({
                  ...prev,
                  sortBy: e.target.value as SortOption,
                }))
              }
              className="px-3.5 py-2 text-xs sm:text-sm font-bold bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:border-[#D9460F]"
            >
              <option value="featured">الترتيب الافتراضي (الأكثر تميزاً)</option>
              <option value="price-asc">السعر: من الأقل إلى الأعلى</option>
              <option value="price-desc">السعر: من الأعلى إلى الأقل</option>
              <option value="rating-desc">الأعلى تقييماً</option>
              <option value="newest">الأحدث أولاً</option>
            </select>

            <div className="hidden lg:flex items-center gap-1 border border-slate-200 rounded-lg p-1 bg-slate-50">
              <button
                type="button"
                onClick={() => setGridCols(3)}
                aria-label="عرض 3 أعمدة"
                className={`p-1.5 rounded cursor-pointer ${
                  gridCols === 3
                    ? 'bg-white text-slate-900 shadow-2xs'
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                <Columns3 className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => setGridCols(2)}
                aria-label="عرض عمودين"
                className={`p-1.5 rounded cursor-pointer ${
                  gridCols === 2
                    ? 'bg-white text-slate-900 shadow-2xs'
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Sidebar Filters (Right side in RTL) */}
          <aside className="lg:col-span-3 space-y-6 bg-white p-6 rounded-xl border border-slate-200">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <div className="flex items-center gap-2 font-extrabold text-sm text-slate-900">
                <SlidersHorizontal className="w-4 h-4 text-[#D9460F]" />
                <span>تصفية المنتجات</span>
              </div>
              <button
                type="button"
                onClick={handleResetFilters}
                className="text-xs font-bold text-[#C2410C] hover:underline inline-flex items-center gap-1 cursor-pointer"
              >
                <RotateCcw className="w-3 h-3" />
                <span>إعادة ضبط</span>
              </button>
            </div>

            {/* 1. Filter by Price */}
            <div className="space-y-3 pb-6 border-b border-slate-200">
              <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-900">
                تصفية حسب السعر (FILTER BY PRICE)
              </h2>
              <input
                type="range"
                min={1000}
                max={40000}
                step={500}
                value={filters.maxPrice}
                aria-label="الحد الأقصى للسعر"
                onChange={(e) =>
                  setFilters((prev) => ({
                    ...prev,
                    maxPrice: Number(e.target.value),
                  }))
                }
                className="w-full accent-[#D9460F] cursor-pointer"
              />
              <div className="flex items-center justify-between text-xs font-bold text-slate-800">
                <span>السعر:</span>
                <span dir="ltr" className="font-mono-num tabular-nums text-[#C2410C]">
                  {formatEgp(filters.minPrice)} — {formatEgp(filters.maxPrice)}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-1.5 pt-1">
                <button
                  type="button"
                  onClick={() =>
                    setFilters((prev) => ({ ...prev, minPrice: 9000, maxPrice: 12500 }))
                  }
                  className="px-2.5 py-1.5 rounded border border-slate-300 hover:border-[#D9460F] text-[11px] font-bold text-slate-800 bg-slate-50 cursor-pointer"
                >
                  9,000 - 12,500 ج.م
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setFilters((prev) => ({ ...prev, minPrice: 0, maxPrice: 40000 }))
                  }
                  className="px-2.5 py-1.5 rounded border border-slate-300 hover:border-[#D9460F] text-[11px] font-bold text-slate-800 bg-slate-50 cursor-pointer"
                >
                  كل الأسعار
                </button>
              </div>
            </div>

            {/* 2. Filter by Color */}
            <div className="space-y-3 pb-6 border-b border-slate-200">
              <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-900">
                تصفية حسب اللون (FILTER BY COLOR)
              </h2>
              <div className="space-y-2">
                {COLOR_OPTIONS.map((col) => {
                  const count =
                    col.id === 'all'
                      ? PRODUCTS.length
                      : PRODUCTS.filter((p) => p.color === col.id).length;
                  const active = filters.color === col.id;
                  return (
                    <button
                      key={col.id}
                      type="button"
                      onClick={() =>
                        setFilters((prev) => ({ ...prev, color: col.id }))
                      }
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                        active
                          ? 'bg-orange-50 text-[#C2410C] border border-orange-200'
                          : 'text-slate-800 hover:bg-slate-50 border border-transparent'
                      }`}
                    >
                      <span className="flex items-center gap-2.5">
                        <span
                          className={`w-4 h-4 rounded-full shrink-0 ${col.swatchClass}`}
                        />
                        <span>{col.label}</span>
                      </span>
                      <span className="font-mono-num text-slate-600">{count}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 3. Stock & Offers Status */}
            <div className="space-y-3 pb-6 border-b border-slate-200">
              <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-900">
                حالة المخزون والعروض (STOCK STATUS)
              </h2>
              <label className="flex items-center gap-2.5 text-xs font-bold text-slate-800 cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.onlyOnSale}
                  onChange={(e) =>
                    setFilters((prev) => ({
                      ...prev,
                      onlyOnSale: e.target.checked,
                    }))
                  }
                  className="w-4 h-4 accent-[#D9460F] rounded"
                />
                <span>عروض وخصومات (On Sale)</span>
              </label>

              <label className="flex items-center gap-2.5 text-xs font-bold text-slate-800 cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.onlyInStock}
                  onChange={(e) =>
                    setFilters((prev) => ({
                      ...prev,
                      onlyInStock: e.target.checked,
                    }))
                  }
                  className="w-4 h-4 accent-[#D9460F] rounded"
                />
                <span>متوفر للتوريد الفوري (In Stock)</span>
              </label>
            </div>

            {/* 4. Top Rated Products Widget */}
            <div className="space-y-4">
              <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-900">
                الأعلى تقييماً (TOP RATED PRODUCTS)
              </h2>
              <div className="divide-y divide-slate-200">
                {topRatedSidebar.map((item) => (
                  <div key={item.id} className="py-3 flex items-center gap-3">
                    <Link
                      to={`/product/${item.slug}`}
                      className="w-14 h-16 rounded-lg overflow-hidden border border-slate-200 bg-slate-100 shrink-0"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    </Link>
                    <div className="min-w-0 flex-1 space-y-1">
                      <Link
                        to={`/product/${item.slug}`}
                        className="block text-xs font-bold text-slate-900 hover:text-[#D9460F] truncate"
                      >
                        {item.name}
                      </Link>
                      <div className="flex items-center gap-1 text-amber-500">
                        <Star className="w-3 h-3 fill-amber-500" />
                        <span className="text-[11px] font-bold text-slate-700 font-mono-num">
                          {item.rating.toFixed(1)}
                        </span>
                      </div>
                      <div className="text-xs font-extrabold text-[#C2410C] font-mono-num">
                        {formatEgp(item.price)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>

          {/* Main Product Grid (9 cols) */}
          <div className="lg:col-span-9">
            {filteredProducts.length === 0 ? (
              <div className="bg-white rounded-xl border border-slate-200 p-12 text-center space-y-4">
                <p className="text-lg font-extrabold text-slate-900">
                  لا توجد منتجات مطابقة لشروط التصفية الحالية
                </p>
                <p className="text-sm text-slate-600">
                  جرب توسيع نطاق السعر أو اختيار فئة أخرى لعرض كافة موديلات دفايات جنرال غاز.
                </p>
                <button
                  type="button"
                  onClick={handleResetFilters}
                  className="px-6 py-2.5 rounded-lg bg-[#D9460F] text-white font-bold text-sm cursor-pointer"
                >
                  عرض جميع المنتجات ({PRODUCTS.length})
                </button>
              </div>
            ) : (
              <div
                className={`grid grid-cols-1 sm:grid-cols-2 ${
                  gridCols === 3 ? 'xl:grid-cols-3' : 'xl:grid-cols-2'
                } gap-6`}
              >
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={onAddToCart}
                    onQuickView={onQuickView}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
