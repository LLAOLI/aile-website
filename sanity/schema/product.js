export const product = {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Product Name',
      type: 'string',
      description: 'Full product name, e.g. "Electric Mountain Bike"',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Product URL Slug',
      type: 'slug',
      options: { source: 'name' },
      description: 'Auto-generated from name. Used in URLs: product-detail.html?id=<slug>',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'model',
      title: 'Model Number',
      type: 'string',
      description: 'e.g. "Model M-01"',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Electric Bike', value: 'ebike' },
          { title: 'Electric Scooter', value: 'scooter' },
        ],
        layout: 'radio',
      },
      initialValue: 'ebike',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'sub',
      title: 'Sub-Category ID',
      type: 'string',
      description: 'Internal ID for filtering. E-Bikes: mountain, city, folding, fattire. Scooters: commuter, performance.',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'subLabel',
      title: 'Sub-Category Label',
      type: 'string',
      description: 'Display label, e.g. "Mountain E-Bike"',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'featured',
      title: 'Show on Homepage',
      type: 'boolean',
      description: 'Check to display this product in the homepage featured section',
      initialValue: false,
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first (e.g. 1, 2, 3...)',
      initialValue: 100,
    },
    {
      name: 'badge',
      title: 'Badge',
      type: 'string',
      description: 'Optional badge text, e.g. "New". Leave empty for no badge.',
    },
    {
      name: 'keyFeature',
      title: 'Key Feature',
      type: 'string',
      description: 'Short headline feature, e.g. "Full Suspension"',
    },
    {
      name: 'motor',
      title: 'Motor (Card Summary)',
      type: 'string',
      description: 'Short motor text for product cards, e.g. "750W Brushless Hub"',
    },
    {
      name: 'battery',
      title: 'Battery (Card Summary)',
      type: 'string',
      description: 'Short battery text for product cards, e.g. "48V 15Ah"',
    },
    {
      name: 'range',
      title: 'Range (Card Summary)',
      type: 'string',
      description: 'Short range text for product cards, e.g. "80 km"',
    },
    {
      name: 'img',
      title: 'Main Product Image',
      type: 'image',
      options: { hotspot: true },
      description: 'Upload the main product image here. This is the primary image shown on cards and detail pages.',
    },
    {
      name: 'imgUrl',
      title: 'Main Image URL (Alternative)',
      type: 'url',
      description: 'If you prefer to use an external URL instead of uploading an image, enter it here. This takes priority over the uploaded image.',
    },
    {
      name: 'specs',
      title: 'Technical Specifications',
      type: 'array',
      description: 'Add each specification as a key-value pair (e.g. Key: "Motor", Value: "750W Brushless Hub Motor")',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'key',
              title: 'Spec Name',
              type: 'string',
              description: 'e.g. "Motor", "Battery", "Range", "Max Speed"',
            },
            {
              name: 'value',
              title: 'Spec Value',
              type: 'string',
              description: 'e.g. "750W Brushless Hub Motor"',
            },
          ],
          preview: {
            select: {
              title: 'key',
              subtitle: 'value',
            },
          },
        },
      ],
    },
    {
      name: 'gallery',
      title: 'Product Gallery Images',
      type: 'array',
      description: 'Upload multiple product images for the detail page gallery.',
      of: [{ type: 'image' }],
      options: { layout: 'grid' },
    },
    {
      name: 'galleryUrls',
      title: 'Gallery Image URLs (Alternative)',
      type: 'array',
      description: 'If you prefer external URLs for gallery images instead of uploading.',
      of: [{ type: 'url' }],
    },
    {
      name: 'features',
      title: 'Key Features',
      type: 'array',
      description: 'Product highlights shown on the detail page with icons.',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'icon',
              title: 'Icon',
              type: 'string',
              options: {
                list: [
                  { title: 'Motor', value: 'motor' },
                  { title: 'Battery', value: 'battery' },
                  { title: 'Suspension', value: 'suspension' },
                  { title: 'Brake', value: 'brake' },
                  { title: 'Frame', value: 'frame' },
                  { title: 'Display', value: 'display' },
                  { title: 'Speed', value: 'speed' },
                  { title: 'Foldable', value: 'foldable' },
                  { title: 'Range', value: 'range' },
                ],
                layout: 'dropdown',
              },
              initialValue: 'motor',
            },
            {
              name: 'title',
              title: 'Feature Title',
              type: 'string',
              description: 'e.g. "750W Hub Motor"',
            },
            {
              name: 'desc',
              title: 'Feature Description',
              type: 'text',
              rows: 2,
              description: 'Short description of this feature.',
            },
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'desc',
            },
          },
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'subLabel',
      media: 'img',
    },
  },
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
    {
      title: 'Name (A-Z)',
      name: 'nameAsc',
      by: [{ field: 'name', direction: 'asc' }],
    },
  ],
};
