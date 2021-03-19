import { ChangeText } from './actions';

export const title = ( state = '', action) => {
    if (action.type === ChangeText){
        return action.title
    }
    else {
        return state
    }
}