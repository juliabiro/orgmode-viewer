import {ADD_OI, ADD_CHILD} from '../constants/ActionTypes';

const initialState = [];

export default function items (state = initialState, action){

    switch(action.type){

        case ADD_OI:
            let new_item ={
                id:state.reduce((maxId, item) => Math.max(item.id, maxId), -1) +1,
                text: action.text,
                level: action.parent?action.parent.level+1:0,
                children: []
            }

            if (action.parent) {
                action.parent.children.push(new_item)
            }
            return [new_item,
                    ...state];

  default:
    return state;
    }
}
