import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'homePage',
  title: 'Homepage Content',
  type: 'document',
  fields: [
    defineField({
      name: 'horizontalGallery',
      title: 'Horizontal Gallery',
      type: 'array',
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
