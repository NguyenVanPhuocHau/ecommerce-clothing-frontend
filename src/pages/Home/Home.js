import React from 'react';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import Slider from 'react-slick';
const cx = classNames.bind(styles);
export default function Home() {
    const settings = {
        // dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        cssEase: 'linear',
        adaptiveHeight: true,
    };
    return (
        <div>
            <Slider {...settings}>
                <div>
                    <img
                        src="https://media.canifa.com/Simiconnector/banner_name_tablet1679156030.webp"
                        alt="img-house"
                        className={cx('thumbnail-slide')}
                    />
                </div>
                <div>
                    <img
                        src="https://media.canifa.com/Simiconnector/banner_name_tablet1679216002.webp"
                        className={cx('thumbnail-slide')}
                        alt="img-house"
                    />
                </div>
                <div>
                    <img
                        src="https://media.canifa.com/Simiconnector/banner_name_tablet1679156030.webp"
                        alt="img-house"
                        className={cx('thumbnail-slide')}
                    />
                </div>
                <div>
                    <img
                        src="https://media.canifa.com/Simiconnector/banner_name_tablet1679216002.webp"
                        className={cx('thumbnail-slide')}
                        alt="img-house"
                    />
                </div>
                <div>
                    <img
                        src="https://media.canifa.com/Simiconnector/banner_name_tablet1679156030.webp"
                        alt="img-house"
                        className={cx('thumbnail-slide')}
                    />
                </div>
                <div>
                    <img
                        src="https://media.canifa.com/Simiconnector/banner_name_tablet1679216002.webp"
                        className={cx('thumbnail-slide')}
                        alt="img-house"
                    />
                </div>
            </Slider>
            <div className={cx('wrapper')}>
                {/* <div className={cx('bg-banner', 'grid')}>
                <div className={cx('home-banner-slide', 'grid')}>
                    
                </div>
            </div> */}
                <div className={cx('site-main')}>
                    <div className={cx('block-product')}>
                        <div className={cx('block-heading', 'home-heading')}>
                            <h2 className={cx('title')}>Sản phẩm mới</h2>
                        </div>
                        <div className={cx('block-content')}>
                            {/* <div className={cx('col-sm-9')}> */}
                            <div
                               className={cx('product-item item')}
                                data-v-e4caeaf8=""
                                style={{width: '100%', display: 'inline-block'}}
                            >
                                <div className={cx('product-item-info')}>
                                    <div className={cx('product-item-photo')}>
                                        <a
                                            href="/ao-phong-nam-8ts21s020"
                                            className={cx('product-image-container')}
                                            aria-label="Áo phông nam cotton USA in hình"
                                        >
                                            <img
                                                src="https://canifa.com/img/1000/1500/resize/8/t/8ts21s020-sr227-1-a.webp"
                                                alt="Áo phông nam cotton USA in hình"
                                                width="100"
                                                height="100"
                                                // onError="this.onerror=null;this.src='https://canifa.com/img/1000/1500/resize/8/t/8ts21s020-sr227-1-a.jpg'"
                                                // onError="this.src='https://canifa.com/img/1000/1500/resize/8/t/8ts21s020-sr227-1-a.jpg'"
                                                className={cx('product-image-photo')}
                                            />
                                        </a>
                                        <div>
                                            <button className={cx('product-item-button-tocart')}>Thêm vào giỏ hàng</button>
                                        </div>
                                    </div>
                                    <div className={cx('product-item-details')}>
                                        <div className={cx('swatch-attribute-options')}>
                                            <div
                                               className={cx('swatch-option color selected')}
                                                style={{backgroundImage: 'url("https://media.canifa.com/attribute/swatch/images/sr227.png")'}}
                                            ></div>
                                            <div
                                                className={cx('swatch-option color')}
                                                style={{ backgroundImage: 'url("https://media.canifa.com/attribute/swatch/images/sw001.png")'}}
                                            ></div>
                                            <div
                                                className={cx('swatch-option color')}
                                                style={{ backgroundImage: 'url("https://media.canifa.com/attribute/swatch/images/sy182.png")'}}
                                            ></div>
                                        </div>
                                        <h3 aria-label="Áo phông nam cotton USA in hình" className={cx('product-item-name')}>
                                            <a
                                                href="/ao-phong-nam-8ts21s020"
                                                
                                                aria-label="Áo phông nam cotton USA in hình"
                                            >
                                                Áo phông nam cotton USA in hình
                                            </a>
                                        </h3>
                                        <div slot="price" className={cx('price-box')}>
                                            <span className={cx('normal-price')}>
                                                <span className={cx('price')}>124.500 ₫</span>
                                            </span>
                                            <span className={cx('price-percent')}>-50%</span>
                                            <span className={cx('old-price')}>
                                                <span className={cx('price')}>249.000 ₫</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
