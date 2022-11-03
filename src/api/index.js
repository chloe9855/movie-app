import request from './request';

const apiKey = '69bf6ad26c7913068970a4e7317005af';

// 首頁 api
export const apiMovieList = () => request.get(`/discover/movie?api_key=${apiKey}&language=zh-TW`);

export const getMovieDetail = (id) => request.get(`/movie/${id}?language=zh-TW&api_key=${apiKey}`);

export const getMovieActors = (id) => request.get(`/movie/${id}/credits?language=zh-TW&api_key=${apiKey}`);

export const getRecommendMovies = (id) => request.get(`/movie/${id}/recommendations?language=zh-TW&api_key=${apiKey}`);
