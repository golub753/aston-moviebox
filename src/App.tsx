import React, { Suspense, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Preloader } from './components/index';
import { Movie } from './components/Movie/Movie';
import { useUser } from './hooks/hooks';

const Home = React.lazy(() => import('./pages/Home/Home'));
const ErrorPage = React.lazy(() => import('./pages/ErrorPage/ErrorPage'));

const themes = {
 light: {
  background: '#ffffff',
 },
 dark: {
  background: '#3d3b35',
 },
};

export const ThemeContext = React.createContext(themes);

const App = () => {
 const user = useUser();
 return (
  <Router>
   <Suspense fallback={<Preloader />}>
    <Routes>
     <Route path="*" element={<ErrorPage />} />
     <Route
      path="/"
      element={
       <ThemeContext.Provider value={themes.light}>
        <Home />
       </ThemeContext.Provider>
      }
     />
     <Route path="/:id" element={<Movie />} />
    </Routes>
   </Suspense>
  </Router>
 );
};

export default App;
