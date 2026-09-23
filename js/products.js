/* ============================================
   AiLE — Product Data & Filtering
   Shared across Products + Product Detail pages
   ============================================ */

/* ---- Image helper ---- */
function imgURL(prompt, size) {
  return 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt='
    + encodeURIComponent(prompt) + '&image_size=' + (size || 'landscape_4_3');
}

/* ---- Product catalogue (fallback when Sanity is not configured) ---- */
let PRODUCTS = [
  /* ===== Electric Bikes ===== */
  {
    id: 'ebike-mountain',
    name: 'Electric Mountain Bike',
    model: 'Model M-01',
    category: 'ebike',
    sub: 'mountain',
    subLabel: 'Mountain E-Bike',
    motor: '750W Brushless Hub',
    battery: '48V 15Ah',
    range: '80 km',
    keyFeature: 'Full Suspension',
    badge: 'New',
    img: imgURL('Premium electric mountain bike, full suspension frame, fat tires, matte black finish, modern industrial design, professional studio product photography, dark gradient background, high-end e-bike'),
    specs: {
      Motor: '750W Brushless Hub Motor',
      Battery: '48V 15Ah Lithium-Ion',
      Range: '60-80 km (throttle) / 100 km (pedal assist)',
      Frame: '6061 Aluminum Alloy',
      Tire: '27.5" x 2.8" All-Terrain',
      Brake: 'Hydraulic Disc Brakes',
      Suspension: 'Front Fork + Rear Shock',
      Gears: 'Shimano 9-Speed',
      'Max Load': '150 kg',
      'Charging Time': '4-5 hours'
    },
    gallery: [
      imgURL('Electric mountain bike front view, premium e-bike, matte black, studio photography, dark background'),
      imgURL('Electric mountain bike side profile, full suspension e-bike, professional product shot, dark background'),
      imgURL('Electric mountain bike motor and drivetrain detail, brushless hub motor, close-up product shot'),
      imgURL('Electric mountain bike battery detail, integrated battery pack, close-up photography'),
      imgURL('Electric mountain bike LCD display unit, control panel, close-up product shot'),
      imgURL('Electric mountain bike on mountain trail, outdoor lifestyle, scenic nature background')
    ],
    features: [
      { icon: 'motor', image: imgURL('Electric mountain bike - Electric bike hub motor close up, precision engineering, metallic texture, dark background'), title: '750W Hub Motor', desc: 'High-torque brushless motor delivers smooth, consistent power for steep climbs and rough terrain.' },
      { icon: 'battery', image: imgURL('Electric mountain bike - Electric bike lithium battery pack, sleek design, green energy concept, studio lighting'), title: '48V 15Ah Battery', desc: 'Removable lithium-ion battery with smart BMS for extended range and long cycle life.' },
      { icon: 'suspension', image: imgURL('Electric mountain bike - Mountain bike suspension fork close up, shock absorber, off road cycling component'), title: 'Full Suspension', desc: 'Front fork and rear shock absorption system tuned for aggressive trail riding.' },
      { icon: 'brake', image: imgURL('Electric mountain bike - Hydraulic disc brake close up, bicycle brake caliper, metallic, dark background'), title: 'Hydraulic Disc Brakes', desc: '180mm hydraulic disc brakes provide reliable stopping power in all conditions.' },
      { icon: 'frame', image: imgURL('Electric mountain bike - Aluminum bicycle frame detail, welding craftsmanship, industrial design'), title: 'Alloy Frame', desc: 'Lightweight 6061 aluminum frame engineered for strength and maneuverability.' },
      { icon: 'display', image: imgURL('Electric mountain bike - Electric bike LCD display screen close up, digital dashboard, modern technology'), title: 'LCD Display', desc: 'Full-color LCD with speed, battery, distance, and assist level readout.' }
    ]
  },
  {
    id: 'ebike-city',
    name: 'Electric City Bike',
    model: 'Model C-01',
    category: 'ebike',
    sub: 'city',
    subLabel: 'City E-Bike',
    motor: '350W Rear Hub',
    battery: '36V 12Ah',
    range: '60 km',
    keyFeature: 'Step-Through Frame',
    badge: null,
    img: imgURL('Premium electric city bike, step-through frame, elegant minimalist design, matte dark grey finish, urban e-bike, professional studio product photography, dark gradient background'),
    specs: {
      Motor: '350W Rear Hub Motor',
      Battery: '36V 12Ah Lithium-Ion',
      Range: '50-60 km (pedal assist)',
      Frame: 'Step-Through Aluminum Alloy',
      Tire: '700C x 45mm City',
      Brake: 'Mechanical Disc Brakes',
      Suspension: 'Front Fork Suspension',
      Gears: 'Shimano 7-Speed',
      'Max Load': '130 kg',
      'Charging Time': '3-4 hours'
    },
    gallery: [
      imgURL('Electric city bike front view, step-through frame, premium e-bike, studio photography, dark background'),
      imgURL('Electric city bike side profile, elegant minimalist design, product shot, dark background'),
      imgURL('Electric city bike battery integrated in frame, close-up detail shot'),
      imgURL('Electric city bike handlebar and display, urban e-bike controls, close-up'),
      imgURL('Electric city bike saddle and seat post, comfort design, product detail'),
      imgURL('Electric city bike on urban street, city lifestyle, modern architecture background')
    ],
    features: [
      { icon: 'motor', image: imgURL('Electric city bike - Electric bike hub motor close up, precision engineering, metallic texture, dark background'), title: '350W Hub Motor', desc: 'Quiet, efficient rear hub motor ideal for flat city terrain and daily commuting.' },
      { icon: 'battery', image: imgURL('Electric city bike - Electric bike lithium battery pack, sleek design, green energy concept, studio lighting'), title: '36V 12Ah Battery', desc: 'Integrated frame battery with lockable design and LED charge indicator.' },
      { icon: 'frame', image: imgURL('Electric city bike - Aluminum bicycle frame detail, welding craftsmanship, industrial design'), title: 'Step-Through Frame', desc: 'Easy-mount frame design perfect for urban commuting and everyday use.' },
      { icon: 'brake', image: imgURL('Electric city bike - Hydraulic disc brake close up, bicycle brake caliper, metallic, dark background'), title: 'Disc Brakes', desc: 'Reliable mechanical disc brakes for consistent stopping in urban traffic.' },
      { icon: 'display', image: imgURL('Electric city bike - Electric bike LCD display screen close up, digital dashboard, modern technology'), title: 'LED Display', desc: 'Compact display showing speed, battery level, and assist mode.' },
      { icon: 'suspension', image: imgURL('Electric city bike - Mountain bike suspension fork close up, shock absorber, off road cycling component'), title: 'Comfort Fork', desc: 'Front suspension fork absorbs road vibrations for a smoother ride.' }
    ]
  },
  {
    id: 'ebike-folding',
    name: 'Electric Folding Bike',
    model: 'Model F-01',
    category: 'ebike',
    sub: 'folding',
    subLabel: 'Folding E-Bike',
    motor: '500W Hub',
    battery: '36V 10Ah',
    range: '50 km',
    keyFeature: 'Quick Fold Mechanism',
    badge: null,
    img: imgURL('Premium electric folding bike, compact foldable frame, matte grey finish, modern industrial design, professional studio product photography, dark gradient background'),
    specs: {
      Motor: '500W Brushless Hub',
      Battery: '36V 10Ah Lithium-Ion',
      Range: '40-50 km (pedal assist)',
      Frame: 'Folding Aluminum Alloy',
      Tire: '20" x 4.0" Fat Tire',
      Brake: 'Mechanical Disc Brakes',
      Suspension: 'Front Fork Suspension',
      Gears: 'Shimano 7-Speed',
      'Max Load': '120 kg',
      'Charging Time': '3-4 hours'
    },
    gallery: [
      imgURL('Electric folding bike front view, compact foldable e-bike, studio photography, dark background'),
      imgURL('Electric folding bike folded position, compact storage, product shot, dark background'),
      imgURL('Electric folding bike side profile, folding mechanism detail, product photography'),
      imgURL('Electric folding bike motor and wheel detail, hub motor close-up'),
      imgURL('Electric folding bike battery and frame hinge, close-up detail shot'),
      imgURL('Electric folding bike in urban setting, city lifestyle, modern background')
    ],
    features: [
      { icon: 'motor', image: imgURL('Folding electric bike - Electric bike hub motor close up, precision engineering, metallic texture, dark background'), title: '500W Hub Motor', desc: 'Powerful compact motor provides excellent acceleration for a folding platform.' },
      { icon: 'battery', image: imgURL('Folding electric bike - Electric bike lithium battery pack, sleek design, green energy concept, studio lighting'), title: '36V 10Ah Battery', desc: 'Lightweight removable battery designed for the folding frame architecture.' },
      { icon: 'frame', image: imgURL('Folding electric bike - Aluminum bicycle frame detail, welding craftsmanship, industrial design'), title: 'Quick Fold Frame', desc: 'Folds in under 10 seconds for easy transport and compact storage.' },
      { icon: 'brake', image: imgURL('Folding electric bike - Hydraulic disc brake close up, bicycle brake caliper, metallic, dark background'), title: 'Disc Brakes', desc: 'Reliable stopping power despite the compact wheel size.' },
      { icon: 'display', image: imgURL('Folding electric bike - Electric bike LCD display screen close up, digital dashboard, modern technology'), title: 'LCD Display', desc: 'Integrated display with foldaway mount for protection during transport.' },
      { icon: 'suspension', image: imgURL('Folding electric bike - Mountain bike suspension fork close up, shock absorber, off road cycling component'), title: 'Front Fork', desc: 'Suspension fork compensates for smaller wheel size on rough surfaces.' }
    ]
  },
  {
    id: 'ebike-fattire',
    name: 'Fat Tire E-Bike',
    model: 'Model FT-01',
    category: 'ebike',
    sub: 'fattire',
    subLabel: 'Fat Tire E-Bike',
    motor: '750W Hub',
    battery: '48V 16Ah',
    range: '70 km',
    keyFeature: 'All-Terrain Tires',
    badge: null,
    img: imgURL('Premium fat tire electric bike, oversized fat tires, matte black, rugged all-terrain e-bike, professional studio product photography, dark gradient background'),
    specs: {
      Motor: '750W Brushless Hub',
      Battery: '48V 16Ah Lithium-Ion',
      Range: '55-70 km (throttle)',
      Frame: '6061 Aluminum Alloy',
      Tire: '26" x 4.0" Fat Tire',
      Brake: 'Hydraulic Disc Brakes',
      Suspension: 'Front Fork Suspension',
      Gears: 'Shimano 7-Speed',
      'Max Load': '160 kg',
      'Charging Time': '5 hours'
    },
    gallery: [
      imgURL('Fat tire electric bike front view, oversized tires, studio photography, dark background'),
      imgURL('Fat tire electric bike side profile, rugged all-terrain e-bike, product shot'),
      imgURL('Fat tire e-bike tire detail, oversized fat tire, close-up product shot'),
      imgURL('Fat tire e-bike motor and hub detail, brushless motor close-up'),
      imgURL('Fat tire e-bike frame and battery, integrated design, close-up'),
      imgURL('Fat tire e-bike on beach sand, all-terrain lifestyle, outdoor setting')
    ],
    features: [
      { icon: 'motor', image: imgURL('Fat tire electric bike - Electric bike hub motor close up, precision engineering, metallic texture, dark background'), title: '750W Hub Motor', desc: 'High-output motor for sand, snow, and off-road adventure riding.' },
      { icon: 'battery', image: imgURL('Fat tire electric bike - Electric bike lithium battery pack, sleek design, green energy concept, studio lighting'), title: '48V 16Ah Battery', desc: 'Large capacity battery for extended off-road adventures.' },
      { icon: 'frame', image: imgURL('Fat tire electric bike - Aluminum bicycle frame detail, welding craftsmanship, industrial design'), title: 'Fat Tire Frame', desc: 'Wide dropout frame designed specifically for 4.0" tire clearance.' },
      { icon: 'brake', image: imgURL('Fat tire electric bike - Hydraulic disc brake close up, bicycle brake caliper, metallic, dark background'), title: 'Hydraulic Brakes', desc: 'Powerful hydraulic disc brakes matched to the bike momentum.' },
      { icon: 'display', image: imgURL('Fat tire electric bike - Electric bike LCD display screen close up, digital dashboard, modern technology'), title: 'LCD Display', desc: 'Full-color display with multi-mode assist and trip analytics.' },
      { icon: 'suspension', image: imgURL('Fat tire electric bike - Mountain bike suspension fork close up, shock absorber, off road cycling component'), title: 'Shock Fork', desc: 'Adjustable front suspension fork for varied terrain conditions.' }
    ]
  },

  /* ===== Electric Scooters ===== */
  {
    id: 'scooter-commuter',
    name: 'Commuter Electric Scooter',
    model: 'Model S-01',
    category: 'scooter',
    sub: 'commuter',
    subLabel: 'Commuter Scooter',
    motor: '350W Hub',
    battery: '36V 10Ah',
    range: '35 km',
    keyFeature: 'Lightweight Design',
    badge: null,
    img: imgURL('Premium commuter electric scooter, sleek minimalist design, matte black, modern urban mobility, professional studio product photography, dark gradient background'),
    specs: {
      Motor: '350W Brushless Hub',
      Battery: '36V 10Ah Lithium-Ion',
      Range: '30-35 km',
      'Max Speed': '25 km/h',
      'Wheel Size': '8.5" Pneumatic',
      Brake: 'E-ABS + Disc Brake',
      Suspension: 'Front + Rear Suspension',
      'Max Load': '120 kg',
      'Charging Time': '3-4 hours',
      Foldable: 'Yes, 3-second fold'
    },
    gallery: [
      imgURL('Commuter electric scooter front view, sleek minimalist design, studio photography, dark background'),
      imgURL('Commuter electric scooter side profile, modern urban scooter, product shot'),
      imgURL('Commuter electric scooter folded position, compact fold, product detail'),
      imgURL('Commuter electric scooter handlebar and display, controls close-up'),
      imgURL('Commuter electric scooter motor and wheel detail, hub motor close-up'),
      imgURL('Commuter electric scooter on city street, urban mobility lifestyle')
    ],
    features: [
      { icon: 'motor', image: imgURL('Commuter electric scooter - Electric bike hub motor close up, precision engineering, metallic texture, dark background'), title: '350W Motor', desc: 'Efficient brushless motor optimized for daily urban commuting.' },
      { icon: 'battery', image: imgURL('Commuter electric scooter - Electric bike lithium battery pack, sleek design, green energy concept, studio lighting'), title: '36V 10Ah Battery', desc: 'Smart battery with regenerative braking and cell balancing.' },
      { icon: 'suspension', image: imgURL('Commuter electric scooter - Mountain bike suspension fork close up, shock absorber, off road cycling component'), title: 'Dual Suspension', desc: 'Front and rear suspension for comfortable rides on city roads.' },
      { icon: 'brake', image: imgURL('Commuter electric scooter - Hydraulic disc brake close up, bicycle brake caliper, metallic, dark background'), title: 'E-ABS + Disc', desc: 'Dual braking system with electronic anti-lock for safety.' },
      { icon: 'display', image: imgURL('Commuter electric scooter - Electric bike LCD display screen close up, digital dashboard, modern technology'), title: 'LED Dashboard', desc: 'Clear LED display showing speed, battery, and mode.' },
      { icon: 'display', image: imgURL('Commuter electric scooter - Folding electric bike mechanism, compact portable design, urban mobility'), title: 'Folding System', desc: 'One-click folding mechanism for easy carrying and storage.' }
    ]
  },
  {
    id: 'scooter-performance',
    name: 'Performance Electric Scooter',
    model: 'Model S-03',
    category: 'scooter',
    sub: 'performance',
    subLabel: 'Performance Scooter',
    motor: '1000W Dual Hub',
    battery: '48V 18Ah',
    range: '60 km',
    keyFeature: 'Dual Motor Drive',
    badge: 'New',
    img: imgURL('Premium performance electric scooter, dual motor, powerful sporty design, matte black with green accents, professional studio product photography, dark gradient background'),
    specs: {
      Motor: '1000W Dual Brushless Hub',
      Battery: '48V 18Ah Lithium-Ion',
      Range: '50-60 km',
      'Max Speed': '55 km/h',
      'Wheel Size': '10.0" Tubeless',
      Brake: 'Hydraulic Disc Brakes',
      Suspension: 'Front + Rear Hydraulic',
      'Max Load': '150 kg',
      'Charging Time': '5-6 hours',
      Foldable: 'Yes, heavy-duty fold'
    },
    gallery: [
      imgURL('Performance electric scooter front view, sporty dual motor design, studio photography, dark background'),
      imgURL('Performance electric scooter side profile, powerful scooter, product shot'),
      imgURL('Performance electric scooter dual motor detail, front and rear hub motors, close-up'),
      imgURL('Performance electric scooter hydraulic brake detail, close-up product shot'),
      imgURL('Performance electric scooter display and controls, performance dashboard, close-up'),
      imgURL('Performance electric scooter on open road, high-speed lifestyle, outdoor setting')
    ],
    features: [
      { icon: 'motor', image: imgURL('Performance electric scooter - Electric bike hub motor close up, precision engineering, metallic texture, dark background'), title: 'Dual 1000W Motor', desc: 'Front and rear dual-motor drive for maximum acceleration and torque.' },
      { icon: 'battery', image: imgURL('Performance electric scooter - Electric bike lithium battery pack, sleek design, green energy concept, studio lighting'), title: '48V 18Ah Battery', desc: 'High-capacity battery with smart thermal management system.' },
      { icon: 'suspension', image: imgURL('Performance electric scooter - Mountain bike suspension fork close up, shock absorber, off road cycling component'), title: 'Hydraulic Suspension', desc: 'Front and rear hydraulic suspension for high-speed stability.' },
      { icon: 'brake', image: imgURL('Performance electric scooter - Hydraulic disc brake close up, bicycle brake caliper, metallic, dark background'), title: 'Hydraulic Disc', desc: 'Dual hydraulic disc brakes for high-speed stopping performance.' },
      { icon: 'display', image: imgURL('Performance electric scooter - Electric bike LCD display screen close up, digital dashboard, modern technology'), title: 'TFT Display', desc: 'Full-color TFT display with ride modes, GPS, and diagnostics.' },
      { icon: 'display', image: imgURL('Performance electric scooter - LED bicycle headlight, bright beam, night riding safety, dark background'), title: 'LED Lighting', desc: 'Integrated front headlight, brake light, and ambient deck lighting.' }
    ]
  }
];

