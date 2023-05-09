import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';

// Define a type for the slice state
interface USER {
    username: String;
    password: String | number;
}
interface AppearanceState {
    isLoggedIn: boolean;
    user: USER ;
}


// Define the initial state using that type
const initialState: AppearanceState = {
    isLoggedIn: false,
    user: { username: 'abc' , password: '123aaa'}
};

export const AppearanceSlice = createSlice({
    name: 'counter',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        changeMode: (state, actions) => {
            state.dark = actions.payload;
        },
    },
});

export const { changeMode } = AppearanceSlice.actions;
export const selectDark = (state: RootState) => state.appearance.dark;

export default AppearanceSlice.reducer;
