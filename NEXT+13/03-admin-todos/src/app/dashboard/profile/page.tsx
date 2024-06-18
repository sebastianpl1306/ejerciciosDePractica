'use client';
import { useSession } from 'next-auth/react';

export default function ProfilePage() {
  const { data: session } = useSession();

  return (
    <div>
      <h1>Hello Page</h1>
      <hr />
      <div className='flex flex-col'>
        <span>{ session?.user?.name ?? 'Anonymous' }</span>
        <span>{ session?.user?.email ?? '' }</span>
        <span>{ session?.user?.image ?? 'No image' }</span>
        <span>{ session?.user?.id ?? 'No uid' }</span>
        <span>{ session?.user?.roles ?? ['no-roles'] }</span>
      </div>
    </div>
  );
}