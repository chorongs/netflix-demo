import { useQuery } from '@tanstack/react-query';
import api from '../utils/api';


const fetchMovieTrailer = async ({ queryKey }) => {
    const [_, movieId] = queryKey;
    const response = await api.get(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?language=ko-KR`
    );

    const trailers = response.data.results.filter(
        video => video.type === 'Trailer' && video.site === 'YouTube'
    );

    return trailers.length > 0 ? trailers[0] : null;
};

export const useMovieTrailerQuery = (movieId) => {
    return useQuery({
        queryKey: ['movieTrailer', movieId],
        queryFn: fetchMovieTrailer,
        enabled: !!id, 
        staleTime: 1000 * 60 * 60,
    });
};