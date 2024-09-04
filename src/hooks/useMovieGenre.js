import { useQuery } from "@tanstack/react-query"
import api from "../utils/api"

const fetchMovieGenre = () => {
    return api.get(`genre/movie/list?language=ko-KR`)
}

export const useMovieGenreQuery = () => {
    return useQuery ({
        queryKey: ['movie-genre'],
        queryFn: fetchMovieGenre,
        select: (result) => result.data.genres,
        staleTime:30000, // 5분
    })
}