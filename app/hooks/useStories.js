import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

export function useStories() {
  const { data, error, isLoading } = useSWR(
    'https://www.bimcopilot.com/api',
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      dedupingInterval: 60000, // 1 minute
    }
  );

  return {
    data: data?.responseData?.data || null,
    firstStory: data?.responseData?.firstStory || null,
    topStories: data?.responseData?.topStories || null,
    isLoading,
    error,
  };
}

export function useBlogHomeStories() {
  const { data, error, isLoading } = useSWR(
    'https://www.bimcopilot.com/api/bloghome_route',
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      dedupingInterval: 60000, // 1 minute
    }
  );

  return {
    stories: data?.responseData?.data || null,
    isLoading,
    error,
  };
}

