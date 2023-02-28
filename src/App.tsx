import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Preloader } from './components/index';
import { Movie } from './components/Movie/Movie';

const Home = React.lazy(() => import('./pages/Home/Home'));
const ErrorPage = React.lazy(() => import('./pages/ErrorPage/ErrorPage'));

const App = () => {
 return (
  <Router>
   <Suspense fallback={<Preloader />}>
    <Routes>
     <Route path="*" element={<ErrorPage />} />
     <Route path="/" element={<Home />} />
     <Route path="/:id" element={<Movie />} />
    </Routes>
   </Suspense>
  </Router>
 );
};

export default App;
