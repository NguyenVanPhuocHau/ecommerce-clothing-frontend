import React from 'react';
import { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import styles from './Cart.module.scss';
import classNames from 'classnames/bind';
import { useDispatch, useSelector } from 'react-redux';
import ProgressBar from './ProgressBar/ProgressBar';
import CartReview from './CartReview/CartReview';
import CheckoutCartSummary from './CheckoutCartSummary/CheckoutCartSummary';

const cx = classNames.bind(styles);
function Cart() {
    return (
        <main className={cx('site-main')}>
            <ProgressBar/>
            <div className={cx('checkout-container', 'checkout-cart-container')}>
                <div className={cx('checkout-container--left')}>
                    <div className={cx('checkout-cart-promotion-notification')}>
                        <div className={cx('notification-item')}>
                            <div className={cx('icon-freeship')}></div>
                            Miễn phí vận chuyển toàn bộ đơn hàng
                        </div>
                    </div>
                   <CartReview/>
                </div>
                <div className={cx('checkout-container--right')}>
                    <CheckoutCartSummary/>
                </div>
            </div>
           
        </main>
    );
}

export default Cart;
