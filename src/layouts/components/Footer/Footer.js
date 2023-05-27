import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);
function Footer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('grid', 'wide')} style={{ maxWidth: '1400px' }}>
                <div className={cx('row')}>
                    <div className={cx('col', 'l-3', 'm-6', 'c-12', 'footer-item')}>
                        <p className={cx('footer-item__title')}>CÔNG TY CỔ PHẦN FASHION SHOP</p>
                        <NavLink to="" className={cx('footer-item__link')}>
                            Số ĐKKD: 888888888, ngày cấp: 27/5/2023, nơi cấp: Sở Kế hoạch và đầu tư NLU
                        </NavLink>
                        <NavLink to="" className={cx('footer-item__link')}>
                            Trụ sở chính: Cư xá A, Đường Tám Giang, Phường Linh Trung, TP. Thủ Đức, Việt Nam
                        </NavLink>

                        <NavLink to="" className={cx('footer-item__link')}>
                            Địa chỉ liên hệ: Cư xá A, Đường Tám Giang, Phường Linh Trung, TP. Thủ Đức, Việt Nam
                        </NavLink>
                        <NavLink to="" className={cx('footer-item__link')}>
                            Số điện thoại: +0824831867
                        </NavLink>
                        <NavLink to="" className={cx('footer-item__link')}>
                            Fax: +8888 - 8888.8888
                        </NavLink>
                        <NavLink to="" className={cx('footer-item__link')}>
                            Địa chỉ email: 19130066@st.hcmuaf.edu.vn
                        </NavLink>
                    </div>
                    <div className={cx('col', 'l-3', 'm-6', 'c-12', 'footer-item')}>
                        <p className={cx('footer-item__title')}>THƯƠNG HIỆU</p>
                        <NavLink to="" className={cx('footer-item__link')}>
                            Giới thiệu
                        </NavLink>
                        <NavLink to="" className={cx('footer-item__link')}>
                            Tin tức
                        </NavLink>

                        <NavLink to="" className={cx('footer-item__link')}>
                            Tuyển dụng
                        </NavLink>
                        <NavLink to="" className={cx('footer-item__link')}>
                            Với cộng đồng
                        </NavLink>
                        <NavLink to="" className={cx('footer-item__link')}>
                            Hệ thống cửa hàng
                        </NavLink>
                        <NavLink to="" className={cx('footer-item__link')}>
                            Liên hệ
                        </NavLink>
                    </div>
                    <div className={cx('col', 'l-3', 'm-6', 'c-12', 'footer-item')}>
                        <p className={cx('footer-item__title')}>HỖ TRỢ</p>
                        <NavLink to="" className={cx('footer-item__link')}>
                            Hỏi đáp
                        </NavLink>
                        <NavLink to="" className={cx('footer-item__link')}>
                            Chính sách KHTT
                        </NavLink>
                        <NavLink to="" className={cx('footer-item__link')}>
                            Điều kiện - Điều khoản Chính sách KHTT
                        </NavLink>
                        <NavLink to="" className={cx('footer-item__link')}>
                            Chương trình dành cho KH mới
                        </NavLink>
                        <NavLink to="" className={cx('footer-item__link')}>
                            Chính sách vận chuyển
                        </NavLink>
                        <NavLink to="" className={cx('footer-item__link')}>
                            Gợi ý tìm size
                        </NavLink>
                        <NavLink to="" className={cx('footer-item__link')}>
                            Kiểm tra đơn hàng
                        </NavLink>
                        <NavLink to="" className={cx('footer-item__link')}>
                            Tra cứu điểm thẻ
                        </NavLink>
                        <NavLink to="" className={cx('footer-item__link')}>
                            Chính sách bảo mật thông tin KH
                        </NavLink>
                    </div>
                    <div className={cx('col', 'l-3', 'm-6', 'c-12', 'footer-item')}>
                        <div class="col-sm-3 footer-colum4">
                            <h3 className={cx('footer-item__title')}>Tải ứng dụng trên điện thoại</h3>
                            <div class="bancode">
                                <img
                                    src="https://canifa.com/assets/images/bancode.png"
                                    width="100"
                                    height="100"
                                    alt=""
                                />
                                <a href="" target="_blank" aria-label="Google Play">
                                    <img
                                        src="https://canifa.com/assets/images/googleplay.png"
                                        width="100"
                                        height="100"
                                        alt=""
                                    />
                                </a>
                                <a href="" target="_blank" aria-label="Apple Store">
                                    <img
                                        src="https://canifa.com/assets/images/appstore.png"
                                        width="100"
                                        height="100"
                                        alt=""
                                    />
                                </a>
                            </div>
                            <br /> <h3 className={cx('footer-item__title')}>Phương thức thanh toán</h3>
                            <p>
                                <img src="https://canifa.com/assets/images/pay.svg" width="100" height="100" alt="" />
                            </p>
                            <div>
                                <a href="" target="_blank" aria-label="Pay">
                                    <img
                                        src="https://canifa.com/assets/images/bocongthuong.png"
                                        width="100"
                                        height="100"
                                        alt=""
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
