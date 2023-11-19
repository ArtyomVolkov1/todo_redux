import TodoItem from "./TodoItem";
import Modal from "./Modals/Modal";
import { useAppSelector } from "../hooks/hooks";

const TodoList = () => {
  const isOpened = useAppSelector((state) => state.modal.isOpened);
  return (
    <>
      <section>
        <TodoItem />
      </section>
      { isOpened && <Modal />}
    </>
  );
};

export default TodoList;
