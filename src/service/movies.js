import axiosClient from "../configuration/axiosClient";
import { movieFinder } from "../configuration/serviceConfig";

export const findMovies = async (filter,language,page=1) => {
    const url = `${movieFinder.baseUrlMovies}/${filter}?api_key=${movieFinder.apiKey}&language=${language}&page=${page}`;
    console.log(url)
    const result = await axiosClient.get(url);
    return await result.data;

}
