/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { AiTwotoneLike, AiFillEye } from 'react-icons/ai';
import { Link, useParams } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import useDetailFilm, { useSimilarFilm } from '../../hook/useDetailFilm';
import useGetTrailerFilm from '../../hook/useGetTrailerFilm';
import { BASE_URL_IMAGE } from '../../api/apiConfig';

function WatchPage(props) {
  const params = useParams();
  const trailerFilmList = useGetTrailerFilm(params.id);
  const similarFilm = useSimilarFilm(params.id);
  console.log(similarFilm);
  return (
    <>
      <Header />
      {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
      <div className="m-auto xl:max-w-[1280px] mt-[100px] 2xl:max-w-[1280px] lg:max-w-[1100px]">
        <div className="justify-center flex flex-row md:flex-col sm:flex-col gap-4">
          <div className="basis-4/5">
            {trailerFilmList
              ? trailerFilmList?.results?.map((item) => (
                  <iframe
                    key={item.id}
                    className="w-full mb-[12px] h-[550px] md: sm:h-[300px] hover:border-borderImgGrey border-t border-solid"
                    title="YouTube video player"
                    src={`https://www.youtube.com/embed/${item.key}`}
                    // eslint-disable-next-line react/no-unknown-property
                    frameborder="10"
                    seamless="seamless"
                    webkitallowfullscreen="true"
                    mozallowfullscreen="true"
                    // eslint-disable-next-line react/no-unknown-property
                    allowfullscreen="true"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    // eslint-disable-next-line react/jsx-closing-tag-location
                  ></iframe>
                ))
              : null}

            <div className="flex flex-row gap-8">
              <div className="basis-1/3">
                <img
                  src="https://khophim.tv/_next/image?url=https%3A%2F%2Fimage.khophim.tv%2Fuploads%2Fmovies%2Fsong-va-hay-chet-thumb.jpg&w=192&q=75"
                  alt=""
                  className="h-[auto] w-full border border-solid border-borderPrimaryColor"
                />
              </div>
              <div className="basis-2/3">
                <h1 className="text-2xl text-primaryTextColor uppercase ">C??ng ch??a kh?? g???n</h1>
                <div className="flex my-2 items-center">
                  <AiTwotoneLike className="text-iconHeaderColor text-xl" />
                  <span className="text-xl text-textWhiteColor px-2">0</span>
                </div>
                <div className="flex my-2 items-center">
                  <AiFillEye className="text-iconHeaderColor text-xl" />
                  <span className="text-xl text-textWhiteColor px-2">0</span>
                </div>
                <p className="text-textWhiteColor">
                  ????m C?????i ??en xoay quanh c??u chuy???n c???a t??n Zhenya, m???t c?? g??i ??au kh??? v?? t??nh y??u v???i ng?????i ch???ng ????
                  b??? m??nh n??n c?? quy???t ?????nh mang anh ta tr??? l???i. Trong s??? tuy???t v???ng, c?? g??i ???? s??? d???ng m???t c??u th???n ch??
                  g???i l?? , m???t nghi l??? ma thu???t n???i ti???ng v???i s???c m???nh to l???n v?? kh??ng th??? ?????o ng?????c. Sau nghi l???, ng?????i
                  ch???ng y??u d???u c???a c?? tr??? l???i, m???c d?? t??nh y??u c???a anh tr??? n??n gi???ng nh?? m???t n???i ??m ???nh: anh th???m ch??
                  s???n s??ng gi???t Zhenya, ????? kh??ng trao c?? cho b???t c??? ai.
                </p>
                <div className="flex my-2 items-center">
                  <span className="text-textWhiteColor">Th???i l?????ng: </span>
                  <span className="text-xl text-textWhiteColor px-2">0</span>
                </div>
                <div className="flex my-2 items-center">
                  <span className="text-textWhiteColor">Qu???c gia: </span>
                  <span className="text-xl text-textWhiteColor px-2">0</span>
                </div>
                <div className="flex my-2 items-center">
                  <span className="text-textWhiteColor">Ng??n ng???: </span>
                  <span className="text-xl text-textWhiteColor px-2">Vietsub</span>
                </div>
              </div>
            </div>
          </div>
          <div className="basis-1/5 ">
            <ul className="pl-[10px md:grid md:grid-cols-2 md:gap-2 sm:grid sm:grid-cols-1 sm:gap-0 ">
              {similarFilm
                ? similarFilm?.results?.map((item) => (
                    <li className="h-[130px] max-h-[130px] mb-[10px]">
                      <Link to={`/watch/${item.id}`} className="flex m-auto">
                        <img
                          src={BASE_URL_IMAGE + item.poster_path}
                          alt={item.title ? item.title : item.name}
                          className="h-[100px] w-[92px] border border-solid border-borderPrimaryColor"
                        />
                        <div className="mt-[10px] ml-[4px]">
                          <h3 className="text-[16px] text-primaryTextColor leading-[20px] ml-[4px] w-[220px] shortNameThreeDotOneLine">
                            {item.title ? item.title : item.name}
                          </h3>
                          <span className="text-[14px] text-textWhiteColor leading-[20px] ml-[4px] w-[220px] shortNameThreeDotOneLine">
                            {item.original_title ? item.original_title : item.original_name}
                          </span>
                          <span className="text-textWhiteColor ml-[4px] text-[12px] py-[2px] block">
                            {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
                            Vote count: {item.vote_count}
                          </span>
                          <span className="text-textWhiteColor ml-[4px] text-[12px] py-[2px] block">
                            {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
                            Language: {item.original_language.toUpperCase()}
                          </span>
                        </div>
                      </Link>
                    </li>
                  ))
                : false}
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
WatchPage.propTypes = {};
export default WatchPage;
