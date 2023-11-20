import { useAppSelector } from "../../hooks/hooks";

// Заменить todocount на todofilter для вывода списка выполненных и в работе

const TodoCount = () => {
  const todos = useAppSelector((state) => state.todo.todos);
  return (
      <div className="flex justify-center mt-2">
        <h3 className="text-xl">Список задач - {todos.length}</h3>
    </div>
  );
};

export default TodoCount;
