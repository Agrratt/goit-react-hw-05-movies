import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from 'components/Layout/Layout';

const HomePage = lazy(() => import("../pages/HomePage" /*"home-page" */));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage" /*"not-found-page" */));
const MoviesPage = lazy(() => import("../pages/MoviesPage" /*"movies-page" */));
const MovieDetailsPage = lazy(() => import("../pages/MovieDetailsPage" /*"movie-details-page" */));
const CastPage = lazy(() => import("../pages/CastPage" /*"cast-page" */));
const ReviewsPage = lazy(() => import("../pages/ReviewsPage" /*"reviews-page" */));

export function App() {
  return (
    <>
      <Suspense>
        <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='movies' element={<MoviesPage />} />
          
          <Route path='movies/:movieId' element={<MovieDetailsPage />} >
            <Route path='cast' element={<CastPage /> } />
            <Route path='reviews' element={<ReviewsPage /> }/>          
          </Route>  

          <Route path='*' element={<NotFoundPage />} />
        </Route>

      </Routes> 

      </Suspense>
    
    </>
      
  );
};
