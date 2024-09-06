import { useQuery } from '@tanstack/react-query';
import api from '../utils/api';

const fetchSimilarMovie = id => {
  return api.get(`/movie/${id}/similar?language=ko-KR`);
};

const useSimilarMovieQuery = id => {
  return useQuery({
    queryKey: ['similar-movie', id],
    queryFn: () => fetchSimilarMovie(id),
    select: result => result.data,
    enabled: !!id, 
  });
};

export default useSimilarMovieQuery;