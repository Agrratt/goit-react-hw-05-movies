import { useState, useEffect } from 'react';
import * as eventsApi from 'services/api';
import { Loader } from 'components/Loader/Loader';
import { MoviesList } from 'components/MoviesList/MoviesList';

export default function HomePage() {
  const [trendingFilms, setTrendingFilms] = useState(null);

  useEffect(() => {
    eventsApi.fetchTrending().then(trendingFilms => {
      const mappedTrendingFilms = eventsApi.mapper(trendingFilms.results);
      setTrendingFilms(mappedTrendingFilms);
    });
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      {!trendingFilms && <Loader />}
      {trendingFilms && <MoviesList movies={trendingFilms} />}
    </>
  );
}
