import * as actions from '../actions';

export const initialState = {
	dataURL: ''
}

export const imageReducer = (state=initialState, action) => {
	if(action.type === actions.SET_IMG_URL){
		return Object.assign({}, state, {
			dataURL: action.dataURL
		});
	}
	else if(action.type === actions.SET_BG_COLOR){
		return Object.assign({}, state, {
			bgColor: action.bgColor
		});
	}
	else{
		return state;
	}
};