import {configureStore} from '@reduxjs/toolkit';
import {balanceReducer} from "./reducer";


export const store = configureStore({
    reducer: {
        balance: balanceReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
