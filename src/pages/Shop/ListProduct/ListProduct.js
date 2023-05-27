import React from 'react';
import { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import styles from './ListProduct.module.scss';
import classNames from 'classnames/bind';
import Pagination from '@material-ui/lab/Pagination';
import { useDispatch, useSelector } from 'react-redux';

import Product from 'components/Product/Product';
const cx = classNames.bind(styles);
function ListProduct(props) {
    const {
        selectedColors,
        selectedSizes,
        rangePrice,
        retrieveUsers,
        page,
        limit,
        setPage,
        setLimit,
        products,
        count,
        handleSelectSort
    } = props;

    const [arrSize, setArrSize] = useState([]);

    useEffect(retrieveUsers, [page, limit]);
    const handlePageChange = (event, value) => {
        setPage(value);
    };

    const handlePageSizeChange = (event) => {
        setLimit(event.target.value);
        setPage(1);
    };
    // const handleChange = (event) => {
    //     this.setState({ selectedOption: event.target.value });
    // };
 
    return (
        <div className={cx('contain__listHouse', 'displayContain', 'displayContain')}>
            <div className={cx('select_contain')}>
                <label className={cx('select')} htmlFor="slct">
                    <select id="slct" required="required" onChange={handleSelectSort}>
                        <option value="" disabled="disabled" selected="selected">
                            Sấp xếp
                        </option>
                        <option value="A-Z">A - Z</option>
                        <option value="Z-A">Z - A</option>
                        <option value="lowPrice">Giá thấp </option>
                        <option value="hightPrice">Giá cao </option>
                    </select>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="3"
                        stroke="currentColor"
                        // class="w-6 h-6"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                </label>
            </div>
            <div className={cx('listHouse', 'row')}>
                {products.map((e, i) => {
                    return (
                        <Product
                            key={e.id}
                            id={e.id}
                            name={e.productName}
                            colors={e.productColors}
                            sizes={e.productSizes}
                            price={e.price}
                            discount={e.discount}
                            images={e.productImages}
                            event={e.event}
                            home="flase"
                        />
                    );
                })}
            </div>
            <Pagination
                color="primary"
                className="my-3"
                count={count}
                page={page}
                siblingCount={1}
                boundaryCount={1}
                variant="outlined"
                onChange={handlePageChange}
            />
        </div>
    );
}

export default ListProduct;
