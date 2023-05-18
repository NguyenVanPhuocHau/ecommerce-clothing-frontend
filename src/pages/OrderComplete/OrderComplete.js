import React from 'react';
import { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import styles from './OrderComplete.module.scss';
import classNames from 'classnames/bind';
import { useDispatch, useSelector } from 'react-redux';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import axios from 'axios';
import { myuser } from 'redux/authenticationSlide';
const cx = classNames.bind(styles);

function OrderComplete() {
    const user = useSelector(myuser);
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const vnpResponseCode = urlParams.get('vnp_ResponseCode');
        // const vnpAmount = urlParams.get('vnp_Amount');
        // const vnpBankCode = urlParams.get('vnp_BankCode');
        // const vnpCardType = urlParams.get('vnp_CardType');
        // const vnpOrderInfo = urlParams.get('vnp_OrderInfo');
        // Các thông số khác tương ứng với tên tham số trong URL

        // Gọi API
        if (vnpResponseCode === '00') {
            axios
                .post('http://example.com/api/order-complete', {
                    vnpAmount
                    // Truyền các thông số khác vào đây
                })
                .then((response) => {
                    // Xử lý kết quả trả về từ API
                    console.log(response.data);
                })
                .catch((error) => {
                    // Xử lý lỗi
                    console.error(error);
                });
        }
    }, []);
    return (
        <main className={cx('site-main')}>
            <ProgressBar states="complete" />
            {/* <div className={cx('checkout-container', 'checkout-cart-container')}>
                
            </div> */}
            <div>
                <table align="center" border="0" cellPadding="0" cellSpacing="0" width="100%" style={{ maxWidth: 600 }}>
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
                                                        Fashion
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
                                    style={{ maxWidth: 600 }}
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
                                                    Quý khách đặt phòng thành công thông qua Website đặt phòng trực tiến
                                                    TownHub.
                                                </p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td align="left" style={{ paddingTop: 20 }}>
                                                <table cellSpacing="0" cellPadding="0" border="0" width="100%">
                                                    <tbody>
                                                        <tr>
                                                            <td
                                                                width="75%"
                                                                align="left"
                                                                bgcolor="#eeeeee"
                                                                style={{
                                                                    fontFamily:
                                                                        'Open Sans, Helvetica, Arial, sans-serif',
                                                                    fontSize: 16,
                                                                    fontWeight: 800,
                                                                    lineHeight: '24px',
                                                                    padding: 10,
                                                                }}
                                                            >
                                                                Xác nhận đặt phòng #
                                                            </td>
                                                            <td
                                                                width="25%"
                                                                align="left"
                                                                bgcolor="#eeeeee"
                                                                style={{
                                                                    fontFamily:
                                                                        'Open Sans, Helvetica, Arial, sans-serif',
                                                                    fontSize: 16,
                                                                    fontWeight: 800,
                                                                    lineHeight: '24px',
                                                                    padding: 10,
                                                                }}
                                                            >
                                                                {/* {orderId} */}
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td
                                                                width="75%"
                                                                align="left"
                                                                style={{
                                                                    fontFamily:
                                                                        'Open Sans, Helvetica, Arial, sans-serif',
                                                                    fontSize: 16,
                                                                    fontWeight: 400,
                                                                    lineHeight: '24px',
                                                                    padding: '15px 10px 5px 10px',
                                                                }}
                                                            >
                                                                {/* {data.name} ({days}) */} Tên san pham + ngày
                                                            </td>
                                                            <td
                                                                width="25%"
                                                                align="left"
                                                                style={{
                                                                    fontFamily:
                                                                        'Open Sans, Helvetica, Arial, sans-serif',
                                                                    fontSize: 16,
                                                                    fontWeight: 400,
                                                                    lineHeight: '24px',
                                                                    padding: '15px 10px 5px 10px',
                                                                }}
                                                            >
                                                                {/* {formatter.format(homePrice)} */} giá tiền
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td
                                                                width="75%"
                                                                align="left"
                                                                style={{
                                                                    fontFamily:
                                                                        'Open Sans, Helvetica, Arial, sans-serif',
                                                                    fontSize: 16,
                                                                    fontWeight: 400,
                                                                    lineHeight: '24px',
                                                                    padding: '5px 10px',
                                                                }}
                                                            >
                                                                Phí phục vụ
                                                            </td>
                                                            <td
                                                                width="25%"
                                                                align="left"
                                                                style={{
                                                                    fontFamily:
                                                                        'Open Sans, Helvetica, Arial, sans-serif',
                                                                    fontSize: 16,
                                                                    fontWeight: 400,
                                                                    lineHeight: '24px',
                                                                    padding: '5px 10px',
                                                                }}
                                                            >
                                                                {/* {formatter.format(350000)} */} giá
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td
                                                                width="75%"
                                                                align="left"
                                                                style={{
                                                                    fontFamily:
                                                                        'Open Sans, Helvetica, Arial, sans-serif',
                                                                    fontSize: 16,
                                                                    fontWeight: 400,
                                                                    lineHeight: '24px',
                                                                    padding: '5px 10px',
                                                                }}
                                                            >
                                                                Phí vệ sinh
                                                            </td>
                                                            <td
                                                                width="25%"
                                                                align="left"
                                                                style={{
                                                                    fontFamily:
                                                                        'Open Sans, Helvetica, Arial, sans-serif',
                                                                    fontSize: 16,
                                                                    fontWeight: 400,
                                                                    lineHeight: '24px',
                                                                    padding: '5px 10px',
                                                                }}
                                                            >
                                                                {/* {formatter.format(100000)} */} giá
                                                            </td>
                                                        </tr>
                                                        {/* {payPoint > 0 && (
                                                            <tr>
                                                                <td
                                                                    width="75%"
                                                                    align="left"
                                                                    style={{
                                                                        fontFamily:
                                                                            'Open Sans, Helvetica, Arial, sans-serif',
                                                                        fontSize: 16,
                                                                        fontWeight: 400,
                                                                        lineHeight: '24px',
                                                                        padding: '5px 10px',
                                                                    }}
                                                                >
                                                                    Số điểm tích lũy đã dùng
                                                                </td>
                                                                <td
                                                                    width="25%"
                                                                    align="left"
                                                                    style={{
                                                                        fontFamily:
                                                                            'Open Sans, Helvetica, Arial, sans-serif',
                                                                        fontSize: 16,
                                                                        fontWeight: 400,
                                                                        lineHeight: '24px',
                                                                        padding: '5px 10px',
                                                                    }}
                                                                >
                                                                    -{formatter.format(pricePoint())}
                                                                </td>
                                                            </tr>
                                                        )} */}
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
                                                                width="75%"
                                                                align="left"
                                                                style={{
                                                                    fontFamily:
                                                                        'Open Sans, Helvetica, Arial, sans-serif',
                                                                    fontSize: 16,
                                                                    fontWeight: 800,
                                                                    lineHeight: '24px',
                                                                    padding: 10,
                                                                    borderTop: '3px solid #eeeeee',
                                                                    borderBottom: '3px solid #eeeeee',
                                                                }}
                                                            >
                                                                Tổng cộng
                                                            </td>
                                                            <td
                                                                width="25%"
                                                                align="left"
                                                                style={{
                                                                    fontFamily:
                                                                        'Open Sans, Helvetica, Arial, sans-serif',
                                                                    fontSize: 16,
                                                                    fontWeight: 800,
                                                                    lineHeight: '24px',
                                                                    padding: 10,
                                                                    borderTop: '3px solid #eeeeee',
                                                                    borderBottom: '3px solid #eeeeee',
                                                                }}
                                                            >
                                                                {/* {formatter.format(total())} */} tồng tiền
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
                                                        maxWidth: '50%',
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
                                                                        {/* {userInfor.firstname} {userInfor.lastname}{' '} */}{' '}
                                                                        nguyen hau
                                                                        {/* {userInfor.bonus_point} */}
                                                                        <br />
                                                                        {/* {address.specifically} */} Địa chỉ
                                                                    </p>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <div
                                                    style={{
                                                        display: 'inline-block',
                                                        maxWidth: '50%',
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
                                                                    <p>ngày ở đay</p>
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
