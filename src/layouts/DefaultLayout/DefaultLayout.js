import classNames from 'classnames/bind';
import HeaderSlickSlider from 'layouts/components/Header/HeaderSlickSlider/HeaderSlickSlider';
import Header from '../components/Header/Header';
import styles from './DefaultLayout.module.scss';
import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import Button from "~/components/Button";
import { myuser } from 'redux/authenticationSlide';
const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    // const user = useSelector(myuser);
    // const [num, setTotalItem] = useState(0);
    // const [listItems, setListItems] = useState([]);
    // const [item, setItem] = useState();
    // useEffect(() => {
    //     fetch(`http://localhost:8080/api/v1/cart/cartItems/${user?.id}`, {
    //         method: 'GET',
    //     })
    //         .then((response) => response.json())
    //         .then((response) => {
    //             if (response.status !== 400) {
    //                 const totalItem = response.reduce((accumulator, currentItem) => {
    //                     return accumulator + currentItem.quantity;
    //                 }, 0);
    //                 setTotalItem(totalItem);
    //             }
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // }, []);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <Header/>
                <HeaderSlickSlider />
            </div>
            <div className={cx('content')}>{children}</div>
            <p>fooder</p>
        </div>
    );
}

export default DefaultLayout;
