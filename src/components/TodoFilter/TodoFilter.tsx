import { useState } from "react";
import { useAppSelector } from "../../hooks/hooks";

type TodoFilterProps = {
  getTodoFilterValue: (filterValue: string) => void;
};

const TodoFilter = ({ getTodoFilterValue }: TodoFilterProps) => {
  const todos = useAppSelector((state) => state.todo.todos);
  const todoCompleted = todos.filter((todo) => todo.completed);
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
      {filterVal === "all" ? (
        <h3 className="text-xl">Список задач - {todos.length}</h3>
      ) : (
        <h3 className="text-xl">
          Список завершенных задач - {todoCompleted.length}
        </h3>
      )}
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
