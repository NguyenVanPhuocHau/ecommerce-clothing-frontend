import React from 'react';
import { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import styles from './ProgressBar.module.scss';
import classNames from 'classnames/bind';
import { useDispatch, useSelector } from 'react-redux';
const cx = classNames.bind(styles);

function ProgressBar() {
    return (
        <ul  className={cx('checkout-progress-bar')}>
            <li  className={cx('checkout-progress-bar-item', 'current')}>
                <span  className={cx('step')}>1</span>
                <span>Giỏ hàng</span>
            </li>
            <li  className={cx('checkout-progress-bar-item')}>
                <span  className={cx('step')}>2</span> <span>Đặt hàng</span>
            </li>
            <li  className={cx('checkout-progress-bar-item')}>
                <span  className={cx('step')}>3</span> <span>Hoàn tất</span>
            </li>
        </ul>
    );
}

export default ProgressBar;
