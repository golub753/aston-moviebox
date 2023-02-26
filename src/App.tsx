import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Home = React.lazy(() => import('./pages/Home/Home'));
const ErrorPage = React.lazy(() => import('./pages/ErrorPage/ErrorPage'));

const App = () => {
 return (
  <Router>
   <Suspense fallback={<div>Loading...</div>}>
    <Routes>
     <Route path="*" element={<ErrorPage />} />
     <Route path="/" element={<Home />} />
    </Routes>
   </Suspense>
  </Router>
 );
};

export default App;
