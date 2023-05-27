import React from 'react';
import { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import styles from './Shop.module.scss';
import classNames from 'classnames/bind';

import { useDispatch, useSelector } from 'react-redux';
import Filter from './Filter/Filter';
import ListProduct from './ListProduct/ListProduct';
import axios from 'axios';
const cx = classNames.bind(styles);
function Shop() {
    const [rangePrice, setRange] = useState([0, 1000000]);
    const [page, setPage] = useState(1);
    const [selectedSizes, setSelectedSizes] = useState([]);
    const [selectedColors, setSelectedColors] = useState([]);
    const [limit, setLimit] = useState(4);
    const [count, setCount] = useState(0);
    const [products, setProducts] = useState([]);
    const [sortBy,setSortBy] = useState("");
    const [sortDir, setSortDir] = useState("");
    const rangeSelector = (newValue) => {
        setRange(newValue);
    };

  
    const handleSizeSelect = (size) => {
        // Kiểm tra xem size đã tồn tại trong danh sách đã chọn chưa
        const isSelected = selectedSizes.includes(size);

        if (isSelected) {
            // Nếu size đã được chọn, ta sẽ loại bỏ nó khỏi danh sách
            const updatedSizes = selectedSizes.filter((s) => s !== size);
            setSelectedSizes(updatedSizes);
        } else {
            // Nếu size chưa được chọn, ta sẽ thêm nó vào danh sách
            setSelectedSizes([...selectedSizes, size]);
        }
       
    };

    const handleColorSelect = (color) => {
        // Kiểm tra xem size đã tồn tại trong danh sách đã chọn chưa
        const isSelected = selectedColors.includes(color);

        if (isSelected) {
            // Nếu size đã được chọn, ta sẽ loại bỏ nó khỏi danh sách
            const updatedColors = selectedColors.filter((c) => c !== color);
            setSelectedColors(updatedColors);
        } else {
            // Nếu size chưa được chọn, ta sẽ thêm nó vào danh sách
            setSelectedColors([...selectedColors, color]);
        }
    };
  
    const getRequestParams = (page, limit,arrSize,arrColor,rangePrice,sortBy,sortDir) => {
        let params = {};

        if (page) {
            params['page'] = page - 1;
        }

        if (limit) {
            params['limit'] = limit;
        }

        if (arrSize) {
            params['arrSize'] = arrSize.join(',');
        }
        if (arrColor) {
            params['arrColor'] = arrColor.join(',');
        }
        if (rangePrice) {
            params['priceRange'] = rangePrice.join(',');
        }
        // if (sortBy) {
            params['sortBy'] = sortBy;
        // }
        // if (sortDir) {
            params['sortDir'] = sortDir;
        // }

        return params;
    };
    const handleSelectSort = (event)=> {
        const selectedValue = event.target.value;
        if(selectedValue === "A-Z"){
            setSortBy("productName")
            setSortDir("asc")
        }
        else if(selectedValue === "A-Z"){
            setSortBy("productName")
            setSortDir("desc")
        }
        else if(selectedValue === "lowPrice"){
            setSortBy("price")
            setSortDir("asc")
        }else{
            setSortBy("price")
            setSortDir("desc")
        }

    }
    const retrieveUsers = () => {
        const params = getRequestParams(page, limit,selectedSizes,selectedColors,rangePrice,sortBy,sortDir);
        
        
        axios
            .get(`http://localhost:8080/api/v1/products/page`,{params})

            .then((response) => {
                setProducts(response.data.content);
                setCount(response.data.totalPages);
                console.log(response.data.content);
            })
            .catch((error) => {
                console.log(error);
            });

        // fetch(`http://localhost:8080/api/v1/products/page`, {
        //     params: {
        //         page: 1,
        //         limit: 4,
        //     },
        // })
        //     .then((response) => response.json())
        //     .then((response) => {
        //         setProducts(response.content);
        //         alert(response.numberOfElements);
        //         setCount(response.totalPages);
        //         console.log(response);
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //     });

       
    };
    useEffect(retrieveUsers, [page, limit,selectedSizes,selectedColors,rangePrice,sortBy,sortDir]);
 
    return (
        <div className={cx('site-main')}>
            <div className={cx('bg_collection', 'section')}>
                <div className={cx('row')}>
                    <Filter
                        rangePrice={rangePrice}
                        selectedSizes={selectedSizes}
                        selectedColors={selectedColors}
                        handleColorSelect={handleColorSelect}
                        handleSizeSelect={handleSizeSelect}
                        rangeSelector={rangeSelector}
                    />

                    <ListProduct
                        rangePrice={rangePrice}
                        selectedSizes={selectedSizes}
                        selectedColors={selectedColors}
                        page={page}
                        count={count}
                        limit={limit}
                        products={products}
                        retrieveUsers={retrieveUsers}
                        setPage={setPage}
                        setLimit={setLimit}
                        handleSelectSort={handleSelectSort}
                    />
                </div>
            </div>
        </div>
    );
}

export default Shop;
