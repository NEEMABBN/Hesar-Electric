////onLoad-Animation :
window.addEventListener('load', function () {
	setTimeout(function () {
		document.querySelector('#ProductText').className = "relative right-0 opacity-100 transition-all duration-700 flex flex-col lg:items-start items-center lg:bg-White lg:w-[65%] w-full gap-7 xl:pt-10 xl:pb-20 lg:py-7 xl:pr-7 xl:pl-40 lg:px-9 rounded"
		document.querySelector('#ProductImage').className = 'left-0 opacity-100 lg:w-[35%] relative transition-all duration-700'
		document.querySelector('#ProductText2').className = 'left-0 opacity-100 transition-all duration-700 delay-500 relative flex flex-col lg:items-start items-center lg:bg-White bg-inherit lg:w-[65%] w-full gap-7 xl:py-12 xl:px-28 lg:py-7 lg:px-9 rounded'
		document.querySelector('#ProductImage2').className = 'right-0 opacity-100 lg:w-[35%] relative transition-all duration-700 delay-500'
	}, 200)
})
////onScroll-Animation :
window.addEventListener('scroll', function () {
	let scrollTop = document.documentElement.scrollTop;
	let RequestBox = document.querySelector('#RequestBox')
	let RequestBoxAnimationLoc = RequestBox.offsetTop - 550;
	if (RequestBoxAnimationLoc <= scrollTop) {
		setTimeout(function () {
			document.querySelector('#RequestTitle').className = 'sm:text-3xl opacity-100 text-xl Yekan-Bold transition-all duration-500 delay-150'
			document.querySelector('#RequestInput1').className = 'w-full lg:py-4 py-2 px-5 rounded-[10px] outline-Primary opacity-100 translate-x-0 transition-all duration-500 delay-300'
			document.querySelector('#RequestInput2').className = 'w-full lg:py-4 py-2 px-5 rounded-[10px] outline-Primary opacity-100 translate-x-0 transition-all duration-500 delay-500'
			document.querySelector('#RequestBtn').className = 'scale-100 opacity-100 transition-all duration-500 delay-700 w-full bg-Black text-Primary hover:bg-Primary border-2 border-Black hover:text-Black transition-all font-bold rounded-[10px] lg:py-4 py-2'
		}, 100)
	}
	let ViewPoint = document.querySelector('#ViewPoint')
	let ViewPointAnimationLoc = ViewPoint.offsetTop - 550;
	if (ViewPointAnimationLoc <= scrollTop) {
		setTimeout(function () {
			ViewPoint.className = 'scale-100 container mx-auto flex flex-col sm:items-start items-center mt-20 md:gap-9 gap-6 transition-all duration-700'
		}, 100)
	}
	let WorkSampleZooFance = document.querySelector('#WorkSampleZooFance')
	let WorkSampleZooFanceAnimationLoc = WorkSampleZooFance.offsetTop - 550;
	if (WorkSampleZooFanceAnimationLoc <= scrollTop) {
		setTimeout(function () {
			document.querySelector('#image1').className = 'scale-100 transition-all duration-700 delay-100 rounded-lg w-full md:col-span-2 col-auto md:col-start-5 md:row-start-1 md:row-end-4'
			document.querySelector('#image2').className = 'scale-100 transition-all duration-700 delay-500 rounded-lg w-full md:col-span-2 col-auto md:row-start-1 md:col-start-3'
			document.querySelector('#image3').className = 'scale-100 transition-all duration-700 delay-300 rounded-lg w-full md:col-span-2 col-auto md:row-start-1 col-start-1'
			document.querySelector('#image4').className = 'scale-100 transition-all duration-700 delay-700 rounded-lg w-full md:col-span-4 col-auto md:row-start-2 md:row-end-4'
		}, 100)
	}
})
