import React, { useState } from 'react';
import {
  Phone,
  MapPin,
  MessageCircle,
  Share2,
  Clock,
  CheckCircle2,
  Send,
} from 'lucide-react';
import { COMPANY_INFO } from '../data/catalog';

export const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('طلب عرض سعر لتجهيز كافيه / مطعم');
  const [message, setMessage] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim().length < 3) {
      setErrorMsg('يرجى كتابة الاسم بالكامل (3 أحرف على الأقل)');
      return;
    }
    const cleanPhone = phone.replace(/[\s-]/g, '');
    if (!/^(\+?20|0)?1[0125]\d{8}$/.test(cleanPhone)) {
      setErrorMsg('يرجى إدخال رقم هاتف مصري صحيح (مثال: 01012345678)');
      return;
    }
    if (message.trim().length < 5) {
      setErrorMsg('يرجى كتابة تفاصيل استفسارك أو مساحة المكان المطلوب تدفئته');
      return;
    }
    setErrorMsg('');
    setSubmitted(true);
  };

  return (
    <div className="space-y-16 pb-12">
      {/* 1. Page Header Banner */}
      <section className="bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-[1140px] mx-auto text-center space-y-3">
          <p className="text-xs font-extrabold tracking-widest text-orange-400 uppercase">
            CONTACT GENERAL GAS EGYPT
          </p>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
            اتصل بنا
          </h1>
          <p className="text-sm sm:text-base text-slate-200 max-w-2xl mx-auto">
            تواصل مباشرة مع فريق مبيعات وصيانة جنرال غاز لطلبات التوريد والتركيب وعروض أسعار الكافيهات والمطاعم والمنازل.
          </p>
        </div>
      </section>

      {/* 2. Contact Channels + Interactive Form */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Direct Contact Info Cards (Fixing the empty Phone/Facebook placeholders from the screenshot) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-extrabold text-slate-900">
                اتصل <span className="text-[#D9460F]">بنا</span>
              </h2>
              <p className="text-sm text-slate-700 leading-relaxed">
                يسعدنا الرد على كافة استفساراتكم حول موديلات الدفايات، الأسعار، طلبات الجملة، وخدمات الصيانة وقطع الغيار.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              <div className="bg-white rounded-xl border border-slate-200 p-5 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-200 text-[#D9460F] flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-extrabold text-slate-900">
                    المبيعات والتوريد الفوري (Phone)
                  </h3>
                  <p
                    dir="ltr"
                    className="text-base font-extrabold text-[#C2410C] font-mono-num text-right"
                  >
                    {COMPANY_INFO.phonePrimary} · {COMPANY_INFO.phoneSecondary}
                  </p>
                  <p className="text-xs text-slate-600">
                    متاح لطلبات الأفراد والتوريد التجاري للكافيهات والمطاعم
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-slate-200 p-5 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-extrabold text-slate-900">
                    واتساب خدمة العملاء (WhatsApp)
                  </h3>
                  <p
                    dir="ltr"
                    className="text-base font-extrabold text-emerald-700 font-mono-num text-right"
                  >
                    +{COMPANY_INFO.whatsappNumber}
                  </p>
                  <p className="text-xs text-slate-600">
                    أرسل مساحة مكانك أو صور التراس وسنرشح لك الموديل الأنسب فوراً
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-slate-200 p-5 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 text-blue-700 flex items-center justify-center shrink-0">
                  <Share2 className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-extrabold text-slate-900">
                    الصفحات الرسمية (Facebook & Instagram)
                  </h3>
                  <p className="text-sm font-bold text-slate-900 font-mono-num">
                    @{COMPANY_INFO.facebookHandle}
                  </p>
                  <p className="text-xs text-slate-600">
                    شاهد فيديوهات التشغيل الحية في كبرى الكافيهات والمطاعم
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-slate-200 p-5 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-300 text-slate-800 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-extrabold text-slate-900">
                    المقر ونطاق التغطية
                  </h3>
                  <p className="text-xs sm:text-sm font-bold text-slate-800">
                    {COMPANY_INFO.addressAr}
                  </p>
                  <p className="text-xs text-slate-600 flex items-center gap-1 pt-0.5">
                    <Clock className="w-3.5 h-3.5 text-[#D9460F]" />
                    <span>{COMPANY_INFO.workingHours}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quote & Inquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-xs">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900">
                  تم استلام رسالتك بنجاح
                </h3>
                <p className="text-sm text-slate-700 max-w-md mx-auto leading-relaxed">
                  شكراً لتواصلك مع جنرال غاز أ/ <span className="font-bold">{name}</span>.
                  سيقوم فريق المبيعات والدعم الفني بالتواصل معك على الرقم{' '}
                  <span className="font-mono-num font-bold">{phone}</span> في أقرب وقت.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setName('');
                    setPhone('');
                    setMessage('');
                  }}
                  className="px-6 py-2.5 rounded-lg bg-slate-900 hover:bg-[#D9460F] text-white font-bold text-sm transition-colors cursor-pointer"
                >
                  إرسال استفسار آخر
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="border-b border-slate-200 pb-4">
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                    اطلب عرض سعر أو معاينة فنية
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    املأ البيانات التالية وسيتواصل معك مختص التدفئة من جنرال غاز فوراً.
                  </p>
                </div>

                {errorMsg && (
                  <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-xs font-bold text-red-700">
                    {errorMsg}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-bold text-slate-800 mb-1.5"
                    >
                      الاسم بالكامل *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="الاسم أو اسم الشركة/الكافيه"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:border-[#D9460F]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="block text-xs font-bold text-slate-800 mb-1.5"
                    >
                      رقم الموبايل / واتساب *
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      dir="ltr"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="01012345678"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 text-sm text-right font-mono-num focus:outline-none focus:border-[#D9460F]"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block text-xs font-bold text-slate-800 mb-1.5"
                  >
                    نوع الطلب
                  </label>
                  <select
                    id="contact-subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 text-sm font-bold focus:outline-none focus:border-[#D9460F]"
                  >
                    <option value="طلب عرض سعر لتجهيز كافيه / مطعم">
                      طلب عرض سعر لتجهيز كافيه / مطعم (خصومات الجملة)
                    </option>
                    <option value="شراء دفاية للمنزل أو الفيلا">
                      شراء دفاية للمنزل أو الفيلا مع التوريد والتركيب
                    </option>
                    <option value="طلب صيانة أو قطع غيار أصلية">
                      طلب صيانة أو قطع غيار أصلية (زجاج بيركس / منظم غاز)
                    </option>
                    <option value="استفسار عام">استفسار فني عام</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-bold text-slate-800 mb-1.5"
                  >
                    تفاصيل الرسالة أو المساحة المطلوب تدفئتها *
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="اكتب الموديل المطلوب أو مساحة المكان والمحافظة..."
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:border-[#D9460F]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-[#D9460F] hover:bg-orange-700 text-white font-extrabold text-sm sm:text-base flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-xs"
                >
                  <Send className="w-4 h-4" />
                  <span>إرسال الطلب الآن</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
