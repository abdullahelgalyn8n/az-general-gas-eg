import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  CheckCircle2,
  Calculator,
  Wrench,
  Compass,
  Sparkles,
  ShieldCheck,
  ArrowLeft,
  ShoppingBag,
} from 'lucide-react';
import {
  SERVICES,
  SOLUTION_CARDS,
  PRODUCTS,
  Product,
} from '../data/catalog';
import { calculateSpaceHeatingNeeds } from '../utils/shopLogic';

interface ServicesPageProps {
  onAddToCart: (product: Product, quantity?: number) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onAddToCart }) => {
  const [areaSqm, setAreaSqm] = useState<number>(60);
  const [environment, setEnvironment] = useState<
    'open_outdoor' | 'semi_open_pergola' | 'indoor_ventilated'
  >('semi_open_pergola');
  const [usageType, setUsageType] = useState<
    'cafe_restaurant' | 'home_terrace' | 'garden_pool'
  >('cafe_restaurant');
  const [addedCalcToast, setAddedCalcToast] = useState(false);

  const calcResult = calculateSpaceHeatingNeeds(areaSqm, environment, usageType);

  const recommendedProduct =
    PRODUCTS.find((p) => p.category === calcResult.recommendedCategory) ||
    PRODUCTS[0];

  const handleAddRecommended = () => {
    onAddToCart(recommendedProduct, calcResult.recommendedHeatersCount);
    setAddedCalcToast(true);
    setTimeout(() => setAddedCalcToast(false), 2000);
  };

  const icons = [Compass, Wrench, Sparkles, ShieldCheck];

  return (
    <div className="space-y-20 pb-12">
      {/* 1. Page Header Banner (High-Contrast Refined Version of Services Header) */}
      <section className="bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-[1140px] mx-auto text-center space-y-3">
          <p className="text-xs font-extrabold tracking-widest text-orange-400 uppercase">
            GENERAL GAS EGYPT SERVICES
          </p>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
            خدماتنا المتكاملة
          </h1>
          <p className="text-sm sm:text-base text-slate-200 max-w-2xl mx-auto">
            12 عاماً من الخبرة في السوق المصري والشرق الأوسط في استشارات التدفئة، التوريد، التركيب، وخدمات ما بعد البيع.
          </p>
        </div>
      </section>

      {/* 2. General Gas Intro + Dual Field Photos (Matching Reference Layout with High Contrast) */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-2xs">
          <div className="lg:col-span-6 space-y-5">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              General <span className="text-[#D9460F]">Gas</span>
            </h2>
            <p className="text-base text-slate-700 leading-relaxed font-medium">
              12 عاماً من الخبرة في السوق المصري والشرق الأوسط. بفخر، تدعم جنرال غاز
              عملاءها عبر تقديم دفايات عالية الجودة تجمع بين الراحة، الأمان، والتوفير
              في الطاقة، لتكون الخيار الأمثل لكل بيت وفي أي مكان.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {[
                'توفير دفايات مناسبة للشقق والمنازل والفلل.',
                'دفايات مخصصة للأماكن المفتوحة والحدائق.',
                'بيع جميع أنواع دفايات الغاز (جملة وتجزئة).',
                'توفير حلول تدفئة للمطاعم والكافيهات.',
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200 text-sm font-bold text-slate-900"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#D9460F] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="rounded-xl overflow-hidden border border-slate-200 aspect-[3/4]">
              <img
                src="/assets/products/lifestyle-cube-flame.jpg"
                alt="دفاية بوكس جنرال غاز داخل المطاعم"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden border border-slate-200 aspect-[3/4]">
              <img
                src="/assets/products/lifestyle-indoor-pyramid.jpg"
                alt="دفاية هرمية جنرال غاز محفورة بالليزر"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Four Detailed Service Pillars */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-extrabold text-[#C2410C]">
            منظومة العمل في جنرال غاز
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            من المعاينة والاستشارة حتى التركيب والضمان
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((srv, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={srv.id}
                className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between gap-5 shadow-2xs"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-200 text-[#D9460F] flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-extrabold text-slate-900">
                    {srv.number}. {srv.title}
                  </h3>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {srv.fullDescription}
                  </p>
                  <ul className="space-y-1.5 pt-2 text-xs text-slate-700 border-t border-slate-100">
                    {srv.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-1.5">
                        <span className="text-[#D9460F] font-bold">•</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to="/shop"
                  className="inline-flex items-center justify-center gap-1.5 w-full py-2.5 px-4 rounded-lg bg-slate-900 hover:bg-[#D9460F] text-white text-xs font-bold transition-colors"
                >
                  <span>تسوق الآن</span>
                  <ArrowLeft className="w-3.5 h-3.5" />
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Interactive Smart Space Heating Calculator */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 text-xs font-extrabold text-[#C2410C]">
              <Calculator className="w-4 h-4" />
              <span>أداة استشارية فورية</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              حاسبة عدد الدفايات المناسبة لمساحتك
            </h2>
            <p className="text-sm text-slate-700">
              أدخل مساحة المكان بالمتر المربع وطبيعة التهوية لتحصل على توصية هندسية فورية بعدد الدفايات والموديل الأنسب.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div>
                <label
                  htmlFor="calc-area"
                  className="block text-xs font-bold text-slate-800 mb-1.5"
                >
                  المساحة بالمتر المربع (م²):
                </label>
                <input
                  id="calc-area"
                  type="number"
                  min={10}
                  max={500}
                  value={areaSqm}
                  onChange={(e) => setAreaSqm(Number(e.target.value))}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-slate-50 text-slate-900 font-bold font-mono-num focus:outline-none focus:border-[#D9460F]"
                />
              </div>

              <div>
                <label
                  htmlFor="calc-env"
                  className="block text-xs font-bold text-slate-800 mb-1.5"
                >
                  طبيعة المكان:
                </label>
                <select
                  id="calc-env"
                  value={environment}
                  onChange={(e) =>
                    setEnvironment(
                      e.target.value as
                        | 'open_outdoor'
                        | 'semi_open_pergola'
                        | 'indoor_ventilated'
                    )
                  }
                  className="w-full px-3 py-2.5 rounded-lg border border-slate-300 bg-slate-50 text-slate-900 text-xs sm:text-sm font-bold focus:outline-none focus:border-[#D9460F]"
                >
                  <option value="semi_open_pergola">تراس / برجولة شبه مفتوحة</option>
                  <option value="open_outdoor">مساحة مفتوحة بالكامل</option>
                  <option value="indoor_ventilated">صالة مغلقة جيدة التهوية</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="calc-usage"
                  className="block text-xs font-bold text-slate-800 mb-1.5"
                >
                  نوع الاستخدام:
                </label>
                <select
                  id="calc-usage"
                  value={usageType}
                  onChange={(e) =>
                    setUsageType(
                      e.target.value as
                        | 'cafe_restaurant'
                        | 'home_terrace'
                        | 'garden_pool'
                    )
                  }
                  className="w-full px-3 py-2.5 rounded-lg border border-slate-300 bg-slate-50 text-slate-900 text-xs sm:text-sm font-bold focus:outline-none focus:border-[#D9460F]"
                >
                  <option value="cafe_restaurant">كافيه أو مطعم</option>
                  <option value="home_terrace">تراس منزلي / روف</option>
                  <option value="garden_pool">حديقة فيلا / حمام سباحة</option>
                </select>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-slate-900 text-white rounded-2xl p-6 space-y-4 border border-slate-800">
            <div className="flex items-center justify-between border-b border-white/15 pb-3">
              <span className="text-xs font-bold text-orange-400">
                نتيجة التوصية الهندسية
              </span>
              <span className="text-xs font-mono-num text-slate-300">
                القدرة: {calcResult.estimatedTotalPowerKw} kW
              </span>
            </div>

            <div className="flex items-baseline gap-3">
              <span className="text-4xl font-extrabold text-[#FF6B2C] font-mono-num tabular-nums">
                {calcResult.recommendedHeatersCount}
              </span>
              <span className="text-lg font-bold text-white">
                دفاية غاز موصى بها
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
              {calcResult.explanationAr}
            </p>

            <div className="p-3 rounded-lg bg-white/10 text-xs space-y-1">
              <span className="text-slate-300 block">الموديل الأنسب لاحتياجك:</span>
              <span className="font-extrabold text-white block">
                {calcResult.recommendedModelName}
              </span>
            </div>

            <button
              type="button"
              onClick={handleAddRecommended}
              className="w-full py-3 px-4 rounded-xl bg-[#D9460F] hover:bg-orange-600 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>
                {addedCalcToast
                  ? 'تمت إضافة العدد الموصى به للسلة!'
                  : `أضف (${calcResult.recommendedHeatersCount}) من الموديل الموصى به للسلة`}
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* 5. Four Solution Cards (Matching bottom of Services screenshot with high contrast) */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <h2 className="text-2xl font-extrabold text-slate-900 text-center">
          تطبيقات دفايات جنرال غاز
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SOLUTION_CARDS.map((card) => (
            <div
              key={card.id}
              className="relative rounded-2xl overflow-hidden border border-slate-300 aspect-[3/4] flex flex-col justify-end p-6 text-white"
            >
              <img
                src={card.image}
                alt={card.title}
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/75 to-slate-950/30" />
              <div className="relative z-10 space-y-2.5">
                <h3 className="text-lg font-extrabold text-[#FF6B2C]">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-100 leading-relaxed">
                  {card.description}
                </p>
                <Link
                  to={`/shop?category=${card.categoryFilter}`}
                  className="inline-block pt-1 text-xs font-extrabold text-white underline underline-offset-4 hover:text-orange-300"
                >
                  اقرأ المزيد وتسوق الفئة
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
