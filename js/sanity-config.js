/* ============================================
   AiLE — Sanity CMS Configuration
   Replace YOUR_PROJECT_ID with your Sanity project ID
   ============================================ */

var SANITY_CONFIG = {
  projectId: 'aybncxp6',
  dataset: 'production',
  apiVersion: '2024-01-01',
};

/* ---- Build Sanity API URL ---- */
function getSanityApiUrl(query) {
  return 'https://' + SANITY_CONFIG.projectId
    + '.api.sanity.io/v' + SANITY_CONFIG.apiVersion
    + '/data/query/' + SANITY_CONFIG.dataset
    + '?query=' + encodeURIComponent(query);
}

/* ---- Build Sanity CDN image URL from asset reference ---- */
function buildSanityImageUrl(ref) {
  if (!ref) return '';
  var parts = ref.split('-');
  if (parts.length < 4) return '';
  var id = parts[1];
  var dims = parts[2];
  var format = parts[3];
  return 'https://cdn.sanity.io/images/' + SANITY_CONFIG.projectId
    + '/' + SANITY_CONFIG.dataset
    + '/' + id + '-' + dims + '.' + format;
}

/* ---- Transform Sanity document to frontend product format ---- */
function transformSanityProduct(doc) {
  var img = '';
  if (doc.imgUrl) {
    img = doc.imgUrl;
  } else if (doc.img && doc.img.asset && doc.img.asset._ref) {
    img = buildSanityImageUrl(doc.img.asset._ref) + '?w=800&h=600&fit=crop&auto=format';
  }

  var gallery = [];
  if (doc.galleryUrls && doc.galleryUrls.length) {
    gallery = doc.galleryUrls;
  } else if (doc.gallery && doc.gallery.length) {
    gallery = doc.gallery.map(function(item) {
      if (item.asset && item.asset._ref) {
        return buildSanityImageUrl(item.asset._ref) + '?w=800&h=600&fit=crop&auto=format';
      }
      return '';
    }).filter(Boolean);
  }

  var specs = {};
  if (doc.specs && doc.specs.length) {
    doc.specs.forEach(function(s) {
      specs[s.key] = s.value;
    });
  }

  return {
    id: doc.slug ? doc.slug.current : doc._id,
    name: doc.name || '',
    model: doc.model || '',
    category: doc.category || 'ebike',
    sub: doc.sub || '',
    subLabel: doc.subLabel || '',
    motor: doc.motor || '',
    battery: doc.battery || '',
    range: doc.range || '',
    keyFeature: doc.keyFeature || '',
    badge: doc.badge || null,
    featured: doc.featured || false,
    img: img,
    specs: specs,
    gallery: gallery,
    features: (doc.features || []).map(function(f) {
      return {
        icon: f.icon || 'motor',
        title: f.title || '',
        desc: f.desc || ''
      };
    })
  };
}

/* ---- Fetch all products from Sanity ---- */
function fetchProductsFromSanity() {
  var query = '*[_type == "product"] | order(order asc)';
  return fetch(getSanityApiUrl(query))
    .then(function(res) { return res.json(); })
    .then(function(data) {
      if (!data.result) return [];
      return data.result.map(transformSanityProduct);
    });
}
