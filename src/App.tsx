import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PageLayout from "./pages/PageLayout";
import About from "./pages/About";

const App = () => {
  return (
    <Routes>
      <Route element={<PageLayout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  );
};

export default App;
