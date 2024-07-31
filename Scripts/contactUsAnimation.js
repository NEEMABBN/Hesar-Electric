////onLoad-Animation :
window.addEventListener('load', function () {
	setTimeout(function () {
		document.querySelector('#LandingContactUs').className = 'opacity-100 absolute w-full h-full top-0 -z-10 transition-all duration-700'
		document.querySelector('#LandingContactUsTitle').className = 'rotate-0 opacity-100 sm:text-4xl text-2xl Yekan-Bold transition-all duration-700'
		document.querySelector('#LandingContactUsText').className = 'scale-100 sm:text-base text-sm text-center transition-all duration-700 delay-500'
		document.querySelector('#ConectionBox').className = 'lg:w-[55%] container relative z-10 opacity-100 md:-mt-24 mx-auto bg-White flex flex-col rounded-[10px] items-center gap-9 py-10 sm:px-16 px-8 transition-all duration-500 delay-1000'
	}, 200)
})
////onScroll-Animation :
window.addEventListener('scroll', function () {
	let scrollTop = document.documentElement.scrollTop;
	let CommunicationBox = document.querySelector('#CommunicationBox')
	let CommunicationBoxAnimationLoc = CommunicationBox.offsetTop - 750;
	if (CommunicationBoxAnimationLoc <= scrollTop) {
		setTimeout(function () {
			document.querySelector('#item1').className = 'scale-100 flex flex-col items-center gap-7 transition-all duration-500 delay-300'
			document.querySelector('#item2').className = 'scale-100 flex flex-col items-center gap-7 transition-all duration-500 delay-500'
			document.querySelector('#item3').className = 'scale-100 flex flex-col items-center gap-7 transition-all duration-500 delay-150'
		}, 100)
	}
})
