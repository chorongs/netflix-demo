import { useQuery } from "@tanstack/react-query"
import api from "../utils/api"

const fetchSearchMovie = ({keyword, page}) => {
    return keyword
    ? api.get(`/search/movie?language=ko-KR&query=${keyword}&page=${page}`)
    : api.get(`/movie/upcoming?language=ko-KR&page=${page}`)
}

export const useSearchMovieQuery = ({keyword, page}) => {
    return useQuery({
        queryKey: ['movie-search', {keyword, page}],
        queryFn: () => fetchSearchMovie({keyword ,page}),
        select:(result) => result.data,
    })
}