import { useQuery } from '@tanstack/react-query';
import { client, TESTIMONIALS_QUERY, SERVICES_QUERY, GALLERY_QUERY, HOME_PAGE_QUERY } from '@/lib/sanity';

export function useTestimonials(fallback: any[]) {
  return useQuery({
    queryKey: ['testimonials'],
    queryFn: async () => {
      if (!client) return fallback;
      const data = await client.fetch(TESTIMONIALS_QUERY);
      return data || fallback;
    },
    initialData: fallback,
  });
}

export function useServices(fallback: any[]) {
  return useQuery({
    queryKey: ['services'],
    queryFn: async () => {
      if (!client) return fallback;
      const data = await client.fetch(SERVICES_QUERY);
      return data || fallback;
    },
    initialData: fallback,
  });
}

export function usePortfolio(fallback: any[]) {
  return useQuery({
    queryKey: ['portfolio'],
    queryFn: async () => {
      if (!client) return fallback;
      const data = await client.fetch(GALLERY_QUERY);
      return data || fallback;
    },
    initialData: fallback,
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
