import classNames from 'classnames/bind';
import styles from './Register.module.scss';
import Button from 'components/Button';
const cx = classNames.bind(styles);
function Login() {
    return (
        <div className={cx('wrapper')}>
            {/* <div className={cx('form-register')}> */}

            {/* <div className={cx('body')}> */}
            <form className={cx('form-register')}>
                <div className={cx('header')}>
                    <img
                        src="https://th.bing.com/th/id/OIP.61M4nvkMqDImVpEsiD1_EwAAAA?pid=ImgDet&w=207&h=146&c=7&dpr=1.3"
                        alt="logo-img"
                    />
                    <h3>ĐĂNG KÝ TÀI KHOẢN</h3>
                </div>
                <div className={cx('row')}>
                    <div className={cx('form-group', 'col', 'l-12', 'm-12', 'c-12')}>
                        <label htmlFor="fullname">Họ & Tên</label>
                        <input type="text" name="fullname" id="fullname" />
                    </div>
                </div>
                <div className={cx('row')}>
                    <div className={cx('form-group', 'col', 'l-12', 'm-12', 'c-12')}>
                        <label htmlFor="username">Tên đăng nhập</label>
                        <input name="username" id="username" type="text" />
                    </div>
                </div>
                <div className={cx('row')}>
                    <div className={cx('form-group', 'col', 'l-6 ', 'm-6 ', 'c-12')}>
                        <label htmlFor="birthday">Ngày sinh</label>
                        <input type="date" name="birthday" id="birthday" />
                    </div>
                    <div className={cx('form-group', 'col', 'l-6 ', 'm-6 ', 'c-12')}>
                        <label htmlFor="gender">giới tính</label>
                        <select name="gender" id="gender">
                            <option value=" ">-- Chọn giới tính --</option>
                            <option value="man">Nam</option>
                            <option value="woman">Nữ</option>
                        </select>
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
                    <div className={cx('form-group', 'col', 'l-12', 'm-12', 'c-12')}>
                        <label htmlFor="confirmedPassword">Nhập lại mật khẩu</label>
                        <input type="password" name="confirmedPassword" id="confirmedPassword" />
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

export default Login;
