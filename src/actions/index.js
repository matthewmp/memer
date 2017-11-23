
// Set the image URL
export const SET_IMG_URL = 'SET_IMG_URL';
export const set_image_url = (dataURL) => ({
	type: SET_IMG_URL,
	dataURL
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