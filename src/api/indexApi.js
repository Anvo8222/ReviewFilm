import {
  setActionItemList,
  setCartoonItemList,
  setOddItemList,
  setPopularItemList,
  setTopRatingItemList,
  setTrendingItemList,
  setUpcomingItemList,
} from '../slice/home';
import axiosClient from './axiosClient';
import {
  popularMovieAPI,
  trendingMovieAPI,
  upcomingMovieAPI,
  cartoonMovieAPI,
  nowPlayingMovieAPI,
  topRatingMovieAPI,
  actionMovieAPI,
} from './apiConfig';

export function getPopularItemList() {
  return async (dispatch) => {
    axiosClient
      .get(popularMovieAPI)
      .then((response) => {
        dispatch(setPopularItemList(response));
      })
      .catch((error) => {});
  };
}
export function getTrendingItemList() {
  return async (dispatch) => {
    axiosClient
      .get(trendingMovieAPI)
      .then((response) => {
        dispatch(setTrendingItemList(response));
      })
      .catch((error) => {});
  };
}
export function getUpcomingItemList() {
  return async (dispatch) => {
    axiosClient
      .get(upcomingMovieAPI)
      .then((response) => {
        dispatch(setUpcomingItemList(response));
      })
      .catch((error) => {});
  };
}
export function getCartoonItemList() {
  return async (dispatch) => {
    axiosClient
      .get(cartoonMovieAPI)
      .then((response) => {
        dispatch(setCartoonItemList(response));
      })
      .catch((error) => {});
  };
}
export function getOddItemList() {
  return async (dispatch) => {
    axiosClient
      .get(nowPlayingMovieAPI)
      .then((response) => {
        dispatch(setOddItemList(response));
      })
      .catch((error) => {});
  };
}
export function getTopRatingItemList() {
  return async (dispatch) => {
    axiosClient
      .get(topRatingMovieAPI)
      .then((response) => {
        dispatch(setTopRatingItemList(response));
      })
      .catch((error) => {});
  };
}
export function getActionItemList() {
  return async (dispatch) => {
    axiosClient
      .get(actionMovieAPI)
      .then((response) => {
        dispatch(setActionItemList(response));
      })
      .catch((error) => {});
  };
}
