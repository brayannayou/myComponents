import React, { useState, useEffect } from 'react';

import { Header } from './Header';
import { Terminal } from './Terminal';

import { Rnd } from 'react-rnd';
import cx from 'classnames';

import styles from './style.module.css';

interface Props {
    children?: React.ReactNode;
}
export const Window = ({ children }: Props) => {
    const mainClass = cx('br3 bn overflow-hidden', styles.mainClass);
    return (
        <Rnd
            default={{
                x: 0,
                y: 0,
                width: 320,
                height: 200,
            }}
        >
            <div className={mainClass}>
                <Header />
                <Terminal />
            </div>
        </Rnd>
    );
};
