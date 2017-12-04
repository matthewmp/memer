import * as actions from '../actions';

export const initialState = {
	dataURL: '',
	imgURL: '',
	txt: '',
	bgColor: '#aaa',
	font: 'impact',
	fontColor: '#fff',
	fontSize: '50',
	strokeSize: '4',
	posX: 100,
	posY: 100
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
	else if(action.type === actions.EDIT_TEXT){
		return Object.assign({}, state, {
			txt: action.txt
		});
	}
	else if(action.type === actions.EDIT_FONT){
		return Object.assign({}, state, {
			font: action.font
		});
	}
	else if(action.type === actions.EDIT_FONT_COLOR){
		return Object.assign({}, state, {
			fontColor: action.fontColor
		});
	}
	else if(action.type === actions.EDIT_FONT_SIZE){
		return Object.assign({}, state, {
			fontSize: action.fontSize
		});
	}
	else if(action.type === actions.EDIT_POSX){
		return Object.assign({}, state, {
			posX: action.posX
		});
	}
	else if(action.type === actions.EDIT_POSY){
		return Object.assign({}, state, {
			posY: action.posY
		});
	}
	else if(action.type === actions.MOVE_UP){
		return Object.assign({}, state, {
			posY: state.posY - 5
		})
	}
	else if(action.type === actions.MOVE_DOWN){
		return Object.assign({}, state, {
			posY: state.posY + 5
		})
	}
	else if(action.type === actions.MOVE_LEFT){
		return Object.assign({}, state, {
			posX: state.posX - 5
		})
	}
	else if(action.type === actions.MOVE_RIGHT){
		return Object.assign({}, state, {
			posX: state.posX + 5
		})
	}

	else if(action.type === actions.EDIT_STROKE){
		return Object.assign({}, state, {
			strokeSize: action.stroke
		});
	}
	else if(action.type === actions.SET_MEME_RESULT){
		return Object.assign({}, state, {
			imgURL: action.imgURL
		});
	}
	else{
		return state;
	}
};