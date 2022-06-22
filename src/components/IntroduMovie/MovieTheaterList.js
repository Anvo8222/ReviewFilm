/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import StarRatings from 'react-star-ratings';
import { Link } from 'react-router-dom';
import { BASE_URL_IMAGE } from '../../api/apiConfig';
import { settingRating } from '../../utils/settingRating';

function MovieTheaterList({ trendingItemList }) {
  return (
    <div className="w-[50%] sm:w-full">
      <div className="h-[46px] bg-boderColorLayout">
        <h3 className="text-center leading-[46px] text-primaryTextColor font-bold">PHIM CHIẾU RẠP</h3>
      </div>
      <ul className="pl-0 scroll overflow-y-auto h-[550px] mt-[12px]">
        {trendingItemList?.map((item) => (
          <Link
            to={`/view-detail-film/${item.id}`}
            key={item.id}
            className="h-[50px] block group mt-[10px] border-b border-solid border-borderItemWhiteColor last:border-0 relative"
          >
            <div className="h-[40px] flex justify-between">
              <div className="flex cursor-pointer">
                <img
                  className="w-[38px] h-[38px] border border-solid border-borderItemWhiteColor"
                  src={BASE_URL_IMAGE + item.poster_path}
                  alt={item.poster_path}
                  title={item.title ? item.title : item.name}
                />
                <div className="pl-[10px] flex flex-col w-[210px] max-w-[210px]">
                  <span className="text-[14px] block shortNameThreeDotOneLine text-textWhiteColor group-hover:text-primaryTextColor">
                    {item.title ? item.title : item.name}
                  </span>
                  <span className="text-[12px] block shortNameThreeDotOneLine text-textWhiteColor ">
                    <StarRatings {...settingRating} rating={item.vote_average} />
                  </span>
                </div>
              </div>
              <span className="mr-[10px] leading-10 block text-[12px] text-textWhiteColor">
                {item.original_language.toUpperCase()}
              </span>
            </div>
          </Link>
        ))}
      </ul>
    </div>
  );
}

MovieTheaterList.propTypes = {
  trendingItemList: PropTypes.array,
};
export default MovieTheaterList;
