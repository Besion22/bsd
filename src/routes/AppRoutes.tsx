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
          path="/bsd"
          element={<Home />}
        />
        <Route
          path="/bsd/projects"
          element={<Projects />}
        />
        <Route
          path="/bsd/contact"
          element={<Contact />}
        />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
