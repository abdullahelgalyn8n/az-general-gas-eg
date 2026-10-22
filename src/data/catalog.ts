export type CategoryId =
  | 'all'
  | 'pyramid'
  | 'box'
  | 'round'
  | 'commercial'
  | 'accessories';

export interface CategoryInfo {
  id: CategoryId;
  slug: string;
  name: string;
  shortName: string;
  description: string;
  iconName: string;
}

export interface Product {
  id: string;
  slug: string;
  code: string;
  name: string;
  subtitle: string;
  category: Exclude<CategoryId, 'all'>;
  categoryLabel: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  image: string;
  gallery: string[];
  color: 'black' | 'white' | 'stainless' | 'bronze';
  colorLabel: string;
  inStock: boolean;
  onSale: boolean;
  isFeatured: boolean;
  isBestSeller: boolean;
  isNew: boolean;
  badgeText?: string;
  coverageAreaSqm: number;
  powerKw: number;
  consumptionGramPerHour: string;
  dimensionsCm: string;
  material: string;
  safetyFeatures: string[];
  idealFor: string[];
  description: string;
}

export interface ServiceItem {
  id: string;
  slug: string;
  number: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  highlights: string[];
  deliverables: string[];
  ctaText: string;
}

export interface SolutionCard {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  categoryFilter: CategoryId;
  specs: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  date: string;
  readTime: string;
  category: string;
  excerpt: string;
  image: string;
  content: string[];
  keyTakeaways: string[];
}

export const CATEGORIES: CategoryInfo[] = [
  {
    id: 'all',
    slug: 'all',
    name: 'جميع منتجات جنرال غاز',
    shortName: 'الكل',
    description: 'تشكيلة كاملة من دفايات الغاز الهرمية والمربعة والراوند ومستلزمات الأمان الأصلية',
    iconName: 'Flame',
  },
  {
    id: 'pyramid',
    slug: 'pyramid-heaters',
    name: 'الدفايات الهرمية',
    shortName: 'الدفايات الهرمية',
    description: 'تصميم عصري أنيق يجمع بين التدفئة القوية والإضاءة الجذابة بلهب مرئي داخل أنبوب بيركس حراري',
    iconName: 'Triangle',
  },
  {
    id: 'box',
    slug: 'box-square-heaters',
    name: 'الدفايات المربعة والبوكس',
    shortName: 'المربعة والبوكس',
    description: 'تصميم عملي وأنيق يوفر تدفئة فعالة بزاوية 360 درجة وثبات عالٍ واستهلاك اقتصادي للغاز',
    iconName: 'Box',
  },
  {
    id: 'round',
    slug: 'round-patio-heaters',
    name: 'دفايات الراوند والمشروم',
    shortName: 'الراوند والمشروم',
    description: 'توزيع حراري دائري واسع النطاق مثالي للحدائق والتراسات المفتوحة والمطاعم الكبرى',
    iconName: 'CircleDot',
  },
  {
    id: 'commercial',
    slug: 'commercial-packages',
    name: 'باقات الكافيهات والمطاعم',
    shortName: 'باقات الكافيهات',
    description: 'حلول متكاملة لتجهيز الكافيهات والمطاعم والفنادق مع التوريد والتركيب والضمان الشامل',
    iconName: 'Store',
  },
  {
    id: 'accessories',
    slug: 'safety-accessories',
    name: 'قطع الغيار وأنظمة الأمان',
    shortName: 'قطع الغيار والأمان',
    description: 'منظمات غاز إيطالية أصلية، زجاج بيركس حراري، وصمامات أمان وجرابات حماية',
    iconName: 'ShieldCheck',
  },
];

