import React from 'react';

import { Icon } from '../Icons';
import cx from 'classnames';

import styles from './style.module.css';

export const Header = () => {
    const headerClass = cx('bg-light-silver flex items-center justify-end pa8', styles.headerClass);
    const closeButtonClass = cx('pa0 ml4 bn br-100 white flex justify-center items-center', styles.closeButtonClass);
    return (
        <header className={headerClass}>
            <button className={closeButtonClass}>
                -
            </button>
            <button className={closeButtonClass}>
                <Icon name="SvgIconClose" width={10} height={10} />
            </button>
        </header>
    );
};
