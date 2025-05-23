// apps/your-app/src/app/controller.tsx
import { useEffect, useState } from 'react';

export interface User {
  id: number;
  name: string;
  email: string;
}

export function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let isCancelled = false;

    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const json = await res.json();
        if (!isCancelled) setData(json);
      } catch (err) {
        if (!isCancelled) setError(err as Error);
      } finally {
        if (!isCancelled) setLoading(false);
      }
    };

    fetchData();
    return () => {
      isCancelled = true;
    };
  }, [url]);

  return { data, loading, error };
}
