import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { openModal } from "../store/slices/modalSlice";

const TodoItem = () => {
  const todos = useAppSelector((state) => state.todo.todos);
  const dispatch = useAppDispatch();
  const handleDeleteTodo = (todoId: string) => {
    dispatch(openModal({ type: "delitingTodo", todoId: todoId }));
  };
  const handleEditTodo = (todoId: string) => {
    dispatch(openModal({ type: "renamingTodo", todoId: todoId }));
  };

  return (
    <ul role="list" className="mt-5 flex flex-col gap-3 items-center">
      {todos.map((todo) => {
        return (
          <li key={todo.id}>
            <article className="w-[300px] md:w-[400px] rounded-lg border border-gray-100 bg-white p-4 shadow-sm transition hover:shadow-lg sm:p-6">
              <h3 className="break-words mt-0.5 text-lg font-medium text-gray-900">
                Задача: {todo.task.title}
              </h3>

              {/* <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                Description
              </p> */}
              <div className="flex justify-between">
                  <button
                    onClick={() => handleEditTodo(todo.id)}
                    className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
                  >
                    Изменить
                  </button>
                  <button
                    onClick={() => handleDeleteTodo(todo.id)}
                    className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
                  >
                    Удалить
                  </button>
              </div>
            </article>
          </li>
        );
      })}
    </ul>
  );
};

export default TodoItem;
