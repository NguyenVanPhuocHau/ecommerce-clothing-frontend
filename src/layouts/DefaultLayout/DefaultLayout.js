import classNames from "classnames/bind";
import HeaderSlickSlider from "layouts/components/Header/HeaderSlickSlider/HeaderSlickSlider";
import Header from "../components/Header/Header";
import styles from "./DefaultLayout.module.scss";

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("header")}>
        <Header/>
        <HeaderSlickSlider/>
      </div>
      <div className={cx("content")}>{children}</div>
      <p>fooder</p>
    </div>
  );
}

export default DefaultLayout;
