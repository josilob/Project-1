//before ID
// let sheetUrl =
// 	'https://docs.google.com/spreadsheets/d/1-Rnb2U9taL58D_lRRiE0uWlip-7Bu0anO55E3Ja9XwM/edit?usp=sharing';
//after ID
// let sheetAsJSON =
// 	'https://spreadsheets.google.com/feeds/list/1-Rnb2U9taL58D_lRRiE0uWlip-7Bu0anO55E3Ja9XwM/od6/public/values?alt=json';

$.ajax({
	url:
		'https://spreadsheets.google.com/feeds/list/1-Rnb2U9taL58D_lRRiE0uWlip-7Bu0anO55E3Ja9XwM/od6/public/values?alt=json',
})
	.then((data) => {
		//then answers successfully to the request
		console.log(data.feed.entry[0].gsx$image.$t);
		const entries = data.feed.entry;
		const imgUrls = entries.map((entry) => entry.gsx$image.$t);

		imgUrls.forEach((url, index) => {
			//if ternary = true, append class active to the carousel item, if FALSE it appends empty string (or simply nothing...)
			const innerHtml = `
		<div class="carousel-item ${index === 0 ? 'active' : ''}" >
			<img
				src="${url}"
				class="d-block w-100"
			/>
		</div>
		`;
			$('#carousel-anchor').append(innerHtml);
		});

		// console.log(imgUrls);
	})
	.catch((err) => console.log('err', err))
	.always(() => console.log('...'));

//
//
//NAV DROPDOWN
//
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
