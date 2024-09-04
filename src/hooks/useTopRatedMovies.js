import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchTopRatedMovies=() => {
    return api.get(`/movie/top_rated?language=ko-KR`)
}


export const useTopRatedQuery=()=> {
    return useQuery({
        queryKey: ['movie-top_rated'],
        queryFn: fetchTopRatedMovies,
        select: (result) => result.data,
    })
}
