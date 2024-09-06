import { useQuery } from '@tanstack/react-query';
import api from '../utils/api';

const fetchRecommandMovie = id => {
  return api.get(`/movie/${id}/recommendations?language=ko-KR`);
};

const useRecommandMovieQuery = id => {
  return useQuery({
    queryKey: ['recommendations', id],
    queryFn: () => fetchRecommandMovie(id),
    select: result => result.data,
    enabled: !!id, 
  });
};

export default useRecommandMovieQuery;