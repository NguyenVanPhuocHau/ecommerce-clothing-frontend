import React from 'react';
import { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import styles from './Order.module.scss';
import classNames from 'classnames/bind';
import { useDispatch, useSelector } from 'react-redux';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import CartReview from '../../components/CartReview/CartReview';
import CheckoutCartSummary from '../../components/CheckoutCartSummary/CheckoutCartSummary';
import PopopAddAddress from './PopopAddAddress/PopopAddAddress';
import PopopChooseAddress from './PopopChooseAddress/PopopChooseAddress';
import { myuser } from 'redux/authenticationSlide';
const cx = classNames.bind(styles);

function Order() {
    const user = useSelector(myuser);
    const [popopAddAddress, showPopopAddAddress] = useState(false);
    const [popopChooseAddress, showPopopChooseAddress] = useState(false);
    const toggleShowPopopAddAddress = () => {
        showPopopAddAddress(!popopAddAddress);
        showPopopChooseAddress(false);
    };
    const toggleShowPopopChooseAddress = () => {
        showPopopChooseAddress(!popopChooseAddress);
    };
    const [addressCurrent, setAddressCurrent] = useState({});
    useEffect(() => {
        fetch(`http://localhost:8080/api/v1/users/addressDefault/${user.id}`, {
            method: 'GET',
        })
            .then((response) => response.json())
            .then((response) => {
                setAddressCurrent(response);
                console.log('response');
            })
            .catch((err) => {
                console.log(err);
                console.log('sai');
            });
    }, []);




    return (
        <main className={cx('site-main')}>
            <ProgressBar states="order" />
            <div className={cx('checkout-container', 'checkout-cart-container')}>
                <div className={cx('checkout-container--left')}>
                    <div className={cx('checkout-form')}>
                        <div className={cx('checkout-step', 'checkout-shipping')}>
                            <div>
                                <div className={cx('checkout-step-title')}>
                                    <h2>Thông tin giao hàng</h2>
                                    <NavLink to="/shopcart" className={cx('btn-back')}>
                                        Quay lại giỏ hàng
                                    </NavLink>
                                </div>
                            </div>
                            <div>
                                <div className={cx('checkout-step-content')}>
                                    <div className={cx('shipping-address-items')}>
                                        <div className={cx('shipping-address-item')}>
                                            {/* <a onClick={toggleShowPopopChooseAddress} className={cx('edit')}>
                                                Thay đổi
                                            </a> */}
                                            <a onClick={toggleShowPopopChooseAddress} className={cx('edit')}>
                                                Thay đổi
                                            </a>
                                            <div className={cx('label')}>Giao hàng đến</div>
                                            <div className={cx('name')}>
                                                {addressCurrent.fullName}
                                                <span className={cx('phone')}>{addressCurrent.phone}</span>
                                            </div>
                                            <div className={cx('address')}>
                                                {addressCurrent.address +
                                                    ', ' +
                                                    addressCurrent.district +
                                                    ', ' +
                                                    addressCurrent.province}
                                            </div>
                                        </div>
                                        <div className={cx('button-addnew')}>
                                            <a onClick={toggleShowPopopAddAddress}>TẠO ĐỊA CHỈ MỚI</a>
                                        </div>
                                    </div>
                                    {popopAddAddress ? (
                                        <PopopAddAddress handleClickClose={toggleShowPopopAddAddress} />
                                    ) : (
                                        ''
                                    )}
                                    {popopChooseAddress ? (
                                        <PopopChooseAddress
                                            handleClickClose={toggleShowPopopChooseAddress}
                                            handleClickAddAddress={toggleShowPopopAddAddress}
                                            addressCurrent={addressCurrent}
                                            setAddressCurrent={setAddressCurrent}
                                        />
                                    ) : (
                                        ''
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className={cx('checkout-step', 'checkout-payment-method')} isactive="true">
                            <div className={cx('checkout-step-title')}>
                                <h2>Phương thức thanh toán</h2>
                            </div>
                            <div className={cx('checkout-step-content')}>
                                <div className={cx('checkout-payment-method-section')}>
                                    <label htmlFor="cashondelivery" className={cx('active')}>
                                        <input id="cashondelivery" type="radio" value="cashondelivery" />
                                        <span>
                                            <b>Thanh toán khi nhận hàng (COD)</b>
                                            <img
                                                src="https://canifa.com/assets/images/cod.svg"
                                                // onError="this.onerror=null;this.src='/assets/images/cod.svg'"
                                                alt=""
                                            />
                                        </span>
                                    </label>
                                </div>
                                <div className={cx('checkout-payment-method-section')}>
                                    <label htmlFor="vnpay">
                                        <input id="vnpay" type="radio" value="vnpay" />
                                        <span>
                                            <b>Thanh toán bằng VNPAY</b>
                                            <img
                                                src="https://canifa.com/assets/images/vnpay.svg"
                                                // onerror="this.onerror=null;this.src='/assets/images/vnpay.svg'"
                                                alt=""
                                            />
                                        </span>
                                    </label>
                                </div>
                                <div className={cx('checkout-payment-method-section')}>
                                    <label htmlFor="shopee_pay">
                                        <input id="shopee_pay" type="radio" value="shopee_pay" />
                                        <span>
                                            <b>Thanh toán bằng ShopeePay</b>
                                            <img
                                                src="https://canifa.com/assets/images/shopeepay.svg"
                                                // onerror="this.onerror=null;this.src='/assets/images/shopeepay.svg'"
                                                alt=""
                                            />
                                        </span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <CartReview stage="order" />
                </div>
                <div className={cx('checkout-container--right')}>
                    <CheckoutCartSummary stage="order" />
                </div>
            </div>
        </main>
    );
}

export default Order;
