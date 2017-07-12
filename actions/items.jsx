import * as types from '../constants/ActionTypes';

export function addOrgmodeItem(text, parent){
return {type: types.ADD_OI, text, parent};
}

export function editOrgmodeItem(item, text){
return {type: types.EDIT,item, text};
}

