import React, { createContext, useReducer } from "react";
import { Action, homeReducer, initialState } from "../reducer/homeReducer";


export const homeContext =createContext<{
    state:any,
    dispatch:React.Dispatch<Action>
}>({state:'',dispatch:()=>{}});


const {Provider} = homeContext;

export const HomeProvider=({children}:{children:React.ReactNode})=>{
    const [state,dispatch]=useReducer(homeReducer,initialState)
    
    return(
       <Provider value={{state,dispatch}}>
        {children}
       </Provider>
    )
}