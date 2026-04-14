import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'homePage',
  title: 'Homepage Content',
  type: 'document',
  groups: [
    { name: 'creations', title: 'Our Creations' },
    { name: 'gallery', title: 'Nachie Maridadi Babes' },
  ],
  fields: [
    defineField({
      name: 'featuredCreations',
      title: 'Featured Creations',
      type: 'array',
      group: 'creations',
      of: [
        {
          type: 'object',
          name: 'creation',
          fields: [
            { name: 'image', type: 'image', options: { hotspot: true } },
            { 
              name: 'label', 
              type: 'string', 
              title: 'Label (Event/Style)',
              options: {
                list: [
                  { title: 'Ruracio & Ceremonial', value: 'Ruracio & Ceremonial' },
                  { title: 'Red Carpet & Gala', value: 'Red Carpet & Gala' },
                  { title: 'Corporate & Power Chic', value: 'Corporate & Power Chic' },
                  { title: 'Modern Heritage', value: 'Modern Heritage' },
                  { title: 'Brunch & Resort Wear', value: 'Brunch & Resort Wear' },
                  { title: 'Bespoke Couture', value: 'Bespoke Couture' },
                  { title: 'Casual Sophistication', value: 'Casual Sophistication' },
                ]
              }
            },
            { 
              name: 'category', 
              type: 'string', 
              title: 'Category (Fabric/Type)',
              options: {
                list: [
                  { title: 'Ankara & Kitenge Masterpieces', value: 'Ankara & Kitenge Masterpieces' },
                  { title: 'Lace & Beaded Gowns', value: 'Lace & Beaded Gowns' },
                  { title: 'Silk & Satin Elegance', value: 'Silk & Satin Elegance' },
                  { title: 'Structural Power Dressing', value: 'Structural Power Dressing' },
                  { title: 'Contemporary Co-ords', value: 'Contemporary Co-ords' },
                  { title: 'Bridal & Aso Ebi', value: 'Bridal & Aso Ebi' },
                ]
              }
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'horizontalGallery',
      title: 'Nachie Maridadi Babes',
      type: 'array',
      group: 'gallery',
      of: [
        {
          type: 'object',
          name: 'galleryImage',
          fields: [
            { name: 'image', type: 'image', options: { hotspot: true } },
            { name: 'alt', type: 'string' },
          ],
        },
      ],
    }),
  ],
});
