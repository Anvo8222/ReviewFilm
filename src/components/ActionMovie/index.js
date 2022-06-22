/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import { BsFillMoonFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import StarRatings from 'react-star-ratings';
import { BASE_URL_IMAGE } from '../../api/apiConfig';
import { settingRating } from '../../utils/settingRating';

function ActionMovie({ actionMovieList }) {
  return (
    <>
      <div className="flex my-[20px] items-center ">
        <BsFillMoonFill className="text-primaryTextColor text-lg font-bold mr-[4px]" />
        <span className="text-primaryTextColor font-bold text-lg">ACTION MOVIE</span>
      </div>
      <div className="grid grid-cols-7 xl:grid-cols-6  lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 gap-4 border-b-[10px] w-[100%] border-solid border-boderColorLayout">
        {actionMovieList?.map((item) => (
          <Link key={item.id} to={`/view-detail-film/${item.id}`} className="relative zoom group">
            <img
              src={BASE_URL_IMAGE + item.poster_path}
              alt={item.poster_path}
              title={item.title ? item.title : item.name}
              className="h-[220px] w-full border rounded border-solid border-borderPrimaryColor"
            />
            <h3 className="text-[16px] text-primaryTextColor my-[4px] mx-[2px] w-[162px] shortNameThreeDotOneLine">
              {item.title ? item.title : item.name}
            </h3>
            <span className="text-[14px] text-textWhiteColor my-[2px] mx-[2px] w-[162px] shortNameThreeDotOneLine">
              {item.original_title ? item.original_title : item.original_name}
            </span>
            <div className=" pb-[4px] ">
              <span className="my-[4px] mx-[2px] text-textWhiteColor">Vote count: {item.vote_count}</span>
              <div className="flex my-[2px] ">
                <StarRatings {...settingRating} rating={item.vote_average} />
              </div>
            </div>
            <span className="status absolute top-[10px] text-[12px] min-w-[40px] text-center right-2 triangle">
              {item.original_language.toUpperCase()}
            </span>
          </Link>
        ))}
      </div>
    </>
  );
}
ActionMovie.propTypes = {
  actionMovieList: PropTypes.object,
};

export default ActionMovie;
