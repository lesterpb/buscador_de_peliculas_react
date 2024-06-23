import { useTranslation } from 'react-i18next';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import PelisState from "./contexts/pelisState";

import LoginForm from "./components/molecules/LoginForm";
import RegisterForm from "./components/molecules/RegisterForm";
import TopMenu from "./components/molecules/TopMenu";
import Buscador from "./components/organims/Buscador";
import DetallePelicula from "./components/organims/DetallePelicula";
import Perfil from "./components/organims/Perfil";

import "./App.css";

function App() {
  const { t } = useTranslation();

  return (
    <PelisState>
      <div className="d-flex justify-content-center h-100">
        <TopMenu companyName={t('title')}/>
        <div className="mx-5 w-100 mt-6">
          <Router basename="/buscador_de_peliculas_react">
            <Routes>
                <Route path="/" element={<Buscador/>}/>
                <Route path="/{id}" element={<DetallePelicula />}/>
                <Route path="/login" element={<LoginForm />}/>
                <Route path="/register" element={<RegisterForm />}/>
                <Route path="/edit_profile" element={<Perfil />}/>
            </Routes>
          </Router>
        </div>
      </div>
    </PelisState>
  );
}

export default App;
