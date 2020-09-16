const $burger = $('.burger');
const $links = $('.link');
let show = false;
//  handler for click event
const showMenu = (event) => {
	if (show) {
		$links.each(function (index) {
			$(this).css('display', 'none');
		});
		show = false;
	} else {
		$links.each(function (index) {
			$(this).css('display', 'block');
		});
		show = true;
	}
};

$burger.on('click', showMenu);
