import React from 'react';

import { storeWindows } from '../../store';
import { Icon } from '../Icons';

import cx from 'classnames';

import styles from './style.module.css';

export const TaskBar = () => {
    const taskBarClass = cx('flex br2 br--top pa4 bg-moon-gray', styles.taskBarClass);
    const onClick = () => {
        storeWindows.dispatch({type: 'open'});
    }
    return (
        <div className="w-100  flex justify-center fixed bottom-0">
            <div className={taskBarClass}>
                <button onClick={onClick} className="pointer bg-transparent bn">
                    <Icon name="SvgIconInstagram" />
                </button>
            </div>
        </div>
    );
};
