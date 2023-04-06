import { fireEvent, render, screen } from '@testing-library/react';
import { TodoItem } from '../../src/08-useReducer/TodoItem';

describe('Pruebas en el componente <TodoItem/>', () => {
    const todo = {
        id: 1,
        todo: 'Piedra del alma',
        done: false
    }

    const onDeleteTodo = jest.fn();
    const onToggleTodo = jest.fn();

    test('Debe de mostrar el Todo Pendiente de completar', () => {
        render(<TodoItem todo={todo} onDeleteTodo={onDeleteTodo} onToggleTodo={onToggleTodo}/>);
        const liItem = screen.getByRole('listitem');
        expect(liItem.className).toBe('list-group-item d-flex justify-content-between');

        const span = screen.getByLabelText('span');
        expect(span.className).not.toBe('text-decoration-line-through');
    });

    test('Debe de mostrar el Todo Completado', () => {
        todo.done=true;
        render(<TodoItem todo={todo} onDeleteTodo={onDeleteTodo} onToggleTodo={onToggleTodo}/>);
        const span = screen.getByLabelText('span');
        expect(span.className).toBe('text-decoration-line-through');
    });

    test('Debe de llamar el onToggleTodo', () => {
        render(<TodoItem todo={todo} onDeleteTodo={onDeleteTodo} onToggleTodo={onToggleTodo}/>);
        const span = screen.getByLabelText('span');
        fireEvent.click(span);

        expect(onToggleTodo).toBeCalledWith(todo.id);
    });

    test('Debe de llamar el onDeleteTodo', () => {
        render(<TodoItem todo={todo} onDeleteTodo={onDeleteTodo} onToggleTodo={onToggleTodo}/>);
        const button = screen.getByRole('button');
        fireEvent.click(button);

        expect(onDeleteTodo).toBeCalledWith(todo.id);
    });
})