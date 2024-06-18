import bcrypt from 'bcryptjs';
import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma';

export async function GET(request: Request) { 

  await prisma.todo.deleteMany(); // delete * from todo
  await prisma.user.deleteMany(); // delete * from todo

  const user = await prisma.user.create({
    data: {
      email: 'test1@google.com',
      password: bcrypt.hashSync('123456789'),
      roles: ['admin', 'client', 'super-user'],
      todos: {
        create: [
          { description: 'Piedra del alma', complete: true },
          { description: 'Piedra del poder' },
          { description: 'Piedra del tiempo' },
          { description: 'Piedra del espacio' },
          { description: 'Piedra del realidad' },
        ]
      }
    }
  });

  return NextResponse.json({ message: 'Seed Executed' });
}