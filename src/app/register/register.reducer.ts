import { Action } from '@ngrx/store';


const initialState= {
    allUsers: [
        {email:"iqubal.khan@infobeans.com", password:"test"},
        {email:"yuhaan.khan@infobeans.com", password:"test"}

    ]
}

export function registerReducer(state=initialState, action:Action){
    switch(action.type){
        case "ADD_NEW_USER":
            return {
                ...state,
                allUsers:[...state.allUsers, action]
            }
    }

}