import { useEffect, useState } from 'react';
import { fetchMovies } from './store/moviesSlice';
import { useDispatch } from 'react-redux';
import { Home, Movies } from './components/index';

const App = () => {
 const dispatch = useDispatch();

 useEffect(() => {
  dispatch(fetchMovies());
 }, []);

 return (
  <div className="App">
   <Home />
   <Movies />
  </div>
 );
};

export default App;
