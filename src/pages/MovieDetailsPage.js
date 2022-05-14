import { useState, useEffect } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import * as eventsApi from 'services/api';
import { Loader } from 'components/Loader/Loader';
import { MovieDetails } from 'components/MovieDetails/MovieDetails.jsx';

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    eventsApi
      .fetchDetails(movieId)
      .then(
        ({
          original_title,
          genres,
          overview,
          poster_path,
          release_date,
          vote_average,
        }) => {
          const movieDetails = {
            title: original_title,
            genres: genres,
            overview: overview,
            poster: poster_path,
            releaseDate: release_date,
            vote: vote_average,
          };
          return setMovie(movieDetails);
        }
      );
  }, [movieId]);

  return (
    <>
      {!movie && <Loader />}
      {movie && <MovieDetails movie={movie} />}
      <Outlet />
    </>
  );
}
