import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Preloader } from './components/index';
import { Movie } from './components/Movie/Movie';
import { useUser } from './hooks/hooks';

const Home = React.lazy(() => import('./pages/Home/Home'));
const ErrorPage = React.lazy(() => import('./pages/ErrorPage/ErrorPage'));
const WishList = React.lazy(() => import('./pages/Wishlist/Wishlist'));
const Result = React.lazy(() => import('./pages/Result/Result'));

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
 useUser();
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
     <Route path="/wishlist" element={<WishList />} />
     <Route path="/result" element={<Result />} />
    </Routes>
   </Suspense>
  </Router>
 );
};

export default App;
