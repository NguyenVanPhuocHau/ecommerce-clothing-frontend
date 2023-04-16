import React from 'react';
import styles from './BannerIncentives.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
function BannerIncentives() {
    return (
        <div className={cx('block-uu-dai')}>
            <div className={cx('block-heading', 'home-heading')}>
                <h2 className={cx('title')}>Ưu đãi riêng bạn</h2>
            </div>
            <div className={cx('block-content')}>
                <div className={cx('row')}>
                    <div aria-hidden="true" className={cx('col-sm-6')}>
                        <a href="/flash-sale-mua-moi" tabIndex="-1" aria-label="Banner">
                            <img
                                // onerror="this.onerror=null;this.src='https://media.canifa.com/Simiconnector/list_image_tablet1681534972.png'"
                                src="https://media.canifa.com/Simiconnector/list_image_tablet1681534972.webp"
                                alt=""
                                width="100"
                                height="100"
                            />
                        </a>
                    </div>
                    <div aria-hidden="true" className={cx('col-sm-6')}>
                        <a href="/flash-sale-mua-moi"  tabIndex="-1" aria-label="Banner">
                            <img
                                // onerror="this.onerror=null;this.src='https://media.canifa.com/Simiconnector/list_image_tablet_second1681375475.png'"
                                src="https://media.canifa.com/Simiconnector/list_image_tablet_second1681375475.webp"
                                alt=""
                                width="100"
                                height="100"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BannerIncentives;
