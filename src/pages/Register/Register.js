import React from 'react';
import { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import styles from './Register.module.scss';
import classNames from 'classnames/bind';
import Button from 'components/Button';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import {
    loginFailure,
    loginStart,
    loginSuccess,
    registerFailure,
    registerStart,
    registerSuccess,
} from 'redux/authenticationSlide';
import * as Yup from 'yup';
import { sub } from 'date-fns/fp';
const cx = classNames.bind(styles);

function Register() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [dataRegister, setDataRegister] = useState();
    const formik = useFormik({
        initialValues: {
            username: '',
            fullName: '',
            birthday: '',
            gender: '',
            email: '',
            password: '',
            confirmedPassword: '',
        },
        validationSchema: Yup.object({
            username: Yup.string()
                .required('Tên đăng nhập không hợp lệ')
                .min(8, 'Tên đăng nhập phải có ít nhất có 8 ký tự')
                .max(15, 'Tên đăng nhập chứa nhiều nhất 15 ký tự')
                .matches(
                    /^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/,
                    'Tên đăng nhập chỉ chứa các kí tự cho phép gồm: chữ in hoa, chữ in thường, chữ số (a-z, A-Z, 0-9), dấu gạch dưới, dấu gạch ngang và dấu chấm. Tên đăng nhập phải bắt đầu hoặc kết thúc bằng chữ cái hoặc chữ số và phải chứa ít nhất một chữ cái.',
                ),
            fullName: Yup.string().required('Vui lòng nhập đầy đủ'),
            birthday: Yup.date()
                .required('Vui lòng nhập đầy đủ')
                .max(sub({ years: 18 }, new Date()), 'Người dùng phải trên 18 tuổi'),
            gender: Yup.string().required('Vui lòng nhập đầy đủ'),
            email: Yup.string()
                .required('Vui lòng nhập đầy đủ')
                .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Email không hợp lệ'),
            password: Yup.string()
                .required('Vui lòng nhập đầy đủ')
                .min(6, 'Mật khẩu của bạn ít nhất phải có 6 kí tự')
                .max(16, 'Mật khẩu của bạn chỉ được tối đa 16 kí tự'),
            confirmedPassword: Yup.string()
                .required('Vui lòng nhập đầy đủ')
                .oneOf([Yup.ref('password'), null], 'Mật khẩu chưa khớp'),
        }),
        onSubmit: (values) => {
            dispatch(registerStart());
            (async () => {
                const response = await fetch('http://localhost:8080/api/auth/register', {
                    method: 'POST',
                    body: JSON.stringify({
                        username: values.username,
                        fullName: values.fullName,
                        birthday: values.birthday,
                        gender: values.gender,
                        email: values.email,
                        password: values.confirmedPassword,
                    }),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    },
                })
                    .then((response) => response.json())
                    .then(async (data) => {
                        console.log(data);
                        setDataRegister(data);
                        if (data.status === 200) {
                            dispatch(registerSuccess());
                            formik.values.fullName = '';
                            formik.values.username = '';
                            formik.values.birthday = '';
                            formik.values.gender = '';
                            formik.values.email = '';
                            formik.values.password = '';
                            formik.values.confirmedPassword = '';
                            setTimeout(() => {
                                navigate('/login');
                            }, 1000);
                        } else {
                            dispatch(registerFailure());
                        }
                        return data;
                    })
                    .catch((err) => console.log(err));
            })();
        },
    });

    return (
        <div className={cx('wrapper')}>
            {/* <div className={cx('form-register')}> */}

            {/* <div className={cx('body')}> */}
            <form className={cx('form-register')} onSubmit={formik.handleSubmit}>
                <div className={cx('header')}>
                    <img
                        src="https://th.bing.com/th/id/OIP.61M4nvkMqDImVpEsiD1_EwAAAA?pid=ImgDet&w=207&h=146&c=7&dpr=1.3"
                        alt="logo-img"
                    />
                    <h3>ĐĂNG KÝ TÀI KHOẢN</h3>
                </div>
                <div className={cx('row')}>
                    <div className={cx('form-group', 'col', 'l-12', 'm-12', 'c-12')}>
                        <label htmlFor="fullName">Họ & Tên</label>
                        <input
                            name="fullName"
                            id="fullName"
                            value={formik.values.fullName}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            type="text"
                        />
                        {formik.touched.fullName && formik.errors.fullName && (
                            <p className={cx('error-message')}>{formik.errors.fullName}</p>
                        )}
                    </div>
                </div>
                <div className={cx('row')}>
                    <div className={cx('form-group', 'col', 'l-12', 'm-12', 'c-12')}>
                        <label htmlFor="username">Tên đăng nhập</label>
                        <input
                            name="username"
                            id="username"
                            value={formik.values.username}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            type="text"
                        />
                        {formik.touched.username && formik.errors.username && (
                            <p className={cx('error-message')}>{formik.errors.username}</p>
                        )}
                    </div>
                </div>
                <div className={cx('row')}>
                    <div className={cx('form-group', 'col', 'l-6 ', 'm-6 ', 'c-12')}>
                        <label htmlFor="birthday">Ngày sinh</label>
                        <input
                            name="birthday"
                            id="birthday"
                            value={formik.values.birthday}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            type="date"
                            max={new Date().toISOString().split('T')[0]}
                        />
                        {formik.touched.birthday && formik.errors.birthday && (
                            <p className={cx('error-message')}>{formik.errors.birthday}</p>
                        )}
                    </div>
                    <div className={cx('form-group', 'col', 'l-6 ', 'm-6 ', 'c-12')}>
                        <label htmlFor="gender">giới tính</label>
                        <select
                            name="gender"
                            value={formik.values.gender}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        >
                            <option value=" ">-- Chọn giới tính --</option>
                            <option value="Nam">Nam</option>
                            <option value="Nữ">Nữ</option>
                        </select>
                        {formik.touched.gender && formik.errors.gender && (
                            <p className={cx('error-message')}>{formik.errors.gender}</p>
                        )}
                    </div>
                </div>
                <div className={cx('row')}>
                    <div className={cx('form-group', 'col', 'l-12', 'm-12', 'c-12')}>
                        <label htmlFor="email">Email</label>
                        <input
                            name="email"
                            id="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            type="email"
                        />
                        {formik.touched.email && formik.errors.email && (
                            <p className={cx('error-message')}>{formik.errors.email}</p>
                        )}
                        {dataRegister?.status === 400 && <p className={cx('error-message')}>{dataRegister?.msg}</p>}
                    </div>
                </div>
                <div className={cx('row')}>
                    <div className={cx('form-group', 'col', 'l-12', 'm-12', 'c-12')}>
                        <label htmlFor="password">Mật khẩu</label>
                        <input
                            name="password"
                            id="password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            type="password"
                        />
                        {formik.touched.password && formik.errors.password && (
                            <p className={cx('error-message')}>{formik.errors.password}</p>
                        )}
                    </div>
                </div>
                <div className={cx('row')}>
                    <div className={cx('form-group', 'col', 'l-12', 'm-12', 'c-12')}>
                        <label htmlFor="confirmedPassword">Nhập lại mật khẩu</label>
                        <input
                            name="confirmedPassword"
                            id="confirmedPassword"
                            value={formik.values.confirmedPassword}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            type="password"
                        />
                        {formik.touched.confirmedPassword && formik.errors.confirmedPassword && (
                            <p className={cx('error-message')}>{formik.errors.confirmedPassword}</p>
                        )}
                    </div>
                </div>
                <div className={cx('row')}>
                    <div className={cx('form-group', 'col', 'l-3', 'm-3', 'c-3')}>
                        <Button large type="submit">
                            Đăng Ký
                        </Button>
                    </div>
                </div>
            </form>
            {/* </div> */}
        </div>
        // </div>
    );
}

export default Register;
