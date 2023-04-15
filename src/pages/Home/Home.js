import React from 'react';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
// import './Testimonial.css';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
// import { IconName } from '@material-ui/icons';

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

    const PreviousBtn = (props) => {
        console.log(props);
        const { className, onClick } = props;
        return (
            <div className={className} onClick={onClick}>
            {/* <ArrowForwardIos style={{ color: 'gray', fontSize: '45px' }} /> */}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                // className="w-6 h-6"
                // style={{color: "red"}}
                // color='red'
                // className={cx('slick-arrow','slick-next')}
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
        </div>
        );
    };
    const NextBtn = (props) => {
        const { className, onClick } = props;
        return (
            <div className={className} onClick={onClick}>
                {/* <ArrowForwardIos style={{ color: 'gray', fontSize: '45px' }} /> */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    // className="w-6 h-6"
                    // style={{color: "red"}}
                    // color='red'
                    // className={cx('slick-arrow','slick-next')}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </div>
        );
    };

    const settingprouctslick = {
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow:<NextBtn />,
        prevArrow:<PreviousBtn />
        
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
                            <div className={cx('product-items', 'testimonial')} id='slick'>
                                {/* <div className={cx()}> */}
                                <Slider {...settingprouctslick}  >
                                    <div
                                        className={cx('product-item', 'item')}
                                        style={{ width: '100%', display: 'inline-block' }}
                                    >
                                        <div className={cx('product-item-info')}>
                                            <div className={cx('product-item-photo')}>
                                                <div className={cx('product-item-image-label')}>
                                                    <img
                                                        data-v-27331a1a=""
                                                        width="100"
                                                        height="100"
                                                        src="https://media.canifa.com/attribute/swatch/t/a/tag_new_web.webp"
                                                        // onerror="this.onerror=null;this.src='https://media.canifa.com/attribute/swatch/t/a/tag_new_web.png'"
                                                        alt=""
                                                    />
                                                </div>
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
                                                    <button className={cx('product-item-button-tocart')}>
                                                        Thêm vào giỏ hàng
                                                    </button>
                                                </div>
                                            </div>
                                            <div className={cx('product-item-details')}>
                                                <div className={cx('swatch-attribute-options')}>
                                                    <div
                                                        className={cx('swatch-option color selected')}
                                                        style={{
                                                            backgroundImage:
                                                                'url("https://media.canifa.com/attribute/swatch/images/sr227.png")',
                                                        }}
                                                    ></div>
                                                    <div
                                                        className={cx('swatch-option color')}
                                                        style={{
                                                            backgroundImage:
                                                                'url("https://media.canifa.com/attribute/swatch/images/sw001.png")',
                                                        }}
                                                    ></div>
                                                    <div
                                                        className={cx('swatch-option color')}
                                                        style={{
                                                            backgroundImage:
                                                                'url("https://media.canifa.com/attribute/swatch/images/sy182.png")',
                                                        }}
                                                    ></div>
                                                </div>
                                                <h3
                                                    aria-label="Áo phông nam cotton USA in hình"
                                                    className={cx('product-item-name')}
                                                >
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
                                    <div
                                        className={cx('product-item', 'item')}
                                        style={{ width: '100%', display: 'inline-block' }}
                                    >
                                        <div className={cx('product-item-info')}>
                                            <div className={cx('product-item-photo')}>
                                                <div className={cx('product-item-image-label')}>
                                                    <img
                                                        data-v-27331a1a=""
                                                        width="100"
                                                        height="100"
                                                        src="https://media.canifa.com/attribute/swatch/t/a/tag_new_web.webp"
                                                        // onerror="this.onerror=null;this.src='https://media.canifa.com/attribute/swatch/t/a/tag_new_web.png'"
                                                        alt=""
                                                    />
                                                </div>
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
                                                    <button className={cx('product-item-button-tocart')}>
                                                        Thêm vào giỏ hàng
                                                    </button>
                                                </div>
                                            </div>
                                            <div className={cx('product-item-details')}>
                                                <div className={cx('swatch-attribute-options')}>
                                                    <div
                                                        className={cx('swatch-option color selected')}
                                                        style={{
                                                            backgroundImage:
                                                                'url("https://media.canifa.com/attribute/swatch/images/sr227.png")',
                                                        }}
                                                    ></div>
                                                    <div
                                                        className={cx('swatch-option color')}
                                                        style={{
                                                            backgroundImage:
                                                                'url("https://media.canifa.com/attribute/swatch/images/sw001.png")',
                                                        }}
                                                    ></div>
                                                    <div
                                                        className={cx('swatch-option color')}
                                                        style={{
                                                            backgroundImage:
                                                                'url("https://media.canifa.com/attribute/swatch/images/sy182.png")',
                                                        }}
                                                    ></div>
                                                </div>
                                                <h3
                                                    aria-label="Áo phông nam cotton USA in hình"
                                                    className={cx('product-item-name')}
                                                >
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
                                    <div
                                        className={cx('product-item', 'item')}
                                        style={{ width: '100%', display: 'inline-block' }}
                                    >
                                        <div className={cx('product-item-info')}>
                                            <div className={cx('product-item-photo')}>
                                                <div className={cx('product-item-image-label')}>
                                                    <img
                                                        data-v-27331a1a=""
                                                        width="100"
                                                        height="100"
                                                        src="https://media.canifa.com/attribute/swatch/t/a/tag_new_web.webp"
                                                        // onerror="this.onerror=null;this.src='https://media.canifa.com/attribute/swatch/t/a/tag_new_web.png'"
                                                        alt=""
                                                    />
                                                </div>
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
                                                    <button className={cx('product-item-button-tocart')}>
                                                        Thêm vào giỏ hàng
                                                    </button>
                                                </div>
                                            </div>
                                            <div className={cx('product-item-details')}>
                                                <div className={cx('swatch-attribute-options')}>
                                                    <div
                                                        className={cx('swatch-option color selected')}
                                                        style={{
                                                            backgroundImage:
                                                                'url("https://media.canifa.com/attribute/swatch/images/sr227.png")',
                                                        }}
                                                    ></div>
                                                    <div
                                                        className={cx('swatch-option color')}
                                                        style={{
                                                            backgroundImage:
                                                                'url("https://media.canifa.com/attribute/swatch/images/sw001.png")',
                                                        }}
                                                    ></div>
                                                    <div
                                                        className={cx('swatch-option color')}
                                                        style={{
                                                            backgroundImage:
                                                                'url("https://media.canifa.com/attribute/swatch/images/sy182.png")',
                                                        }}
                                                    ></div>
                                                </div>
                                                <h3
                                                    aria-label="Áo phông nam cotton USA in hình"
                                                    className={cx('product-item-name')}
                                                >
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
                                    <div
                                        className={cx('product-item', 'item')}
                                        style={{ width: '100%', display: 'inline-block' }}
                                    >
                                        <div className={cx('product-item-info')}>
                                            <div className={cx('product-item-photo')}>
                                                <div className={cx('product-item-image-label')}>
                                                    <img
                                                        data-v-27331a1a=""
                                                        width="100"
                                                        height="100"
                                                        src="https://media.canifa.com/attribute/swatch/t/a/tag_new_web.webp"
                                                        // onerror="this.onerror=null;this.src='https://media.canifa.com/attribute/swatch/t/a/tag_new_web.png'"
                                                        alt=""
                                                    />
                                                </div>
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
                                                    <button className={cx('product-item-button-tocart')}>
                                                        Thêm vào giỏ hàng
                                                    </button>
                                                </div>
                                            </div>
                                            <div className={cx('product-item-details')}>
                                                <div className={cx('swatch-attribute-options')}>
                                                    <div
                                                        className={cx('swatch-option color selected')}
                                                        style={{
                                                            backgroundImage:
                                                                'url("https://media.canifa.com/attribute/swatch/images/sr227.png")',
                                                        }}
                                                    ></div>
                                                    <div
                                                        className={cx('swatch-option color')}
                                                        style={{
                                                            backgroundImage:
                                                                'url("https://media.canifa.com/attribute/swatch/images/sw001.png")',
                                                        }}
                                                    ></div>
                                                    <div
                                                        className={cx('swatch-option color')}
                                                        style={{
                                                            backgroundImage:
                                                                'url("https://media.canifa.com/attribute/swatch/images/sy182.png")',
                                                        }}
                                                    ></div>
                                                </div>
                                                <h3
                                                    aria-label="Áo phông nam cotton USA in hình"
                                                    className={cx('product-item-name')}
                                                >
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
                                    <div
                                        className={cx('product-item', 'item')}
                                        style={{ width: '100%', display: 'inline-block' }}
                                    >
                                        <div className={cx('product-item-info')}>
                                            <div className={cx('product-item-photo')}>
                                                <div className={cx('product-item-image-label')}>
                                                    <img
                                                        data-v-27331a1a=""
                                                        width="100"
                                                        height="100"
                                                        src="https://media.canifa.com/attribute/swatch/t/a/tag_new_web.webp"
                                                        // onerror="this.onerror=null;this.src='https://media.canifa.com/attribute/swatch/t/a/tag_new_web.png'"
                                                        alt=""
                                                    />
                                                </div>
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
                                                    <button className={cx('product-item-button-tocart')}>
                                                        Thêm vào giỏ hàng
                                                    </button>
                                                </div>
                                            </div>
                                            <div className={cx('product-item-details')}>
                                                <div className={cx('swatch-attribute-options')}>
                                                    <div
                                                        className={cx('swatch-option color selected')}
                                                        style={{
                                                            backgroundImage:
                                                                'url("https://media.canifa.com/attribute/swatch/images/sr227.png")',
                                                        }}
                                                    ></div>
                                                    <div
                                                        className={cx('swatch-option color')}
                                                        style={{
                                                            backgroundImage:
                                                                'url("https://media.canifa.com/attribute/swatch/images/sw001.png")',
                                                        }}
                                                    ></div>
                                                    <div
                                                        className={cx('swatch-option color')}
                                                        style={{
                                                            backgroundImage:
                                                                'url("https://media.canifa.com/attribute/swatch/images/sy182.png")',
                                                        }}
                                                    ></div>
                                                </div>
                                                <h3
                                                    aria-label="Áo phông nam cotton USA in hình"
                                                    className={cx('product-item-name')}
                                                >
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
                                    <div
                                        className={cx('product-item', 'item')}
                                        style={{ width: '100%', display: 'inline-block' }}
                                    >
                                        <div className={cx('product-item-info')}>
                                            <div className={cx('product-item-photo')}>
                                                <div className={cx('product-item-image-label')}>
                                                    <img
                                                        data-v-27331a1a=""
                                                        width="100"
                                                        height="100"
                                                        src="https://media.canifa.com/attribute/swatch/t/a/tag_new_web.webp"
                                                        // onerror="this.onerror=null;this.src='https://media.canifa.com/attribute/swatch/t/a/tag_new_web.png'"
                                                        alt=""
                                                    />
                                                </div>
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
                                                    <button className={cx('product-item-button-tocart')}>
                                                        Thêm vào giỏ hàng
                                                    </button>
                                                </div>
                                            </div>
                                            <div className={cx('product-item-details')}>
                                                <div className={cx('swatch-attribute-options')}>
                                                    <div
                                                        className={cx('swatch-option color selected')}
                                                        style={{
                                                            backgroundImage:
                                                                'url("https://media.canifa.com/attribute/swatch/images/sr227.png")',
                                                        }}
                                                    ></div>
                                                    <div
                                                        className={cx('swatch-option color')}
                                                        style={{
                                                            backgroundImage:
                                                                'url("https://media.canifa.com/attribute/swatch/images/sw001.png")',
                                                        }}
                                                    ></div>
                                                    <div
                                                        className={cx('swatch-option color')}
                                                        style={{
                                                            backgroundImage:
                                                                'url("https://media.canifa.com/attribute/swatch/images/sy182.png")',
                                                        }}
                                                    ></div>
                                                </div>
                                                <h3
                                                    aria-label="Áo phông nam cotton USA in hình"
                                                    className={cx('product-item-name')}
                                                >
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
                                </Slider>
                                {/* </div> */}
                            </div>
                            {/* </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "./Testimonial.css";
// // import { Avatar } from "@material-ui/core";
// // import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";

// const PreviousBtn = (props) => {
//   console.log(props);
//   const { className, onClick } = props;
//   return (
//     <div className={className} onClick={onClick}>
//       {/* <ArrowBackIos style={{ color: "gray", fontSize: "45px" }} /> */}
//     </div>
//   );
// };
// const NextBtn = (props) => {
//   const { className, onClick } = props;
//   return (
//     <div className={className} onClick={onClick}>
//       {/* <ArrowForwardIos style={{ color: "gray", fontSize: "45px" }} /> */}
//     </div>
//   );
// };
// const Testimonial = () => {
//   return (
//     <div
//       className="testimonial"
//       style={{ display: "flex", justifyContent: "center", marginTop: 50 }}
//     >
//       <div style={{ width: "50%", textAlign: "center" }}>
//         <h1 style={{ marginBottom: 20 }}>TESTIMONIALS</h1>
//         <Slider prevArrow={<PreviousBtn />} nextArrow={<NextBtn />} dots>
//           <Card img="https://www.tutorialrepublic.com/examples/images/clients/1.jpg" />
//           <Card img="https://www.tutorialrepublic.com/examples/images/clients/2.jpg" />
//           <Card img="https://www.tutorialrepublic.com/examples/images/clients/3.jpg" />
//         </Slider>
//       </div>
//     </div>
//   );
// };

// const Card = ({ img }) => {
//   return (
//     <div
//       style={{
//         display: "flex",
//         alignItems: "center",
//         flexDirection: "column",
//         textAlign: "center",
//         color: "gray",
//       }}
//     >
//       {/* <Avatar
//         imgProps={{ style: { borderRadius: "50%" } }}
//         src={img}
//         style={{
//           width: 120,
//           height: 120,
//           border: "1px solid lightgray",
//           padding: 7,
//           marginBottom: 20,
//         }}
//       /> */}
//       <p>
//         Phasellus vitae suscipit justo. Mauris pharetra feugiat ante id lacinia.
//         Etiam faucibus mauris id tempor egestas. Duis luctus turpis at accumsan
//         tincidunt. Phasellus risus risus, volutpat vel tellus ac, tincidunt
//         fringilla massa. Etiam hendrerit dolor eget rutrum
//       </p>
//       <p style={{ fontStyle: "italic", marginTop: 25 }}>
//         <span style={{ fontWeight: 500, color: "green" }}>PAULA WILSON</span> ,
//         Media Analyst
//       </p>
//     </div>
//   );
// };

// export default Testimonial;
