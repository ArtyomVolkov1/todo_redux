import { useState } from "react";
import { useAppSelector } from "../../hooks/hooks";

// Заменить todocount на todofilter для вывода списка выполненных и в работе
type TodoFilterProps = {
  getTodoFilterValue: (filterValue: string) => void;
};

const TodoFilter = ({ getTodoFilterValue }: TodoFilterProps) => {
  const todos = useAppSelector((state) => state.todo.todos);
  const [filterVal, setFilterVal] = useState("all");
  const handleAllTodo = () => {
    setFilterVal("all");
    getTodoFilterValue("all");
  };
  const handleSuccessTodo = () => {
    setFilterVal("completed");
    getTodoFilterValue("completed");
  };
  return (
    <div className="flex flex-col items-center gap-2 justify-center mt-3">
      <h3 className="text-xl">
        Список {`${filterVal === "all" ? "" : "завершенных"}`} задач - {todos.length}
      </h3>
      <div className="">
        <span className="inline-flex -space-x-px overflow-hidden rounded-md border bg-white shadow-sm">
          <button
            onClick={handleAllTodo}
            className={`inline-block px-4 py-2 text-sm font-medium ${
              filterVal === "all" ? "bg-gray-200" : "hover:bg-gray-50"
            } text-gray-700 focus:relative`}
          >
            Все задачи
          </button>
          <button
            onClick={handleSuccessTodo}
            className={`inline-block px-4 py-2 text-sm font-medium ${
              filterVal === "completed" ? "bg-gray-200" : "hover:bg-gray-50"
            } text-gray-700 focus:relative`}
          >
            Завершенные
          </button>
        </span>
      </div>
    </div>
  );
};

export default TodoFilter;
