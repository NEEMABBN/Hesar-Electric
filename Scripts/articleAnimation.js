////onLoad-Animation :
window.addEventListener('load', function () {
	setTimeout(function () {
		document.querySelector('#LandingArticleImage').className = 'absolute opacity-100 w-full h-full top-0 -z-10 transition-all duration-700'
		document.querySelector('#LandingArticleTitle').className = 'sm:text-4xl text-2xl Yekan-Bold rotate-0 opacity-100 transition-all duration-1000'
		document.querySelector('#LandingArticleInput').className = 'flex flex-row items-center bg-White rounded-[10px] gap-3 px-3 lg:w-[30%] md:w-[40%] sm:w-[45%] w-[80%] scale-100 transition-all duration-500 delay-500'
	}, 200)
})
////onScroll-Animation :
window.addEventListener('scroll', function () {
	let scrollTop = document.documentElement.scrollTop;
	let BlogBox = document.querySelector('#BlogBox')
	let BlogBoxAnimationLoc = BlogBox.offsetTop - 450;
	if (BlogBoxAnimationLoc <= scrollTop) {
		setTimeout(function () {
			document.querySelector('#blog1').className = 'flex flex-col scale-100 items-center bg-White rounded-[10px] gap-4 p-6 transition-all duration-500 delay-300'
			document.querySelector('#blog2').className = 'flex flex-col scale-100 items-center bg-White rounded-[10px] gap-4 p-6 transition-all duration-500 delay-500'
			document.querySelector('#blog3').className = 'flex flex-col scale-100 items-center bg-White rounded-[10px] gap-4 p-6 transition-all duration-500 delay-100'
			document.querySelector('#blog4').className = 'flex flex-col scale-100 items-center bg-White rounded-[10px] gap-4 p-6 transition-all duration-500 delay-700'
			document.querySelector('#blog5').className = 'flex flex-col scale-100 items-center bg-White rounded-[10px] gap-4 p-6 transition-all duration-500 delay-150'
			document.querySelector('#blog6').className = 'flex flex-col scale-100 items-center bg-White rounded-[10px] gap-4 p-6 transition-all duration-500 delay-500'
			document.querySelector('#blog7').className = 'flex flex-col scale-100 items-center bg-White rounded-[10px] gap-4 p-6 transition-all duration-500 delay-700'
			document.querySelector('#blog8').className = 'flex flex-col scale-100 items-center bg-White rounded-[10px] gap-4 p-6 transition-all duration-500 delay-1000'
			document.querySelector('#blog9').className = 'flex flex-col scale-100 items-center bg-White rounded-[10px] gap-4 p-6 transition-all duration-500 delay-500'
		}, 100)
	}
})
