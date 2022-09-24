import {AnyAction} from "@reduxjs/toolkit";

export interface BalanceState {
    balance: number;
}

export const initialState: BalanceState = {balance: 0}

export function balanceReducer(state = initialState, action: AnyAction) {

    if (action.type === 'deposit') {
        return {
            ...state,
            balance: (state.balance || 0) + action.payload
        }
    } else {
        return {
            ...state,
            balance: (state.balance || 0) - action.payload
        }
    }

}
