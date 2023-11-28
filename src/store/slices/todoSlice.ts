import { createSlice } from "@reduxjs/toolkit";

export interface TodoInterface {
  id: string;
  task: {
    title: string;
  };
  completed: boolean;
}

export interface TodosListInterface {
  todos: TodoInterface[];
}

const initialState: TodosListInterface = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, { payload: { id, task, completed } }) => {
      state.todos.unshift({ id, task, completed });
    },
    deleteTodo: (state, { payload: { todoId } }) => {
      state.todos = state.todos.filter(({ id }) => id !== todoId);
    },
    editTodo: (state, {payload: { todoId, title }}) => {
      const todo= state.todos.find(({id}) => id === todoId);
      if (todo) {
        todo.task.title = title;
      }
    },
    toogleTodo: (state, { payload: { todoId } }) => {
      state.todos = state.todos.map(todo => todo.id === todoId ? {...todo, completed: !todo.completed} : todo);
    },
  },
});




export const { addTodo, deleteTodo, editTodo, toogleTodo  } = todoSlice.actions;
export default todoSlice.reducer;
