import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID;
const dataset = import.meta.env.VITE_SANITY_DATASET || 'production';

// Only initialize if project ID is provided and not a placeholder
export const client = (projectId && projectId !== 'PLACEHOLDER_PROJECT_ID') 
  ? createClient({
      projectId,
      dataset,
      apiVersion: '2024-04-13',
      useCdn: true,
    })
  : null;

const builder = client ? imageUrlBuilder(client) : null;

export function urlFor(source: any) {
  if (builder && source) return builder.image(source);

  // Return a mock builder that supports chaining for offline/fallback mode
  const mockBuilder = {
    width: () => mockBuilder,
    height: () => mockBuilder,
    fit: () => mockBuilder,
    url: () => typeof source === 'string' ? source : "",
  };
  return mockBuilder as any;
}


// GROQ Queries
export const TESTIMONIALS_QUERY = `*[_type == "testimonial" && isFeatured == true]`;
export const GALLERY_QUERY = `*[_type == "galleryItem"]`;
export const HOME_PAGE_QUERY = `*[_type == "homePage"][0]`;