/* ---- Sub-category definitions ---- */
const SUB_CATS = {
  ebike: [
    { id: 'mountain', label: 'Mountain E-Bike' },
    { id: 'city', label: 'City E-Bike' },
    { id: 'folding', label: 'Folding E-Bike' },
    { id: 'fattire', label: 'Fat Tire E-Bike' }
  ],
  scooter: [
    { id: 'commuter', label: 'Commuter Scooter' },
    { id: 'performance', label: 'Performance Scooter' }
  ]
};

/* ---- SVG icons for specs ---- */
const SPEC_ICONS = {
  motor: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="8" width="18" height="8" rx="2"/><path d="M7 8V4M17 8V4M3 12h18"/></svg>',
  battery: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="16" height="10" rx="2"/><path d="M22 11v2"/><path d="M6 12h8"/></svg>',
  range: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>',
  brake: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3"/></svg>',
  suspension: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3v18M6 8l6 4 6-4M6 16l6-4 6 4"/></svg>',
  frame: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 20l4-12h6l4 12M9 8V4h6"/></svg>',
  display: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8"/></svg>',
  speed: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M2 12h20"/><circle cx="12" cy="12" r="3"/></svg>',
  foldable: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 7h7l4 4h7M3 17h7l4-4h7"/></svg>',
  star: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z"/></svg>'
};

