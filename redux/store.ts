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
    composeWithDevTools(applyMiddleware(...middlewares))
);

const persistor = persistStore(store);

export { persistor, store };
