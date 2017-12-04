
export const loadCanvas = (state) => {
	let canvas = document.getElementById('canvas');
	if(canvas){	
		let ctx = canvas.getContext('2d');
		resize();
		// Set Canvas Background Color
		ctx.fillStyle = state.bgColor;
		ctx.fillRect(0, 0, canvas.width, canvas.height);

		// Load Image
		let img = new Image();
		img.onload = function(){
			let scaledImg = scale(img.width, img.height);

			// Center Image
			let imgX = (canvas.width / 2) - scaledImg.width / 2;
	    	let imgY = (canvas.height / 2) - scaledImg.height / 2;

	    	// Paint Canvas Background
			ctx.fillStyle = state.bgColor;
			ctx.fillRect(0, 0, canvas.width, canvas.height);

			// Draw Image to Canvas
			if(state.crop){canvas.width = scaledImg.width, canvas.height = scaledImg.height}
			ctx.drawImage(this,imgX, imgY, scaledImg.width, scaledImg.height);
			loadMeme(state);
		}
		img.src = state.dataURL
	}
}

export const loadMeme = (state) => {
	let canvas = document.getElementById('canvas');
	let ctx = canvas.getContext('2d');

	ctx.fillStyle = state.fontColor;
	ctx.strokeStyle = '#000';
	ctx.lineWidth = state.strokeSize;
	ctx.font = `${state.fontSize}px ${state.font}`;
	ctx.strokeText(state.txt, state.posX, state.posY);
	ctx.fillText(state.txt, state.posX, state.posY);
}

// Scale Image
function scale(width, height){
	let canvas = document.getElementById('canvas');

	let newWidth = width;
    let newHeight = height;

    let cWidth = canvas.width;
    let cHeight = canvas.height;
    
    
    // Scale Image
    if(width > cWidth){
      let wRatio = cWidth / width -0.01;
      newWidth = width * wRatio;
      newHeight = height * wRatio;
      
      if(newHeight > cHeight){
        let hRatio = cHeight / newHeight;
        newHeight = newHeight * hRatio;
        newWidth = newWidth * hRatio;
      }
    }
    
    if(height > cHeight){
      let hRatio = cHeight / height -0.01;
      newWidth = width * hRatio;
      newHeight = height * hRatio;
      if(newWidth > cWidth){
        let wRatio = cWidth / newWidth;
        newHeight = newHeight * wRatio;
        newWidth = newWidth * wRatio;
      }
    }
    return {width: newWidth, height: newHeight}
}


// Return CSS Value of Element Property
function getCss(elem, prop){
	let width;
	try{
		width = window.getComputedStyle(elem).getPropertyValue(`${prop}`);
		return width;
	}
	catch(err){
		return window.innerWidth;
	}
}


// Adjust canvas to take full width / height of parent on resize
function resize(){
	let canvas = document.getElementById('canvas');

	let wrapper = document.getElementById('canvasWrapper');
	let wrapperWidth = getCss(wrapper, 'width');
	let wrapperHeight = getCss(wrapper, 'height');
	
	canvas.width = parseInt(wrapperWidth, 10) * .998;
	canvas.height = parseInt(wrapperHeight, 10) * .998;
}

// Get Centerish of Canvas
export const getCtr = () => {
	let canvas = document.getElementById('canvas');
	let center = canvas ? {x: canvas.width/2, y: canvas.height/2} : null;
	return center;
}