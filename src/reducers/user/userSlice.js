import {createSlice} from '@reduxjs/toolkit';


const initialState = {
    logged: "",
    email: "",
    fullName: "",
    token: "",
} 


export const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers:{
        
        setUser: (state, action) => {
            state.logged = action.payload.logged;
            state.email = action.payload.email;
            state.fullName = action.payload.fullName;
            state.token = action.payload.token;
        },
        unsetUser: (state,action) => {
            state.logged = "";
            state.email = "";
            state.fullName = "";
            state.token = "";
        } 
       
    }
})


export const { setUser, unsetUser } = userSlice.actions;

export default userSlice.reducer;