/* ---- Render product card ---- */
function renderProductCard(p) {
  return '<article class="product-card reveal" data-category="' + p.category + '" data-sub="' + p.sub + '">' +
    '<div class="product-card__img">' +
      (p.badge ? '<span class="product-card__badge">' + p.badge + '</span>' : '') +
      '<img src="' + p.img + '" alt="' + p.name + ' — ' + p.subLabel + ' by AiLE electric bike manufacturer" loading="lazy">' +
      '<div class="product-card__quick">' +
        '<a href="product-detail.html?id=' + p.id + '" class="btn btn--outline btn--sm">Quick View</a>' +
        '<a href="contact.html" class="btn btn--primary btn--sm">Request Quote</a>' +
      '</div>' +
    '</div>' +
    '<div class="product-card__body">' +
      '<div class="product-card__cat">' + p.subLabel + '</div>' +
      '<h3 class="product-card__name">' + p.name + '</h3>' +
      '<div class="product-card__specs">' +
        '<div class="product-card__spec">' + SPEC_ICONS.motor + '<span>' + p.motor + '</span></div>' +
        '<div class="product-card__spec">' + SPEC_ICONS.battery + '<span>' + p.battery + '</span></div>' +
        '<div class="product-card__spec">' + SPEC_ICONS.range + '<span>' + p.range + '</span></div>' +
      '</div>' +
    '</div>' +
    '<div class="product-card__actions">' +
      '<a href="product-detail.html?id=' + p.id + '" class="btn btn--outline btn--sm">View Details</a>' +
      '<a href="contact.html" class="btn btn--primary btn--sm">Request Quote</a>' +
    '</div>' +
  '</article>';
}

/* ---- Get product by ID ---- */
function getProductById(id) {
  return PRODUCTS.find(function(p) { return p.id === id; });
}

/* ---- Get URL parameter ---- */
function getQueryParam(name) {
  var params = new URLSearchParams(window.location.search);
  return params.get(name);
}

/* ---- Feature icon lookup ---- */
function getFeatureIcon(name) {
  var key = name.toLowerCase();
  if (SPEC_ICONS[key]) return SPEC_ICONS[key];
  return SPEC_ICONS.motor;
}

/* ---- Async product loading from Sanity (with fallback) ---- */
var _productsPromise = null;

function loadProducts() {
  if (_productsPromise) return _productsPromise;
  if (typeof SANITY_CONFIG === 'undefined' || SANITY_CONFIG.projectId === 'YOUR_PROJECT_ID') {
    return Promise.resolve(PRODUCTS);
  }
  _productsPromise = fetchProductsFromSanity()
    .then(function(data) {
      if (data && data.length > 0) {
        PRODUCTS = data;
      }
      return PRODUCTS;
    })
    .catch(function() {
      return PRODUCTS;
    });
  return _productsPromise;
}
