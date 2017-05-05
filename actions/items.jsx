import * as types from '../constants/ActionTypes';

export function addOrgmodeItem(text, parent){
return {type: types.ADD_OI, text, parent};
}

