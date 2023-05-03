import classNames from 'classnames/bind';
import { Link,NavLink } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
                    to,
                    href,
                    primary = false,
                    outline = false,
                    text = false,
                    name,
                    rounded = false,
                    disabled = false,
                    small = false,
                    large = false,
                    children,
                    className,
                    leftIcon,
                    rightIcon,
                    onClick,
                    dropDownMenu,
                    span,
                    ...passProps
                }) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };

    // Remove event listener when btn is disabled
    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', {
        [className]: className,
        primary,
        outline,
        text,
        disabled,
        rounded,
        small,
        large,
    });

    return (
        
        <Comp className={classes} {...props}>
             {span}
            {leftIcon && <div className={cx('icon')}>{leftIcon}</div>}
            {dropDownMenu}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <div className={cx('icon')}>{rightIcon}</div>}
            <p className={cx('text')}>{name}</p>
           
        </Comp>
    );
}

export default Button;