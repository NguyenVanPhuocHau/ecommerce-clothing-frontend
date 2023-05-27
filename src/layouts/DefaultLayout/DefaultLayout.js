import classNames from 'classnames/bind';
import HeaderSlickSlider from 'layouts/components/Header/HeaderSlickSlider/HeaderSlickSlider';
import Header from '../components/Header/Header';
import styles from './DefaultLayout.module.scss';
import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import Button from "~/components/Button";
import { myuser } from 'redux/authenticationSlide';
import Footer from 'layouts/components/Footer/Footer';
const cx = classNames.bind(styles);

function DefaultLayout({ children }) {

    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <Header/>
                <HeaderSlickSlider />
            </div>
            <div className={cx('content')}>{children}</div>
           <Footer/>
        </div>
    );
}

export default DefaultLayout;
