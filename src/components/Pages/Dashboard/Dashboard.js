
import React from "react";
import NavBar from "../../Navbar/Navbar";
import{BiExit} from "react-icons/bi"
import imgEquipe2 from "../../../Imagens/foto1.jpg"
import '../../Styles/Dashboard.css';
import Profile from "../../DashboardContents/Profile";
import { Link, Route, Switch, useParams } from "react-router-dom";
const Dashboard = () => {
  const { section } = useParams();
  return (
    <>
    <NavBar/>
    <div className="dashboard">
      <div className="sidebar">
        <Link  to="/login/dashboard/profile">
        <button className="nav-button">Profile</button>
        </Link>
        <button className="nav-button">Publicar Evento</button>
        <button className="nav-button">Editar Projeto</button>
        <button className="nav-button">Editar Evento</button>
        <button className="nav-button">Histórico</button>
        <button className="nav-button-exit">Sair Da Conta <BiExit id="icon-exit"/></button>
      </div>
      <div className="content">
      <Switch>
            <Route path="/login/dashboard/profile" component={Profile} />
            {/* Outras rotas */}
          </Switch>
      </div>
    </div>
    </>
  );
};

export default Dashboard;
