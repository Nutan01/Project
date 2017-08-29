import {Post,Get,Delete} from './action';
import {Challenge} from './challenge';
// export const INITIAL_STATE:Product={
// Id=0,
// ProductName="",
// price=0
// }
export function rootReducer(state:Challenge[],action):Challenge[]{
    switch(action.type){
       
        case Get:
             return Object.assign([],state,action.payload);

        case Post:
             return Object.assign([],state,state.push(action.payload));
      
      
         
       default:
            return state;

    }
}