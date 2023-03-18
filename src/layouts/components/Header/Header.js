import classNames from 'classnames/bind';
import styles from '../Header/Header.module.scss';
import { NavLink } from 'react-router-dom';
import Button from 'components/Button';
// import Button from "~/components/Button";

const cx = classNames.bind(styles);
function Header() {
    return (
        <div className={cx('wrapper', 'grid')}>
            {/* <div className={cx('header-container')}> */}
            <div className={cx('left')}>
                <NavLink to="/" className={cx('logo')}>
                    {/* https://www.bing.com/images/search?view=detailV2&ccid=NKVlx4em&id=BDBA63199158E43AC20AB0EC9F3834C95E5CC413&thid=OIP.NKVlx4emhGNqIZ2CsWELRQAAAA&mediaurl=https%3A%2F%2Fi.pinimg.com%2Fcustom_covers%2F216x146%2F398498335717636937_1506683521.jpg&cdnurl=https%3A%2F%2Fth.bing.com%2Fth%2Fid%2FR.34a565c787a684636a219d82b1610b45%3Frik%3DE8RcXsk0OJ%252fssA%26pid%3DImgRaw%26r%3D0&exph=146&expw=216&q=logos+clothing+shop+%c4%91%e1%ba%b9pred+background+&simid=608038769679755016&form=IRPRST&ck=A3003B58DB024742480B1A6B70FFF100&selectedindex=1&pivotparams=insightsToken%3Dccid_vxHD29Qs*cp_E37C123D058799F09507D344CBFBE933*mid_47D817EDB687B99A98217A164246E02F3E3F8A37*simid_608029715895763053*thid_OIP.vxHD29QsayjB89ee79eslAHaFj&vt=0&sim=11&iss=VSI */}
                    <img
                        src="https://th.bing.com/th/id/OIP.61M4nvkMqDImVpEsiD1_EwAAAA?pid=ImgDet&w=207&h=146&c=7&dpr=1.3"
                        alt="logo-img"
                    />
                </NavLink>
                <div className={cx('header-menu')}>
                    <ul className={cx('ul')}>
                        <li className={cx('nav-item')}>
                            <NavLink className={cx('item')}>Nam</NavLink>
                        </li>
                        <li>
                            <NavLink className={cx('item')}>Nữ</NavLink>
                        </li>
                        <li>
                            <NavLink className={cx('item')}>Trẻ em</NavLink>
                        </li>
                        <li>
                            <NavLink className={cx('item')}>GEN Z</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={cx('right')}>
               
                <Button
                    to="/favorite"
                    className={cx('cart', 'sign-in')}
                    leftIcon={
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-6 h-6"
                        > 
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                            />
                        </svg>
                    }
                ></Button>
                <Button
                    to="/user"
                    className={cx('cart', 'sign-in')}
                    leftIcon={
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-6 h-6"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                        </svg>
                    }
                ></Button>
                <Button
                    to="/cart"
                    className={cx('cart', 'sign-in')}
                    leftIcon={
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-6 h-6"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                            />
                        </svg>
                    }
                ></Button>
            </div>
            {/* </div> */}
        </div>
    );
}

export default Header;
