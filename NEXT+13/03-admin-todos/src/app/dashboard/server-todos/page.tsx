import { redirect } from 'next/navigation';
import prisma from '@/lib/prisma';
import { getUserServerSession } from '@/auth';
import { NewTodo, TodosGrid } from '@/todos';

export default async function ServerTodosPage() {
  const user = await getUserServerSession();
  if (!user) redirect('/api/auth/signin');

  const todos = await prisma.todo.findMany({
    where: { userId: user.id },
    orderBy: { description: 'asc' }
  });

  return (
    <>
      <span className='text-3xl mb-10'>Server Actions</span>
      <div className='w-full px-3 mx-5 mb-5'>
        <NewTodo/>
      </div>
      <TodosGrid todos={todos}/>
    </>
  );
}