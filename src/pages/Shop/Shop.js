import React from 'react';
import { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import styles from './Shop.module.scss';
import classNames from 'classnames/bind';

import { useDispatch, useSelector } from 'react-redux';
import Filter from './Filter/Filter';
import ListProduct from './ListProduct/ListProduct';


const cx = classNames.bind(styles);
function Shop() {
    return (
        <div className={cx('site-main')}>
            <div className={cx('bg_collection', 'section')}>
                <div className={cx('row')}>
                    
                    <Filter/>
                   
                    <ListProduct/>
                </div>
            </div>
        </div>
    )
}

export default Shop
