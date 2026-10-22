import React, { useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import {
  ShoppingBag,
  Menu,
  X,
  Link2,
  Check,
  Search,
  Flame,
} from 'lucide-react';
import { formatEgp } from '../utils/shopLogic';

interface NavbarProps {
  cartCount: number;
  cartTotalEgp: number;
  onOpenCart: () => void;
  onQuickSearch: (q: string) => void;
}

const NAV_ITEMS = [
  { label: 'الرئيسية', path: '/' },
  { label: 'المتجر', path: '/shop' },
  { label: 'خدماتنا', path: '/services' },
  { label: 'من نحن', path: '/about' },
  { label: 'اتصل بنا', path: '/contact' },
];

const ROUTE_TITLES: Record<string, string> = {
  '/': 'الرئيسية - جنرال غاز مصر',
  '/shop': 'متجر الدفايات وقطع الغيار',
  '/services': 'خدمات التوريد والتركيب والاستشارات',
  '/about': 'من نحن - خبرة 12 عاماً',
  '/contact': 'اتصل بنا وطلب معاينة',
};

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  cartTotalEgp,
  onOpenCart,
  onQuickSearch,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedUrl, setCopiedUrl] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  const currentPath = location.pathname;
  const fullDisplayUrl = `https://generalgaseg.com${currentPath === '/' ? '/index' : currentPath}`;

  const currentPageLabel =
    ROUTE_TITLES[currentPath] ||
    (currentPath.startsWith('/product/')
      ? 'صفحة تفاصيل المنتج'
      : currentPath.startsWith('/blog/')
      ? 'المدونة والمقالات'
      : 'جنرال غاز مصر');

  const handleCopyUrl = () => {
    const shareUrl = window.location.href;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(shareUrl).catch(() => {});
    }
    setCopiedUrl(true);
    setTimeout(() => setCopiedUrl(false), 2000);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onQuickSearch(searchInput);
    navigate('/shop');
    setSearchOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full max-w-full overflow-x-hidden bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      {/* Main 3-Zone Top Bar */}
      <div className="max-w-[1280px] mx-auto px-3 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-2 sm:gap-6 lg:gap-8">
        {/* Zone 1: Brand Wordmark + Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 sm:gap-3 whitespace-nowrap shrink-0 group focus-visible:outline-2 focus-visible:outline-orange-600 rounded-lg"
        >
          <img
            src="/assets/products/logo.png"
            alt="شعار جنرال غاز مصر General Gas EG"
            referrerPolicy="no-referrer"
            className="w-10 h-10 sm:w-12 sm:h-12 object-contain rounded-full border border-slate-200 bg-white p-0.5 shrink-0"
          />
          <span className="text-lg sm:text-xl font-extrabold tracking-tight text-slate-900 group-hover:text-[#D9460F] transition-colors">
            جنرال غاز{' '}
            <span className="hidden sm:inline text-[#D9460F] font-bold text-base sm:text-lg">
              General Gas
            </span>
          </span>
        </Link>

        {/* Zone 2: 5 Clean Single-Line Navigation Links */}
        <nav
          aria-label="القائمة الرئيسية"
          className="hidden md:flex items-center gap-7 text-base font-bold text-slate-700"
        >
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) =>
                `py-2 transition-colors whitespace-nowrap shrink-0 border-b-2 ${
                  isActive
                    ? 'text-[#D9460F] border-[#D9460F]'
                    : 'text-slate-800 border-transparent hover:text-[#D9460F] hover:border-orange-300'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Zone 3: Primary Cart & Search Action */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
          <button
            type="button"
            onClick={() => setSearchOpen((prev) => !prev)}
            aria-label="بحث في المنتجات"
            className="p-2 sm:p-2.5 rounded-lg text-slate-700 hover:text-slate-950 hover:bg-slate-100 transition-colors"
          >
            <Search className="w-5 h-5" />
          </button>

          <button
            type="button"
            onClick={onOpenCart}
            aria-label={`سلة المشتريات (${cartCount} منتج)`}
            className="flex items-center gap-1.5 sm:gap-2.5 px-2.5 sm:px-4 py-2 sm:py-2.5 rounded-lg bg-slate-900 hover:bg-[#D9460F] text-white font-bold text-xs sm:text-sm transition-colors whitespace-nowrap shrink-0 cursor-pointer shadow-xs"
          >
            <ShoppingBag className="w-4 h-4 text-orange-400 shrink-0" />
            <span className="hidden sm:inline font-mono-num tabular-nums">
              {formatEgp(cartTotalEgp)}
            </span>
            <span className="px-1.5 sm:px-2 py-0.5 text-xs rounded-md bg-white/15 text-white font-mono-num tabular-nums">
              {cartCount}
            </span>
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
            className="md:hidden p-2 rounded-lg text-slate-800 hover:bg-slate-100"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Expandable Search Bar */}
      {searchOpen && (
        <div className="bg-slate-50 border-t border-slate-200 py-3 px-4">
          <form
            onSubmit={handleSearchSubmit}
            className="max-w-[1280px] mx-auto flex items-center gap-2 sm:gap-3"
          >
            <input
              type="search"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="ابحث عن دفاية هرمية، دفاية بوكس كود 111، دفاية راوند..."
              aria-label="ابحث في منتجات جنرال غاز"
              className="flex-1 min-w-0 bg-white border border-slate-300 rounded-lg px-3.5 py-2 text-sm text-slate-900 placeholder:text-slate-500 focus:outline-none focus:border-[#D9460F]"
            />
            <button
              type="submit"
              className="px-4 sm:px-5 py-2 bg-[#D9460F] hover:bg-orange-700 text-white text-sm font-bold rounded-lg transition-colors whitespace-nowrap shrink-0"
            >
              بحث الآن
            </button>
          </form>
        </div>
      )}

      {/* Dedicated Page Route / Link Bar */}
      <div className="bg-slate-100/90 border-t border-slate-200/80 text-xs text-slate-700">
        <div className="max-w-[1280px] mx-auto px-3 sm:px-6 lg:px-8 py-1.5 flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 sm:gap-2 min-w-0 flex-1">
            <Flame className="w-3.5 h-3.5 text-[#D9460F] shrink-0" />
            <span className="font-bold text-slate-900 truncate">
              {currentPageLabel}
            </span>
            <span aria-hidden="true" className="hidden sm:inline text-slate-400">
              ·
            </span>
            <code
              dir="ltr"
              className="hidden sm:inline-block font-mono-num text-[11px] text-slate-700 bg-white px-2 py-0.5 rounded border border-slate-200 truncate max-w-[260px]"
            >
              {fullDisplayUrl}
            </code>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <div className="hidden lg:flex items-center gap-1.5 text-[11px] text-slate-600">
              <span>روابط الصفحات المباشرة:</span>
              {NAV_ITEMS.map((item, idx) => (
                <React.Fragment key={item.path}>
                  <Link
                    to={item.path}
                    dir="ltr"
                    className={`font-mono-num hover:text-[#D9460F] transition-colors ${
                      currentPath === item.path
                        ? 'text-[#D9460F] font-semibold underline'
                        : 'text-slate-700'
                    }`}
                  >
                    {item.path === '/' ? '/index' : item.path}
                  </Link>
                  {idx < NAV_ITEMS.length - 1 && (
                    <span aria-hidden="true" className="text-slate-300">
                      /
                    </span>
                  )}
                </React.Fragment>
              ))}
            </div>

            <button
              type="button"
              onClick={handleCopyUrl}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-white hover:bg-orange-50 text-slate-800 hover:text-[#D9460F] border border-slate-300 font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              {copiedUrl ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700">تم نسخ الرابط</span>
                </>
              ) : (
                <>
                  <Link2 className="w-3.5 h-3.5 text-[#D9460F]" />
                  <span>نسخ رابط الصفحة</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <nav
          aria-label="قائمة الموبايل"
          className="md:hidden bg-white border-t border-slate-200 px-4 py-4 space-y-1 shadow-lg"
        >
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `flex items-center justify-between px-4 py-3 rounded-lg font-bold text-base ${
                  isActive
                    ? 'bg-orange-50 text-[#D9460F]'
                    : 'text-slate-800 hover:bg-slate-50'
                }`
              }
            >
              <span>{item.label}</span>
              <span dir="ltr" className="text-xs font-mono-num text-slate-500">
                {item.path === '/' ? '/index' : item.path}
              </span>
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
};
