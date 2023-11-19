import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../hooks/hooks";
import { openModal } from "../store/slices/modalSlice";

const Topbar = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.pathname)
  const handleAddTodo = () => {
    if (location.pathname === '/about') {
      navigate('/');
    }
    dispatch(openModal({type: 'addingTodo'}))
  };
  return (
    <header className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="text-center sm:text-left">
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Добро пожаловать, Юзер!
            </h1>

            <p className="mt-1.5 text-sm text-gray-500">
              Давай создадим новую задачу! 🎉
            </p>
          </div>

          <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
            <Link
              to={"/about"}
              className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-500 transition hover:text-gray-700 focus:outline-none focus:ring"
              type="button"
            >
              <span className="text-sm font-medium"> О проекте </span>
            </Link>

            <button
              onClick={handleAddTodo}
              className="block rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
              type="button"
            >
              Создать задачу
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
