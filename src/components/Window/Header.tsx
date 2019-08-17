import React from 'react';

import { Icon } from '../Icons';
import cx from 'classnames';

import styles from './style.module.css';

export const Header = () => {
    const headerClass = cx('flex bg-moon-gray pa4 justify-end', styles.headerClass);
    const closeButtonClass = cx('flex bg-orange pa0 ml4 bn br-100 white justify-center items-center pointer', styles.closeButtonClass);
    return (
        <header className={headerClass}>
            <button className={closeButtonClass}>
                <Icon name="SvgIconClose" width={5} height={5} />
            </button>
            <button className={closeButtonClass}>
                <Icon name="SvgIconClose" width={5} height={5} />
            </button>
        </header>
    );
};
