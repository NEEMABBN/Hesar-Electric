////onLoad-Animation :
window.addEventListener('load', function () {
	setTimeout(function () {
		document.querySelector('#ProductImage').className = 'translate-x-0 opacity-100 lg:w-[35%] rounded-[10px] overflow-hidden transition-all duration-500 delay-100'
		document.querySelector('#ProductText').className = 'translate-x-0 opacity-100 lg:w-[65%] w-full flex flex-col lg:items-start items-center gap-4 transition-all duration-500 delay-300'
	}, 200)
})
////onScroll-Animation :
window.addEventListener('scroll', function () {
	let scrollTop = document.documentElement.scrollTop;
	let ViewPoint = document.querySelector('#ViewPoint')
	let ViewPointAnimationLoc = ViewPoint.offsetTop - 550;
	if (ViewPointAnimationLoc <= scrollTop) {
		setTimeout(function () {
			ViewPoint.className = 'scale-100 container mx-auto flex flex-col sm:items-start items-center mt-20 md:gap-9 gap-6 transition-all duration-500'
		}, 100)
	}
})
