import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Movies from './components/Movies';

const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=006d842abedbc48c10756216576be1cf&page=1';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCH_URL = 'https://api.themoviedb.org/3/search/movie?api_key=006d842abedbc48c10756216576be1cf&query="';

const App = () => {

  const [searchTxt, setSearchTxt] = useState('');
  const [movies, setSearchMovies] = useState([]);

  const submitSearchFrom = async (e) => {
    e.preventDefault();

    if (searchTxt && searchTxt !== '') {
      const res = await fetch(SEARCH_URL + searchTxt);
      const data = await res.json();
      setSearchMovies(data.results)
      setSearchTxt('')
    }

  }

  const getClassByRate = (vote) => {
    if (vote >= 8) {
      return 'green'
    } else if (vote >= 5) {
      return 'orange'
    } else {
      return 'red'
    }
  }

  useEffect(() => {
    fetch(API_URL)
      .then(results => results.json())
      .then(data => {
        setSearchMovies(data.results)
      });
  }, [])

  return (
    <div className="App">
      <Header submitSearchFrom={submitSearchFrom} searchTxt={searchTxt} setSearchTxt={setSearchTxt} />
      <Movies movies={movies} imgPath={IMG_PATH} getClassByRate={getClassByRate} />
    </div>
  );
}

export default App;
