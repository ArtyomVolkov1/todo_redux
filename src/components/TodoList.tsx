import TodoItem from "./TodoItem";
import Modal from "./Modals/Modal";
import { useAppSelector } from "../hooks/hooks";
import TodoFilter from "./TodoFilter/TodoFilter";
import { useState } from "react";

const TodoList = () => {
  const todos = useAppSelector((state) => state.todo.todos);
  const isOpened = useAppSelector((state) => state.modal.isOpened);
  const [todoFilterValue, setTodoFilterValue] = useState("all");
  const getTodoFilterValue = (filterValue: string) =>
    setTodoFilterValue(filterValue);
  return (
    <>
      <TodoFilter getTodoFilterValue={getTodoFilterValue} />
      <section className="mb-10">
        <ul role="list" className="mt-5 flex flex-col gap-3 items-center">
          {todos
            .filter((todo) =>
              todoFilterValue === "all" ? true : todo.completed
            )
            .map((todo) => (
              <TodoItem
                key={todo.id}
                completed={todo.completed}
                id={todo.id}
                title={todo.task.title}
              />
            ))}
        </ul>
      </section>
      {isOpened && <Modal />}
    </>
  );
};

export default TodoList;
