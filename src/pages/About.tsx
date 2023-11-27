import { Link } from "react-router-dom";

const About = () => {
  return (
    <section>
      <div className="mx-auto px-4 py-32 lg:flex lg:items-center">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl">Todo Redux.</h1>
          <p className="mt-4 sm:text-xl/relaxed">
            Небольшое тестовое приложение с базовыми операциями CRUD: добавить,
            посмотреть, изменить, удалить.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              className="block w-full rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-indigo-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
              to={"/"}
            >
              Вернуться
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
