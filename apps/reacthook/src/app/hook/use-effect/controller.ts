'use client';

import { useEffect, useState } from 'react';

interface Joke {
  setup: string;
  punchline: string;
}

export function useJokeController() {
  const [joke, setJoke] = useState<Joke | null>(null);
  const [reload, setReload] = useState(0);

  useEffect(() => {
    const fetchJoke = async () => {
      const res = await fetch(
        'https://official-joke-api.appspot.com/random_joke'
      );
      const data = await res.json();
      setJoke(data);
    };

    fetchJoke();
  }, [reload]); // runs on mount + every time reload changes

  const refetch = () => setReload((r) => r + 1);

  return { joke, refetch };
}
