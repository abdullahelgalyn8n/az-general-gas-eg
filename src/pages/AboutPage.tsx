import React from 'react';
import { Link } from 'react-router-dom';
import { Sun, Trophy, Flame, ArrowDownLeft, CheckCircle2 } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="space-y-20 pb-12">
      {/* 1. Page Header Banner */}
      <section className="bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-[1140px] mx-auto text-center space-y-3">
          <p className="text-xs font-extrabold tracking-widest text-orange-400 uppercase">
            ABOUT GENERAL GAS EGYPT
          </p>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
            من نحن
          </h1>
          <p className="text-sm sm:text-base text-slate-200 max-w-2xl mx-auto">
            أكثر من 12 عاماً من الريادة والثقة في تصنيع وتوريد دفايات الغاز عالية الجودة في مصر والشرق الأوسط.
          </p>
        </div>
      </section>

      {/* 2. First Split Section: General Gas Overview + Cube Flame Photo */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-white rounded-2xl border border-slate-200 p-6 sm:p-10">
          <div className="lg:col-span-6 space-y-5 text-right">
            <span className="text-xs font-extrabold text-[#C2410C]">
              قصة نجاح جنرال غاز
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
              جنرال غاز – <span className="text-[#D9460F]">General Gas</span>
            </h2>
            <p className="text-base font-bold text-slate-800">
              جميع أنواع دفايات الغاز
            </p>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              12 عاماً من الخبرة في السوق المصري والشرق الأوسط. بفخر، تدعم جنرال غاز
              عملاءها عبر تقديم دفايات عالية الجودة تجمع بين الراحة، الأمان، والتوفير
              في الطاقة، لتكون الخيار الأمثل لكل بيت وفي أي مكان.
            </p>
            <div className="pt-2">
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-lg bg-slate-900 hover:bg-[#D9460F] text-white font-bold text-sm transition-colors"
              >
                <span>تسوق الآن</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-2xl overflow-hidden border border-slate-200 aspect-[4/3] shadow-sm">
              <img
                src="/assets/products/lifestyle-cube-flame.jpg"
                alt="دفاية جنرال غاز المربعة بلهب رباعي"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Second Split Section: Vision & Mission + General Gas Story (Matching About screenshot with high-contrast text) */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Vision & Mission Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 flex items-start gap-5">
              <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-200 text-amber-600 flex items-center justify-center shrink-0">
                <Sun className="w-7 h-7" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-extrabold text-slate-900">رؤيتنا</h3>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  أن نكون الشركة الرائدة في مجال التدفئة الحديثة والآمنة، عبر توفير
                  حلول متكاملة تمنح كل أسرة أو شركة أو مصنع شعوراً بالدفء والاطمئنان
                  في أماكن تواجدهم أينما كانوا.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 flex items-start gap-5">
              <div className="w-14 h-14 rounded-2xl bg-orange-50 border border-orange-200 text-[#D9460F] flex items-center justify-center shrink-0">
                <Trophy className="w-7 h-7" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-extrabold text-slate-900">مهمتنا</h3>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  الالتزام التام بخدمة كل عميل في السوق المصري والعربي، من خلال توفير
                  دفايات حديثة ومتطورة، عملية وجمالية، تحقق أعلى مستويات الراحة
                  وتساعد في توفير الطاقة بأفضل شكل ممكن.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-6 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Flame className="w-6 h-6 text-[#D9460F]" />
                <span className="font-extrabold text-slate-900 text-base">
                  جميع أنواع دفايات الغاز بضمان معتمد
                </span>
              </div>
              <Link
                to="/shop"
                className="px-6 py-3 rounded-lg bg-slate-900 hover:bg-[#D9460F] text-white font-bold text-sm transition-colors whitespace-nowrap"
              >
                تسوق الآن
              </Link>
            </div>
          </div>

          {/* General Gas Detailed Narrative Column */}
          <div className="lg:col-span-6 bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-200 pb-4">
              <h2 className="text-3xl font-extrabold text-slate-900">
                General Gas
              </h2>
              <ArrowDownLeft className="w-8 h-8 text-slate-900" />
            </div>

            <p className="text-base text-slate-800 leading-relaxed">
              منذ انطلاقتها، حرصت جنرال غاز على بناء ثقة قوية مع عملائها من خلال
              الالتزام بأعلى معايير الجودة وخدمات ما بعد البيع المميزة. نحن لا نقدم
              منتجاً فقط، بل نقدم تجربة متكاملة تهدف إلى تحقيق أقصى درجات الراحة
              والاطمئنان لعملائنا.
            </p>

            <p className="text-base text-slate-700 leading-relaxed">
              بفضل فريق عمل متخصص وخبرة تمتد لأكثر من 12 عاماً، استطعنا أن نكون جزءاً
              من آلاف البيوت والمطاعم والكافيهات، مقدمين حلول تدفئة عصرية وآمنة
              تلائم جميع الاحتياجات والمساحات. رؤيتنا أن نكون دائماً الشريك الأول
              للعملاء في توفير منتجات مبتكرة وموثوقة تضيف قيمة حقيقية لحياتهم
              اليومية.
            </p>

            <div className="pt-2 space-y-2.5 border-t border-slate-100">
              {[
                'اختبار فردي لكل دفاية قبل الخروج من المصنع للتأكد من كفاءة الشعلة والأمان',
                'دهانات إلكتروستاتيك معالجة حرارياً لمقاومة الصدأ والعوامل الجوية',
                'فريق صيانة متنقل ودعم فني سريع لجميع عملاء الكافيهات والمنازل',
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-800"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Bottom Collage & Dark Statement Block (Matching bottom of About screenshot) */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
            <div className="rounded-2xl overflow-hidden border border-slate-200 aspect-[4/3]">
              <img
                src="/assets/products/lifestyle-cube-flame.jpg"
                alt="دفاية جنرال غاز المربعة"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden border border-slate-200 aspect-[4/3]">
              <img
                src="/assets/products/lifestyle-closeup-burner.jpg"
                alt="تفاصيل حوض اللهب وأحجار اللافا في دفايات جنرال غاز"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-7 bg-slate-950 text-white rounded-2xl p-8 sm:p-14 flex flex-col justify-center text-center space-y-6 border border-slate-800">
            <h2 className="text-3xl sm:text-4xl font-extrabold">
              General-<span className="text-[#FF6B2C]">Gas</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-xl mx-auto">
              منذ تأسيسها، حرصت جنرال غاز على أن تكون شريكاً موثوقاً في مجال حلول
              التدفئة بالغاز داخل مصر والشرق الأوسط. نحن نؤمن أن الدفء ليس مجرد
              رفاهية، بل حاجة أساسية تكتمل معها الراحة في المنازل، الكافيهات،
              المطاعم، والحدائق.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <Link
                to="/shop"
                className="px-7 py-3 rounded-lg bg-[#D9460F] hover:bg-orange-600 text-white font-bold text-sm transition-colors"
              >
                استعرض جميع الدفايات
              </Link>
              <Link
                to="/contact"
                className="px-7 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white font-bold text-sm transition-colors border border-white/20"
              >
                تواصل معنا الآن
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
