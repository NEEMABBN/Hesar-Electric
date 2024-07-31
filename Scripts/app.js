////Fixed-Navbar :
window.addEventListener('scroll', function () {
	let scrollTop = document.documentElement.scrollTop;
	let Navbar = document.querySelector('#Navbar').offsetHeight;
	if (scrollTop > Navbar) {
		document.querySelector('#Navbar').className = 'w-full bg-white fixed top-0 z-50 shadow-md'
	} else {
		document.querySelector('#Navbar').className = 'w-full bg-white relative'
	}
})
////SideMenuBar :
let OpenMenu = document.querySelector('#OpenMenu');
let CloseMenu = document.querySelector('#CloseMenu');
OpenMenu.addEventListener('click', function () {
	document.querySelector('#SideMenuBox').className = 'fixed top-0 z-50 sm:w-[40%] w-[50%] h-screen bg-White right-0 block transition-all duration-500'
	document.body.className = 'overflow-hidden'
})
CloseMenu.addEventListener('click', function () {
	document.querySelector('#SideMenuBox').className = 'fixed top-0 z-50 sm:w-[40%] w-[50%] h-screen bg-White right-[-100%] block transition-all duration-500'
	document.body.className = 'overflow-scroll'
})
////OpenMegaMenuMobile :
let OpenMegaMenu = document.querySelector('#OpenMegaMenuMobile')
let count = 0;
OpenMegaMenu.addEventListener('click', function () {
	count++;
	if (count % 2 == 1) {
		document.querySelector('#DropDownMenu').className = 'w-full h-auto flex relative z-10 flex-col items-start gap-3 py-3 opacity-100 transition-all duration-300'
	} else {
		document.querySelector('#DropDownMenu').className = 'w-full h-0 flex relative -z-30 flex-col items-start gap-0 py-0 opacity-0 transition-all duration-300'
	}
})
