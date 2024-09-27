import { createContext, useReducer } from "react";
import { Action, initialState, skillsReducer, State } from "../reducers/skillsReducer";


export const skillsContext =createContext<{
   state:State;
   dispatch: React.Dispatch<Action>
}>({
    state:initialState,
    dispatch:()=>{}
});


const {Provider} = skillsContext


export const SkillsContextProvider =({children}:{children:React.ReactNode})=>{
    const [state,dispatch] = useReducer(skillsReducer,initialState);
   
    return(
        <Provider value={{state,dispatch}}>
            {children}
        </Provider>
    )
} 