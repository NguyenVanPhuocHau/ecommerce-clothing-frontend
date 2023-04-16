import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Product.module.scss';
const cx = classNames.bind(styles);
function Product() {


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

    return (
        <div className={cx('product-item', 'item')} style={{ width: '100%', display: 'inline-block' }} id="pd01">
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
                        aria-label="Áo sát nách bé trai"
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
                            className={cx(
                                'swatch-option',
                                'color',

                                selectedColor === 'sr227' && coderDefaut === 'sr227' ? 'selected' : '',
                            )}
                            style={{
                                backgroundImage: 'url("https://media.canifa.com/attribute/swatch/images/sr227.png")',
                            }}
                            data-color="sr227"
                            onClick={handleColorClick}
                        ></div>
                        <div
                            className={cx(
                                'swatch-option',
                                'color',
                                selectedColor === 'sw001' || coderDefaut === 'sw001' ? 'selected' : '',
                            )}
                            style={{
                                backgroundImage: 'url("https://media.canifa.com/attribute/swatch/images/sw001.png")',
                            }}
                            data-color="sw001"
                            onClick={handleColorClick}
                        ></div>
                        <div
                            className={cx(
                                'swatch-option',
                                'color',
                                selectedColor === 'sy182' || coderDefaut === 'sy182' ? 'selected' : 'sy182',
                            )}
                            style={{
                                backgroundImage: 'url("https://media.canifa.com/attribute/swatch/images/sy182.png")',
                            }}
                            data-color="sy182"
                            onClick={handleColorClick}
                        ></div>
                    </div>
                    <h3 aria-label="Áo phông nam cotton USA in hình" className={cx('product-item-name')}>
                        <a href="/ao-phong-nam-8ts21s020" aria-label="Áo phông nam cotton USA in hình">
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
    );
}

export default Product;
