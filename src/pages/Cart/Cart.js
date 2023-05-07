import React from 'react';
import { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import styles from './Cart.module.scss';
import classNames from 'classnames/bind';
import { useDispatch, useSelector } from 'react-redux';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import CartReview from '../../components/CartReview/CartReview';
import CheckoutCartSummary from '../../components/CheckoutCartSummary/CheckoutCartSummary';

const cx = classNames.bind(styles);
function Cart() {
    const cartItems = useSelector((state) => state.hau.items);
    const finalPrice = cartItems.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.price * currentItem.quantity;
    }, 0);
    function formattedPrice(p) {
        return p.toLocaleString('vi-VN');
    }
    return (
        <main className={cx('site-main')}>
            <ProgressBar states="cart"/>
            <div className={cx('checkout-container', 'checkout-cart-container')}>
                <div className={cx('checkout-container--left')}>
                    <div className={cx('checkout-cart-promotion-notification')}>
                        <div className={cx('notification-item')}>
                            <div className={cx('icon-freeship')}></div>
                            {finalPrice >= 499000 ? (
                                'Bạn đủ điều kiện để nhận miễn phí vận chuyển'
                            ) : (
                                <span>
                                    Mua thêm <b>{formattedPrice(499000 - finalPrice)} ₫</b> để được freeship.
                                </span>
                            )}
                        </div>
                    </div>
                    <CartReview />
                </div>
                <div className={cx('checkout-container--right')}>
                    <CheckoutCartSummary />
                </div>
            </div>
        </main>
    );
}

export default Cart;
