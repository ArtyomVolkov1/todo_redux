import { RootState } from "./store/store";

export const getTodoById = (todoId: string | number | null) => (state: RootState) => {
    const todos = state.todo.todos;
    return todos.find(({id}) => id === todoId);
};