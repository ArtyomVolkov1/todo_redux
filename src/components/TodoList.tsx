import TodoItem from "./TodoItem";
import Modal from "./Modals/Modal";
import { useAppSelector } from "../hooks/hooks";

const TodoList = () => {
  const todos = useAppSelector((state) => state.todo.todos);
  const isOpened = useAppSelector((state) => state.modal.isOpened);
  return (
    <>
      <section className="mb-10">
      <ul role="list" className="mt-5 flex flex-col gap-3 items-center">
        {todos.map((todo) =>
          <TodoItem key={todo.id} id={todo.id} title={todo.task.title}  />
        )}
      </ul>
      </section>
      { isOpened && <Modal />}
    </>
  );
};

export default TodoList;
