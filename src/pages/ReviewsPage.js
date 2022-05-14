import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as eventsApi from 'services/api';
import { Loader } from 'components/Loader/Loader';
import { Reviews } from 'components/Reviews/Reviews.jsx';

export default function ReviewsPage() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    eventsApi.fetchReviews(movieId).then(data => {
      const mapped = [];
      data.results.map(({ author, content, id }) => {
        const autor = {
          id: id,
          author: author,
          content: content,
        };
        return mapped.push(autor);
      });
      setReviews(mapped);
    });
  }, [movieId]);

  return (
    <>
      {!reviews && <Loader />}

      {reviews && reviews.length > 0 ? (
        <Reviews reviews={reviews} />
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
    </>
  );
}
