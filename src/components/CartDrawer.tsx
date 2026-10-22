import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  X,
  Plus,
  Minus,
  Trash2,
  ShoppingBag,
  CheckCircle2,
  ShieldCheck,
  Truck,
} from 'lucide-react';
import {
  CartItem,
  calculateCartSummary,
  formatEgp,
  validateOrderForm,
  OrderFormInput,
} from '../utils/shopLogic';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
}

const EGYPT_GOVERNORATES = [
  'القاهرة',
  'الجيزة',
  'الإسكندرية',
  'القليوبية',
  'الشرقية',
  'الدقهلية',
  'الغربية',
  'المنوفية',
  'البحيرة',
  'كفر الشيخ',
  'دمياط',
  'بورسعيد',
  'الإسماعيلية',
  'السويس',
  'مطروح / الساحل الشمالي',
  'البحر الأحمر / الغردقة',
  'جنوب سيناء / شرم الشيخ',
  'الفيوم',
  'بني سويف',
  'المنيا',
  'أسيوط',
  'سوهاج',
  'قنا',
  'الأقصر',
  'أسوان',
];

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [step, setStep] = useState<'cart' | 'checkout' | 'confirmed'>('cart');
  const [orderNumber, setOrderNumber] = useState<string>('');
  const [submittedSnapshot, setSubmittedSnapshot] = useState<{
    totalEgp: number;
    customerName: string;
    phone: string;
    governorate: string;
  } | null>(null);

  const [form, setForm] = useState<OrderFormInput>({
    fullName: '',
    phone: '',
    governorate: 'القاهرة',
    address: '',
    clientType: 'home',
    notes: '',
  });
  const [errors, setErrors] = useState<Partial<Record<keyof OrderFormInput, string>>>({});

  if (!isOpen) return null;

  const summary = calculateCartSummary(items);

  const handleConfirmOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateOrderForm(form);
    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }
    setErrors({});
    const generatedId = `GG-${Math.floor(10000 + Math.random() * 90000)}`;
    setOrderNumber(generatedId);
    setSubmittedSnapshot({
      totalEgp: summary.finalTotalEgp,
      customerName: form.fullName,
      phone: form.phone,
      governorate: form.governorate,
    });
    onClearCart();
    setStep('confirmed');
  };

  const handleCloseDrawer = () => {
    if (step === 'confirmed') {
      setStep('cart');
    }
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-slate-950/60 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-label="سلة المشتريات وإتمام الطلب"
    >
      <div className="relative w-full max-w-lg bg-white h-full flex flex-col shadow-2xl border-r border-slate-200">
        {/* Drawer Header */}
        <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-2.5">
            <ShoppingBag className="w-5 h-5 text-[#D9460F]" />
            <h2 className="text-lg font-extrabold text-slate-900">
              {step === 'cart' && 'سلة مشتريات جنرال غاز'}
              {step === 'checkout' && 'بيانات التوريد والتركيب'}
              {step === 'confirmed' && 'تم تأكيد طلبك بنجاح'}
            </h2>
          </div>
          <button
            type="button"
            onClick={handleCloseDrawer}
            aria-label="إغلاق السلة"
            className="p-2 rounded-lg text-slate-600 hover:text-slate-950 hover:bg-slate-200/70 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Body */}
        <div className="flex-1 overflow-y-auto p-6">
          {step === 'confirmed' && submittedSnapshot ? (
            <div className="py-8 text-center space-y-5">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <div className="space-y-2">
                <p className="text-xs font-bold text-emerald-700">
                  تم تسجيل طلب التوريد والتركيب
                </p>
                <h3 className="text-2xl font-extrabold text-slate-900 font-mono-num">
                  طلب رقم #{orderNumber}
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  شكراً لك أ/ <span className="font-bold">{submittedSnapshot.customerName}</span>.
                  سيتواصل معك مهندس المبيعات والتوريد على الرقم{' '}
                  <span className="font-mono-num font-bold">{submittedSnapshot.phone}</span>{' '}
                  خلال 30 دقيقة لتأكيد موعد التسليم والتركيب في{' '}
                  <span className="font-bold">{submittedSnapshot.governorate}</span>.
                </p>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-right space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-600">إجمالي الطلب المعتمد:</span>
                  <span className="font-extrabold text-[#C2410C] font-mono-num">
                    {formatEgp(submittedSnapshot.totalEgp)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">طريقة السداد:</span>
                  <span className="font-bold text-slate-900">
                    الدفع عند الاستلام والتركيب وتجربة التشغيل
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={handleCloseDrawer}
                className="w-full py-3 rounded-lg bg-slate-900 hover:bg-[#D9460F] text-white font-bold text-sm transition-colors cursor-pointer"
              >
                العودة للتصفح
              </button>
            </div>
          ) : items.length === 0 ? (
            <div className="py-16 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center mx-auto">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-bold text-slate-900">
                  سلة المشتريات فارغة حالياً
                </h3>
                <p className="text-sm text-slate-600">
                  استعرض دفايات جنرال غاز الهرمية والمربعة والراوند وأضف الموديل المناسب لمساحتك.
                </p>
              </div>
              <Link
                to="/shop"
                onClick={onClose}
                className="inline-block px-6 py-2.5 rounded-lg bg-[#D9460F] hover:bg-orange-700 text-white font-bold text-sm transition-colors"
              >
                تصفح المتجر الآن
              </Link>
            </div>
          ) : step === 'cart' ? (
            <div className="space-y-5">
              {/* Bulk Commercial Discount Callout */}
              <div className="p-3.5 rounded-lg bg-orange-50 border border-orange-200 text-xs text-slate-800 flex items-center justify-between gap-2">
                <span>
                  {summary.qualifiesForBulkDiscount
                    ? 'تم تفعيل خصم الكافيهات والكميات (5%) على طلبك تلقائياً!'
                    : 'اطلب 3 دفايات أو أكثر واحصل على خصم 5% فوري للكافيهات والمشاريع.'}
                </span>
                <ShieldCheck className="w-4 h-4 text-[#D9460F] shrink-0" />
              </div>

              {/* Cart Items List */}
              <div className="divide-y divide-slate-200">
                {items.map(({ product, quantity }) => (
                  <div key={product.id} className="py-4 flex gap-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      referrerPolicy="no-referrer"
                      className="w-20 h-24 object-cover rounded-lg border border-slate-200 bg-slate-100 shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <Link
                          to={`/product/${product.slug}`}
                          onClick={onClose}
                          className="text-sm font-bold text-slate-900 hover:text-[#D9460F] line-clamp-1"
                        >
                          {product.name}
                        </Link>
                        <button
                          type="button"
                          onClick={() => onRemoveItem(product.id)}
                          aria-label={`حذف ${product.name}`}
                          className="text-slate-400 hover:text-red-600 p-1 cursor-pointer"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="text-xs text-slate-600 mt-0.5 font-mono-num">
                        {product.code} · {product.colorLabel}
                      </p>
                      <div className="mt-3 flex items-center justify-between">
                        <div className="inline-flex items-center border border-slate-300 rounded-lg bg-white">
                          <button
                            type="button"
                            onClick={() => onUpdateQuantity(product.id, quantity - 1)}
                            aria-label={`تقليل كمية ${product.name}`}
                            className="p-1.5 text-slate-700 hover:bg-slate-100 cursor-pointer"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="px-3 text-xs font-bold font-mono-num tabular-nums text-slate-900">
                            {quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => onUpdateQuantity(product.id, quantity + 1)}
                            aria-label={`زيادة كمية ${product.name}`}
                            className="p-1.5 text-slate-700 hover:bg-slate-100 cursor-pointer"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <span className="text-sm font-extrabold text-slate-900 font-mono-num tabular-nums">
                          {formatEgp(product.price * quantity)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <form id="checkout-form" onSubmit={handleConfirmOrder} className="space-y-4">
              <div>
                <label
                  htmlFor="order-fullname"
                  className="block text-xs font-bold text-slate-800 mb-1"
                >
                  الاسم بالكامل *
                </label>
                <input
                  id="order-fullname"
                  type="text"
                  value={form.fullName}
                  onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                  placeholder="مثال: م. محمد عبد الرحمن"
                  className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:border-[#D9460F]"
                />
                {errors.fullName && (
                  <p className="text-xs text-red-600 font-semibold mt-1">
                    {errors.fullName}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="order-phone"
                  className="block text-xs font-bold text-slate-800 mb-1"
                >
                  رقم الهاتف / الواتساب *
                </label>
                <input
                  id="order-phone"
                  type="tel"
                  dir="ltr"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="01012345678"
                  className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg text-slate-900 text-right font-mono-num focus:outline-none focus:border-[#D9460F]"
                />
                {errors.phone && (
                  <p className="text-xs text-red-600 font-semibold mt-1">
                    {errors.phone}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label
                    htmlFor="order-gov"
                    className="block text-xs font-bold text-slate-800 mb-1"
                  >
                    المحافظة *
                  </label>
                  <select
                    id="order-gov"
                    value={form.governorate}
                    onChange={(e) => setForm({ ...form, governorate: e.target.value })}
                    className="w-full px-3 py-2.5 text-sm bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:border-[#D9460F]"
                  >
                    {EGYPT_GOVERNORATES.map((gov) => (
                      <option key={gov} value={gov}>
                        {gov}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="order-type"
                    className="block text-xs font-bold text-slate-800 mb-1"
                  >
                    طبيعة المكان
                  </label>
                  <select
                    id="order-type"
                    value={form.clientType}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        clientType: e.target.value as OrderFormInput['clientType'],
                      })
                    }
                    className="w-full px-3 py-2.5 text-sm bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:border-[#D9460F]"
                  >
                    <option value="home">منزل / فيلا / تراس</option>
                    <option value="cafe_restaurant">كافيه / مطعم تجاري</option>
                    <option value="hotel_club">فندق / نادي / قرية سياحية</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="order-address"
                  className="block text-xs font-bold text-slate-800 mb-1"
                >
                  العنوان بالتفصيل (لتنسيق التوريد والتركيب) *
                </label>
                <textarea
                  id="order-address"
                  rows={2}
                  value={form.address}
                  onChange={(e) => setForm({ ...form, address: e.target.value })}
                  placeholder="الحي، الشارع، رقم العقار أو اسم الكافيه/المطعم..."
                  className="w-full px-3.5 py-2 text-sm bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:border-[#D9460F]"
                />
                {errors.address && (
                  <p className="text-xs text-red-600 font-semibold mt-1">
                    {errors.address}
                  </p>
                )}
              </div>

              <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-700 flex items-center gap-2.5">
                <Truck className="w-5 h-5 text-[#D9460F] shrink-0" />
                <span>
                  يشمل الطلب فحص صمامات الأمان والتركيب الميداني مع ضمان جنرال غاز المعتمد والدفع عند الاستلام.
                </span>
              </div>
            </form>
          )}
        </div>

        {/* Drawer Footer */}
        {items.length > 0 && step !== 'confirmed' && (
          <div className="p-6 border-t border-slate-200 bg-slate-50 space-y-4">
            <div className="space-y-1.5 text-sm">
              <div className="flex justify-between text-slate-700">
                <span>المجموع الفرعي ({summary.totalItems} قطعة):</span>
                <span className="font-bold font-mono-num tabular-nums">
                  {formatEgp(summary.subtotalEgp)}
                </span>
              </div>
              {summary.bulkDiscountEgp > 0 && (
                <div className="flex justify-between text-emerald-700 font-semibold">
                  <span>خصم الكافيهات والكميات (5%):</span>
                  <span className="font-mono-num tabular-nums">
                    - {formatEgp(summary.bulkDiscountEgp)}
                  </span>
                </div>
              )}
              <div className="flex justify-between text-slate-700">
                <span>خدمة التوريد وفحص الأمان:</span>
                <span className="text-emerald-700 font-bold">مجاناً</span>
              </div>
              <div className="pt-2 border-t border-slate-200 flex justify-between text-base font-extrabold text-slate-900">
                <span>الإجمالي النهائي:</span>
                <span className="text-[#C2410C] font-mono-num tabular-nums">
                  {formatEgp(summary.finalTotalEgp)}
                </span>
              </div>
            </div>

            {step === 'cart' ? (
              <button
                type="button"
                onClick={() => setStep('checkout')}
                className="w-full py-3.5 rounded-lg bg-[#D9460F] hover:bg-orange-700 text-white font-bold text-sm transition-colors cursor-pointer shadow-xs"
              >
                متابعة لإتمام طلب التوريد والتركيب
              </button>
            ) : (
              <div className="flex gap-2.5">
                <button
                  type="button"
                  onClick={() => setStep('cart')}
                  className="px-4 py-3 rounded-lg border border-slate-300 bg-white text-slate-800 font-bold text-sm hover:bg-slate-100 cursor-pointer"
                >
                  رجوع للسلة
                </button>
                <button
                  type="submit"
                  form="checkout-form"
                  className="flex-1 py-3 rounded-lg bg-slate-900 hover:bg-[#D9460F] text-white font-bold text-sm transition-colors cursor-pointer"
                >
                  تأكيد الطلب الآن
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
