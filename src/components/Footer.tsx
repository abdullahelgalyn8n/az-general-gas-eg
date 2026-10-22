import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle, Share2, ExternalLink } from 'lucide-react';
import { BLOG_POSTS, COMPANY_INFO } from '../data/catalog';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-20">
      {/* Primary Brand Orange Footer Band (Matching General Gas Reference with High Contrast) */}
      <div className="bg-[#D9460F] text-white py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1140px] mx-auto flex flex-col items-center text-center space-y-7">
          {/* Navigation Links Mirror */}
          <nav
            aria-label="روابط الفوتر"
            className="flex flex-wrap items-center justify-center gap-8 text-base font-bold"
          >
            <Link to="/" className="hover:underline underline-offset-8">
              الرئيسية
            </Link>
            <Link to="/about" className="hover:underline underline-offset-8">
              من نحن
            </Link>
            <Link to="/services" className="hover:underline underline-offset-8">
              خدماتنا
            </Link>
            <Link to="/shop" className="hover:underline underline-offset-8">
              المتجر
            </Link>
            <Link to="/contact" className="hover:underline underline-offset-8">
              اتصل بنا
            </Link>
          </nav>

          {/* Social & Direct Contact Icons */}
          <div className="flex items-center justify-center gap-3.5">
            <Link
              to="/contact"
              aria-label="صفحة التواصل المباشر والهاتف"
              className="w-10 h-10 rounded-full bg-white text-[#D9460F] hover:bg-slate-900 hover:text-white flex items-center justify-center transition-colors shadow-xs"
            >
              <Phone className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              aria-label="صفحة التواصل عبر واتساب"
              className="w-10 h-10 rounded-full bg-white text-[#D9460F] hover:bg-slate-900 hover:text-white flex items-center justify-center transition-colors shadow-xs"
            >
              <MessageCircle className="w-4 h-4" />
            </Link>
            <Link
              to="/about"
              aria-label="صفحة جنرال غاز الرسمية"
              className="w-10 h-10 rounded-full bg-white text-[#D9460F] hover:bg-slate-900 hover:text-white flex items-center justify-center transition-colors shadow-xs"
            >
              <Share2 className="w-4 h-4" />
            </Link>
            <Link
              to="/shop"
              aria-label="كتالوج منتجات جنرال غاز"
              className="w-10 h-10 rounded-full bg-white text-[#D9460F] hover:bg-slate-900 hover:text-white flex items-center justify-center transition-colors shadow-xs"
            >
              <ExternalLink className="w-4 h-4" />
            </Link>
          </div>

          <div className="w-full max-w-xl border-t border-white/30 pt-6 text-xs sm:text-sm text-white/95 space-y-1">
            <p className="font-bold">
              {COMPANY_INFO.brandAr} ({COMPANY_INFO.brandEn}) – {COMPANY_INFO.tagline}
            </p>
            <p dir="ltr" className="font-mono-num text-white/90">
              جميع الحقوق محفوظة. <a href="https://azagency.online/" target="_blank" rel="noopener noreferrer" className="hover:underline font-semibold text-white">A.Z Agency</a> 2026 ©
            </p>
          </div>
        </div>
      </div>

      {/* Bottom White Band: Recent Posts (High-Contrast Refined Version of the Reference Footer) */}
      <div className="bg-white border-t border-slate-200 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1140px] mx-auto">
          <div className="flex items-center justify-between mb-6 pb-2 border-b border-slate-200">
            <h3 className="text-sm font-extrabold tracking-wide text-slate-900 uppercase">
              أحدث المقالات والنصائح (RECENT POSTS)
            </h3>
            <Link
              to="/blog/general-gas-safety-elegance-warmth"
              className="text-xs font-bold text-[#D9460F] hover:underline"
            >
              عرض جميع المقالات
            </Link>
          </div>

          <div className="divide-y divide-slate-200">
            {BLOG_POSTS.map((post) => (
              <article
                key={post.id}
                className="py-4 flex items-center justify-between gap-4 group"
              >
                <div className="space-y-1 min-w-0">
                  <h4 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#D9460F] transition-colors">
                    <Link to={`/blog/${post.slug}`} className="hover:underline">
                      {post.title}
                    </Link>
                  </h4>
                  <div className="flex items-center gap-2 text-xs text-slate-600">
                    <span>{post.date}</span>
                    <span aria-hidden="true">·</span>
                    <span>{post.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <Link
                  to={`/blog/${post.slug}`}
                  className="shrink-0 block w-20 h-14 rounded-lg overflow-hidden border border-slate-200 bg-slate-100"
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
