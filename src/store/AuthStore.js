import {createSlice} from "@reduxjs/toolkit";

const initialLoginState = {
    loginState : false
}



const CounterAuth = createSlice({
    name:'auth',
    initialState:initialLoginState,
    reducers:{
        LoginHandler(state){
            state.loginState = true;
        },
        LogoutState(state){
            state.loginState = false;

        }
    }
})

export const AuthAction = CounterAuth.actions;

export default CounterAuth