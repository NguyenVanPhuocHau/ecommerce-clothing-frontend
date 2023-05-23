import React from 'react';
import { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import styles from './OrderComplete.module.scss';
import classNames from 'classnames/bind';
import { useDispatch, useSelector } from 'react-redux';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import axios from 'axios';
import { clearCart, newOrderCurrent } from 'redux/actions';
import { myuser } from 'redux/authenticationSlide';
const cx = classNames.bind(styles);

function OrderComplete() {
    const dispatch = useDispatch();
    const user = useSelector(myuser);
    // const [order, setOrder] = useState({});
    const cartItems = useSelector((state) => state.hau.items);
    const addressId = useSelector((state) => state.hau.addressId);
    const order = useSelector((state) => state.hau.latestOrder);
    const discountPrice = order.orderItems.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.price * currentItem.product.discount;
    }, 0);
    const rootPrice = order.orderItems.reduce((accumulator, currentItem) => {
        return (
            accumulator + (currentItem.price + currentItem.price * currentItem.product.discount) * currentItem.quantity
        );
    }, 0);
    const finalPrice = order.orderItems.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.price * currentItem.quantity;
    }, 0);
    function formattedPrice(p) {
        return p.toLocaleString('vi-VN');
    }
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const vnpResponseCode = urlParams.get('vnp_ResponseCode');
        // const vnpAmount = urlParams.get('vnp_Amount');
        // const vnpBankCode = urlParams.get('vnp_BankCode');
        // const vnpCardType = urlParams.get('vnp_CardType');
        // const vnpOrderInfo = urlParams.get('vnp_OrderInfo');
        // Các thông số khác tương ứng với tên tham số trong URL

        // Gọi API
        if (vnpResponseCode === '00' && cartItems.length > 0) {
            dispatch(newOrderCurrent(user.id, rootPrice, 'vnpay', discountPrice, addressId));
        }
    }, []);

    return (
        <main className={cx('site-main')}>
            <ProgressBar states="complete" />
            {/* <div className={cx('checkout-container', 'checkout-cart-container')}>
                
            </div> */}
            <div>
                <table align="center" border="0" cellPadding="0" cellSpacing="0" width="100%" style={{ maxWidth: 700 }}>
                    <tbody>
                        <tr>
                            <td align="center" valign="top" style={{ fontSize: 0, padding: 35 }} bgcolor="#010101">
                                <div
                                    style={{
                                        display: 'inline-block',
                                        maxWidth: '50%',
                                        minWidth: 100,
                                        verticalAlign: 'top',
                                        width: '100%',
                                    }}
                                >
                                    <table
                                        align="left"
                                        border="0"
                                        cellPadding="0"
                                        cellSpacing="0"
                                        width="100%"
                                        style={{ maxWidth: 300 }}
                                    >
                                        <tbody>
                                            <tr>
                                                <td
                                                    align="left"
                                                    valign="top"
                                                    style={{
                                                        fontFamily: 'Open Sans, Helvetica, Arial, sans-serif',
                                                        fontSize: 36,
                                                        fontWeight: 800,
                                                        lineHeight: '48px',
                                                    }}
                                                    className={cx('mobile-center')}
                                                >
                                                    <h1
                                                        style={{
                                                            fontSize: 36,
                                                            fontWeight: 800,
                                                            margin: 0,
                                                            color: '#ffffff',
                                                        }}
                                                    >
                                                        {/* <span style={{ color: '#3eaafd' }}>Fashion</span> */}
                                                        {/* <span style={{ color: '#3eaafd' }}></span> */}
                                                        Fashion Shop
                                                    </h1>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div
                                    style={{
                                        display: 'inline-block',
                                        maxWidth: '50%',
                                        minWidth: 100,
                                        verticalAlign: 'top',
                                        width: '100%',
                                    }}
                                    className={cx('mobile-hide')}
                                >
                                    fontFamily
                                    <table
                                        align="left"
                                        border="0"
                                        cellPadding="0"
                                        cellSpacing="0"
                                        width="100%"
                                        style={{ maxWidth: 300 }}
                                    >
                                        <tbody>
                                            <tr>
                                                <td
                                                    align="right"
                                                    valign="top"
                                                    style={{
                                                        fontFamily: 'Open Sans, Helvetica, Arial, sans-serif',
                                                        fontSize: 48,
                                                        fontWeight: 400,
                                                        lineHeight: '48px',
                                                    }}
                                                >
                                                    <table cellSpacing="0" cellPadding="0" border="0" align="right">
                                                        <tbody>
                                                            <tr>
                                                                <td
                                                                    style={{
                                                                        fontFamily:
                                                                            'Open Sans, Helvetica, Arial, sans-serif',
                                                                        fontSize: 18,
                                                                        fontWeight: 400,
                                                                    }}
                                                                >
                                                                    <p
                                                                        style={{
                                                                            fontSize: 18,
                                                                            fontWeight: 400,
                                                                            margin: 0,
                                                                            color: '#ffffff',
                                                                        }}
                                                                    >
                                                                        <a
                                                                            href="#"
                                                                            target="_blank"
                                                                            style={{
                                                                                color: '#ffffff',
                                                                                textDecoration: 'none',
                                                                            }}
                                                                        >
                                                                            &nbsp;
                                                                        </a>
                                                                    </p>
                                                                </td>
                                                                <td
                                                                    style={{
                                                                        fontFamily:
                                                                            'Open Sans, Helvetica, Arial, sans-serif',
                                                                        fontSize: 18,
                                                                        fontWeight: 400,
                                                                        lineHeight: 24,
                                                                    }}
                                                                >
                                                                    <a
                                                                        href="/"
                                                                        target="_blank"
                                                                        style={{
                                                                            color: '#ffffff',
                                                                            textDecoration: 'none',
                                                                        }}
                                                                    >
                                                                        {/* <img
                                                                            src="https://www.onlinelogomaker.com/blog/wp-content/uploads/2017/06/fashion-logos.jpg"
                                                                            width="10"
                                                                            height="10"
                                                                            style={{ display: 'block', border: 0 }}
                                                                        /> */}
                                                                    </a>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td
                                align="center"
                                style={{ padding: '35px 35px 20px 35px', backgroundColor: '#ffffff' }}
                                bgcolor="#ffffff"
                            >
                                <table
                                    align="center"
                                    border="0"
                                    cellPadding="0"
                                    cellSpacing="0"
                                    width="100%"
                                    style={{ maxWidth: 700 }}
                                >
                                    <tbody>
                                        <tr>
                                            <td
                                                align="center"
                                                style={{
                                                    fontFamily: 'Open Sans, Helvetica, Arial, sans-serif',
                                                    fontSize: 16,
                                                    fontWeight: 400,
                                                    lineHeight: '24px',
                                                    paddingTop: 25,
                                                }}
                                            >
                                                <img
                                                    src="https://th.bing.com/th/id/R.00029a073d21334ff749a6f82dc4e67e?rik=IX%2ff2QOT2HeS%2bg&riu=http%3a%2f%2fclipart-library.com%2fimages%2fBigrK9ri8.png&ehk=3yIsPt0vmWE39aXsn%2fF1JUHDEYIqzQf3%2bhJDzwC5xN4%3d&risl=&pid=ImgRaw&r=0"
                                                    width="125"
                                                    height="120"
                                                    style={{ display: 'block', border: 0, width: '20%' }}
                                                />
                                                <br />
                                                <h2
                                                    style={{
                                                        fontSize: 30,
                                                        fontWeight: 800,
                                                        lineHeight: '36px',
                                                        color: '#333333',
                                                        margin: 0,
                                                    }}
                                                >
                                                    Thanh toán thành công!
                                                </h2>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                align="left"
                                                style={{
                                                    fontFamily: 'Open Sans, Helvetica, Arial, sans-serif',
                                                    fontSize: 16,
                                                    fontWeight: 400,
                                                    lineHeight: '24px',
                                                    paddingTop: 10,
                                                }}
                                            >
                                                <p
                                                    style={{
                                                        fontSize: 16,
                                                        fontWeight: 400,
                                                        lineHeight: '24px',
                                                        color: '#777777',
                                                    }}
                                                >
                                                    Quý khách đặt hàng thành công thông qua Website thời trang trực tiến
                                                    Fashion Shop.
                                                </p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td align="left" style={{ paddingTop: 20 }}>
                                                <table cellSpacing="0" cellPadding="0" border="0" width="100%">
                                                    <tbody>
                                                        <tr>
                                                            <td
                                                                width="50%"
                                                                align="left"
                                                                bgcolor="#eeeeee"
                                                                style={{
                                                                    fontSize: 16,
                                                                    fontWeight: 800,
                                                                    lineHeight: '24px',
                                                                    padding: 10,
                                                                }}
                                                            >
                                                                Xác nhận đặt hàng #{order.id}
                                                            </td>
                                                            <td
                                                                width="25%"
                                                                align="center"
                                                                bgcolor="#eeeeee"
                                                                style={{
                                                                    fontSize: 16,
                                                                    fontWeight: 800,
                                                                    lineHeight: '24px',
                                                                    padding: 10,
                                                                }}
                                                            >
                                                                số lượng
                                                            </td>
                                                            <td
                                                                width="25%"
                                                                align="center"
                                                                bgcolor="#eeeeee"
                                                                style={{
                                                                    fontSize: 16,
                                                                    fontWeight: 800,
                                                                    lineHeight: '24px',
                                                                    padding: 10,
                                                                }}
                                                            >
                                                                giá tiền
                                                            </td>
                                                        </tr>
                                                        {order.orderItems.map((e, i) => {
                                                            const colorCode = e.productColor.colorCode;
                                                            return (
                                                                <tr>
                                                                    <td
                                                                        width="50%"
                                                                        align="left"
                                                                        style={{
                                                                            fontSize: 16,
                                                                            fontWeight: 400,
                                                                            lineHeight: '24px',
                                                                            padding: '15px 10px 5px 10px',
                                                                        }}
                                                                    >
                                                                        <div className={cx('cart-item-info')}>
                                                                            <div className={cx('cart-item-photo')}>
                                                                                <a
                                                                                    href="/ao-somi-be-trai-2th23a001"
                                                                                    className={cx(
                                                                                        'cart-image-container',
                                                                                    )}
                                                                                >
                                                                                    <img
                                                                                        src={
                                                                                            e.product.productImages[0]
                                                                                                .image
                                                                                        }
                                                                                        // onerror="this.onerror=null;this.src='https://canifa.com/img/210/300/resize/2/t/2th23a001-sg570-2-thumb.jpg'"
                                                                                        alt=""
                                                                                    />
                                                                                </a>
                                                                            </div>
                                                                            <div className={cx('cart-item-details')}>
                                                                                <strong
                                                                                    className={cx('cart-item-name')}
                                                                                >
                                                                                    <a
                                                                                        href="/ao-somi-be-trai-2th23a001"
                                                                                        className={cx('')}
                                                                                    >
                                                                                        {e.product.productName}
                                                                                    </a>
                                                                                </strong>
                                                                                <div
                                                                                    className={cx('cart-item-options')}
                                                                                >
                                                                                    <div
                                                                                        className={cx(
                                                                                            'cart-item-option',
                                                                                        )}
                                                                                    >
                                                                                        <span>
                                                                                            <span
                                                                                                className={cx(
                                                                                                    'swatch-option',
                                                                                                    'text',
                                                                                                )}
                                                                                            >
                                                                                                {e.productSize.size}
                                                                                            </span>
                                                                                        </span>
                                                                                    </div>
                                                                                    <div
                                                                                        className={cx(
                                                                                            'cart-item-option',
                                                                                        )}
                                                                                    >
                                                                                        <span>
                                                                                            <span
                                                                                                className={cx(
                                                                                                    'swatch-option',
                                                                                                    'color',
                                                                                                )}
                                                                                                style={{
                                                                                                    backgroundImage:
                                                                                                        'url("https://media.canifa.com/attribute/swatch/images/' +
                                                                                                        colorCode +
                                                                                                        '.png")',
                                                                                                }}
                                                                                            ></span>
                                                                                        </span>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td
                                                                        width="10%"
                                                                        align="center"
                                                                        style={{
                                                                            fontSize: 16,
                                                                            fontWeight: 400,
                                                                            lineHeight: '24px',
                                                                            padding: '15px 10px 5px 10px',
                                                                        }}
                                                                    >
                                                                        {'x' + e.quantity}
                                                                    </td>
                                                                    <td
                                                                        width="40%"
                                                                        align="center"
                                                                        style={{
                                                                            fontSize: 16,
                                                                            fontWeight: 400,
                                                                            lineHeight: '24px',
                                                                            padding: '15px 10px 5px 10px',
                                                                        }}
                                                                    >
                                                                        <td
                                                                            data-th="Giá tiền"
                                                                            className={cx('col', 'price')}
                                                                        >
                                                                            <span className={cx('price')}>
                                                                                {formattedPrice(e.product.price) + 'đ'}
                                                                            </span>
                                                                            <span className={cx('old-price')}>
                                                                                {e.product.discount !== 0
                                                                                    ? formattedPrice(
                                                                                          e.product.price +
                                                                                              e.product.price *
                                                                                                  e.product.discount,
                                                                                      ) + '₫'
                                                                                    : ''}
                                                                            </span>
                                                                        </td>
                                                                    </td>
                                                                </tr>
                                                            );
                                                        })}
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td align="left" style={{ paddingTop: 20 }}>
                                                <table cellSpacing="0" cellPadding="0" border="0" width="100%">
                                                    <tbody>
                                                        <tr>
                                                            <td
                                                                width="33%"
                                                                align="center"
                                                                style={{
                                                                    fontSize: 16,
                                                                    fontWeight: 800,
                                                                    lineHeight: '24px',
                                                                    padding: 10,
                                                                    borderTop: '3px solid #eeeeee',
                                                                    borderBottom: '3px solid #eeeeee',
                                                                }}
                                                            >
                                                                Giá góc
                                                            </td>
                                                            <td
                                                                width="33%"
                                                                align="center"
                                                                style={{
                                                                    fontSize: 16,
                                                                    fontWeight: 800,
                                                                    lineHeight: '24px',
                                                                    padding: 10,
                                                                    borderTop: '3px solid #eeeeee',
                                                                    borderBottom: '3px solid #eeeeee',
                                                                }}
                                                            >
                                                                Giá giảm
                                                            </td>
                                                            <td
                                                                width="33%"
                                                                align="center"
                                                                style={{
                                                                    fontSize: 16,
                                                                    fontWeight: 800,
                                                                    lineHeight: '24px',
                                                                    padding: 10,
                                                                    borderTop: '3px solid #eeeeee',
                                                                    borderBottom: '3px solid #eeeeee',
                                                                }}
                                                            >
                                                                Thành tiền
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td
                                                                width="33%"
                                                                align="center"
                                                                style={{
                                                                    fontSize: 16,
                                                                    fontWeight: 600,
                                                                    lineHeight: '24px',
                                                                    padding: '15px 10px 5px 10px',
                                                                }}
                                                            >
                                                                {formattedPrice(rootPrice) + " đ"}
                                                            </td>
                                                            <td
                                                                width="33%"
                                                                align="center"
                                                                style={{
                                                                    fontSize: 16,
                                                                    fontWeight: 600,
                                                                    lineHeight: '24px',
                                                                    padding: '15px 10px 5px 10px',
                                                                }}
                                                            >
                                                                 {formattedPrice(discountPrice) + " đ"}
                                                            </td>
                                                            <td
                                                                width="33%"
                                                                align="center"
                                                                style={{
                                                                    fontSize: 16,
                                                                    fontWeight: 600,
                                                                    lineHeight: '24px',
                                                                    padding: '15px 10px 5px 10px',
                                                                }}
                                                            >
                                                                 {formattedPrice(finalPrice) + " đ"}
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td
                                align="center"
                                height="100%"
                                valign="top"
                                width="100%"
                                style={{ padding: '0px 35px 35px 35px', backgroundColor: '#ffffff' }}
                                bgcolor="#ffffff"
                            >
                                <table
                                    align="center"
                                    border="0"
                                    cellPadding="0"
                                    cellSpacing="0"
                                    width="100%"
                                    style={{ maxWidth: 660 }}
                                >
                                    <tbody>
                                        <tr>
                                            <td align="center" valign="top" style={{ fontSize: 0 }}>
                                                <div
                                                    style={{
                                                        display: 'inline-block',
                                                        maxWidth: '60%',
                                                        minWidth: 240,
                                                        verticalAlign: 'top',
                                                        width: '100%',
                                                    }}
                                                >
                                                    <table
                                                        align="left"
                                                        border="0"
                                                        cellPadding="0"
                                                        cellSpacing="0"
                                                        width="100%"
                                                        style={{ maxWidth: 300 }}
                                                    >
                                                        <tbody>
                                                            <tr>
                                                                <td
                                                                    align="left"
                                                                    valign="top"
                                                                    style={{
                                                                        fontFamily:
                                                                            'Open Sans, Helvetica, Arial, sans-serif',
                                                                        fontSize: 16,
                                                                        fontWeight: 400,
                                                                        lineHeight: 24,
                                                                    }}
                                                                >
                                                                    <p style={{ fontWeight: 800 }}>
                                                                        Thông tin khách hàng
                                                                    </p>
                                                                    <p>
                                                                       
                                                                        {order.address.fullName}
                                                                       
                                                                        <br />
                                                                        {order.address.address + ", " + order.address.province + ", " + order.address.district +", "+ order.address.ward}
                                                                    </p>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <div
                                                    style={{
                                                        display: 'inline-block',
                                                        maxWidth: '40%',
                                                        minWidth: 240,
                                                        verticalAlign: 'top',
                                                        width: '100%',
                                                    }}
                                                >
                                                    <table
                                                        align="left"
                                                        border="0"
                                                        cellPadding="0"
                                                        cellSpacing="0"
                                                        width="100%"
                                                        style={{ maxWidth: 300 }}
                                                    >
                                                        <tbody>
                                                            <tr>
                                                                <td
                                                                    align="left"
                                                                    valign="top"
                                                                    style={{
                                                                        fontFamily:
                                                                            'Open Sans, Helvetica, Arial, sans-serif',
                                                                        fontSize: 16,
                                                                        fontWeight: 400,
                                                                        lineHeight: 24,
                                                                    }}
                                                                >
                                                                    <p style={{ fontWeight: 800 }}>Ngày giao dịch</p>
                                                                    <p>{order.createAt}</p>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </main>
    );
}

export default OrderComplete;
