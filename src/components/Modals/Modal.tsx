/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { v4 as uuidv4 } from "uuid";
import { closeModal } from "../../store/slices/modalSlice";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import { addTodo, deleteTodo, editTodo } from "../../store/slices/todoSlice";
import { getTodoById } from "../../selectors";

type TodoFormSchemaType = yup.ObjectSchema<{
  title: string;
}>;

interface MyFormValue {
  title: string;
}

type HandleClose = {
  handleClose: () => void;
};

const todoFormSchema: TodoFormSchemaType = yup.object().shape({
  title: yup.string().required("Карточка не может быть пустой").min(2, "Слишком коротко!"),
});

const AddTodoForm = ({ handleClose }: HandleClose) => {
  const initialValues: MyFormValue = { title: "" };
  const dispatch = useAppDispatch();
  return (
    <div className="rounded-xl border border-indigo-500 bg-white p-4 shadow-lg md:w-1/2 lg:w-[500px] ">
      <div className="flex items-center gap-4 lg:justify-center">
        <span className="shrink-0 rounded-full bg-blue-400 p-2 text-white">
          <svg
            className="h-4 w-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z"
              fillRule="evenodd"
            />
          </svg>
        </span>
        <p className="font-medium sm:text-lg">Новая карточка</p>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={todoFormSchema}
        onSubmit={function (title: MyFormValue): any {
          try {
            dispatch(
              addTodo({
                id: uuidv4(),
                task: title,
                completed: false,
              })
            );
            handleClose();
          } catch (error) {
            console.log("Error", error);
          }
        }}
      >
        {({ errors }) => (
          <Form>
            <label
              htmlFor="task"
              className="mt-4 relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
            >
              <Field
                id="title"
                name="title"
                placeholder="Задача..."
                className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
              />
              <span className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                Название...
              </span>
            </label>
            {errors.title && <p className="text-sm text-red-500">{errors.title}</p>}
            <div className="mt-6 sm:flex sm:gap-5 lg:justify-start">
              <button
                type="submit"
                className="inline-block w-full rounded-lg bg-indigo-600 hover:bg-indigo-700 px-5 py-3 text-center text-sm font-semibold text-white sm:w-auto"
              >
                Добавить
              </button>

              <button
                onClick={handleClose}
                className="mt-2 inline-block w-full rounded-lg bg-red-500 hover:bg-red-700 px-5 py-3 text-center text-sm font-semibold text-white sm:mt-0 sm:w-auto"
              >
                Закрыть
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

const DeleteTodo = ({ handleClose }: HandleClose) => {
  const dispatch = useAppDispatch();
  const todoId = useAppSelector((state) => state.modal.todoId);
  const handleDelete = () => {
    dispatch(deleteTodo({ todoId: todoId }));
    dispatch(closeModal());
  };
  return (
    <div className="rounded-xl border border-indigo-500 bg-white p-4 shadow-lg md:w-1/2 lg:w-[500px] ">
      <div className="flex flex-col justify-center items-center gap-2 md:flex-row  lg:justify-center">
        <span className="shrink-0 rounded-full bg-blue-400 p-2 text-white">
          <svg
            className="h-4 w-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z"
              fillRule="evenodd"
            />
          </svg>
        </span>
        <p className="font-medium sm:text-lg">Удалить карточку? </p>
      </div>
      <div className="mt-3 flex justify-center items-center gap-1 text-gray-500">
        <div className="mt-6 sm:flex sm:gap-5 lg:justify-center">
          <button
            onClick={handleDelete}
            className="inline-block w-full rounded-lg bg-indigo-600 hover:bg-indigo-700 px-5 py-3 text-center text-sm font-semibold text-white sm:w-auto"
          >
            Удалить
          </button>

          <button
            onClick={handleClose}
            className="mt-2 inline-block w-full rounded-lg bg-red-500 hover:bg-red-700 px-5 py-3 text-center text-sm font-semibold text-white sm:mt-0 sm:w-auto"
          >
            Закрыть
          </button>
        </div>
      </div>
    </div>
  );
};

const EditTodo = ({ handleClose }: HandleClose) => {
  const todoId = useAppSelector((state) => state.modal.todoId);
  const todo:any = useAppSelector(getTodoById(todoId));
  const initialValues: MyFormValue = { title: todo.task.title };
  console.log(initialValues)
  const dispatch = useAppDispatch();
  return (
    <div className="rounded-xl border border-indigo-500 bg-white p-4 shadow-lg md:w-1/2 lg:w-[500px] ">
      <div className="flex items-center gap-4 lg:justify-center">
        <span className="shrink-0 rounded-full bg-blue-400 p-2 text-white">
          <svg
            className="h-4 w-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z"
              fillRule="evenodd"
            />
          </svg>
        </span>
        <p className="font-medium sm:text-lg">Изменить карточку</p>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={todoFormSchema}
        onSubmit={function (title: MyFormValue): any {
          const data = { todoId: todoId, ...title }
          try { 
            dispatch(editTodo(data))
            handleClose();
          } catch (error) {
            console.log("Error", error);
          }
        }}
      >
        {({ errors }) => (
          <Form>
            <label
              htmlFor="task"
              className="mt-4 relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
            >
              <Field
                id="title"
                name="title"
                placeholder="Задача..."
                className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
              />
              <span className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                Название...
              </span>
            </label>
            {errors.title && <p className="text-sm text-red-500">{errors.title}</p>}
            <div className="mt-6 sm:flex sm:gap-5 lg:justify-start">
              <button
                type="submit"
                className="inline-block w-full rounded-lg bg-indigo-600 hover:bg-indigo-700 px-5 py-3 text-center text-sm font-semibold text-white sm:w-auto"
              >
                Добавить
              </button>

              <button
                onClick={handleClose}
                className="mt-2 inline-block w-full rounded-lg bg-red-500 hover:bg-red-700 px-5 py-3 text-center text-sm font-semibold text-white sm:mt-0 sm:w-auto"
              >
                Закрыть
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

const mapping = {
  addingTodo: AddTodoForm,
  delitingTodo: DeleteTodo,
  renamingTodo: EditTodo,
};

const Modal = () => {
  const dispatch = useAppDispatch();
  const handleClose = () => {
    dispatch(closeModal());
  };
  const modalType = useAppSelector((state) => state.modal.type);
  const Component = mapping[modalType];
  return (
    <div className=" fixed left-0 top-0 inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      {Component && <Component handleClose={handleClose} />}
    </div>
  );
};

export default Modal;