export const PRODUCTS: Product[] = [
  {
    id: 'prod-111',
    slug: 'box-heater-black-111',
    code: 'GG-111',
    name: 'دفاية بوكس أسود كود 111',
    subtitle: 'تصميم هندسي مربع بزجاج رباعي وأحجار لافا حرارية لتوزيع دفء متوازن 360 درجة',
    category: 'box',
    categoryLabel: 'الدفايات المربعة والبوكس',
    price: 11000,
    originalPrice: 12000,
    rating: 4.9,
    reviewCount: 48,
    image: '/assets/products/prod-box-black-111.jpg',
    gallery: [
      '/assets/products/prod-box-black-111.jpg',
      '/assets/products/lifestyle-cube-flame.jpg',
      '/assets/products/lifestyle-lava-stones.jpg',
    ],
    color: 'black',
    colorLabel: 'أسود مطفي إلكتروستاتيك',
    inStock: true,
    onSale: true,
    isFeatured: true,
    isBestSeller: true,
    isNew: true,
    badgeText: 'خصم 8%',
    coverageAreaSqm: 25,
    powerKw: 13.5,
    consumptionGramPerHour: '450 - 780 جم/ساعة',
    dimensionsCm: '45 × 45 × 135 سم',
    material: 'صلب معالج ومطلي إلكتروستاتيك مقاوم للعوامل الجوية + زجاج سيكوريت حراري',
    safetyFeatures: [
      'صمام أمان أوتوماتيكي يفصل الغاز فورياً عند انطفاء الشعلة',
      'حساس ميلان يفصل التشغيل تلقائياً في حالة الاهتزاز أو السقوط',
      'زجاج حراري مقوى يتحمل حتى 750 درجة مئوية',
      'غرفة مدمجة محكمة لحفظ أسطوانة الغاز بالداخل بأمان تام',
    ],
    idealFor: ['الكافيهات والمطاعم', 'التراسات والروف', 'الفلل والحدائق المنزلية'],
    description:
      'دفاية بوكس أسود كود 111 من جنرال غاز تجمع بين الفخامة المعمارية والكفاءة الحرارية الفائقة. تعمل بأحجار اللافا البركانية التي تحتفظ بالحرارة وتوزعها بهدوء في كافة الاتجاهات مع مشهد لهب طبيعي يضفي أجواءً راقية لأي مكان مفتوح أو شبه مغلق.',
  },
  {
    id: 'prod-round-new',
    slug: 'new-round-heater',
    code: 'GG-R200',
    name: 'دفاية راوند الجديدة',
    subtitle: 'أقوى تدفئة محيطية بلهب أسطواني مركزي وعاكس حراري علوي واسع الانتشار',
    category: 'round',
    categoryLabel: 'دفايات الراوند والمشروم',
    price: 15000,
    rating: 5.0,
    reviewCount: 62,
    image: '/assets/products/prod-round-new.jpg',
    gallery: [
      '/assets/products/prod-round-new.jpg',
      '/assets/products/lifestyle-evening-patio.jpg',
      '/assets/products/lifestyle-outdoor-cafe.jpg',
    ],
    color: 'black',
    colorLabel: 'أسود ملكي مقاوم للصدأ',
    inStock: true,
    onSale: false,
    isFeatured: true,
    isBestSeller: true,
    isNew: true,
    badgeText: 'الأعلى كفاءة',
    coverageAreaSqm: 35,
    powerKw: 15.0,
    consumptionGramPerHour: '500 - 850 جم/ساعة',
    dimensionsCm: 'قطر 55 × ارتفاع 215 سم',
    material: 'هيكل أسطواني فولاذي ثقيل + أنبوب بيركس حراري فائق النقاء + عاكس ألومنيوم نقي',
    safetyFeatures: [
      'نظام إشعال إلكتروني بضغطة زر واحدة (Piezo Ignition)',
      'صمام أمان إيطالي ضد التسريب وانطفاء اللهب',
      'شبكة حماية مزدوجة من الاستانلس ستيل حول أنبوب اللهب',
      'عجلات سفلية مخفية لسهولة التحريك والنقل بأمان',
    ],
    idealFor: ['المطاعم الفاخرة والفنادق', 'حمامات السباحة والنوادي', 'المساحات المفتوحة الكبيرة'],
    description:
      'دفاية راوند الجديدة هي الإصدار الأحدث والأقوى من جنرال غاز للمساحات الواسعة. بفضل تصميمها الأسطواني الانسيابي والعاكس العلوي العريض، تمنحك دائرة دفء تصل إلى 35 متراً مربعاً مع مظهر جمالي يخطف الأنظار في الأمسيات الشتوية.',
  },
  {
    id: 'prod-general-gas-box',
    slug: 'general-gas-signature-heater',
    code: 'GG-105',
    name: 'دفاية جنرال غاز سيجنتشر (General Gas)',
    subtitle: 'الموديل الأكثر اعتمادية للكافيهات والتراسات بتصميم عملي واقتصادي في استهلاك الغاز',
    category: 'box',
    categoryLabel: 'الدفايات المربعة والبوكس',
    price: 10000,
    rating: 4.9,
    reviewCount: 94,
    image: '/assets/products/prod-general-gas-box.jpg',
    gallery: [
      '/assets/products/prod-general-gas-box.jpg',
      '/assets/products/lifestyle-outdoor-cafe.jpg',
      '/assets/products/lifestyle-cube-flame.jpg',
    ],
    color: 'black',
    colorLabel: 'أسود مطفي',
    inStock: true,
    onSale: false,
    isFeatured: true,
    isBestSeller: true,
    isNew: false,
    badgeText: 'الأكثر مبيعاً',
    coverageAreaSqm: 22,
    powerKw: 12.5,
    consumptionGramPerHour: '400 - 700 جم/ساعة',
    dimensionsCm: '42 × 42 × 130 سم',
    material: 'صاج مجلفن معالج حرارياً بدهان إلكتروستاتيك + واجهة زجاج حراري رباعي',
    safetyFeatures: [
      'صمام أمان لفصل الغاز أوتوماتيكياً',
      'تدريج للتحكم الدقيق في مستوى ارتفاع الشعلة ودرجة التدفئة',
      'قاعدة متزنة ضد الرياح والتيارات الهوائية',
    ],
    idealFor: ['الكافيهات والمطاعم', 'البلكونات والتراسات', 'الاستخدام اليومي المكثف'],
    description:
      'دفاية جنرال غاز سيجنتشر هي الاختيار الأول لمئات الكافيهات والمطاعم في مصر. تجمع بين السعر الاقتصادي، المتانة الفائقة للخدمة الشاقة، والتوفير الملحوظ في استهلاك أسطوانة الغاز على مدار ساعات التشغيل الطويلة.',
  },
  {
    id: 'prod-pyramid-211',
    slug: 'pyramid-black-mesh-211',
    code: 'GG-211',
    name: 'هرمي شبك أسود كود 211',
    subtitle: 'دفاية هرمية بشبكة حماية سوداء متينة وأنبوب لهب طولي يمنح دفئاً وإضاءة ساحرة',
    category: 'pyramid',
    categoryLabel: 'الدفايات الهرمية',
    price: 10500,
    rating: 4.8,
    reviewCount: 57,
    image: '/assets/products/prod-pyramid-mesh-211.jpg',
    gallery: [
      '/assets/products/prod-pyramid-mesh-211.jpg',
      '/assets/products/lifestyle-indoor-pyramid.jpg',
    ],
    color: 'black',
    colorLabel: 'أسود إلكتروستاتيك',
    inStock: true,
    onSale: false,
    isFeatured: true,
    isBestSeller: true,
    isNew: true,
    coverageAreaSqm: 28,
    powerKw: 13.0,
    consumptionGramPerHour: '450 - 800 جم/ساعة',
    dimensionsCm: '52 × 52 × 225 سم',
    material: 'فولاذ معالج + شبك حماية صلب + أنبوب زجاج حراري بيركس مقاوم للصدمات الحرارية',
    safetyFeatures: [
      'أمان كامل ضد الميلان أو الانقلاب',
      'حساس فصل غاز أوتوماتيكي عند انطفاء الشعلة',
      'شبك خارجي عازل للحماية من التلامس المباشر',
    ],
    idealFor: ['حول حمامات السباحة', 'الحدائق والفلل', 'مداخل المطاعم والفنادق'],
    description:
      'الدفاية الهرمية شبك أسود كود 211 تتميز بارتفاعها المهيب (225 سم) وأنبوب اللهب المرئي الذي يخلق أجواءً دافئة وجذابة بصرياً، مع هيكل معدني مقاوم للرطوبة والصدأ يناسب الأجواء المفتوحة.',
  },
  {
    id: 'prod-pyramid-213',
    slug: 'pyramid-stainless-213',
    code: 'GG-213',
    name: 'هرمي استانلس كود 213',
    subtitle: 'تصميم هرمي فاخر من الاستانلس ستيل المقاوم للصدأ والتآكل للأماكن الساحلية والراقية',
    category: 'pyramid',
    categoryLabel: 'الدفايات الهرمية',
    price: 10500,
    rating: 4.9,
    reviewCount: 66,
    image: '/assets/products/prod-pyramid-stainless-213.jpg',
    gallery: [
      '/assets/products/prod-pyramid-stainless-213.jpg',
      '/assets/products/lifestyle-indoor-pyramid.jpg',
    ],
    color: 'stainless',
    colorLabel: 'استانلس ستيل فضي وأسود',
    inStock: true,
    onSale: false,
    isFeatured: true,
    isBestSeller: true,
    isNew: false,
    badgeText: 'الأكثر طلباً',
    coverageAreaSqm: 28,
    powerKw: 13.0,
    consumptionGramPerHour: '450 - 800 جم/ساعة',
    dimensionsCm: '52 × 52 × 225 سم',
    material: 'استانلس ستيل 304 مقاوم للصدأ والعوامل الجوية + أنبوب بيركس حراري',
    safetyFeatures: [
      'مقاومة مضاعفة للرطوبة والأملاح في المناطق الساحلية',
      'صمام أمان أوتوماتيكي وحساس ميلان',
      'إشعال ذاتي آمن وسريع مع تحكم متدرج في الحرارة',
    ],
    idealFor: ['القرى السياحية والساحل', 'الكافيهات المفتوحة', 'تراسات الفنادق'],
    description:
      'دفاية هرمي استانلس كود 213 مصممة خصيصاً لتجمع بين اللمعة العصرية للاستانلس ستيل وقوة التحمل في الأجواء المفتوحة والساحلية، مع توزيع حراري ممتاز يغطي الجلسات الخارجية بكفاءة.',
  },
  {
    id: 'prod-4g-311',
    slug: 'heater-4g-geometric-311',
    code: 'GG-311',
    name: 'الدفاية 4G رسم هندسي كود 311',
    subtitle: 'تحفة ديكورية محفورة بالليزر CNC بنقوش هندسية تشع بالضوء والدفء في آن واحد',
    category: 'pyramid',
    categoryLabel: 'الدفايات الهرمية',
    price: 12000,
    rating: 5.0,
    reviewCount: 41,
    image: '/assets/products/prod-4g-311.jpg',
    gallery: [
      '/assets/products/prod-4g-311.jpg',
      '/assets/products/prod-laser-pyramid.jpg',
      '/assets/products/lifestyle-indoor-pyramid.jpg',
    ],
    color: 'black',
    colorLabel: 'أسود مطفي محفور بالليزر',
    inStock: true,
    onSale: false,
    isFeatured: true,
    isBestSeller: true,
    isNew: true,
    badgeText: 'تصميم CNC حصري',
    coverageAreaSqm: 30,
    powerKw: 14.0,
    consumptionGramPerHour: '450 - 820 جم/ساعة',
    dimensionsCm: '55 × 55 × 225 سم',
    material: 'فولاذ سميك مقطوع بالليزر CNC عالي الدقة + أنبوب زجاج حراري مركزي',
    safetyFeatures: [
      'هيكل خارجي مدرع يحمي أنبوب الزجاج بالكامل',
      'صمام أمان متطور لفصل الغاز عند الطوارئ',
      'ثبات فائق ضد الرياح بفضل القاعدة الهندسية العريضة',
    ],
    idealFor: ['الحدائق الفاخرة والفلل', 'اللاونج والكافيهات الراقية', 'المناسبات والحفلات الخارجية'],
    description:
      'الدفاية 4G رسم هندسي كود 311 تحول التدفئة إلى عمل فني معماري. عند تشغيلها، ينعكس ضوء اللهب عبر الزخارف الهندسية المحفورة بالليزر ليصنع ظلالاً دافئة ساحرة مع قوة تدفئة تغطي حتى 30 متراً مربعاً.',
  },
  {
    id: 'prod-laser-custom',
    slug: 'custom-laser-gas-heater',
    code: 'GG-315',
    name: 'دفايات غاز بشكل مميز (حفر ليزر ديكوري)',
    subtitle: 'تصميم هرمي مزخرف بإطارات مضيئة وإمكانية تخصيص الشعار للكافيهات والمطاعم',
    category: 'pyramid',
    categoryLabel: 'الدفايات الهرمية',
    price: 12000,
    rating: 4.9,
    reviewCount: 38,
    image: '/assets/products/prod-laser-pyramid.jpg',
    gallery: [
      '/assets/products/prod-laser-pyramid.jpg',
      '/assets/products/lifestyle-indoor-pyramid.jpg',
      '/assets/products/prod-4g-311.jpg',
    ],
    color: 'bronze',
    colorLabel: 'برونزي / أسود ميتاليك',
    inStock: true,
    onSale: false,
    isFeatured: true,
    isBestSeller: true,
    isNew: false,
    coverageAreaSqm: 30,
    powerKw: 14.0,
    consumptionGramPerHour: '450 - 820 جم/ساعة',
    dimensionsCm: '55 × 55 × 225 سم',
    material: 'فولاذ معالج بالليزر CNC + دهان فرن حراري مقاوم للعوامل الجوية',
    safetyFeatures: [
      'حماية رباعية الجوانب حول أنبوب البيركس الحراري',
      'صمام أمان إيطالي وحساس انطفاء اللهب',
      'إمكانية حفر اسم أو لوجو الكافيه أو المطعم حسب الطلب',
    ],
    idealFor: ['الكافيهات والمطاعم ذات الهوية الخاصة', 'التراسات المغلقة والمفتوحة', 'الحدائق المنزلية'],
    description:
      'صممت هذه الدفاية لتجمع بين القوة الحرارية والجمال الديكوري الفريد، مع إمكانية تنفيذ نقوش خاصة تنسجم مع ديكور مشروعك أو منزلك دون أي تأثير على كفاءة التدفئة.',
  },
  {
    id: 'prod-modern-white',
    slug: 'modern-white-box-heater',
    code: 'GG-112W',
    name: 'دفاية عصرية بشكل مميز (إصدار أبيض لؤلؤي)',
    subtitle: 'دفاية مربعة باللون الأبيض الأنيق للديكورات المودرن والتراسات النهارية والمسائية',
    category: 'box',
    categoryLabel: 'الدفايات المربعة والبوكس',
    price: 10000,
    rating: 4.8,
    reviewCount: 33,
    image: '/assets/products/prod-modern-white.jpg',
    gallery: [
      '/assets/products/prod-modern-white.jpg',
      '/assets/products/lifestyle-closeup-burner.jpg',
      '/assets/products/hero-rooftop-heaters.jpg',
    ],
    color: 'white',
    colorLabel: 'أبيض لؤلؤي إلكتروستاتيك',
    inStock: true,
    onSale: false,
    isFeatured: true,
    isBestSeller: false,
    isNew: true,
    badgeText: 'لون مميز',
    coverageAreaSqm: 25,
    powerKw: 13.0,
    consumptionGramPerHour: '420 - 750 جم/ساعة',
    dimensionsCm: '45 × 45 × 135 سم',
    material: 'هيكل فولاذي مطلي أبيض حراري مقاوم للاصفرار + زجاج سيكوريت رباعي',
    safetyFeatures: [
      'طبقة طلاء حراري لا تتأثر بالحرارة العالية أو أشعة الشمس',
      'صمام أمان كامل لفصل الغاز أوتوماتيكياً',
      'حوض شعلات استانلس ستيل 304 مع أحجار لافا طبيعية',
    ],
    idealFor: ['التراسات المودرن والروف', 'الكافيهات الصباحية والمسائية', 'الفلل والشاليهات'],
    description:
      'لمن يبحث عن التميز والتناغم مع الديكورات الفاتحة والعصرية، توفر الدفاية العصرية البيضاء من جنرال غاز أداءً حرارياً قوياً مع مظهر ناصع الأناقة وعجلات سفلية لسهولة التحريك بين الجلسات.',
  },
  {
    id: 'prod-winter-vibes',
    slug: 'winter-vibes-cafe-package',
    code: 'GG-PKG1',
    name: 'عيش الشتاء بأجواء مختلفة (دفاية الكافيهات الاحترافية)',
    subtitle: 'الخيار المعتمد لتجهيز صفوف الطاولات في الكافيهات والمطاعم المفتوحة بأعلى توفير للغاز',
    category: 'commercial',
    categoryLabel: 'باقات الكافيهات والمطاعم',
    price: 10000,
    rating: 5.0,
    reviewCount: 79,
    image: '/assets/products/prod-winter-vibes-set.jpg',
    gallery: [
      '/assets/products/prod-winter-vibes-set.jpg',
      '/assets/products/lifestyle-outdoor-cafe.jpg',
      '/assets/products/lifestyle-evening-patio.jpg',
    ],
    color: 'black',
    colorLabel: 'أسود تجاري للخدمة الشاقة',
    inStock: true,
    onSale: false,
    isFeatured: true,
    isBestSeller: true,
    isNew: false,
    badgeText: 'HOT • للكافيهات',
    coverageAreaSqm: 25,
    powerKw: 13.5,
    consumptionGramPerHour: '400 - 720 جم/ساعة',
    dimensionsCm: '44 × 44 × 132 سم',
    material: 'فولاذ مقوى للخدمة الشاقة التجارية + زجاج حراري رباعي + منظم غاز أصلي',
    safetyFeatures: [
      'مصممة للعمل المتواصل حتى 12 ساعة يومياً في الكافيهات',
      'قفل أمان لباب أسطوانة الغاز لمنع العبث',
      'شاملة التوريد والتركيب والتجربة الميدانية بواسطة فنيي جنرال غاز',
    ],
    idealFor: ['سلاسل الكافيهات والمطاعم', 'النوادي الاجتماعية والرياضية', 'قاعات الأفراح المفتوحة'],
    description:
      'تم تطوير هذا الموديل خصيصاً لأصحاب الكافيهات والمطاعم الباحثين عن أعلى عائد استثماري في فصل الشتاء؛ حيث يجذب العملاء للجلسات الخارجية ويوفر تدفئة فورية بتكلفة تشغيل اقتصادية جداً.',
  },
  {
    id: 'prod-cafe-bundle-4',
    slug: 'commercial-cafe-bundle-4-units',
    code: 'GG-PKG4',
    name: 'باقة تجهيز الكافيهات المتكاملة (4 دفايات بوكس + التركيب)',
    subtitle: 'باقة توفير خاصة للمطاعم والكافيهات تشمل 4 دفايات جنرال غاز مع المنظمات والتركيب المجاني',
    category: 'commercial',
    categoryLabel: 'باقات الكافيهات والمطاعم',
    price: 38000,
    originalPrice: 44000,
    rating: 5.0,
    reviewCount: 29,
    image: '/assets/products/lifestyle-outdoor-cafe.jpg',
    gallery: [
      '/assets/products/lifestyle-outdoor-cafe.jpg',
      '/assets/products/prod-winter-vibes-set.jpg',
      '/assets/products/lifestyle-evening-patio.jpg',
    ],
    color: 'black',
    colorLabel: 'أسود مطفي أو أبيض حسب اختيارك',
    inStock: true,
    onSale: true,
    isFeatured: false,
    isBestSeller: true,
    isNew: true,
    badgeText: 'وفر 6,000 ج.م',
    coverageAreaSqm: 100,
    powerKw: 54.0,
    consumptionGramPerHour: 'اقتصادي موفر للطاقة',
    dimensionsCm: '4 وحدات × (45 × 45 × 135 سم)',
    material: 'شامل 4 دفايات كاملة + 4 منظمات إيطالية + أحجار لافا + ضمان عامين',
    safetyFeatures: [
      'معاينة هندسية لتوزيع الدفايات في المساحة مجاناً',
      'توريد وتركيب وتشغيل كامل بواسطة فريق جنرال غاز',
      'عقد صيانة دورية وضمان شامل لمدة عامين',
    ],
    idealFor: ['افتتاحات الكافيهات والمطاعم', 'التراسات بمساحة 80 إلى 120 متر مربع'],
    description:
      'باقة متكاملة تمنح مشروعك الجاهزية الكاملة لفصل الشتاء بتوفير 6,000 جنيه مصري عن الشراء الفردي، شاملة التوريد والتركيب الفوري ومنظمات الأمان الإيطالية.',
  },
  {
    id: 'prod-patio-dome-410',
    slug: 'mushroom-patio-heater-410',
    code: 'GG-410',
    name: 'دفاية مشروم خارجية للحدائق والتراسات كود 410',
    subtitle: 'دفاية الغاز الكلاسيكية ذات القبعة العاكسة العريضة لتغطية الجلسات المفتوحة',
    category: 'round',
    categoryLabel: 'دفايات الراوند والمشروم',
    price: 9500,
    originalPrice: 10500,
    rating: 4.7,
    reviewCount: 44,
    image: '/assets/products/lifestyle-evening-patio.jpg',
    gallery: [
      '/assets/products/lifestyle-evening-patio.jpg',
      '/assets/products/prod-round-new.jpg',
    ],
    color: 'stainless',
    colorLabel: 'استانلس ستيل / برونزي',
    inStock: true,
    onSale: true,
    isFeatured: false,
    isBestSeller: false,
    isNew: false,
    badgeText: 'سعر اقتصادي',
    coverageAreaSqm: 32,
    powerKw: 13.5,
    consumptionGramPerHour: '450 - 800 جم/ساعة',
    dimensionsCm: 'قطر العاكس 81 × ارتفاع 221 سم',
    material: 'عمود فولاذي مطلي + رأس شعلة استانلس ستيل مقاوم للصدأ',
    safetyFeatures: [
      'حساس فصل أوتوماتيكي عند الميلان',
      'عاكس علوي عريض يوجه الحرارة لأسفل نحو الجالسين',
      'عجلات مدمجة لسهولة النقل والتخزين',
    ],
    idealFor: ['الحدائق المفتوحة', 'مناطق الانتظار الخارجية', 'حفلات الشواء والتراسات'],
    description:
      'توفر دفاية المشروم كود 410 حلاً عملياً واقتصادياً لتدفئة المساحات المفتوحة بفضل القبعة العاكسة بقطر 81 سم التي تمنع تسرب الحرارة لأعلى وتوجهها مباشرة نحو محيط الجلوس.',
  },
  {
    id: 'prod-pyramid-bronze-215',
    slug: 'pyramid-heater-bronze-royal-215',
    code: 'GG-215',
    name: 'دفاية هرمية رويال برونز كود 215',
    subtitle: 'إصدار ملكي باللون البرونزي المطروق للقصور والفلل والفنادق ذات الطابع الكلاسيكي',
    category: 'pyramid',
    categoryLabel: 'الدفايات الهرمية',
    price: 11500,
    rating: 4.9,
    reviewCount: 27,
    image: '/assets/products/lifestyle-indoor-pyramid.jpg',
    gallery: [
      '/assets/products/lifestyle-indoor-pyramid.jpg',
      '/assets/products/prod-pyramid-mesh-211.jpg',
    ],
    color: 'bronze',
    colorLabel: 'برونزي أنتيك مطروق',
    inStock: true,
    onSale: false,
    isFeatured: false,
    isBestSeller: false,
    isNew: true,
    coverageAreaSqm: 28,
    powerKw: 13.5,
    consumptionGramPerHour: '450 - 800 جم/ساعة',
    dimensionsCm: '52 × 52 × 225 سم',
    material: 'فولاذ مطلي برونزي حراري + أنبوب بيركس حراري + عاكس علوي مقوى',
    safetyFeatures: [
      'صمام أمان لفصل الغاز أوتوماتيكياً',
      'حساس ميلان مدمج',
      'إشعال إلكتروني بضغطة زر',
    ],
    idealFor: ['الفلل والقصور', 'الفنادق والمنتجعات', 'التراسات الكلاسيكية'],
    description:
      'تجمع دفاية رويال برونز كود 215 بين سحر اللهب الهرمي الطولي واللون البرونزي الفاخر الذي ينسجم مع الأثاث الخشبي والحدائق الكلاسيكية.',
  },
  {
    id: 'prod-box-pro-114',
    slug: 'box-heater-pro-panorama-114',
    code: 'GG-114',
    name: 'دفاية بوكس بانوراما كود 114 (حوض لهب عريض)',
    subtitle: 'رؤية بانورامية كاملة للهب من 4 جهات مع حوض أحجار بركانية مزدوج',
    category: 'box',
    categoryLabel: 'الدفايات المربعة والبوكس',
    price: 12500,
    rating: 5.0,
    reviewCount: 35,
    image: '/assets/products/lifestyle-cube-flame.jpg',
    gallery: [
      '/assets/products/lifestyle-cube-flame.jpg',
      '/assets/products/lifestyle-lava-stones.jpg',
      '/assets/products/lifestyle-closeup-burner.jpg',
    ],
    color: 'black',
    colorLabel: 'أسود ميتاليك حراري',
    inStock: true,
    onSale: false,
    isFeatured: false,
    isBestSeller: false,
    isNew: true,
    badgeText: 'إصدار بانوراما',
    coverageAreaSqm: 28,
    powerKw: 14.0,
    consumptionGramPerHour: '450 - 800 جم/ساعة',
    dimensionsCm: '48 × 48 × 140 سم',
    material: 'فولاذ معالج + 4 ألواح زجاج حراري سيكوريت عريض + شعلات استانلس 304',
    safetyFeatures: [
      'أمان ثلاثي المراحل ضد التسريب والميلان وانطفاء الشعلة',
      'زجاج بانورامي مقاوم للصدمات الحرارية',
      'توزيع حراري فوري ومستقر',
    ],
    idealFor: ['الجلسات العائلية في التراس', 'المطاعم الراقية', 'الحدائق الشتوية'],
    description:
      'تمنحك دفاية بوكس بانوراما كود 114 أكبر مساحة رؤية للهب بفضل الألواح الزجاجية الرباعية العريضة وحوض أحجار اللافا البركانية الذي يضاعف الإشعاع الحراري الدافئ.',
  },
  {
    id: 'prod-acc-regulator',
    slug: 'italian-safety-gas-regulator-kit',
    code: 'GG-ACC1',
    name: 'طقم منظم غاز إيطالي أصلي + خرطوم ضغط عالي بالأمان',
    subtitle: 'منظم ضغط غاز معتمد بجميع دفايات الغاز يضمن ثبات الشعلة وتوفير الاستهلاك 20%',
    category: 'accessories',
    categoryLabel: 'قطع الغيار وأنظمة الأمان',
    price: 850,
    rating: 4.9,
    reviewCount: 112,
    image: '/assets/products/lifestyle-lava-stones.jpg',
    gallery: [
      '/assets/products/lifestyle-lava-stones.jpg',
      '/assets/products/lifestyle-closeup-burner.jpg',
    ],
    color: 'black',
    colorLabel: 'معدني قياسي',
    inStock: true,
    onSale: false,
    isFeatured: false,
    isBestSeller: false,
    isNew: false,
    coverageAreaSqm: 0,
    powerKw: 0,
    consumptionGramPerHour: 'يوفر حتى 20% من استهلاك الغاز',
    dimensionsCm: 'متوافق مع جميع أسطوانات الغاز القياسية',
    material: 'نحاس وألومنيوم إيطالي الصنع + خرطوم حراري مسلح بطبقتين',
    safetyFeatures: [
      'صمام عدم رجوع مدمج لمنع أي تسريب',
      'معايرة دقيقة لضغط الغاز تحافظ على ثبات لون وقوة اللهب',
      'تركيب سهل ومباشر مع أفيز إحكام من الاستانلس',
    ],
    idealFor: ['جميع أنواع الدفايات الهرمية والمربعة والراوند'],
    description:
      'طقم المنظم الإيطالي الأصلي من جنرال غاز يضمن تشغيل الدفاية بأعلى كفاءة وأمان تام دون تذبذب في الشعلة أو هدر للغاز.',
  },
  {
    id: 'prod-acc-pyrex-cover',
    slug: 'pyrex-glass-tube-and-weather-cover',
    code: 'GG-ACC2',
    name: 'أنبوبة زجاج بيركس حراري ألماني + جراب حماية ووتربروف',
    subtitle: 'قطع غيار أصلية للدفايات الهرمية مع غطاء حماية خارجي ضد الأمطار والأتربة',
    category: 'accessories',
    categoryLabel: 'قطع الغيار وأنظمة الأمان',
    price: 1650,
    rating: 4.9,
    reviewCount: 64,
    image: '/assets/products/lifestyle-closeup-burner.jpg',
    gallery: [
      '/assets/products/lifestyle-closeup-burner.jpg',
      '/assets/products/prod-pyramid-stainless-213.jpg',
    ],
    color: 'black',
    colorLabel: 'زجاج شفاف نقي + جراب أسود ووتربروف',
    inStock: true,
    onSale: false,
    isFeatured: false,
    isBestSeller: false,
    isNew: false,
    coverageAreaSqm: 0,
    powerKw: 0,
    consumptionGramPerHour: 'قطعة غيار أصلية',
    dimensionsCm: 'طول 125 سم × قطر 10 سم (قياسي لجميع الهرميات)',
    material: 'زجاج بوروسيليكات (بيركس) مقاوم للصدمات الحرارية + قماش أوكسفورد مبطن PVC',
    safetyFeatures: [
      'يتحمل التغير المفاجئ في درجات الحرارة حتى 800 درجة مئوية',
      'جراب حماية مزود بسوستة كاملة لحفظ الدفاية طوال الصيف',
    ],
    idealFor: ['الدفايات الهرمية والراوند والمربعة'],
    description:
      'نوفر في جنرال غاز جميع قطع الغيار الأصلية من أنابيب الزجاج الحراري البيركس وألواح السيكوريت وجرابات الحماية المقاومة للمياه والأتربة لضمان عمر افتراضي طويل لدفايتك.',
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'srv-1',
    slug: 'consultation-selection',
    number: '01',
    title: 'الاستشارات واختيار الأنسب',
    shortDescription:
      'نساعدك على اختيار الدفاية المثالية لمساحتك سواء مطعم، كافيه، منزل أو مكان مفتوح.',
    fullDescription:
      'يقوم مهندسو ومستشارو جنرال غاز بدراسة مساحة المكان، اتجاهات التيارات الهوائية، وارتفاع الأسقف أو التندات لتحديد الموديل والعدد الأمثل من الدفايات الذي يحقق أعلى تدفئة بأقل تكلفة تشغيل.',
    highlights: [
      'حساب دقيق لمساحة التغطية الحرارية بالمتر المربع',
      'تحديد التوزيع الهندسي الأمثل بين الطاولات والجلسات',
      'موازنة الميزانية مع كفاءة استهلاك الغاز',
    ],
    deliverables: ['خطة توزيع مجانية للمساحة', 'عرض سعر مفصل للجملة والتجزئة'],
    ctaText: 'احسب احتياج مساحتك الآن',
  },
  {
    id: 'srv-2',
    slug: 'supply-installation',
    number: '02',
    title: 'التوريد والتركيب الفوري',
    shortDescription:
      'نوفر خدمة التوريد مع التركيب لضمان تشغيل سليم وآمن من البداية.',
    fullDescription:
      'لا يقتصر دورنا على البيع فقط؛ يتولى فريقنا الفني توصيل الدفايات حتى باب منزلك أو مشروعك في جميع محافظات مصر، مع التركيب الكامل واختبار منظمات الغاز وصمامات الأمان وتدريب طاقم التشغيل.',
    highlights: [
      'توصيل سريع ومؤمن لكافة محافظات الجمهورية',
      'تركيب ومعايرة ضغط الغاز والشعلة بواسطة فنيين متخصصين',
      'اختبار شامل لحساسات الأمان قبل التسليم',
    ],
    deliverables: ['تركيب ميداني كامل', 'شهادة ضمان معتمدة من جنرال غاز'],
    ctaText: 'اطلب التوريد والتركيب',
  },
  {
    id: 'srv-3',
    slug: 'decor-integration',
    number: '03',
    title: 'تصميم أنيق ودمج ديكوري',
    shortDescription:
      'نوفر دفايات بتصميمات عصرية تضيف لمسة جمالية وتنسجم مع ديكور المكان دون التأثير على الكفاءة.',
    fullDescription:
      'تتحول دفايات جنرال غاز إلى قطعة ديكور رئيسية في مكانك؛ حيث نوفر ألواناً متعددة (أسود مطفي، أبيض لؤلؤي، استانلس ستيل، برونزي) بالإضافة إلى النقوش المحفورة بالليزر CNC وإمكانية حفر شعار الكافيه أو المطعم.',
    highlights: [
      'تشكيلة ألوان إلكتروستاتيك تتناغم مع الهوية البصرية للمكان',
      'إمكانية حفر اللوجو أو الزخارف الهندسية بالليزر CNC',
      'إضاءة لهب طبيعية تمنح أجواءً شتوية راقية وجاذبة للعملاء',
    ],
    deliverables: ['تصميم مخصص بالليزر', 'تشطيب حراري مقاوم للعوامل الجوية'],
    ctaText: 'استعرض الموديلات الديكورية',
  },
  {
    id: 'srv-4',
    slug: 'custom-heating-solutions',
    number: '04',
    title: 'حلول تدفئة مخصصة وصيانة ما بعد البيع',
    shortDescription:
      'تصميم حلول تدفئة تناسب طبيعة المكان سواء داخلي أو خارجي مع دعم فني وقطع غيار أصلية.',
    fullDescription:
      'بخبرة تمتد لأكثر من 12 عاماً في السوق المصري والشرق الأوسط، نقدم حلول تدفئة مفصلة للمشاريع السياحية والفنادق والنوادي والمنازل، مدعومة بمركز صيانة متكامل وتوافر دائم لجميع قطع الغيار الأصلية.',
    highlights: [
      'عقود توريد وصيانة موسمية للكافيهات والمطاعم والفنادق',
      'توافر فوري لأنابيب البيركس وألواح السيكوريت والمنظمات الإيطالية',
      'أسعار خاصة لطلبات الجملة والمشاريع التجارية',
    ],
    deliverables: ['دعم فني طوال الموسم', 'ضمان شامل وتوافر قطع الغيار'],
    ctaText: 'تواصل مع قسم المشروعات',
  },
];

