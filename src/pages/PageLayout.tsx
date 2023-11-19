import { Outlet } from "react-router-dom";
import Topbar from "../components/Topbar";

const PageLayout = () => {
  return (
    <div className="w-full">
      <Topbar />
      <main className="h-full">
        <Outlet />
      </main>
    </div>
  );
};

export default PageLayout;
