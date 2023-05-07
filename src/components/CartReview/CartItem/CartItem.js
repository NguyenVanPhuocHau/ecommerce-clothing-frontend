import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import styles from './CartItem.module.scss';
import classNames from 'classnames/bind';
import { useDispatch, useSelector } from 'react-redux';
import { myuser } from 'redux/authenticationSlide';
const cx = classNames.bind(styles);
function CartItem(props) {
    const user = useSelector(myuser);
    const [value, setValue] = useState('10');
    const inputRef = useRef(null);
    const [listImg, setListImg] = useState(props.images);
    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.value = value;
        }
    }, [value]);

    return (
        <tr className={cx('cart-item')}>
            <td data-th="Sản phẩm" className={cx('col', 'item')}>
                <div className={cx('cart-item-info')}>
                    <div className={cx('cart-item-photo')}>
                        <a href="/ao-somi-be-trai-2th23a001" className={cx('cart-image-container')}>
                            <img
                                src={listImg[0].images}
                                // onerror="this.onerror=null;this.src='https://canifa.com/img/210/300/resize/2/t/2th23a001-sg570-2-thumb.jpg'"
                                alt=""
                            />
                        </a>
                    </div>
                    <div className={cx('cart-item-details')}>
                        <strong className={cx('cart-item-name')}>
                            <a href="/ao-somi-be-trai-2th23a001" className={cx('')}>
                                Áo sơ mi bé trai
                            </a>
                        </strong>
                        <div className={cx('cart-item-options')}>
                            <div className={cx('cart-item-option')}>
                                <span>
                                    <span className={cx('swatch-option', 'text')}>110</span>
                                </span>
                            </div>
                            <div className={cx('cart-item-option')}>
                                <span>
                                    <span
                                        className={cx('swatch-option', 'color')}
                                        style={{
                                            backgroundImage:
                                                'url("https://media.canifa.com/attribute/swatch/images/sg570.png")',
                                        }}
                                    ></span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </td>
            <td data-th="Giá tiền" className={cx('col', 'price')}>
                <span className={cx('price')}>174.300 ₫</span> <span className={cx('old-price')}>249.000 ₫</span>
            </td>
            <td data-th="Số lượng" className={cx('col', 'qty')}>
                <div className={cx('cart-item-qty')}>
                    <a className={cx('btn-number', 'btn-number-minus')}>
                        <span>▼</span>
                    </a>
                    <input type="text" readOnly="readOnly" className={cx('input-cart-item-qty')} ref={inputRef} />
                    <a className={cx('btn-number', 'btn-number-plus')}>
                        <span>▲</span>
                    </a>
                </div>
            </td>
            <td data-th="Tổng tiền" className={cx('col', 'subtotal')}>
                <span className={cx('price')}>174.300 ₫</span>
            </td>
            <td className={cx('col', 'actions')}>
                <a title="Xóa" className={cx('action-delete')} style={{ cursor: 'pointer' }}>
                    <span>Xóa</span>
                </a>
            </td>
        </tr>
    );
}

export default CartItem;
