import { useQuery } from '@tanstack/react-query';
import api from '../utils/api';

const fetchMovieReview = id => {
  return api.get(`/movie/${id}/reviews`);
};

const useMovieReviewQuery = id => {
  return useQuery({
    queryKey: ['movie-reviews', id],
    queryFn: () => fetchMovieReview(id),
    select: result => result.data,
    enabled: !!id,
  });
};

export default useMovieReviewQuery;