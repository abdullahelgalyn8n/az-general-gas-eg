import { CategoryId, Product } from '../data/catalog';

export type SortOption =
  | 'featured'
  | 'price-asc'
  | 'price-desc'
  | 'rating-desc'
  | 'newest';

export interface ProductFilterState {
  category: CategoryId;
  minPrice: number;
  maxPrice: number;
  color: 'all' | 'black' | 'white' | 'stainless' | 'bronze';
  onlyInStock: boolean;
  onlyOnSale: boolean;
  searchQuery: string;
  sortBy: SortOption;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CartSummary {
  totalItems: number;
  subtotalEgp: number;
  bulkDiscountEgp: number;
  deliveryFeeEgp: number;
  finalTotalEgp: number;
  qualifiesForBulkDiscount: boolean;
}

export interface OrderFormInput {
  fullName: string;
  phone: string;
  governorate: string;
  address: string;
  clientType: 'home' | 'cafe_restaurant' | 'hotel_club';
  notes?: string;
}

export interface FormValidationResult {
  valid: boolean;
  errors: Partial<Record<keyof OrderFormInput, string>>;
}

export interface HeatingCalculationResult {
  recommendedHeatersCount: number;
  recommendedCategory: CategoryId;
  recommendedModelName: string;
  estimatedTotalPowerKw: number;
  explanationAr: string;
}

export function filterAndSortProducts(
  products: Product[],
  filters: ProductFilterState
): Product[] {
  const query = filters.searchQuery.trim().toLowerCase();

  const filtered = products.filter((item) => {
    if (filters.category !== 'all' && item.category !== filters.category) {
      return false;
    }
    if (item.price < filters.minPrice || item.price > filters.maxPrice) {
      return false;
    }
    if (filters.color !== 'all' && item.color !== filters.color) {
      return false;
    }
    if (filters.onlyInStock && !item.inStock) {
      return false;
    }
    if (filters.onlyOnSale && !item.onSale) {
      return false;
    }
    if (query.length > 0) {
      const haystack =
        `${item.name} ${item.subtitle} ${item.code} ${item.categoryLabel} ${item.description}`.toLowerCase();
      if (!haystack.includes(query)) {
        return false;
      }
    }
    return true;
  });

  const sorted = [...filtered];
  sorted.sort((a, b) => {
    switch (filters.sortBy) {
      case 'price-asc':
        return a.price - b.price;
      case 'price-desc':
        return b.price - a.price;
      case 'rating-desc':
        return b.rating - a.rating || b.reviewCount - a.reviewCount;
      case 'newest':
        return Number(b.isNew) - Number(a.isNew);
      case 'featured':
      default:
        return (
          Number(b.isFeatured) - Number(a.isFeatured) ||
          Number(b.isBestSeller) - Number(a.isBestSeller)
        );
    }
  });

  return sorted;
}

export function calculateCartSummary(items: CartItem[]): CartSummary {
  let totalItems = 0;
  let subtotalEgp = 0;
  let heaterUnitsCount = 0;

  for (const item of items) {
    if (item.quantity <= 0) continue;
    totalItems += item.quantity;
    subtotalEgp += item.product.price * item.quantity;
    if (item.product.category !== 'accessories') {
      heaterUnitsCount += item.quantity;
    }
  }

  // 5% commercial bulk discount when ordering 3 or more heaters
  const qualifiesForBulkDiscount = heaterUnitsCount >= 3;
  const bulkDiscountEgp = qualifiesForBulkDiscount
    ? Math.round(subtotalEgp * 0.05)
    : 0;

  const deliveryFeeEgp = 0; // Free supply & installation on General Gas orders
  const finalTotalEgp = Math.max(0, subtotalEgp - bulkDiscountEgp + deliveryFeeEgp);

  return {
    totalItems,
    subtotalEgp,
    bulkDiscountEgp,
    deliveryFeeEgp,
    finalTotalEgp,
    qualifiesForBulkDiscount,
  };
}

export function validateOrderForm(input: OrderFormInput): FormValidationResult {
  const errors: Partial<Record<keyof OrderFormInput, string>> = {};

  if (!input.fullName || input.fullName.trim().length < 3) {
    errors.fullName = 'يرجى إدخال الاسم بالكامل (3 أحرف على الأقل)';
  }

  const normalizedPhone = (input.phone || '').replace(/[\s-]/g, '');
  if (!/^(\+?20|0)?1[0125]\d{8}$/.test(normalizedPhone)) {
    errors.phone = 'يرجى إدخال رقم هاتف مصري صحيح مكون من 11 رقماً (مثال: 01012345678)';
  }

  if (!input.governorate || input.governorate.trim().length === 0) {
    errors.governorate = 'يرجى اختيار المحافظة';
  }

  if (!input.address || input.address.trim().length < 5) {
    errors.address = 'يرجى كتابة العنوان بالتفصيل لتنسيق التوريد والتركيب';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}

export function calculateSpaceHeatingNeeds(
  areaSqm: number,
  environment: 'open_outdoor' | 'semi_open_pergola' | 'indoor_ventilated',
  usageType: 'cafe_restaurant' | 'home_terrace' | 'garden_pool'
): HeatingCalculationResult {
  const clampedArea = Math.max(10, Math.min(500, Math.round(areaSqm || 25)));

  // Effective coverage per heater depends on wind exposure
  const coveragePerUnit =
    environment === 'open_outdoor'
      ? 20
      : environment === 'semi_open_pergola'
      ? 25
      : 30;

  const recommendedHeatersCount = Math.max(
    1,
    Math.ceil(clampedArea / coveragePerUnit)
  );

  let recommendedCategory: CategoryId = 'box';
  let recommendedModelName = 'دفاية بوكس أسود كود 111';

  if (usageType === 'garden_pool') {
    recommendedCategory = 'pyramid';
    recommendedModelName = 'هرمي استانلس كود 213 أو 4G كود 311';
  } else if (usageType === 'cafe_restaurant' && recommendedHeatersCount >= 3) {
    recommendedCategory = 'commercial';
    recommendedModelName = 'عيش الشتاء بأجواء مختلفة (باقة الكافيهات)';
  } else if (environment === 'open_outdoor' && clampedArea >= 35) {
    recommendedCategory = 'round';
    recommendedModelName = 'دفاية راوند الجديدة كود GG-R200';
  }

  const estimatedTotalPowerKw = Number((recommendedHeatersCount * 13.5).toFixed(1));

  return {
    recommendedHeatersCount,
    recommendedCategory,
    recommendedModelName,
    estimatedTotalPowerKw,
    explanationAr: `لتغطية مساحة ${clampedArea} م² بشكل متوازن وآمن، نوصي بعدد ${recommendedHeatersCount} دفاية بقدرة إجمالية ${estimatedTotalPowerKw} كيلوواط.`,
  };
}

export function formatEgp(amount: number): string {
  return `EGP ${amount.toLocaleString('en-US')}`;
}