export const SOLUTION_CARDS: SolutionCard[] = [
  {
    id: 'sol-square',
    title: 'الدفاية المربعة (البوكس)',
    subtitle: 'ثبات فائق واستهلاك اقتصادي',
    description:
      'تصميم عملي وأنيق يوفر تدفئة فعالة في الأماكن المفتوحة والمغلقة. مناسبة للكافيهات والمطاعم والمنازل، تتميز بالثبات، قوة الأداء، واستهلاك اقتصادي للغاز.',
    image: '/assets/products/lifestyle-cube-flame.jpg',
    categoryFilter: 'box',
    specs: 'تغطية 25 م² • 4 ألواح زجاج حراري • أحجار لافا',
  },
  {
    id: 'sol-residential',
    title: 'دفايات المساكن والأماكن المفتوحة',
    subtitle: 'دفء آمن للشقق والفلل والتراسات',
    description:
      'دفايات للمساكن والأماكن المفتوحة – حل مثالي للاستمتاع بالدفء في الشقق، الفلل، الحدائق والتراسات مع صمامات أمان أوتوماتيكية لحماية الأسرة.',
    image: '/assets/products/lifestyle-evening-patio.jpg',
    categoryFilter: 'round',
    specs: 'أمان 100% ضد التسريب • تحكم متدرج في الحرارة',
  },
  {
    id: 'sol-pyramid',
    title: 'الدفاية الهرمية',
    subtitle: 'لهب طولي مرئي وديكور ساحر',
    description:
      'تصميم عصري أنيق يجمع بين التدفئة القوية والإضاءة الجذابة بلهب مرئي، لتمنح دفئاً وديكوراً مميزاً في الكافيهات، المطاعم، الحدائق والتراسات.',
    image: '/assets/products/lifestyle-indoor-pyramid.jpg',
    categoryFilter: 'pyramid',
    specs: 'ارتفاع 225 سم • أنبوب بيركس حراري • شبك حماية',
  },
  {
    id: 'sol-cafes',
    title: 'دفايات الكافيهات والمطاعم والمساكن',
    subtitle: 'تشغيل تجاري مكثف وجذب للعملاء',
    description:
      'خلي أجواءك أحلى وأدفى! دفايات أنيقة وآمنة تناسب الكافيهات، المطاعم، وحتى بيتك، تدفئة فعالة تعيش معاك في كل الأوقات وتزيد إشغال الجلسات الخارجية.',
    image: '/assets/products/lifestyle-outdoor-cafe.jpg',
    categoryFilter: 'commercial',
    specs: 'خصومات للجملة • توريد وتركيب فوري',
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'post-1',
    slug: 'general-gas-safety-elegance-warmth',
    title: 'دفاية جنرال جاز = أمان + أناقة + دفء مريح',
    date: '6 سبتمبر 2025',
    readTime: '4 دقائق قراءة',
    category: 'دليل الأمان والجودة',
    excerpt:
      'تعرف على منظومة الأمان الثلاثية في دفايات جنرال غاز وكيف تضمن لك تدفئة قوية ومستقرة في التراسات، الكافيهات، والحدائق المنزلية بأقل استهلاك للغاز.',
    image: '/assets/products/lifestyle-indoor-pyramid.jpg',
    content: [
      'مع بداية الأجواء الباردة في فصل الشتاء، يبحث أصحاب المنازل والفلل وكذلك مديرو الكافيهات والمطاعم عن حل تدفئة يجمع بين الكفاءة الحرارية العالية، المظهر الديكوري الجذاب، والأهم من ذلك: الأمان الكامل.',
      'في شركة جنرال غاز (General Gas EG)، نعتمد منظومة أمان قياسية في جميع موديلاتنا الهرمية والمربعة والراوند؛ حيث تحتوي كل دفاية على صمام أمان أوتوماتيكي يفصل تدفق الغاز فوراً في حال انطفاء الشعلة بسبب الرياح، بالإضافة إلى حساس ميلان يوقف التشغيل تلقائياً إذا تعرضت الدفاية للاهتزاز أو الإمالة.',
      'كما نستخدم الزجاج الحراري المقوى (البيركس الألماني والسيكوريت الحراري) الذي يتحمل درجات حرارة تتجاوز 750 درجة مئوية دون تأثر بالتغيرات المناخية أو رذاذ المطر في الأماكن المفتوحة.',
    ],
    keyTakeaways: [
      'صمام أمان أوتوماتيكي يفصل الغاز فور انطفاء اللهب',
      'استخدام منظم غاز إيطالي أصلي يوفر حتى 20% من استهلاك الأسطوانة',
      'تصميمات إلكتروستاتيك واستانلس ستيل مقاومة للصدأ والرطوبة',
    ],
  },
  {
    id: 'post-2',
    slug: 'strongest-heating-in-middle-east',
    title: 'دفايات جنرال جاز – أقوى تدفئة في الشرق الأوسط!',
    date: '6 سبتمبر 2025',
    readTime: '5 دقائق قراءة',
    category: 'حلول الكافيهات والمطاعم',
    excerpt:
      'لماذا تختار كبرى المطاعم والكافيهات والفنادق في مصر والشرق الأوسط دفايات جنرال غاز منذ أكثر من 12 عاماً؟ مقارنة شاملة بين الدفاية الهرمية والمربعة والراوند.',
    image: '/assets/products/lifestyle-evening-patio.jpg',
    content: [
      'على مدار أكثر من 12 عاماً من الخبرة في السوق المصري والشرق الأوسط، استطاعت جنرال غاز أن تكون الشريك الموثوق لآلاف البيوت والمطاعم والكافيهات بفضل الجمع بين التصنيع المتقن وخدمة ما بعد البيع الحقيقية.',
      'تختلف طبيعة كل مساحة عن الأخرى: فالأماكن ذات الأسقف المفتوحة تماماً والرياح القوية تستفيد بشدة من دفايات البوكس (كود 111) ودفاية راوند الجديدة بفضل تركيز الحرارة في مستوى الجلوس، بينما تضفي الدفايات الهرمية (كود 211 وكود 213 وكود 311) طابعاً بصرياً ساحراً في المداخل والممرات وحول حمامات السباحة.',
      'يوفر فريق جنرال غاز خدمة المعاينة والاستشارة الفنية لاختيار التوزيع المثالي للدفايات بحيث تحصل على أقصى تغطية حرارية دون أي هدر في الطاقة.',
    ],
    keyTakeaways: [
      'خبرة أكثر من 12 عاماً في تصنيع وتوريد دفايات الغاز في مصر والشرق الأوسط',
      'تغطية حرارية تبدأ من 22 م² وتصل إلى 35 م² للدفاية الواحدة',
      'توافر دائم لقطع الغيار الأصلية وخدمة الصيانة السريعة',
    ],
  },
];

export const COMPANY_INFO = {
  brandAr: 'جنرال غاز',
  brandEn: 'General Gas EG',
  tagline: 'جميع أنواع دفايات الغاز • 12 عاماً من الخبرة في السوق المصري والشرق الأوسط',
  experienceYears: 12,
  phonePrimary: '01012345678',
  phoneSecondary: '01123456789',
  whatsappNumber: '201012345678',
  email: 'info@generalgaseg.com',
  facebookHandle: 'GeneralGasEg',
  instagramHandle: 'GeneralGasEg',
  tiktokHandle: 'generalgaseg',
  addressAr: 'القاهرة، جمهورية مصر العربية – التوريد والتركيب لجميع المحافظات',
  workingHours: 'يومياً من 10:00 صباحاً حتى 10:00 مساءً (طوال أيام الأسبوع)',
};
