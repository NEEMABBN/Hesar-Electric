////onLoad-Animation :
window.addEventListener('load', function () {
	setTimeout(function () {
		document.querySelector('#LandingAboutUs').className = 'w-full bg-Primary opacity-100 flex flex-col items-center relative sm:py-32 py-24 transition-all duration-700'
		document.querySelector('#LandingAboutUsImage').className = 'absolute xl:right-32 lg:right-10 bottom-0 transition-all duration-1000'
		document.querySelector('#LandingAboutUstitle').className = 'sm:text-4xl text-2xl Yekan-Bold text-Black z-10 rotate-0 opacity-100 transition-all duration-1000'
	}, 200)
})
////onScroll-Animation :
window.addEventListener('scroll', function () {
	let scrollTop = document.documentElement.scrollTop;
	let AboutProduct = document.querySelector('#AboutProduct')
	let AboutProductAnimationLoc = AboutProduct.offsetTop - 450;
	if (AboutProductAnimationLoc <= scrollTop) {
		setTimeout(function () {
			document.querySelector('#ProductText').className = 'relative right-0 opacity-100 flex flex-col lg:items-start items-center lg:bg-White lg:w-[65%] w-full gap-7 xl:pt-10 xl:pb-20 lg:py-7 xl:pr-7 xl:pl-40 lg:px-9 rounded transition-all duration-700'
			document.querySelector('#ProductImage').className = 'left-0 opacity-100 lg:w-[35%] relative transition-all duration-700'
			document.querySelector('#ProductText2').className = 'left-0 opacity-100 relative flex flex-col lg:items-start items-center lg:bg-White bg-inherit lg:w-[65%] w-full gap-7 xl:py-12 xl:px-28 lg:py-7 lg:px-9 rounded transition-all duration-700 delay-500'
			document.querySelector('#ProductImage2').className = 'right-0 opacity-100 lg:w-[35%] relative transition-all duration-700 delay-500'
		}, 100)
	}
	let HonorsBox = document.querySelector('#HonorsBox')
	let HonorsBoxAnimationLoc = HonorsBox.offsetTop - 450;
	if (HonorsBoxAnimationLoc <= scrollTop) {
		setTimeout(function () {
			document.querySelector('#HonorsImage').className = 'scale-100 lg:w-[50%] transition-all duration-700'
			document.querySelector('#HonorsTitle').className = 'translate-y-0 opacity-100 md:text-3xl sm:text-xl text-base Yekan-Bold transition-all duration-700'
			document.querySelector('#HonorsText').className = 'translate-y-0 opacity-100 text-[#606060] leading-7 lg:text-start text-center md:text-base sm:text-sm text-[13px] transition-all duration-700 delay-300'
			document.querySelector('#range1').className = 'translate-x-0 opacity-100 flex flex-col items-start w-full gap-3 transition-all duration-500 delay-300'
			document.querySelector('#range2').className = 'translate-x-0 opacity-100 flex flex-col items-start w-full gap-3 transition-all duration-500 delay-500'
			document.querySelector('#range3').className = 'translate-x-0 opacity-100 flex flex-col items-start w-full gap-3 transition-all duration-500 delay-700'
		}, 100)
	}
})
