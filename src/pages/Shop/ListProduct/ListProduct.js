import React from 'react';
import { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import styles from './ListProduct.module.scss';
import classNames from 'classnames/bind';

import { useDispatch, useSelector } from 'react-redux';

import Product from 'components/Product/Product';
const cx = classNames.bind(styles);
function ListProduct() {
    const [page, setPage] = useState(1);
    const [count, setCount] = useState(0);
    const [limit, setLimit] = useState(4);
    const [products, setProducts] = useState([]);
    const getRequestParams = (page, limit) => {
        let params = {};

        if (page) {
            params['page'] = page - 1;
        }

        if (limit) {
            params['size'] = limit;
        }

        return params;
    };
    const retrieveUsers = () => {
        const params = getRequestParams(page, limit);

        fetch(`http://localhost:8080/api/v1/products/page`, {
            method: 'GET',
            params,
        })
            .then((response) => response.json())
            .then((response) => {
                setProducts(response.content);
                console.log(response);
            })
            .catch((err) => {
                console.log(err);
            });

        // UserDataService.getAll(params)
        //     .then((response) => {
        //         const { users, totalPages } = response.data;

        //         setUsers(users);
        //         setCount(totalPages);

        //         console.log(response.data);
        //     })
        //     .catch((e) => {
        //         console.log(e);
        //     });
    };

    useEffect(retrieveUsers, [page, limit]);
    const handlePageChange = (event, value) => {
        setPage(value);
    };

    const handlePageSizeChange = (event) => {
        setLimit(event.target.value);
        setPage(1);
    };
    return (
        <div className={cx('contain__listHouse', 'displayContain', 'displayContain')}>
            <div className={cx('listHouse', 'row')}>
                {products.map((e, i) => {
                    return (
                        <Product
                            id={e.id}
                            name={e.productName}
                            colors={e.productColors}
                            sizes={e.productSizes}
                            price={e.price}
                            discount={e.discount}
                            images={e.productImages}
                            event={e.event}
                        />
                    );
                })}
                {/* <Pagination
                    color="primary"
                    className="my-3"
                    count={count}
                    page={page}
                    siblingCount={1}
                    boundaryCount={1}
                    variant="outlined"
                    onChange={handlePageChange}
                /> */}
            </div>
        </div>
    );
}

export default ListProduct;
