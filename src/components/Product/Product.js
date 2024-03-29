import React, { useState, useEffect, useRef  } from 'react';
import classNames from 'classnames/bind';
import styles from './Product.module.scss';
import { myuser } from 'redux/authenticationSlide';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCartItems, addItem, removeItem, clearCart } from 'redux/actions';
const cx = classNames.bind(styles);
function Product(props) {
    const [listColors, setListColors] = useState(props.colors);
    const [listSizes, setListSizes] = useState(props.sizes);
    const [listImg, setListImg] = useState(props.images);
    const [hoveredButtonAddCart, setHoveredButtonAddCart] = useState(false);
    const [selectedColor, setSelectedColor] = useState(listColors[0].colorCode);
    const [coderDefaut, setcoderDefaut] = useState(listColors[0].colorCode);
    const [colorid, setColorId] = useState(listColors[0].id);
    const [sizeid, setSizeId] = useState(listSizes[0].id);
    function handleColorClick(e,id) {
        const color = e.currentTarget.getAttribute('data-color');
        setSelectedColor(color);
        setColorId(id)
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

    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionClick = (option,id) => {
        setSelectedOption(option);
        setSizeId(id)
    };

    const handleChooseSize = () => setHoveredButtonAddCart(!hoveredButtonAddCart);
    const handlehiddenChooseColor = () => setHoveredButtonAddCart(false);

    // console.log(props.colors)
    // setListColors([props.colors])
    // const list = [props.colors]
    // console.log(list)
    function formattedPrice(p) {
        return p.toLocaleString('vi-VN');
    }

    const cartItems = useSelector(state => state.hau.items);
    const dispatch = useDispatch();
    const user = useSelector(myuser);

    const handleAddToCart = (e) => {
        // alert("id p " + props.id)
        // alert("id u " + user.id)
        // alert("id c" + colorid)
        // alert("id s" + sizeid)
        
        dispatch(addItem(props.id,user.id,colorid,sizeid,1));
       
    };
 
    

    return (
        <div
            className={cx('product-item', 'item')}
            style={{  width: props.home !== "true" ? "33.333333%":"100%", display: 'inline-block' }}
            id="pd01"
            onMouseLeave={handlehiddenChooseColor}
        >
            <div className={cx('product-item-info')}>
                <div className={cx('product-item-photo')}>
                    <div className={cx('product-item-image-label')}>
                        {props.event === 'mới' ? (
                            <img
                                width="100"
                                height="100"
                                src="https://media.canifa.com/attribute/swatch/t/a/tag_new_web.webp"
                                // onerror="this.onerror=null;this.src='https://media.canifa.com/attribute/swatch/t/a/tag_new_web.png'"
                                alt=""
                            />
                        ) : props.event === 'giá tốt' ? (
                            <img
                                width="100"
                                height="100"
                                src="https://media.canifa.com/attribute/swatch/t/a/tag_gt_web.png"
                                // onerror="this.onerror=null;this.src='https://media.canifa.com/attribute/swatch/t/a/tag_new_web.png'"
                                alt=""
                            />
                        ) : (
                            <div></div>
                        )}
                    </div>
                    <a
                        href="/ao-phong-nam-8ts21s020"
                        className={cx('product-image-container')}
                        aria-label="Áo sát nách bé trai"
                    >
                        <img
                            src={listImg[0].image}
                            alt="Áo phông nam cotton USA in hình"
                            width="100"
                            height="100"
                            // onError="this.onerror=null;this.src='https://canifa.com/img/1000/1500/resize/8/t/8ts21s020-sr227-1-a.jpg'"
                            // onError="this.src='https://canifa.com/img/1000/1500/resize/8/t/8ts21s020-sr227-1-a.jpg'"
                            className={cx('product-image-photo')}
                        />
                    </a>
                    <div>
                        <button className={cx('product-item-button-tocart')} onClick={handleChooseSize}>
                            Thêm vào giỏ hàng
                        </button>
                    </div>
                    {hoveredButtonAddCart ? (
                        <div className={cx('product-item-action-hover-side')}>
                            <div className={cx('swatch-attribute', 'size', 'not-selected')}>
                                <span className={cx('swatch-attribute-label')}>
                                    <span>Vui lòng chọn size </span>
                                </span>
                                <div className={cx('swatch-attribute-options')}>
                                    {listSizes.map((e, i) => {
                                        const sizeName = e.size;
                                        const id = e.id;
                                        return (
                                            <div key={e.id}
                                                className={cx('swatch-option', 'text', {
                                                    selected: selectedOption === sizeName,
                                                })}
                                                onClick={() => handleOptionClick(sizeName,id)}
                                            >
                                                {sizeName}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                            <button
                                className={cx('product-item-action', 'action-tocart', {
                                    active: selectedOption !== null,
                                })}
                                onClick={handleAddToCart}
                            >
                                Thêm vào giỏ
                            </button>
                        </div>
                    ) : (
                        <div></div>
                    )}
                </div>
                <div className={cx('product-item-details')}>
                    <div className={cx('swatch-attribute-options')}>
                        {listColors.map((e, i) => {
                            const code = e.colorCode;
                            const id = e.id;
                            return (
                                <div key={e.id}
                                    className={cx(
                                        'swatch-option',
                                        'color',
                                        i === 0
                                            ? selectedColor === code && coderDefaut === code
                                                ? 'selected'
                                                : ''
                                            : selectedColor === code || coderDefaut === code
                                            ? 'selected'
                                            : '',
                                    )}
                                    style={{
                                        backgroundImage:
                                            'url("https://media.canifa.com/attribute/swatch/images/' + code + '.png")',
                                    }}
                                    data-color={code}

                                    onClick={(e) => handleColorClick(e,id)}
                                ></div>
                            );
                        })}

                        {/* <div
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
                        ></div> */}
                    </div>
                    <h3 aria-label="Áo phông nam cotton USA in hình" className={cx('product-item-name')}>
                        <a href="/ao-phong-nam-8ts21s020" aria-label="Áo phông nam cotton USA in hình">
                            {props.name}
                        </a>
                    </h3>
                    <div slot="price" className={cx('price-box')}>
                        <span className={cx('normal-price')}>
                            <span className={cx('price')}>{formattedPrice(props.price)} ₫</span>
                        </span>

                        {props.discount === 0 ? (
                            <span className={cx('old-price')}>
                                <span className={cx('price')}></span>
                            </span>
                        ) : (
                            <span className={cx('price-percent')}>-{props.discount * 100}%</span>
                        )}
                        {props.discount === 0 ? (
                            <span className={cx('old-price')}>
                                <span className={cx('price')}></span>
                            </span>
                        ) : (
                            <span className={cx('old-price')}>
                                <span className={cx('price')}>{formattedPrice(props.price + props.price * props.discount)} ₫</span>
                            </span>
                        )}
                        {/* <span className={cx('old-price')}>
                            <span className={cx('price')}>{props.price + props.price*props.discount} ₫</span>
                        </span> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;
