// apps/your-app/src/app/page.tsx
'use client';

import { useFetch, User } from './controller';

export default function HomePage() {
  const { data, loading, error } = useFetch<User[]>(
    'https://jsonplaceholder.typicode.com/users'
  );

  if (loading) return <div>Loading users...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">User List</h1>
      <ul className="space-y-2">
        {data?.map((user) => (
          <li key={user.id} className="border p-2 rounded">
            <div>
              <strong>Name:</strong> {user.name}
            </div>
            <div>
              <strong>Email:</strong> {user.email}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
