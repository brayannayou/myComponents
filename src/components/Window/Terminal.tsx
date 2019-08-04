import React, { Component } from 'react';

import cx from 'classnames';
import { map } from 'lodash';

import styles from './style.module.css';
interface States {
    dir: string;
    value: string;
    prevCommands: [];
    commands: {
        destroyTheWorld: {
            script: () => void,
            description: string;
        },
        clear: {
            script: () => void,
            description: string;
        }
    }
}
export class Terminal extends Component {
    destroyTheWorld = () => {
        console.log('destroing...');
        setTimeout(() => {
            console.log('the world was destroyed, but you still alive, how`s that possible');
        }, 1000);
    };
    clear = () => {
        console.log('clear');
        this.setState({ prevCommands: [] }, () => console.log(this.state.prevCommands));
    }
    state: States = {
        dir: 'myComponents',
        value: '',
        prevCommands: [],
        commands: {
            destroyTheWorld: {
                script: this.destroyTheWorld,
                description: 'If you execute this script, the world will end...',
            },
            clear: {
                script: this.clear,
                description: 'This will clear your terminal',
            }
        },
    }
    inputOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ value: e.target.value });
    }
    executeCommand = (command: string) => {
        const { commands } = this.state;
        if (commands[command]) {
            commands[command].script();
        }
        this.setState({ value: '' });
    }
    inputKeyDown = (e: any) => {
        if (e.key === 'Enter') {
            const { dir, value } = this.state;
            this.setState(({ prevCommands }: States) => {
                return {
                    prevCommands: [...prevCommands, { dir, value }],
                }
            }, () => {
                this.executeCommand(value);
                var terminal = document.querySelector('#terminal');
                terminal.scrollTop = terminal.scrollHeight - terminal.clientHeight;
            });
        }
    }
    mapPreviousCommands = () => {
        const { prevCommands } = this.state;
        return map(prevCommands, (command, key) => {
            return <p key={key} className="ma0">{command.dir} {command.value}</p>
        });
    }
    render() {
        const { dir, value } = this.state;
        const terminalMainClass = cx('pa8 h-100 white overflow-auto', styles.terminalText, styles.terminalMainClass);
        const inputTerminalClass = cx('w-100 white bn bg-transparent ml12 outline-0', styles.terminalText);
        return (
            <div className={terminalMainClass} id="terminal" >
                <div>{this.mapPreviousCommands()}</div>
                <div className="flex">
                    <span>{dir}</span>
                    <input
                        value={value}
                        type="text"
                        className={inputTerminalClass}
                        onChange={this.inputOnChange}
                        onKeyDown={this.inputKeyDown}
                    />
                </div>
            </div>
        );
    }
};
