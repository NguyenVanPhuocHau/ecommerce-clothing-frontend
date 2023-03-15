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
                        to="/cart"
                        className={cx('cart', 'sign-in')}
                        leftIcon={
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={16}
                                height={16}
                                fill="currentColor"
                                className="bi bi-cart"
                            >
                                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                            </svg>
                        }
                    ></Button>
                      <Button
                        to="/cart"
                        className={cx('cart', 'sign-in')}
                        leftIcon={
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={16}
                                height={16}
                                fill="currentColor"
                                className="bi bi-cart"
                            >
                                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                            </svg>
                        }
                    ></Button>
                </div>
            {/* </div> */}
        </div>
        
    );
}

export default Header;
