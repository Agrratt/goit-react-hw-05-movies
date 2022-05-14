import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as eventsApi from 'services/api';
import { Loader } from 'components/Loader/Loader';
import {Cast} from 'components/Cast/Cast.jsx';

export default function CastPage() {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    eventsApi.fetchCast(movieId).then(data => {
      const mapped = [];
      data.cast.map(({ id, original_name, profile_path }) => {
        const actor = {
          id: id,
          name: original_name,
          image: profile_path,
        };
        return mapped.push(actor);
      });
      setCast(mapped);
    });
  }, [movieId]);

  return (
    <>
      {!cast && <Loader />}

      {cast && cast.length > 0 ? (
        <Cast cast={cast} />
      ) : (
        <p>We don't have any casts for this movie</p>
      )}
    </>
  );
}
