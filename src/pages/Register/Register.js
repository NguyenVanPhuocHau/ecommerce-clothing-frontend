import classNames from 'classnames/bind';
import styles from './Register.module.scss';
import Button from 'components/Button';
const cx = classNames.bind(styles);
function Login() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('from-register')}>
                <div className={cx('header')}>
                    <h2>Đăng ký tài khoảng</h2>
                </div>

                <div className={cx('body')}>
                    <from>
                        <div>
                            <label>Họ & Tên</label>
                            <input type="text" name="fullname" id="fullname" />
                        </div>
                        <div>
                            <label>Tên đăng nhập</label>
                            <input type="text" name="username" id="username" />
                        </div>
                        <div>
                            <label>Ngày sinh</label>
                            <input type="date" name="birthday" id="birthday" />
                        </div>
                        <div>
                            <label>giới tính</label>
                            <select
                            name='gender'
                            id='gender'

                            >
                            <option value=' '>-- Chọn giới tính --</option>
                            <option value='man'>Nam</option>
                            <option value='woman'>Nữ</option>
                            </select>
                        </div>
                        <div>
                            <label>Email</label>
                            <input type="email" name="email" id="email" />
                        </div>
                        <div>
                            <label>Mật khẩu</label>
                            <input type="password" name="password" id="password" />
                        </div>
                        <div>
                            <label>Nhập lại mật khẩu</label>
                            <input type="password" name="confirmedPassword" id="confirmedPassword" />
                        </div>
                        <Button large type="submit">Đăng ký</Button>
                    </from>
                </div>
            </div>
        </div>
    );
}

export default Login;
