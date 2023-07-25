import axiosClient from "../configuration/axiosClient";
import { buscadorPelis } from "../configuration/serviceConfig";

export const buscarPeliculas = async (filtro,language,page=1) => {
    const url = `${buscadorPelis.baseUrlMovies}/${filtro}?api_key=${buscadorPelis.apiKey}&language=${language}&page=${page}`;
    console.log(url)
    const result = await axiosClient.get(url);
    return await result.data;

}