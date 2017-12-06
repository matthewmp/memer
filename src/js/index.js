
let img;

export const loadCanvas = (state) => {
	let canvas = document.getElementById('canvas');
	if(canvas){	
		let ctx = canvas.getContext('2d');
		
		resize();
		

		// Set Canvas Background Color
		ctx.fillStyle = state.bgColor;
		ctx.fillRect(0, 0, canvas.width, canvas.height);

		// Load Image
		img = new Image();
		img.crossOrigin = "Anonymous";

		img.onload = function(){
			// if(Object.keys(state.clip)[0] !== undefined){
			// 	canvas.width = state.clip.w;
			// 	canvas.height = state.clip.h;
			// }
			
			let scaledImg = scale(img.width, img.height);

			// Center Image
			let imgX = (canvas.width / 2) - scaledImg.width / 2;
	    	let imgY = (canvas.height / 2) - scaledImg.height / 2;

	    	// Paint Canvas Background
			ctx.fillStyle = state.bgColor;
			ctx.fillRect(0, 0, canvas.width, canvas.height);

			// If user selects crop have canvas match natural size of picture
			if(state.crop){
				canvas.width = scaledImg.width;
				canvas.height = scaledImg.height;
				imgX = 0;
				imgY = 0;
			}


			// Draw Image to Canvas

			if(Object.keys(state.clip)[0] !== undefined){
				ctx.fillStyle = '#ff0000';
				ctx.rect(state.clip.x, state.clip.y, state.clip.w, state.clip.h);
				ctx.clip();

				ctx.drawImage(this,imgX, imgY, img.width, img.height);	

				// New Canvas
				let testCanvas = document.getElementsByClassName('can2');
				for(let i = 0; i<testCanvas.length; i++){
					testCanvas[i].remove();
				}
				var nC = document.createElement('canvas');
				nC.classList = 'can2';
				var nCtx = nC.getContext('2d');
				nC.width = state.clip.w;
				nC.height = state.clip.h;
				loadMeme(state);
				nCtx.drawImage(canvas, -state.clip.x, -state.clip.y);
				
				document.body.appendChild(nC);
			}
			else{
				ctx.drawImage(this,imgX, imgY, scaledImg.width, scaledImg.height);
				loadMeme(state);
			}
			
		}
		img.src = state.dataURL;
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

// Get Centerish of Img
export const getImgCtr = () => {
	return {x: img.width/2, y: img.height/2}
}

// Cropping Funcs

export const dragElement = (elem) => {	
	let drag =  document.getElementById('dragger');
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    drag.onmousedown = dragMouseDown;
 
        
    function dragMouseDown(e){
        e = e || window.event;

        // Calc new position
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e){
        e = e || window.event;
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;

        // set new pos
        
        elem.style.top = (elem.offsetTop - pos2) + 'px';
        elem.style.left = (elem.offsetLeft - pos1) + 'px';
    }
    
    function closeDragElement() {
        /* stop moving when mouse button is released:*/
        document.onmouseup = null;
        document.onmousemove = null;
  }
}

export const clip = () =>{
	let cropper = document.getElementById('cropper');
	let elem = cropper.getBoundingClientRect();
	
    return {
    	x: elem.x, y: elem.y, w: elem.width -15 , h: elem.height -15
    };
}