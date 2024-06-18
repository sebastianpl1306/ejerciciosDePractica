'use server';

import { revalidatePath } from 'next/cache';
import prisma from '@/lib/prisma';
import { Todo } from '@prisma/client';

export const toggleTodo = async ( id: string, complete: boolean ): Promise<Todo> => {
    const todo = await prisma.todo.findFirst({ where: { id }});

    if(!todo) {
        throw `Todo con id ${ id } no encontrado`;
    }

    const updateTodo = await prisma.todo.update({
        where: { id },
        data: { complete }
    })

    revalidatePath('/dashboard/server-todos');
    return updateTodo;
}

export const addTodo = async( description: string, userId: string ) => {
    try {
        const todo = await prisma.todo.create({ data: { complete: false , description, userId } })

        revalidatePath('/dashboard/server-todos');
        return todo;
    } catch (error) {
        return {
            message: 'Error creando todo'
        };
    }
}

export const deleteCompleted = async () => {
    try {
        const todos = await prisma.todo.deleteMany({ where: { complete: true } });
        revalidatePath('/dashboard/server-todos');
    } catch (error) {
        return {
            message: 'Error creando todo'
        };
    }
}