import { PaletteMode } from "@mui/material";
 import Cookies from 'js-cookie';
import { getScreen } from "../utils";

type Action={
    payload?:Payload;
    type:Type;
}
type Payload ={
    mode?:PaletteMode;
    height?:number;
    width?:number;
}
type Type ='switchMode'|'setMode'|'screen';
type State ={
    mode:PaletteMode;
    height:number;
    width:number;
}

export const initialState:State ={
    ...getScreen(),
    mode: Cookies.get('mode') as PaletteMode ?? 'light',
    
} 
export  const appReducer =(state:State,action:Action):State=>{
    const {type} = action;
 

    switch(type){
        case 'switchMode':{
            Cookies.set('mode',state.mode =='dark'? 'light' :'dark')
            return {
                ...state,
                mode: state.mode =='dark'? 'light' :'dark',
             }
        };
        case 'setMode':{
            Cookies.set('mode',action.payload?.mode||'light')
            return {
                ...state,
                mode:action.payload?.mode||'light'
            }
        }
        case 'screen':{
            return{
                ...state,
                ...getScreen()
            }
        }

        default :{
            return state;
        }

    }
}