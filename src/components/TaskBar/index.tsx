import React from 'react';

import { Icon } from '../Icons';

import cx from 'classnames';

import styles from './style.module.css';

interface Props {
    onClick?: () => void;
}
export const TaskBar = ({ onClick }: Props) => {
    const mainClass = cx('w-100  flex justify-center fixed bottom-0', styles.mainClass);
    const taskBarClass = cx('br3 br--top pa4 bg-gray');
    const taskClass = cx('flex justify-center items-center', styles.TaskClass);
    return (
        <div className={mainClass}>
            <div className={taskBarClass}>
                <div className={taskClass} onClick={onClick}>
                    <Icon name="SvgIconInstagram" />
                </div>
            </div>
        </div>
    );
};
