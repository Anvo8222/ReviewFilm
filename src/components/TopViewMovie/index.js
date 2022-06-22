/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import { BsFillMoonFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai';
import StarRatings from 'react-star-ratings';
import { BASE_URL_IMAGE } from '../../api/apiConfig';
import { settingRating } from '../../utils/settingRating';

function TopViewMovie({ topViewMovie }) {
  return (
    <div className="text-textWhiteColor basis-1/3">
      <div className="flex my-[20px] items-center">
        <BsFillMoonFill className="text-primaryTextColor text-lg font-bold mr-[4px]" />
        <span className="text-primaryTextColor font-bold text-lg">TOP RATING</span>
      </div>
      <ul className="pl-[10px] max-h-[620px] overflow-y-auto scroll sm:grid sm:grid-cols-1 md:grid-cols-2 md:grid">
        {topViewMovie?.map((item) => (
          <li key={item.id} className="h-[130px] max-h-[130px] mb-[10px]">
            <Link to={`/view-detail-film/${item.id}`} className="flex">
              <img
                src={BASE_URL_IMAGE + item.poster_path}
                alt={item.poster_path}
                className="h-[130px] w-[92px] border border-solid border-borderPrimaryColor"
              />
              <div className="mt-[10px] ml-[4px]">
                <h3 className="text-[16px] text-primaryTextColor leading-[20px] ml-[4px] w-[220px] shortNameThreeDotOneLine">
                  {item.title ? item.title : item.name}
                </h3>
                <span className="text-[14px] text-textWhiteColor leading-[20px] ml-[4px] w-[220px] shortNameThreeDotOneLine">
                  {item.original_title ? item.original_title : item.original_name}
                </span>
                <span className="text-textWhiteColor ml-[4px] text-[12px] py-[2px] ">
                  Vote count: {item.vote_count}
                </span>
                <span className="bg-backgroundLable text-textWhiteColor p-[2px] block w-[100px] text-center text-[12px] rounded-[12px] m-[4px] ">
                  {item.original_language.toUpperCase()}
                </span>
                <div className="flex my-[2px] ">
                  <StarRatings {...settingRating} rating={item.vote_average} />
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
TopViewMovie.propTypes = {
  topViewMovie: PropTypes.array,
};
export default TopViewMovie;
