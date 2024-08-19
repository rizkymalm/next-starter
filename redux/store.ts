import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore } from 'redux-persist';
import { thunk } from 'redux-thunk';

import rootReducer from '@/redux/reducers';

const initialState: any = {};
const middlewares: any[] = [thunk];

const store: any = createStore(
    rootReducer,
    initialState,
    process.env.NEXT_PUBLIC_NODE_VERSION === 'development'
        ? composeWithDevTools(applyMiddleware(...middlewares))
        : applyMiddleware(...middlewares)
);

const persistor = persistStore(store);

export { persistor, store };
