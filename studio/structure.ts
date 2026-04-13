import { StructureResolver } from 'sanity/desk';

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Nachie Maridadi Content')
    .items([
      // Singleton: Homepage Content (Now at the top)
      S.listItem()
        .title('Homepage Content')
        .id('homePage')
        .child(
          S.document()
            .schemaType('homePage')
            .documentId('homePage')
        ),

      S.divider(),

      // Regular Documents
      S.documentTypeListItem('galleryItem').title('Portfolio Gallery'),
      S.documentTypeListItem('service').title('Services'),
      S.documentTypeListItem('testimonial').title('Testimonials'),
    ]);
