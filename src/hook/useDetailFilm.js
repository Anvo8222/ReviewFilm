import { useEffect, useState } from 'react';
import filmApi from '../api/filmApi';

export default function useDetailFilm(idMovie) {
  const [film, setFilm] = useState({});
  useEffect(() => {
    (async () => {
      try {
        const results = await filmApi.getDetailFilm(idMovie);
        setFilm(results);
        // eslint-disable-next-line no-empty
      } catch (error) {}
    })();
  }, [idMovie]);
  return film;
}
export const useSimilarFilm = (idMovie) => {
  const [similarFilm, setSimilarFilm] = useState({});
  useEffect(() => {
    (async () => {
      try {
        const results = await filmApi.getSimilarFilm(idMovie);
        setSimilarFilm(results);
        // eslint-disable-next-line no-empty
      } catch (error) {}
    })();
  }, [idMovie]);
  return similarFilm;
};
