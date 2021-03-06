/* eslint-disable prefer-arrow-callback */
/* eslint-disable react/jsx-closing-tag-location */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../../components/Header';
import Slide from '../../components/Slide';
import Banner from '../../components/Banner';
import IntrodMovie from '../../components/IntroduMovie';
import CartoonMovie from '../../components/CartoonMovie';
import OddMovie from '../../components/OddMovie';
import TopViewMovie from '../../components/TopViewMovie';
import ActionMovie from '../../components/ActionMovie';
import Footer from '../../components/Footer';
import {
  getActionItemList,
  getCartoonItemList,
  getOddItemList,
  getPopularItemList,
  getTopRatingItemList,
  getTrendingItemList,
  getUpcomingItemList,
} from '../../api/indexApi';

function HomePage(props) {
  const indexItem = useSelector((state) => state.homeItem.items);
  const popularItemList = useSelector((state) => state.homeItem.popularItemList);
  const trendingItemList = useSelector((state) => state.homeItem.trendingItemList);
  const upcomingItemList = useSelector((state) => state.homeItem.upcomingItemList);
  const cartoonItemList = useSelector((state) => state.homeItem.cartoonItemList);
  const oddItemList = useSelector((state) => state.homeItem.oddItemList);
  const topRatingItemList = useSelector((state) => state.homeItem.topRatingItemList);
  const actionItemList = useSelector((state) => state.homeItem.actionItemList);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPopularItemList());
    dispatch(getTrendingItemList());
    dispatch(getUpcomingItemList());
    dispatch(getCartoonItemList());
    dispatch(getOddItemList());
    dispatch(getTopRatingItemList());
    dispatch(getActionItemList());
  }, []);
  return (
    <>
      <Header />
      <Banner />
      <div className="xl:max-w-[1280px] m-auto 2xl:max-w-[1280px] lg:max-w-[1100px]">
        {popularItemList ? <Slide slideItem={popularItemList?.results} /> : false}
        {trendingItemList && upcomingItemList ? (
          <IntrodMovie trendingItemList={trendingItemList?.results} upcomingItemList={upcomingItemList?.results} />
        ) : (
          false
        )}
        {cartoonItemList ? <CartoonMovie cartoonMovie={cartoonItemList?.results} /> : false}
        <div className="flex flex-row md:block sm:block gap-4 border-b-[10px] w-[100%] border-solid border-boderColorLayout">
          {oddItemList ? <OddMovie oddMovie={oddItemList.results} /> : false}
          {topRatingItemList ? <TopViewMovie topViewMovie={topRatingItemList?.results} /> : false}
        </div>
        {actionItemList ? <ActionMovie actionMovieList={actionItemList?.results} /> : false}
        <Footer />
      </div>
    </>
  );
}

HomePage.propTypes = {};
export default HomePage;
