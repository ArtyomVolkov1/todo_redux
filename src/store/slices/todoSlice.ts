import { createSlice } from "@reduxjs/toolkit";

export interface TodoInterface {
  id: string;
  task: {
    title: string;
  };
  completed: boolean;
}

interface TodosListInterface {
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
      console.log(todo)
      if (todo) {
        todo.task.title = title;
      }
    },
    toogleTodo: (state, { payload: { todoId } }) => {
      const toogledTodo = state.todos.find((todo) => todo.id === todoId);
      if (toogledTodo) {
        toogledTodo.completed = !toogledTodo.completed;
      }
    },
  },
});




export const { addTodo, deleteTodo, editTodo, toogleTodo  } = todoSlice.actions;
export default todoSlice.reducer;
