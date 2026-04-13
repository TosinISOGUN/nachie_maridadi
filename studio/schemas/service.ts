import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'icon',
      title: 'Icon Type',
      type: 'string',
      options: {
        list: [
          { title: 'Sparkles', value: 'Sparkles' },
          { title: 'Crown', value: 'Crown' },
          { title: 'PartyPopper', value: 'PartyPopper' },
          { title: 'Palette', value: 'Palette' },
          { title: 'Heart', value: 'Heart' },
          { title: 'Scissors', value: 'Scissors' },
        ],
      },
    }),
    defineField({
      name: 'image',
      title: 'Service Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
});
