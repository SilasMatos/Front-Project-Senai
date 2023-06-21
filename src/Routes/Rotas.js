import React, { useEffect } from "react";
import {BrowserRouter as Router, Routes, Route, useLocation} from "react-router-dom";
import { Home } from "../components/Pages/Home/Home";
import Equipe from "../components/Pages/Equipe/Equipe";
import Login from "../components/Pages/Login/Login";
import Dashboard from "../components/Pages/Dashboard/Dashboard";
import Profile from "../components/DashboardContents/Profile";

function ToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const Rotas = () => {
  return (
    <Router>
      <ToTop />
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route  path="/equipe" Component={Equipe} />
        <Route  path="/login" Component={Login} />
        <Route  path="/login/dashboard" Component={Dashboard} />
        <Route  path="/login/dashboard/profile" element={Profile} />
      </Routes>
    </Router>
  );
};

export default Rotas;
