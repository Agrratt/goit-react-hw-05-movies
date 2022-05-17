import * as eventsApi from 'services/api';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';

// import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import {
  SearchbarHeader,
  SearchForm,
  SearchButton,
  SearchInput,
} from 'components/Searchbar/Searchbar.styled';

import { Loader } from 'components/Loader/Loader';

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (searchParams.get('query') !== null) {
      const newQuery = searchParams.get('query');

      eventsApi.fetchSearch(newQuery).then(r => {
        const mappedFilms = eventsApi.mapper(r.results);
        setMovies(mappedFilms);
        setSearchQuery('');
      });
    }
  }, [searchParams]);

  const handleQueryChange = evt => {
    setSearchQuery(evt.target.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    const newQuery = evt.target.elements.query.value.toLowerCase();

    if (newQuery.trim() === '') {
      toast.error('Please, enter something');
      return;
    }

    setSearchParams({ query: newQuery });
  };

  return (
    <>
      <SearchbarHeader>
        <SearchForm onSubmit={handleSubmit}>
          <SearchInput
            type="text"
            name="query"
            value={searchQuery}
            autocomplete="off"
            placeholder="Search movies"
            onChange={handleQueryChange}
          />

          <SearchButton type="submit"> Search</SearchButton>
        </SearchForm>
      </SearchbarHeader>
      {/* <Searchbar
        onSubmit={handleSerchSubmit}
        handleQueryChange={handleQueryChange}
        handleSubmit={handleSubmit}
      /> */}
      {!movies && <Loader />}
      {movies && <ImageGallery movies={movies} />}

      <ToastContainer autoClose={3000} />
    </>
  );
}
