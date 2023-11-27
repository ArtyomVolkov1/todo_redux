import { useAppDispatch } from "../hooks/hooks";
import { openModal } from "../store/slices/modalSlice";
import { toogleTodo } from "../store/slices/todoSlice";

type TodoItemProps = {
  title: string;
  id: string;
  completed: boolean;
};

const TodoItem = ({ title, id, completed }: TodoItemProps) => {
  const dispatch = useAppDispatch();

  const handleToggleTodoChange = () => {
    dispatch(toogleTodo({ todoId: id }));
  };

  const handleDeleteTodo = (todoId: string) => {
    dispatch(openModal({ type: "delitingTodo", todoId: todoId }));
  };
  const handleEditTodo = (todoId: string) => {
    dispatch(openModal({ type: "renamingTodo", todoId: todoId }));
  };

  return (
    <li>
      <article
        className={`flex flex-col w-[300px] md:w-[400px] rounded-lg border-2 ${
          completed ? "border-success" : "border-default"
        } bg-white p-4 shadow-sm transition hover:shadow-lg sm:p-6`}
      >
        <div className="flex items-center justify-end">
        {!completed && (
            <label
              htmlFor="green-checkbox"
              className="mr-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Завершить
            </label>
          )}
          <input
            onChange={handleToggleTodoChange}
            checked={completed ? true : false}
            type="checkbox"
            value=""
            className="w-4 h-4 text-green-600"
          />
        </div>
        <h3 className="break-words mt-0.5 text-lg font-medium text-gray-900">
          Задача: {title}
        </h3>
        {/* <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                Description
              </p> */}
        <div className="flex justify-between">
          <button
            onClick={() => handleEditTodo(id)}
            className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
          >
            Изменить
          </button>
          <button
            onClick={() => handleDeleteTodo(id)}
            className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
          >
            Удалить
          </button>
        </div>
      </article>
    </li>
  );
};

export default TodoItem;
