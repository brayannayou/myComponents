import React, { useEffect, useState } from 'react';

import { storeWindows } from '../../store';
import { Header } from './Header';

import { Rnd } from 'react-rnd';
import cx from 'classnames'
import styles from './style.module.css';

interface Props {
    children?: React.ReactNode;
}
export const Window = ({ children }: Props) => {
    const [isOpen, setIsOpen] = useState(false);
    useEffect(()=> {
        storeWindows.subscribe(() => setIsOpen(storeWindows.getState()))
    }, []);
    const mainWindowClass = cx({[styles.fadeOut]: !isOpen, [styles.fadeIn]: isOpen});
    return (
        <div className={mainWindowClass}>
            <Rnd
                minWidth={200}
                minHeight={110}
                resizable={!isOpen}
                disableDragging={!isOpen}
                default={{
                    x: 1 / 2,// Encontar um jeito de iniciar a janela centralizada
                    y: 1 / 2,
                    width: 320,
                    height: 200,
                }}       
            >
                <div className="br2 bn overflow-hidden h-100">
                    <Header />
                    {children}
                </div>
            </Rnd>
        </div>
    );
};
