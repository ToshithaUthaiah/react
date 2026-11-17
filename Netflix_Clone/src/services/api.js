const API_KEY = "0552b50f7d9692c31964cc71e2075d43";
const BASE_URL = "https://api.themoviedb.org/3";

/*
const requests = {
    fetchTrending: `${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=99`,
};
*/
export const fetchTrending = async () => {
    let response = await fetch(`${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-US`);
    let data = await response.json();
    return data.results;

}

export const fetchNetflixOriginals = async () => {
    let response = await fetch(`${BASE_URL}/discover/tv?api_key=${API_KEY}&with_networks=213`)
    let data = await response.json();
    return data.results;
}

export const fetchTrendingDoc = async () => {
    let response = await fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=99`);
    let data = await response.json();
    return data.results;

}