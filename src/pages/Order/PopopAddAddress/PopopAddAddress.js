import React from 'react';
import { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import styles from './PopopAddAddress.module.scss';
import classNames from 'classnames/bind';
import { useDispatch, useSelector } from 'react-redux';
import { data } from 'pages/ProductDetails/data';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { myuser } from 'redux/authenticationSlide';
const cx = classNames.bind(styles);
function PopopAddAddress(props) {
    const user = useSelector(myuser);
    const [cities, setCities] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [wards, setWards] = useState([]);
    useEffect(() => {
        fetch('https://provinces.open-api.vn/api/?depth=3', {
            method: 'GET',
        })
            .then((response) => response.json())
            .then((response) => {
                setCities(response);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    const handleCityChange = (event) => {
        const cityCode = event.target.options[event.target.selectedIndex].getAttribute("data-code");
        alert(cityCode)
        fetch(`https://provinces.open-api.vn/api/p/${cityCode}?depth=2`)
            .then((response) => response.json())
            .then((data) => setDistricts(data.districts));
    };

    const handleDistrictChange = (event) => {
        const districtCode = event.target.options[event.target.selectedIndex].getAttribute("data-code");

        fetch(`https://provinces.open-api.vn/api/d/${districtCode}?depth=2`)
            .then((response) => response.json())
            .then((data) => setWards(data.wards));
    };

    // thêm địa chỉ

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [dataRegister, setDataRegister] = useState();
    const formik = useFormik({
        initialValues: {
            fullName: '',
            phone: '',
            province: '',
            district: '',
            ward: '',
            address: '',
        },
        validationSchema: Yup.object({
            fullName: Yup.string().required('Vui lòng nhập đầy đủ'),
            phone: Yup.string()
                .matches(/(84|0[3|5|7|8|9])+([0-9]{8})\b/, 'Số điện thoại không hợp lệ')
                .required('Vui lòng nhập số điện thoại'),
            province: Yup.string().required('Vui lòng chọn tỉnh / thành phố!'),
            district: Yup.string().required('Vui lòng chọn quận / huyện!'),
            ward: Yup.string().required('Vui lòng chọn phường / xã!'),
            address: Yup.string().required('Vui lòng nhập địa chỉ!'),
        }),
        onSubmit: (values) => {
            (async () => {
                const response = await fetch('http://localhost:8080/api/v1/users/address/add', {
                    method: 'POST',
                    body: JSON.stringify({
                        userId: user.id,
                        fullName: values.fullName,
                        phone: values.phone,
                        province: values.province,
                        district: values.district,
                        ward: values.ward,
                        address: values.address,
                        isDefault: false,
                    }),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    },
                })
                    .then((response) => response.json())
                    .then(async (data) => {
                        setDataRegister(data);
                        if (data.status === 200) {
                            formik.values.fullName = '';
                            formik.values.phone = '';
                            formik.values.province = '';
                            formik.values.district = '';
                            formik.values.ward = '';
                            formik.values.address = '';
                            props.handleClickClose();
                        } else {
                        }
                        return data;
                    })
                    .catch((err) => console.log(err));
            })();
        },
    });

    return (
        <div className={cx('popop-address')}>
            <div className={cx('popop-address-content')}>
                <h2>Thông tin giao hàng</h2>{' '}
                <div className={cx('popop-address-close')} onClick={props.handleClickClose}></div>
                <div className={cx('checkout-shipping')}>
                    <form onSubmit={formik.handleSubmit}>
                        <div className={cx('checkout-shipping-form')}>
                            <div className={cx('form-group')}>
                                <label htmlFor="fullName">Họ tên</label>
                                <input
                                    type="text"
                                    name="fullName"
                                    id="fullName"
                                    className={cx('form-control')}
                                    value={formik.values.fullName}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.fullName && formik.errors.fullName && (
                                    <p className={cx('error-message')}>{formik.errors.fullName}</p>
                                )}
                            </div>
                            <div className={cx('form-group')}>
                                <label htmlFor="phone">Số điện thoại</label>
                                <input
                                    type="text"
                                    name="phone"
                                    id="phone"
                                    className={cx('form-control')}
                                    value={formik.values.phone}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.phone && formik.errors.phone && (
                                    <p className={cx('error-message')}>{formik.errors.phone}</p>
                                )}
                            </div>
                            <div className={cx('form-group')}>
                                <label htmlFor="tinh">Tỉnh / Thành phố</label>
                                <select
                                    name="province"
                                    className={cx('form-control')}
                                    onChange={(event) => {
                                        handleCityChange(event);
                                        formik.handleChange(event);
                                      }}
                                    value={formik.values.province}
                                    // onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                >
                                    <option></option>
                                    {cities.map((city) => (
                                        <option key={city.code} value={city.name} data-code={city.code}>
                                            {city.name}
                                        </option>
                                    ))}
                                </select>
                                {formik.touched.province && formik.errors.province && (
                                    <p className={cx('error-message')}>{formik.errors.province}</p>
                                )}
                            </div>
                            <div className={cx('form-group')}>
                                <label htmlFor="huyen">Quận / Huyện</label>
                                <select
                                    name="district"
                                    className={cx('form-control')}
                                    onChange={(event) => {
                                        handleDistrictChange(event);
                                        formik.handleChange(event);
                                      }}
                                    value={formik.values.district}
                                    // onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                >
                                    <option></option>
                                    {districts.map((district) => (
                                        <option key={district.code} value={district.name} data-code={district.code}>
                                            {district.name}
                                        </option>
                                    ))}
                                </select>
                                {formik.touched.district && formik.errors.district && (
                                    <p className={cx('error-message')}>{formik.errors.district}</p>
                                )}
                            </div>
                            <div className={cx('form-group')}>
                                <label htmlFor="xa">Phường / Xã</label>
                                <select
                                    name="ward"
                                    className={cx('form-control')}
                                    value={formik.values.ward}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                >
                                    <option></option>
                                    {wards.map((ward) => (
                                        <option key={ward.code} value={ward.name} >
                                            {ward.name}
                                        </option>
                                    ))}
                                </select>
                                {formik.touched.ward && formik.errors.ward && (
                                    <p className={cx('error-message')}>{formik.errors.ward}</p>
                                )}
                            </div>
                            <div className={cx('form-group')}>
                                <label htmlFor="address">Nhập địa chỉ</label>
                                <input
                                    type="text"
                                    name="address"
                                    className={cx('form-control')}
                                    value={formik.values.address}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.address && formik.errors.address && (
                                    <p className={cx('error-message')}>{formik.errors.address}</p>
                                )}
                            </div>
                            <div className={cx('button')}>
                                <button type="submit" className={cx('btn-save')}>
                                    lưu địa chỉ
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default PopopAddAddress;
