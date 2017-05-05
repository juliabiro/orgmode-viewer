import {ADD_OI, ADD_CHILD} from '../constants/ActionTypes';

const initialState = [{
  text: 'Use Redux',
  completed: false,
    id: 0,
    parent: null
}];

export default function items (state = initialState, action){

    switch(action.type){

        case ADD_OI:
            return [{
                id:state.reduce((maxId, item) => Math.max(item.id, maxId), -1) +1,
                text: action.text,
                parent: action.parent
            },
                    ...state];

  default:
    return state;
    }
}
