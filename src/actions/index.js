
// Set the image URL
export const SET_IMG_URL = 'SET_IMG_URL';
export const set_image_url = (dataURL) => ({
	type: SET_IMG_URL,
	dataURL
});

export const SET_MEME_RESULT = 'SET_MEME_RESULT';
export const set_meme_result = (imgURL) => ({
	type: SET_MEME_RESULT,
	imgURL
});

export const SET_BG_COLOR = 'SET_BG_COLOR';
export const set_bg_color = (bgColor) => ({
	type: SET_BG_COLOR,
	bgColor
});

export const EDIT_TEXT = 'EDIT_TEXT';
export const edit_text = (txt) => ({
	type: EDIT_TEXT,
	txt
});

export const EDIT_FONT = 'EDIT_FONT';
export const edit_font = (font) => ({
	type: EDIT_FONT,
	font
});

export const EDIT_FONT_COLOR = 'EDIT_FONT_COLOR';
export const set_font_color = (fontColor) => ({
	type: EDIT_FONT_COLOR,
	fontColor
});

export const EDIT_FONT_SIZE = 'EDIT_FONT_SIZE';
export const edit_font_size = (fontSize) => ({
	type: EDIT_FONT_SIZE,
	fontSize
});

export const EDIT_POSX = 'EDIT_POSX';
export const edit_posX = (posX) => ({
	type: EDIT_POSX,
	posX
});

export const EDIT_POSY = 'EDIT_POSY';
export const edit_posY = (posY) => ({
	type: EDIT_POSY,
	posY
});

export const EDIT_STROKE = 'EDIT_STROKE';
export const edit_stroke = (stroke) => ({
	type: EDIT_STROKE,
	stroke
});



