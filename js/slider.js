const thumbnails = document.querySelectorAll('.thumbnail img')
const popup = document.querySelector('.popup')
const popupClose = document.querySelector('.popup__close')
const popupImg = document.querySelector('.popup__img')
const arrowLeft = document.querySelector('.popup__arrow--left')
const arrowRight = document.querySelector('.popup__arrow--right')

let currentImgIndex;


const showNextImage = () => {
	if(currentImgIndex === thumbnails.length -1){
		currentImgIndex = 0;
	} else{
		currentImgIndex++

	}
	popupImg.src = thumbnails[currentImgIndex].src
	
}

const showPreviousImage = () => {
	if(currentImgIndex === 0){
	currentImgIndex = thumbnails.length - 1;

	} else{
		currentImgIndex--

	}
	popupImg.src = thumbnails[currentImgIndex].src

}


const closePopup = () => {
	popup.classList.add('fade-out')
	setTimeout(() => {
		popup.classList.add('hidden')
		popup.classList.remove('fade-out')

		thumbnails.forEach(element => {
			element.setAttribute('tabindex', 1)
		})
	}, 300)
}

thumbnails.forEach((thumbnail, index) => {
	const showPopup = (e) => {
		popup.classList.remove('hidden')
		popupImg.src = e.target.src
		currentImgIndex = index
		thumbnails.forEach(element => {
			element.setAttribute('tabindex', -1)
		})
	}

	thumbnail.addEventListener('click', showPopup) 

	thumbnail.addEventListener('keydown', (e) => {
		if (e.code === 'Enter' || e.keyCode === 13) {
			showPopup(e)
		}
	})
})

popupClose.addEventListener('click', closePopup)

arrowRight.addEventListener('click', showNextImage)

arrowLeft.addEventListener('click', showPreviousImage)

document.addEventListener('keydown', (e) => {

	if(!popup.classList.contains('hidden')){

		if (e.code === 'ArrowRight' || e.keyCode === 39) {
			showNextImage();
		}

		if (e.code === 'ArrowLeft' || e.keyCode === 37){
			showPreviousImage()

		}

		if (e.code === 'Escape' || e.keyCode === 27){
			closePopup()

		}
	}	
})


popup.addEventListener('click', (e) => {
	if (e.target === popup) {
		closePopup()
	}
})
