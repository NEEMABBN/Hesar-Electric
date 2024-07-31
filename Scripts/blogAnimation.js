////onLoad-Animation :

////onScroll-Animation :
window.addEventListener('scroll', function () {
	let scrollTop = document.documentElement.scrollTop;
	let ViewPoint = document.querySelector('#ViewPoint')
	let ViewPointAnimationLoc = ViewPoint.offsetTop - 450;
	if (ViewPointAnimationLoc <= scrollTop) {
		setTimeout(function () {
			ViewPoint.className = 'scale-100 container mx-auto flex flex-col sm:items-start items-center mt-20 md:gap-9 gap-6 transition-all duration-500'
		}, 100)
	}
	let Blogs = document.querySelector('#Blogs')
	let BlogsAnimationLoc = Blogs.offsetTop - 450;
	if (BlogsAnimationLoc <= scrollTop) {
		setTimeout(function () {
			document.querySelector('#blog1').className = 'scale-100 opacity-100 flex flex-col items-center bg-White rounded-[10px] gap-4 p-6 transition-all duration-500 delay-100'
			document.querySelector('#blog2').className = 'scale-100 opacity-100 flex flex-col items-center bg-White rounded-[10px] gap-4 p-6 transition-all duration-500 delay-300'
			document.querySelector('#blog3').className = 'scale-100 opacity-100 flex flex-col items-center bg-White rounded-[10px] gap-4 p-6 transition-all duration-500 delay-150'
		}, 100)
	}
})
