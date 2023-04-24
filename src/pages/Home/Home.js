import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
// import './Testimonial.css';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import Product from 'components/Product/Product';
import BannerIncentives from './BannerIncentives/BannerIncentives';
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
            <div className={cx('slick-arrow', 'slick-prev')} onClick={onClick}>
                {/* <ArrowForwardIos style={{ color: 'gray', fontSize: '45px' }} /> */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    // class="w-6 h-6"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
            </div>
        );
    };
    const NextBtn = (props) => {
        const { className, onClick } = props;
        return (
            <div className={cx('slick-arrow', 'slick-next')} onClick={onClick}>
                {/* <ArrowForwardIos style={{ color: 'gray', fontSize: '45px' }} /> */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    // className="w-6 h-6"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </div>
        );
    };

    const settingprouctslick = {
        slidesToShow: 3,
        slidesToScroll: 1,

        prevArrow: <PreviousBtn />,
        nextArrow: <NextBtn />,
    };

    const [selectedColor, setSelectedColor] = useState('sr227');
    const [coderDefaut, setcoderDefaut] = useState('sr227');
    function handleColorClick(e) {
        const color = e.currentTarget.getAttribute('data-color');
        setSelectedColor(color);

        // const swatchOptions = Array.from(e.currentTarget.parentNode.querySelectorAll('#pd01'));
        // alert(swatchOptions.length)
        // swatchOptions.forEach((option) => {
        //     if (option !== e.currentTarget) {
        //         option.classList.remove('selected');
        //     } else {
        //         option.classList.add('selected');
        //     }
        // });
    }
    const [listProduct, setListProduct] = useState([]);
    useEffect(() => {
        // get newest home
        fetch(`http://localhost:8080/api/v1/products/all`, {
            method: 'GET',
        })
            .then((response) => response.json())
            .then((response) => {
                    setListProduct(response);
                    console.log(response)
                    console.log(response[0].productColors)
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

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
                    {/* Sản phẩm mới  */}
                    <div className={cx('block-product')}>
                        <div className={cx('block-heading', 'home-heading')}>
                            <h2 className={cx('title')}>Sản phẩm mới</h2>
                        </div>
                        <div className={cx('block-content')}>
                            <div className={cx('product-items', 'testimonial')} id="slick">
                                <Slider {...settingprouctslick}>
                                {listProduct.map((e, i) => {
                                    return (
                                        <Product name={e.productName} colors={e.productColors} sizes={e.productSizes} price={e.price} discount={e.discount}/>
                                    );
                                })}
                                    
                                    {/* <Product />
                                    <Product /> */}
                                    {/* <Product />
                                    <Product />
                                    <Product />
                                    <Product /> */}

                                    
                                </Slider>
                            </div>
                        </div>
                    </div>

                    {/* Banner Incentives */}
                    <BannerIncentives />

                    {/* Sản phẩm giá tốt */}
                    <div className={cx('block-product')}>
                        <div className={cx('block-heading', 'home-heading')}>
                            <h2 className={cx('title')}>Sản phẩm giá tốt</h2>
                        </div>
                        <div className={cx('block-content')}>
                            <div className={cx('product-items', 'testimonial')} id="slick">
                                {/* <Slider {...settingprouctslick}>
                                    <Product />
                                    <Product />
                                    <Product />
                                    <Product />
                                    <Product />
                                    <Product />
                                    <Product />
                                </Slider> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

