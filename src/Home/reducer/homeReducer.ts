


type State ={

} 
export type Action={
    type:Type,
    payload:Payload
}
type Type ='';
type Payload ={

}
export const initialState:State='';
export const homeReducer =(state:State,action:Action):State=>{
    const {type} = action;
    switch(type)
    {

        default : 
            return state
    }
}