

export type Action ={
    payload:Payload;
    type:Type;
}
type Payload = {
    refs?:any;
    activeSection:number;
    currentRef?:{
        id:number;
        ref:any;
    }
}
type Type ='selectRef'|'allRefs'|'setSection'
export type State ={
    refs?:any;
    activeSection:number;
    currentRef?:{
        id:number;
        ref:any;
    }
}

export const initialState:State ={
    activeSection:0,
}

export const skillsReducer =(state:State,action:Action):State=>{
    const {type,payload} =action;
    console.log({payload})
    switch(type)
    {
        case 'selectRef':{
            return {
                ...state,
                refs:payload.refs
            }
        };
        case 'allRefs':{
            return {
                ...state,
                currentRef:payload.currentRef
            }
        };
        case 'setSection':{
            return {
                ...state,
                activeSection:payload.activeSection,
            }
        }
        default :{
            return state;
        }
    }

}
