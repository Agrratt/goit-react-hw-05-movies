import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '0695a445b15baac58108e1a8456d49ee';

export const mapper = data => {
    return data.map(
        ({ id, poster_path, original_title, vote_average }) => ({
            id,
            poster_path,
            original_title,
            vote_average
        }));
};

export async function fetchTrending() {
    const response = await axios.get(`/trending/movie/day?api_key=${API_KEY}&page=${1}`);
    return response.data; 
};

export async function fetchSearch(searchQuery) {
    const response = await axios.get(`/search/movie?api_key=${API_KEY}&query=${searchQuery}&page=1`);
    return response.data; 
    
};

export async function fetchDetails(movieId) {
const response = await axios.get(`/movie/${movieId}?api_key=${API_KEY}&append_to_response=videos,images`);
    return response.data; 
};

export async function fetchCast(movieId) {
const response = await axios.get(`/movie/${movieId}/credits?api_key=${API_KEY}`);
    return response.data;  
};

export async function fetchReviews(movieId) {
const response = await axios.get(`/movie/${movieId}/reviews?api_key=${API_KEY}`);
    return response.data; 
};

// export async function fetchTrending() {
//     const trendingURL = `${BASE_URL}/trending/movie/day?api_key=${API_KEY}&page=${1}`;
//     return await axios.get(`${trendingURL}`).then(response => response.data);   
// };

// export async function fetchSearch(searchQuery) {
//     const serchURL = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${searchQuery}&page=1`;
//     return await axios.get(`${serchURL}`).then(response => response.data);   
// };

// export async function fetchDetails(movieId) {
//     const detailsURL = `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&append_to_response=videos,images`;
//     return await axios.get(`${detailsURL}`).then(response => response.data);  
// };

// export async function fetchCast(movieId) {
//     const castURL = `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`;
//     return await axios.get(`${castURL}`).then(response => response.data);  
// };

// export async function fetchReviews(movieId) {
//     const reviewsURL = `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`;
//     return await axios.get(`${reviewsURL}`).then(response => response.data);  
// };