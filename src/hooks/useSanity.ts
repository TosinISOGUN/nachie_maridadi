import { useQuery } from '@tanstack/react-query';
import { client, TESTIMONIALS_QUERY, GALLERY_QUERY, HOME_PAGE_QUERY } from '@/lib/sanity';

export function useTestimonials() {
  return useQuery({
    queryKey: ['testimonials'],
    queryFn: async () => {
      if (!client) return [];
      const data = await client.fetch(TESTIMONIALS_QUERY);
      return data || [];
    },
    initialData: [],
  });
}


export function usePortfolio() {
  return useQuery({
    queryKey: ['portfolio'],
    queryFn: async () => {
      if (!client) return [];
      const data = await client.fetch(GALLERY_QUERY);
      return data || [];
    },
    initialData: [],
  });
}

export function useHomePage() {
  return useQuery({
    queryKey: ['homePage'],
    queryFn: async () => {
      if (!client) return null;
      const data = await client.fetch(HOME_PAGE_QUERY);
      return data;
    },
  });
}
