import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import type { Action } from '@/redux/types';
import { authReducers } from './authReducers';
import { systemReducer } from './systemReducer';

interface PersistProps {
    key: string;
    storage: any;
}

const persistConfig: PersistProps = {
    key: 'root',
    storage,
};

const appReducer = combineReducers({
    auth: authReducers,
    system: systemReducer,
});

const rootReducer = (state: any, action: Action) => {
    let res = state;
    if (action.type === 'LOGOUT') {
        res = undefined;
    }
    return appReducer(res, action);
};

export default persistReducer(persistConfig, rootReducer);
