import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from 'components/Layout/Layout';

const HomePage = lazy(() => import("../pages/HomePage"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));
const MoviesPage = lazy(() => import("../pages/MoviesPage"));
const MovieDetailsPage = lazy(() => import("../pages/MovieDetailsPage"));
const CastPage = lazy(() => import("../pages/CastPage"));
const ReviewsPage = lazy(() => import("../pages/ReviewsPage"));

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
