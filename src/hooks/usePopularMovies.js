import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchPopularMovies=() => {
    return api.get(`/movie/popular?language=ko-KR`)
}


export const usePopularMovicesQuery=()=> {
    return useQuery({
        queryKey: ['movie-popular'],
        queryFn: fetchPopularMovies,
        select: (result) => result.data,
    })
}
