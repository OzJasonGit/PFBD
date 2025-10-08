import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

export function useBlogPost(slug) {
  const { data, error, isLoading } = useSWR(
    slug ? `/api/blog/${slug}` : null,
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      dedupingInterval: 60000, // 1 minute
    }
  );

  return {
    story: data?.story || null,
    isLoading,
    error,
  };
}

