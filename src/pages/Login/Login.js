import React from 'react';
import { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import styles from './Login.module.scss';
import classNames from 'classnames/bind';
import Button from 'components/Button';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { loginFailure, loginStart, loginSuccess } from 'redux/authenticationSlide';
import * as Yup from 'yup';
const cx = classNames.bind(styles);
function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [dataLogin, setDataLogin] = useState();
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().required('Không thể để trống'),
            password: Yup.string().required('Không để bỏ trống'),
        }),
        onSubmit: (values) => {
            (async () => {
                // dispatch(loginStart());
                await fetch(`http://localhost:8080/api/auth/login`, {
                    method: 'POST',
                    body: JSON.stringify({
                        email: values?.email,
                        password: values?.password,
                    }),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    },
                })
                    .then((response) => response.json())
                    .then((result) => {
                        if (result.status ===200) {
                            dispatch(loginSuccess(result));
                            navigate('/');
                        } else {
                            dispatch(loginFailure());
                            setDataLogin('Đăng nhập thất bại! vui lòng kiểm tra lại');
                        }
                        return result;
                    })
                    .catch((err) => {
                        dispatch(loginFailure());
                    });
            })();
        },
    });
    return (
        <div className={cx('wrapper')}>
            <form className={cx('form-login')} onSubmit={formik.handleSubmit}>
                <div className={cx('header')}>
                    <img
                        src="https://th.bing.com/th/id/OIP.61M4nvkMqDImVpEsiD1_EwAAAA?pid=ImgDet&w=207&h=146&c=7&dpr=1.3"
                        alt="logo-img"
                    />
                    <h3>ĐĂNG NHẬP VÀO TÀI KHOẢN</h3>
                    <div className={cx('')}>
                        <p>
                            Bạn chưa có tài khoản? <NavLink to="/register">Đăng ký tại đây</NavLink>
                        </p>
                    </div>
                </div>

                <div className={cx('row')}>
                    <div className="col l-12 m-12 c-12">
                         
                    </div>
                    <div className={cx('form-group', 'col', 'l-12', 'm-12', 'c-12')}>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.errors.email && formik.touched.email && (
                            <p className={cx('alert-message')}>{formik.errors.email}</p>
                        )}
                    </div>
                </div>
                <div className={cx('row')}>
                    <div className={cx('form-group', 'col', 'l-12', 'm-12', 'c-12')}>
                        <label htmlFor="password">Mật khẩu</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />

                        {formik.touched.password && formik.errors.password && (
                            <p className={cx('alert-message')}>{formik.errors.password}</p>
                        )}
                        <p className={cx('error-message')}>{dataLogin}</p>
                    </div>
                </div>
                <div className={cx('row')}>
                    <div className={cx('form-group', 'col', 'l-3', 'm-3', 'c-3')}>
                        <NavLink to="/forgotpassword">Quên mật khẩu?</NavLink>
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
    );
}

export default Login;
