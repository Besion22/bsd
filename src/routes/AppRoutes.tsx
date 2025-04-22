import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Projects from "../pages/Projects";
import MainLayout from "../layouts/MainLayout";
const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/projects"
          element={<Projects />}
        />
        <Route
          path="/contact"
          element={<Contact />}
        />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
