import * as eventsApi from 'services/api';
import { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Loader } from 'components/Loader/Loader';

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (searchQuery === '') {
      return;
    }

    // setStatus('pending');

    eventsApi.fetchSearch(searchQuery).then(searchQuery => {
      const mappedFilms = eventsApi.mapper(searchQuery.results);
      setMovies(mappedFilms);
    });
  }, [searchQuery]);

  const handleSerchSubmit = newQuery => {
    if (searchQuery !== newQuery) {
      setSearchQuery(newQuery);
      // setPage(1);
      setMovies([]);
    }
  };

  return (
    <>
      <Searchbar onSubmit={handleSerchSubmit} />
      {!movies && <Loader />}
      {movies && movies.length > 0 && <ImageGallery movies={movies} />}

      {/* {status === 'rejected' && (
        <h1>
          {searchQuery} - {error.message}
        </h1>
      )} */}
      {/* {status === 'pending' && <Loader />} */}
      <ToastContainer autoClose={3000} />
    </>
  );
}
