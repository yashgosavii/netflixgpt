import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
    name: 'user',
    initialState : null,
    reducers: {
        addUser: (action) => action.payload,
        removeUser: () => null
    }
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
