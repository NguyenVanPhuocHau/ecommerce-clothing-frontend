import React from 'react';
import { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import styles from './PopopAddAddress.module.scss';
import classNames from 'classnames/bind';
import { useDispatch, useSelector } from 'react-redux';
import { data } from 'pages/ProductDetails/data';
import { myuser } from 'redux/authenticationSlide';
import { fetchAddressId } from 'redux/actions';
const cx = classNames.bind(styles);
function PopopChooseAddress(props) {
    const dispatch = useDispatch();
    const user = useSelector(myuser);
    const [listAddress, setListAddress] = useState([]);
    const [addressChoose, setAddressChoose] = useState(props.addressCurrent);

    const hanleChangeAddress = (e) => {
        props.setAddressCurrent(e);
        dispatch(fetchAddressId(e.id))
        props.handleClickClose();
    };
   
    useEffect(() => {
        fetch(`http://localhost:8080/api/v1/users/address/${user.id}`, {
            method: 'GET',
        })
            .then((response) => response.json())
            .then((response) => {
                setListAddress(response);
                // setAddressChoose(props.hau)
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    return (
        <div className={cx('popop-address')}>
            <div className={cx('popop-address-content')}>
                <h2>Thông tin giao hàng</h2>
                <div className={cx('popop-address-close')} onClick={props.handleClickClose}></div>
                <div className={cx('shipping-address-items')}>
                    {listAddress.map((e, i) => {
                        return (
                            <div className={cx('shipping-address-item')}>
                                {addressChoose.id === e.id ? (
                                    <a onClick={()=>hanleChangeAddress(e)} className={cx('default')}>
                                        Đang dùng
                                    </a>
                                ) : (
                                    <a onClick={()=>hanleChangeAddress(e)} className={cx('apply')}>
                                        Dùng địa chỉ này 
                                    </a>
                                )}

                                <div className={cx('label')}>Giao hàng đến</div>
                                <div className={cx('name')}>
                                    {e.fullName}
                                    <span className={cx('phone')}>{e.phone}</span>
                                </div>
                                <div className={cx('address')}>{e.address + ', ' + e.district + ', ' + e.province}</div>
                            </div>
                        );
                    })}

                    {/* <div className={cx('shipping-address-item')}>
                        <a href="#" className={cx('apply')}>
                            Dùng địa chỉ này
                        </a>
                        <div className={cx('label')}>Giao hàng đến</div>
                        <div className={cx('name')}>
                            Nguyễn Văn Hậu
                            <span className={cx('phone')}>0824831867</span>
                        </div>
                        <div className={cx('address')}>245, Huyện Bến Lức, Long An</div>
                    </div> */}
                    <div className={cx('button-addnew')}>
                        <a onClick={props.handleClickAddAddress}>TẠO ĐỊA CHỈ MỚI</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PopopChooseAddress;
