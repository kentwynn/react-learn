'use client';

import { useOptimistic, useState, useTransition } from 'react';

// Simulate saving to server
export async function saveCommentServer(comment: string): Promise<string> {
  await new Promise((r) => setTimeout(r, 1000)); // simulate delay
  if (comment.toLowerCase().includes('fail')) throw new Error('Server failed');
  return comment;
}

export function useCommentController() {
  const [comments, setComments] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const [optimisticComments, addOptimistic] = useOptimistic(
    comments,
    (current, newComment: string) => [...current, newComment]
  );

  const submitComment = async (formData: FormData) => {
    const newComment = formData.get('comment')?.toString() || '';
    setError(null);
    addOptimistic(newComment); // Show immediately

    startTransition(async () => {
      try {
        const result = await saveCommentServer(newComment);
        setComments((prev) => [...prev, result]); // ✅ Only update real state if successful
      } catch (err) {
        console.error(err);
        setError('❌ Failed to save comment. Rolled back.');
      }
    });
  };

  return { optimisticComments, submitComment, isPending, error };
}
