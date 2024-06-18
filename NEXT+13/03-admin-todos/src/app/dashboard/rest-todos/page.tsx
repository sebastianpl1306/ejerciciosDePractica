import { redirect } from 'next/navigation';
import prisma from '@/lib/prisma';
import { NewTodo, TodosGrid } from '@/todos';
import { getUserServerSession } from '@/auth';

export default async function RestTodosPage() {
  const user = await getUserServerSession();
  if (!user) redirect('/api/auth/signin');

  const todos = await prisma.todo.findMany({
    where: { userId: user.id },
    orderBy: { description: 'asc' }
  });

  return (
    <div>
      <div className='w-full px-3 mx-5 mb-5'>
        <NewTodo/>
      </div>
      <TodosGrid todos={todos}/>
    </div>
  );
}