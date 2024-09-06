import { useQuery } from '@tanstack/react-query';
import api from '../utils/api';

const fetchMovieTrailer = async (id) => {
  const response = await api.get(`/movie/${id}/videos`);
  return response.data.results.find(video => video.type === "Trailer" && video.site === "YouTube");
};

export const useMovieTrailerQuery = (id) => {
  return useQuery({
    queryKey: ['movieTrailer', id],
    queryFn: () => fetchMovieTrailer(id),
  });
};