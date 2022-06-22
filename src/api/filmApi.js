import axiosClient from './axiosClient';

const filmApi = {
  getDetailFilm(id) {
    const url = `/movie/${id}?api_key=0e58516037053b4feb2ac39a241094fe`;
    return axiosClient.get(url);
  },
  getSimilarFilm(id) {
    const url = `/movie/${id}/similar?api_key=0e58516037053b4feb2ac39a241094fe&language=en-US&page=1`;
    return axiosClient.get(url);
  },
  getTrailerFilm(id) {
    const url = `/movie/${id}/videos?api_key=0e58516037053b4feb2ac39a241094fe&language=en-US&page=1`;
    return axiosClient.get(url);
  },
};
export default filmApi;
