import { useEffect, useState } from 'react';
import { fetchMovies } from './store/moviesSlice';
import { useDispatch } from 'react-redux';
import { Home } from './components/Home/Home';

const App = () => {
 const dispatch = useDispatch();

 useEffect(() => {
  dispatch(fetchMovies());
 }, []);

 return (
  <div className="App">
   <Home />
  </div>
 );
};

export default App;
