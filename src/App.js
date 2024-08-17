import { useTranslation } from 'react-i18next';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import MovieProvider from "./contexts/movieProvider";

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import "./App.css";
import LoginForm from "./components/molecules/LoginForm";
import RegisterForm from "./components/molecules/RegisterForm";
import TopMenu from "./components/molecules/TopMenu";
import Finder from "./components/organims/Finder/Finder";
import MovieDetails from "./components/organims/MovieDetails";
import Profile from "./components/organims/Profile";

const queryClient = new QueryClient();

function App() {
  const { t } = useTranslation();

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <MovieProvider>
        <div className="d-flex justify-content-center h-100">
          <TopMenu companyName={t('title')}/>
          <div className="mx-5 w-100 mt-6">
            <Router basename="/buscador_de_peliculas_react">
              <Routes>
                  <Route path="/" element={<Finder/>}/>
                  <Route path="/{id}" element={<MovieDetails />}/>
                  <Route path="/login" element={<LoginForm />}/>
                  <Route path="/register" element={<RegisterForm />}/>
                  <Route path="/edit_profile" element={<Profile />}/>
              </Routes>
            </Router>
          </div>
        </div>
      </MovieProvider>
    </QueryClientProvider>
  );
}

export default App;
