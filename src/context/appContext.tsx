import { PaletteMode } from "@mui/material";
import { createContext, useReducer } from "react";
import { appReducer, initialState } from "../reducer/appReducer";

export const appContext =createContext<
{
mode:PaletteMode,
switchMode:()=>void,
setMode:(_mode:PaletteMode)=>void
}
>(
    {mode:'light',switchMode:()=>{},setMode:()=>{}}
);

const {Provider} = appContext;

export const AppContextProvider =({children}:{children:React.ReactNode})=>{
    const [state, dispatch] = useReducer(appReducer,initialState);
    const mode =state.mode;
    const switchMode =()=>{
        dispatch({type:'switchMode'});
    }
    const setMode=(mode:PaletteMode)=>{
        dispatch({type:'setMode',payload:{mode}})
    }
    return (
        <Provider value={{mode,switchMode,setMode}}>
            {children}
        </Provider>
    )
}