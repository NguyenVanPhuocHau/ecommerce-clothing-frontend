import React from 'react';
import { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import styles from './CheckoutCartSummary.module.scss';
import classNames from 'classnames/bind';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'components/Button/Button';

const cx = classNames.bind(styles);
function CheckoutCartSummary(props) {
    const cartItems = useSelector((state) => state.hau.items);
    const discountPrice = cartItems.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.price * currentItem.product.discount;
    }, 0);
    const rootPrice = cartItems.reduce((accumulator, currentItem) => {
        return (
            accumulator + (currentItem.price + currentItem.price * currentItem.product.discount) * currentItem.quantity
        );
    }, 0);
    const finalPrice = cartItems.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.price * currentItem.quantity;
    }, 0);
    function formattedPrice(p) {
        return p.toLocaleString('vi-VN');
    }
    const handleCheckout = () => {
        fetch(`http://localhost:8080/api/v1/payment/vnpay`, {
            method: 'POST',
            body: JSON.stringify({
                vnp_Ammount: finalPrice,
                
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((data) => window.location.href = data.url
            );
    };
    return (
        <div className={cx('checkout-summary', 'checkout-summary-cart')}>
            <div className={cx('checkout-summary-title')}>Đơn hàng</div>
            <div className={cx(props.stage==='order'?'':'non-border','checkout-totals')}>
                <table>
                    <tbody>
                        <tr>
                            <th>Giá gốc</th>
                            <td>{formattedPrice(rootPrice)} ₫</td>
                        </tr>
                        <tr>
                            <th>Giảm giá</th>
                            <td style={{ color: 'rgb(218, 41, 28)' }}>-{formattedPrice(discountPrice)} ₫</td>
                        </tr>
                        <tr className={cx('grand-totals')}>
                            <th>Tổng tiền thanh toán</th>
                            <td>{formattedPrice(finalPrice)} ₫</td>
                        </tr>
                        {props.stage === 'order' ? (
                            <tr>
                                <th colspan="2">
                                    <i>(*) Đã bao gồm thuế GTGT.</i>
                                </th>
                            </tr>
                        ) : (
                            ''
                        )}
                    </tbody>
                </table>
            </div>
            {props.stage === 'order' ? (
                <div className={cx('checkout-step', 'checkout-coupon')}>
                    <div className={cx('checkout-step-title')}>Mã giảm giá/ Thẻ quà tặng</div>
                    <div className={cx('checkout-step-content')} style={{ paddingBottom: '25px' }}>
                        <div className={cx('checkout-coupon-form')}>
                            <input type="text" name="promoCode" placeholder="Nhập mã" className={cx('form-control')} />
                            <button className={cx('btn-add-coupon', 'btn-add')}>Áp dụng</button>
                        </div>
                    </div>
                </div>
            ) : (
                ''
            )}
            {props.stage === 'order' ? (
                <div className={cx('checkout-step', 'checkout-point')}>
                    <div className={cx('checkout-step-title')}>
                        Sử dụng C-point <small> (1 C-point = đ 1.000)</small>
                    </div>
                    <div className={cx('checkout-step-content')}>
                        <div className={cx('checkout-point-form')}>
                            <input
                                type="text"
                                name="cpoint"
                                placeholder="Nhập số C-point"
                                className={cx('form-control')}
                            />
                            <button className={cx('btn-add-point', 'btn-add')}>Áp dụng</button>
                        </div>
                        <div className={cx('checkout-point-note')}>Bạn đang có 0 C-point khả dụng</div>
                    </div>
                </div>
            ) : (
                ''
            )}

            {props.stage === 'order' ? (
                <div className={cx('checkout-proceed-checkout')}>
                    <button className={cx('btn-place-order')} onClick={handleCheckout}>Thanh toán</button>
                    <div className={cx('checkout-point-info')}>
                        Tích luỹ <span style={{ color: 'rgb(218, 41, 28)' }}>0 C-point</span> cho đơn hàng
                    </div>
                </div>
            ) : (
                <div className={cx('checkout-proceed-checkout','non-border')}>
                    <NavLink to="/checkout">
                        <button className={cx('btn-place-order')}>Đặt hàng</button>
                    </NavLink>
                    <div className={cx('continue-shop')}>
                        <NavLink to="/">Tiếp tục mua sắm</NavLink>
                    </div>

                    <div className={cx('checkout-point-info')}>Áp dụng mã giảm giá, C-point tại bước tiếp theo</div>
                </div>
            )}

            {props.stage === 'order' ? (
                ''
            ) : (
                <div className={cx('payment-note')}>
                    Chúng tôi chấp nhận thanh toán:
                    <img src="https://canifa.com/assets/images/payment-note.svg" alt="" />
                </div>
            )}
        </div>
    );
}

export default CheckoutCartSummary;
