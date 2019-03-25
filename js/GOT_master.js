(() => {
	// sub
	console.log('fired');

	const  sigils 		= document.querySelectorAll('.sigil-container'),
		   lightbox		= document.querySelector('.lightbox'),
		   video		= document.querySelector('video'),
		   lbClose      = document.querySelector('.lightbox-close'),
		   topBanners   = document.querySelector('#houseImages'),
		   tagline      = document.querySelector('.house-name'),
		   houseInfo    = document.querySelector('.house-info');

	// this is a container for some dynamic data
	const houseData = [ //STARK
		// backticks (javascript template string)let you keep the puntuation you're using inside of text
		`House Stark of Winterfell is a Great House of Westeros, ruling over the vast region known as the North from their seat in Winterfell. It is one of the oldest lines of Westerosi nobility by far, claiming a line of descent stretching back over eight thousand years. Before the Targaryen conquest, as well as during the War of the Five Kings and Daenerys Targaryen's invasion of Westeros, the leaders of House Stark ruled over the region as the Kings in the North.`
	];
	function openLightbox() {

		let targetHouse = this.className.split(" ")[1]

		// this gives us a lowercase house name -> the second class on all of hte shields ie stark, bartheon

		let targetVid = targetHouse.charAt(0).toUpperCase() + targetHouse.slice(1);

		// populate the tagline
		tagline.textContent = `House ${targetVid}`;

		// populate the house content 
		houseInfo.textContent = houseData[0];

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