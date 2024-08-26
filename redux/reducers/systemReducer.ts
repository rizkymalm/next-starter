import { type Action, type SystemState } from '../types';

const initialState: SystemState = {
    themes: 'dark',
};

const initialActionSystem: Action = {
    type: '',
};

export const systemReducer = (
    state = initialState,
    action = initialActionSystem
) => {
    switch (action.type) {
        case 'SYSTEM_THEMES':
            return {
                ...state,
                themes: action.payload,
            };

        default:
            return state;
    }
};
