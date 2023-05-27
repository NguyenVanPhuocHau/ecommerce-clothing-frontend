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
import Carousel from 'react-carousel';

const cx = classNames.bind(styles);
export default function Home() {
    const settings = {
        autoplay: true,
        autoplaySpeed: 4000,
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
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
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
        slidesToShow: 5,
        slidesToScroll: 1,

        prevArrow: <PreviousBtn />,
        nextArrow: <NextBtn />,
    };

    const [selectedColor, setSelectedColor] = useState('sr227');
    const [coderDefaut, setcoderDefaut] = useState('sr227');
    function handleColorClick(e) {
        const color = e.currentTarget.getAttribute('data-color');
        setSelectedColor(color);
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
                console.log(response);
                console.log(response[0].productColors);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const images = [
        'https://media.canifa.com/Simiconnector/banner_name_tablet1682242165.webp',
        'https://media.canifa.com/Simiconnector/banner_name_tablet1682329031.webp',
        'https://media.canifa.com/Simiconnector/banner_name_tablet1679156030.webp',
        'https://media.canifa.com/Simiconnector/banner_name_tablet1679216002.webp',
        'https://media.canifa.com/Simiconnector/banner_name_tablet1682242165.webp',
        'https://media.canifa.com/Simiconnector/banner_name_tablet1682329031.webp',
    ];
    return (
        <div>
            <Slider {...settings}>
               
                {images.map((image, index) => (
                   
                    <div>
                        <img src={image} key={index} className={cx('thumbnail-slide')} alt="img-house" />
                    </div>
                ))}
            </Slider>
            <div className={cx('wrapper')}>
               
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
                                            <Product
                                                key={e.id}
                                                id={e.id}
                                                name={e.productName}
                                                colors={e.productColors}
                                                sizes={e.productSizes}
                                                price={e.price}
                                                discount={e.discount}
                                                images={e.productImages}
                                                event={e.event}
                                                home="true"
                                            />
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
