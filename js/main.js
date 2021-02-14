window.onload = function () {
	const colour_btn_els = document.querySelectorAll('.colours .colour');
	const capacity_btn_els = document.querySelectorAll('.capacity .size');
	const choice_btn_els = document.querySelectorAll('.choice .product' )
	const imagery_el = document.querySelector('.imagery');
	const image_el_ph = document.querySelector('.imagery .image');


	const imagery_el_sh = document.querySelector('.imagery.sh');
	const image_el_sh = document.querySelector('.imagery.sh .image.sh');

	var currsect = '#phone';



// to switch between products

$('[data-switch]').on('click', function (e) {
		
	    var $page = $('#page'),
	        blockToShow = e.currentTarget.getAttribute('data-switch');
	        currsect = blockToShow;

	  

	    // Hide all children.
	    $page.children().hide();

	    // And show the requested component.
	    $page.children(blockToShow).show();
	});



//to change product attributes


	for (let i = 0; i < capacity_btn_els.length; i++) {
		let btn = capacity_btn_els[i];

		btn.addEventListener('click', function () {
			document.querySelector('.capacity .size.selected').classList.remove('selected');
			this.classList.add('selected');
		});
	}

	for (let i = 0; i < choice_btn_els.length; i++) {
		let btn = choice_btn_els[i];

		btn.addEventListener('click', function () {
			document.querySelector('.choice .product.selected').classList.remove('selected');
			this.classList.add('selected');
		});
	}

	for (let i = 0; i < colour_btn_els.length; i++) {
		let btn = colour_btn_els[i];

		btn.addEventListener('click', function () {
			document.querySelector('.colours .colour.selected').classList.remove('selected');
			this.classList.add('selected');
			if(currsect=='#phone')
			image_el_ph.src = "images/xr-" + this.dataset.name + '.png';
			else if(currsect=='#shoes')
			image_el_sh.src = "images/sh-" + this.dataset.name + '.png';


			imagery_el.style.backgroundColor = this.dataset.colour;
		});
	}


}