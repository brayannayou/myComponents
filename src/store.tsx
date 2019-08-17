import { createStore } from 'redux';

const windows = (state = false, {type}) => {
    console.log({ type });
    if (type === 'open') {
        return !state;
    }
    return state;
}

export const storeWindows = createStore(windows);
