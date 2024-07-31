////onLoad-Animation :
window.addEventListener("load", function () {
	setTimeout(function () {
		document.querySelector("#service-animation").className =
			"container mx-auto opacity-100 scale-100 2xl:-mt-32 xl:-mt-52 lg:-mt-32 md:-mt-16 mt-14 relative z-10 transition-all duration-1000";
	}, 200);
});
////onScroll-Animation :
window.addEventListener("scroll", function () {
	let scrollTop = document.documentElement.scrollTop;
	let AboutUs = document.querySelector("#AboutUs-animation");
	let animationAboutLoc = AboutUs.offsetTop - 450;
	if (animationAboutLoc <= scrollTop) {
		setTimeout(function () {
			document.querySelector("#ImageAbout").className =
				"w-full opacity-100 transition-all duration-1000";
			document.querySelector("#TextOpacity").className =
				"lg:w-[50%] w-full flex flex-col lg:items-start items-center gap-7 opacity-100 transition-all duration-1000";
		}, 100);
	}
	let Cooperation = document.querySelector("#Cooperation-animation");
	let animationCooperationLoc = Cooperation.offsetTop - 550;
	if (animationCooperationLoc <= scrollTop) {
		setTimeout(function () {
			document.querySelector("#BoxTranslate1").className =
				"translate-y-0 opacity-100 transition-all duration-700 delay-0 flex flex-col items-center gap-4 bg-White rounded-[10px] px-5 py-7 md:col-auto col-span-3 max-[450px]:col-auto";
			document.querySelector("#BoxTranslate2").className =
				"translate-y-0 opacity-100 transition-all duration-700 delay-300 flex flex-col items-center gap-4 bg-White rounded-[10px] px-5 py-7 md:col-auto col-span-3 max-[450px]:col-auto";
			document.querySelector("#BoxTranslate3").className =
				"translate-y-0 opacity-100 transition-all duration-700 delay-500 flex flex-col items-center gap-4 bg-White rounded-[10px] px-5 py-7 md:col-auto col-span-3 max-[450px]:col-auto";
			document.querySelector("#TextTranslate").className =
				"translate-x-0 opacity-100 transition-all duration-700 lg:w-[30%] w-full flex flex-col lg:items-start text-center gap-7 sm:px-0 px-7";
		}, 100);
	}
	let AboutProduct1 = document.querySelector("#About-Product1");
	let AboutProduct2 = document.querySelector("#About-Product2");
	let animationProductLoc1 = AboutProduct1.offsetTop - 550;
	let animationProductLoc2 = AboutProduct2.offsetTop - 550;
	if (animationProductLoc1 <= scrollTop) {
		setTimeout(function () {
			document.querySelector("#ProductText").className =
				"relative -right-0 opacity-100 transition-all duration-500 flex flex-col lg:items-start items-center lg:bg-White lg:w-[65%] w-full gap-7 xl:pt-10 xl:pb-20 lg:py-7 xl:pr-7 xl:pl-40 lg:px-9 rounded";
			document.querySelector("#ProductImage").className =
				"-left-0 opacity-100 transition-all duration-500 lg:w-[35%] relative";
		}, 100);
	}
	if (animationProductLoc2 <= scrollTop) {
		setTimeout(function () {
			document.querySelector("#ProductText2").className =
				"relative -left-0 opacity-100 transition-all duration-500 flex flex-col lg:items-start items-center lg:bg-White bg-inherit lg:w-[65%] w-full gap-7 xl:py-12 xl:px-28 lg:py-7 lg:px-9 rounded";
			document.querySelector("#ProductImage2").className =
				"-right-0 opacity-100 transition-all duration-500 lg:w-[35%] relative";
		}, 100);
	}
	let WorkSample = document.querySelector("#WorkSample");
	let animationWorkSampleLoc = WorkSample.offsetTop - 450;
	if (animationWorkSampleLoc <= scrollTop) {
		setTimeout(function () {
			document.querySelector("#Image1").classList =
				"scale-100 transition-all duration-500 delay-200 rounded w-[435px]";
			document.querySelector("#Image2").classList =
				"scale-100 transition-all duration-500 delay-500 rounded w-[435px]";
			document.querySelector("#Image3").classList =
				"scale-100 transition-all duration-500 delay-0 rounded w-[460px]";
			document.querySelector("#Image4").classList =
				"scale-100 transition-all duration-500 delay-700 rounded w-[460px]";
			document.querySelector("#Image5").classList =
				"scale-100 transition-all duration-500 rounded delay-300 w-[435px]";
			document.querySelector("#Image6").classList =
				"scale-100 transition-all duration-500 rounded delay-150 w-[435px]";
		}, 100);
	}
	let ClientBar = document.querySelector("#ClientBar");
	let animationClientBarLoc = ClientBar.offsetTop - 550;
	if (animationClientBarLoc <= scrollTop) {
		setTimeout(function () {
			document.querySelector("#ClientLogo1").className =
				"translate-x-0 opacity-100 transition-all duration-700";
			document.querySelector("#ClientLogo2").className =
				"translate-x-0 opacity-100 transition-all duration-700";
			document.querySelector("#ClientLogo3").className =
				"translate-x-0 opacity-100 transition-all duration-700";
			document.querySelector("#ClientLogo4").className =
				"translate-x-0 opacity-100 transition-all duration-700";
			document.querySelector("#ClientLogo5").className =
				"translate-x-0 opacity-100 transition-all duration-700";
			document.querySelector("#ClientLogo6").className =
				"translate-x-0 opacity-100 transition-all duration-700";
		}, 100);
	}
	let ContentBox = document.querySelector("#ContentBox");
	let animationContentBoxLoc = ContentBox.offsetTop - 550;
	if (animationContentBoxLoc <= scrollTop) {
		setTimeout(function () {
			document.querySelector("#Content1").className =
				"scale-100 opacity-100 transition-all duration-700 delay-500 flex flex-col items-center bg-white rounded-[10px] gap-4 p-6";
			document.querySelector("#Content2").className =
				"scale-100 opacity-100 transition-all duration-700 delay-300 flex flex-col items-center bg-white rounded-[10px] gap-4 p-6";
			document.querySelector("#Content3").className =
				"scale-100 opacity-100 transition-all duration-700 delay-700 flex flex-col items-center bg-white rounded-[10px] gap-4 p-6";
		}, 100);
	}
	let RequestBox = document.querySelector("#RequestBox");
	let animationRequestBoxLoc = RequestBox.offsetTop - 450;
	if (animationRequestBoxLoc <= scrollTop) {
		setTimeout(function () {
			document.querySelector("#RequestTitle").className =
				"sm:text-3xl opacity-100 text-xl Yekan-Bold transition-all duration-700";
			document.querySelector("#RequestInput1").className =
				"w-full lg:py-4 py-2 px-5 rounded-[10px] outline-Primary opacity-100 translate-x-0 transition-all duration-700 delay-300";
			document.querySelector("#RequestInput2").className =
				"w-full lg:py-4 py-2 px-5 rounded-[10px] outline-Primary opacity-100 translate-x-0 transition-all duration-700 delay-500";
			document.querySelector("#RequestBtn").className =
				"scale-100 opacity-100 w-full bg-Black text-Primary hover:bg-Primary border-2 border-Black hover:text-Black transition-all duration-700 delay-700 font-bold rounded-[10px] lg:py-4 py-2";
		}, 100);
	}
});
