import 'isomorphic-fetch';


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

export const MOVE_UP = 'MOVE_UP';
export const move_up = () => ({
	type: MOVE_UP
});

export const MOVE_DOWN = 'MOVE_DOWN';
export const move_down = () => ({
	type: MOVE_DOWN
});

export const MOVE_RIGHT = 'MOVE_RIGHT';
export const move_right = () => ({
	type: MOVE_RIGHT
});

export const MOVE_LEFT = 'MOVE_LEFT';
export const move_left = () => ({
	type: MOVE_LEFT
});

export const EDIT_STROKE = 'EDIT_STROKE';
export const edit_stroke = (stroke) => ({
	type: EDIT_STROKE,
	stroke
});

export const CROP = 'CROP';
export const crop = () => ({
	type: CROP
}) 

export const SET_CLIP = 'SET_CLIP';
export const set_clip = (obj) => ({
	type: SET_CLIP,
	clip: obj
})


// export const searchImg = query => dispatch =>{
// 	const url = `https://api.gettyimages.com/v3/search/images?phrase=${query}`;
// 	fetch(url, {
// 		method: 'GET',
// 		headers: {
// 			'Content-Type': 'application/json',
// 			'Api-Key': 'zegr8sckp828ess93vx56b6j'
// 		}
// 	})
// 	.then(response => response.json())
// 	.then(function(results){
// 		let count = results.result_count;
// 		if(count <= 0){
// 			dispatch(set_img_results(0));
// 			return
// 		}
// 		dispatch(set_img_results(results));
// 	})
// 	.catch(err => console.log(err))
// }

// export const SET_IMG_RESULTS = 'SET_IMG_RESULTS';
// export const set_img_results = (results) => ({
// 	type: SET_IMG_RESULTS,
// 	results
// });

// export const individualImg = id => dispatch =>{
// 	if(id === false){
// 		dispatch(set_prev_img(''));
// 	}
// 	else{
// 		const url = `https://api.gettyimages.com/v3/images/?ids=${id}&fields=display_set`;
// 		fetch(url, {
// 			method: 'GET',
// 			headers: {
// 				'Content-Type': 'application/json',
// 				'Api-Key': 'zegr8sckp828ess93vx56b6j'
// 			}
// 		})
// 		.then(response => response.json())
// 		.then(function(results){
// 			let imgURL = results.images[0].display_sizes[0].uri;
// 			dispatch(set_prev_img(imgURL));
// 		})
// 		.catch(err => console.log(err))
// 	}
// }

// export const SET_PREV_IMG = 'SET_PREV_IMG';
// export const set_prev_img = (prev) => ({
// 	type: SET_PREV_IMG,
// 	prev
// });


