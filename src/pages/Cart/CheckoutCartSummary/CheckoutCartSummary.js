import React from 'react';
import { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import styles from './CheckoutCartSummary.module.scss';
import classNames from 'classnames/bind';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'components/Button/Button';

const cx = classNames.bind(styles);
function CheckoutCartSummary() {
    return (
        <div className={cx('checkout-summary', 'checkout-summary-cart')}>
            <div className={cx('checkout-summary-title')}>Đơn hàng</div>
            <div className={cx('checkout-totals')}>
                <table>
                    <tbody>
                        <tr>
                            <th>Giá gốc</th>
                            <td>249.000 ₫</td>
                        </tr>
                        <tr>
                            <th>Giảm giá</th>
                            <td style={{ color: 'rgb(218, 41, 28)' }}>-74.700 ₫</td>
                        </tr>
                        <tr className={cx('grand-totals')}>
                            <th>Tổng tiền thanh toán</th>
                            <td>174.300 ₫</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className={cx('checkout-proceed-checkout')}>
                <button className={cx('btn-place-order')}>Đặt hàng</button>
                <div className={cx('continue-shop')}>
                    <a href="/">Tiếp tục mua sắm</a>
                </div>

                <div className={cx('checkout-point-info')}>Áp dụng mã giảm giá, C-point tại bước tiếp theo</div>
            </div>
            <div className={cx('payment-note')}>
                Chúng tôi chấp nhận thanh toán:
                <img src="https://canifa.com/assets/images/payment-note.svg" alt="" />
            </div>
        </div>
    );
}

export default CheckoutCartSummary;
