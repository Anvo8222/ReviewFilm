import { useEffect, useState } from 'react';
import filmApi from '../api/filmApi';

export default function useGetTrailerFilm(idMovie) {
  const [film, setFilm] = useState({});
  useEffect(() => {
    (async () => {
      try {
        const results = await filmApi.getTrailerFilm(idMovie);
        setFilm(results);
        // eslint-disable-next-line no-empty
      } catch (error) {}
    })();
  }, [idMovie]);
  return film;
}
