// open menu
document.querySelector('.btn_menu').addEventListener('click', (e) => {
	if(e.target.classList.contains('menu_btn')){
		if (document.querySelector('.open_menu').style.opacity !== '0') {
			document.querySelector('.open_menu').style.opacity = '0'
			document.querySelector('.close_menu').style.opacity = '1'
		} else {
			document.querySelector('.open_menu').style.opacity = '1'
			document.querySelector('.close_menu').style.opacity = '0'
		}
		document.querySelector('.menu_ul').classList.toggle('menu_ul_open')
	}
})