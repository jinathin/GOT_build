(() => {
	// sub
	console.log('fired');

	const  sigils 		= document.querySelectorAll('.sigil-container'),
		   lightbox		= document.querySelector('.lightbox'),
		   video		= document.querySelector('video'),
		   lbClose      = document.querySelector('.lightbox-close'),
		   topBanners   = document.querySelector('#houseImages');

	function openLightbox() {

		let targetHouse = this.className.split(" ")[1]

		// this gives us a lowercase house name -> the second class on all of hte shields ie stark, bartheon

		let targetVid = targetHouse.charAt(0).toUpperCase() + targetHouse.slice(1);

		video.src = `video/House-${targetVid}.mp4`;
		lightbox.classList.add('lightbox-on');

		video.load();
		video.play();
	}

	function closeLightbox() {
		lightbox.classList.remove('lightbox-on');

		// rewind the current video and pause it 
		video.currentTime = 0;
		video.pause();
	}

	function animateBanners() {
		//move the banners to the left so that the current house banner shows up
		const offSet = 600;
		let currentOffset = this.dataset.offset * offSet;

		topBanners.style.right = currentOffset + "px";
		// body...
		sigils.forEach(sigil => sigil.addEventListener('click', openLightbox));
	}


	// sigils.forEach(sigil => sigil.addEventListener('click', openLightbox));
	sigils.forEach(sigil => sigil.addEventListener('click', animateBanners))

	video.addEventListener('ended', closeLightbox);
	lbClose.addEventListener('click', closeLightbox);
})();