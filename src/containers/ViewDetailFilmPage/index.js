/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
/* eslint-disable operator-linebreak */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-unsafe-optional-chaining */
import React from 'react';
import PropTypes from 'prop-types';
import { Link, useParams } from 'react-router-dom';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import useDetailFilm, { useSimilarFilm } from '../../hook/useDetailFilm';
import { BASE_URL_IMAGE } from '../../api/apiConfig';
import { getNameListInArray } from '../../utils/handleArray';
import { formatMoneyToK } from '../../utils/formatMoneyToK';

function ViewDetailFilmPage(props) {
  const params = useParams();
  const detailFilm = useDetailFilm(params.id);
  const similarFilm = useSimilarFilm(params.id);
  return (
    <>
      <Header />
      <div className="mt-[100px] mx-auto xl:max-w-[1280px] 2xl:max-w-[1280px] lg:max-w-[1100px]">
        <div className="justify-center flex flex-row md:flex-col sm:flex-col gap-4">
          <div className="basis-4/5 sm:flex sm:flex-col sm:items-center sm:max-h-full max-h-[700px] text-textWhiteColor bg-backgroundViewDetail flex p-4 rounded">
            <div className="40%">
              <img className="max-h-[550px] h-auto rounded" src={BASE_URL_IMAGE + detailFilm?.poster_path} alt="" />
              <div className=" flex w-full h-[30px] justify-center bottom-4 mt-4">
                <Link
                  to={`/watch/${detailFilm?.id}`}
                  className="bg-backgroundButtonTrailer leading-[30px] mx-2 px-4 rounded-[10px] cursor-pointer hover:opacity-[0.8]"
                >
                  Trailer
                </Link>
              </div>
            </div>
            <div className="flex ml-2 flex-col w-[60%] sm:w-full sm:mt-4">
              <h1 className="text-primaryTextColor text-3xl">
                {detailFilm?.title ? detailFilm?.title : detailFilm?.name}
              </h1>
              <span className="">
                {' '}
                {detailFilm?.original_title ? detailFilm?.original_title : detailFilm?.original_name}
              </span>
              <div className="w-full bg-backgroundDescreptionDetail h-full overflow-y-auto rounded mt-2 p-2 scroll">
                <div className="flex my-2">
                  <span className="text-[14px] min-w-[90px]">Status: </span>
                  <span className="text-[14px] ml-2">{detailFilm?.status}</span>
                </div>
                <div className="flex my-2">
                  <span className="text-[14px] min-w-[90px]">Time: </span>
                  <span className="text-[14px] ml-2">{detailFilm?.runtime}</span>
                </div>
                <div className="flex my-2">
                  <span className="text-[14px] min-w-[90px]">Release date: </span>
                  <span className="text-[14px] ml-2">{detailFilm?.release_date}</span>
                </div>
                <div className="flex my-2">
                  <span className="text-[14px] min-w-[90px]">Language: </span>
                  <span className="text-[14px] ml-2">{detailFilm?.original_language}</span>
                </div>
                <div className="flex my-2">
                  <span className="text-[14px] min-w-[90px]">Countries: </span>
                  <span className="text-[14px] ml-2">
                    {detailFilm?.production_countries ? getNameListInArray(detailFilm?.production_countries) : null}
                  </span>
                </div>
                <div className="flex my-2">
                  <span className="text-[14px] min-w-[90px]">Genres: </span>
                  <span className="text-[14px] ml-2">
                    {detailFilm?.genres ? getNameListInArray(detailFilm?.genres) : null}
                  </span>
                </div>
                <div className="flex my-2">
                  <span className="text-[14px] min-w-[90px]">Revenue</span>
                  <span className="text-[14px] ml-2">
                    {detailFilm?.revenue ? formatMoneyToK(detailFilm?.revenue) : null}
                  </span>
                </div>
                <p className="">{detailFilm?.overview}</p>
              </div>
            </div>
          </div>
          <div className="basis-1/5 text-textWhiteColor">
            {similarFilm ? (
              <ul className=" md:grid md:grid-cols-2 overflow-hidden w-full m-0 p-0 sm:grid sm:grid-cols-1 sm:gap-0 scroll overflow-y-auto h-[600px]">
                {similarFilm?.results?.map((item) => (
                  <li
                    title={item.title ? item.title : item.name}
                    key={item.id}
                    className="h-[130px] max-h-[130px] mb-[10px]"
                  >
                    <Link to={`/watch/${detailFilm?.id}`} className="flex m-auto">
                      <img
                        src={BASE_URL_IMAGE + item.poster_path}
                        alt={item.title ? item.title : item.name}
                        className="h-[100px] w-[92px] border border-solid border-borderPrimaryColor"
                      />
                      <div className="mt-[10px] ml-[4px]">
                        <h3 className="text-[16px] text-primaryTextColor leading-[20px] ml-[4px] w-[170px] shortNameThreeDotOneLine">
                          {item.title ? item.title : item.name}
                        </h3>
                        <span className="text-[14px] text-textWhiteColor leading-[20px] ml-[4px] w-[170px] shortNameThreeDotOneLine">
                          {item.original_title ? item.original_title : item.original_name}
                        </span>
                        <span className="text-textWhiteColor ml-[4px] text-[12px] py-[2px] block">
                          Language: {item.original_language.toUpperCase()}
                        </span>
                        <span className="text-textWhiteColor ml-[4px] text-[12px] py-[2px] block">
                          Vote Count: {item.vote_count}
                        </span>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>
        {/* <iframe
          id="trailer"
          className="w-full h-[550px] md: sm:h-[300px] hover:border-borderImgGrey border-t border-solid"
          src="https://www.youtube.com/embed/NmmOoEnWWYw"
          // https://www.youtube.com/embed/NmmOoEnWWYw
          title="YouTube video player"
          // eslint-disable-next-line react/no-unknown-property
          frameborder="10"
          seamless="seamless"
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
          // eslint-disable-next-line react/no-unknown-property
          allowfullscreen="true"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          // eslint-disable-next-line react/jsx-closing-tag-location
        ></iframe> */}
      </div>
      <Footer />
    </>
  );
}
ViewDetailFilmPage.propTypes = {};
export default ViewDetailFilmPage;
