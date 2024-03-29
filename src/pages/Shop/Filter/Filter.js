import React from 'react';
import { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import styles from './Filter.module.scss';
import classNames from 'classnames/bind';
import { Slider } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { Collapse } from 'antd';
const cx = classNames.bind(styles);
function Filter(props) {
    const {selectedColors,selectedSizes,handleColorSelect,handleSizeSelect,rangeSelector,rangePrice} = props
    const { Panel } = Collapse;
    const [listSizes, setListSizes] = useState([]);
    const [listColors, setListColors] = useState([]);
    useEffect(() => {
        // get newest home
        fetch(`http://localhost:8080/api/v1/products/sizes`, {
            method: 'GET',
        })
            .then((response) => response.json())
            .then((response) => {
                setListSizes(response);
                console.log(response);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    useEffect(() => {
        // get newest home
        fetch(`http://localhost:8080/api/v1/products/colors`, {
            method: 'GET',
        })
            .then((response) => response.json())
            .then((response) => {
                setListColors(response);
                console.log(response);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    const formatCurrency = (value) => {
        return value.toLocaleString('vi-VN', {
            style: 'currency',
            currency: 'VND',
        });
    };
    
    return (
       
        <div className={cx('container')}>
            <div className={cx('contain__filter', 'displayContain')}>
                <div className={cx('wrapper-form')}>
                   
                    <div className={cx('filter')}>
                        <p className={cx('filter__name')}>Chọn theo size</p>
                        <Collapse defaultActiveKey={['1']}>
                            <Panel header="sizes" key="1">
                                <div className={cx('swatch-attribute-options')}>
                                    {listSizes.map((e, i) => {
                                        const sizeName = e.size;
                                        const id = e.id;
                                        return (
                                            <div
                                                className={cx('swatch-option', 'text', selectedSizes.includes(id) ? 'selected': "" )}
                                                // onClick={() => handleOptionClick(sizeName,id)}
                                                onClick={() => handleSizeSelect(id)}
                                            >
                                                {sizeName}
                                            </div>
                                        );
                                    })}
                                </div>
                            </Panel>
                        </Collapse>
                    </div>
                    <div className={cx('filter')}>
                        <p className={cx('filter__name')}>Chọn theo màu</p>
                        <Collapse defaultActiveKey={['1']}>
                            <Panel header="Colors" key="1">
                                <div className={cx('swatch-attribute-options')}>
                                    {listColors.map((e, i) => {
                                        const code = e.colorCode;
                                        const id = e.id;
                                        return (
                                            <div
                                                className={cx('swatch-option', 'color',selectedColors.includes(id) ? 'selected': "" )}
                                                style={{
                                                    backgroundImage:
                                                        'url("https://media.canifa.com/attribute/swatch/images/' +
                                                        code +
                                                        '.png")',
                                                }}
                                                data-color={code}

                                                onClick={() => handleColorSelect(id)}
                                            ></div>
                                        );
                                    })}
                                </div>
                            </Panel>
                        </Collapse>
                    </div>
                    <div className={cx('filter')}>
                        <p className={cx('filter__name')}>Chọn theo giá</p>
                        <Collapse defaultActiveKey={['1']}>
                            <Panel header="Colors" key="1">
                                <p>Khoảng giá:</p>
                                <Slider
                                    range="true"
                                    value={rangePrice}
                                    min={1000}
                                    max={5000000}
                                    onChange={rangeSelector}
                                    valueLabelDisplay="auto"
                                    tipFormatter={formatCurrency}
                                />
                                <b>
                                    {formatCurrency(rangePrice[0])} - {formatCurrency(rangePrice[1])}
                                </b>
                            </Panel>
                        </Collapse>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Filter;
