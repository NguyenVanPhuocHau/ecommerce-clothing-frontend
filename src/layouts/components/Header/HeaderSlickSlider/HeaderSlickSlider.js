import React from 'react';
import classNames from 'classnames/bind';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './HeaderSlickSlider.module.scss';
import Slider from 'react-slick';
const cx = classNames.bind(styles);
export default function HeaderSlickSlider() {
    const settings = {
        // dots: true,
        // infinite: true,
        autoplay: true,
        vertical: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        cssEase: 'linear',
        adaptiveHeight: true,
        arrows: false,
    };
    return (
        <div className={cx('wrapper', 'grid')}>
        <Slider {...settings} className={cx('slick-slider')} >
            <div>
                <p style={{marginTop: "9px"}}>Thêm vào giỏ 499.000 ₫ để miễn phí vận chuyển</p>
            </div>
            <div>
                <p style={{marginTop: "9px"}}>ĐỔI HÀNG MIỄN PHÍ - Tại tất cả cửa hàng trong 30 ngày</p>
            </div>
        </Slider>
        </div>
    );
}
