import axiosClient from "../configuration/axiosClient";
import { movieFinder } from "../configuration/serviceConfig";

export const findMoviesService = async ({filter,language,page=1, limit=20}) => {
    try {
        const url = `${movieFinder.baseUrlMovies}/${filter}?api_key=${movieFinder.apiKey}&language=${language}&page=${page}&limit=${limit}`;
        // console.log(url);
        const result = await axiosClient.get(url);
        return await result.data;
    } catch (error) {
        console.error(error)
    }
}
