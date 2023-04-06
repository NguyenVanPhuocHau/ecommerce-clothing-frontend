import React from 'react';
import styles from './Login.module.scss';
import classNames from 'classnames/bind';
import Button from 'components/Button';
import { NavLink } from 'react-router-dom';
const cx = classNames.bind(styles);
function Login() {
    return (
        <div className={cx('wrapper')}>
          
            <form className={cx('form-login')}>
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
                    <div className={cx('form-group', 'col', 'l-12', 'm-12', 'c-12')}>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" />
                    </div>
                </div>
                <div className={cx('row')}>
                    <div className={cx('form-group', 'col', 'l-12', 'm-12', 'c-12')}>
                        <label htmlFor="password">Mật khẩu</label>
                        <input type="password" name="password" id="password" />
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