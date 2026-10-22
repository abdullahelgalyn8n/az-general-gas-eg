import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Flame } from 'lucide-react';
import { BLOG_POSTS, PRODUCTS, Product } from '../data/catalog';
import { ProductCard } from '../components/ProductCard';

interface BlogPostPageProps {
  onAddToCart: (product: Product) => void;
  onQuickView: (product: Product) => void;
}

export const BlogPostPage: React.FC<BlogPostPageProps> = ({
  onAddToCart,
  onQuickView,
}) => {
  const { slug } = useParams<{ slug: string }>();
  const post = BLOG_POSTS.find((p) => p.slug === slug) || BLOG_POSTS[0];
  const featuredHeaters = PRODUCTS.slice(0, 4);

  return (
    <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <div className="flex items-center justify-between text-xs sm:text-sm text-slate-700">
        <div className="flex items-center gap-2">
          <Link to="/" className="hover:text-[#D9460F] font-bold">
            الرئيسية
          </Link>
          <span aria-hidden="true">/</span>
          <span className="text-slate-900 font-extrabold">{post.title}</span>
        </div>
        <Link
          to="/shop"
          className="inline-flex items-center gap-1 font-bold text-[#C2410C] hover:underline"
        >
          <ArrowRight className="w-4 h-4" />
          <span>تصفح المتجر</span>
        </Link>
      </div>

      <article className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-2xs">
        <div className="aspect-[21/9] w-full bg-slate-900 relative overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-85"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent flex flex-col justify-end p-6 sm:p-10 text-white">
            <div className="flex items-center gap-2 text-xs text-orange-300 font-bold mb-2">
              <Flame className="w-4 h-4" />
              <span>{post.category}</span>
              <span aria-hidden="true">·</span>
              <span>{post.date}</span>
              <span aria-hidden="true">·</span>
              <span>{post.readTime}</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-white">
              {post.title}
            </h1>
          </div>
        </div>

        <div className="p-6 sm:p-10 space-y-6">
          {post.content.map((paragraph, index) => (
            <p
              key={index}
              className="text-base text-slate-800 leading-relaxed"
            >
              {paragraph}
            </p>
          ))}

          <div className="bg-orange-50/70 border border-orange-200 rounded-xl p-6 space-y-3">
            <h2 className="text-base font-extrabold text-slate-900">
              أهم النقاط المستخلصة:
            </h2>
            <ul className="space-y-2 text-sm text-slate-800 font-semibold">
              {post.keyTakeaways.map((point) => (
                <li key={point} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D9460F] shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </article>

      <section className="space-y-6">
        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
          موديلات مقترحة من جنرال غاز
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredHeaters.map((p) => (
            <ProductCard
              key={p.id}
              product={p}
              onAddToCart={onAddToCart}
              onQuickView={onQuickView}
            />
          ))}
        </div>
      </section>
    </div>
  );
};
