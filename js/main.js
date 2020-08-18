/*********** Header **************/

// Select Elements
let sideBar = document.querySelector('.side-bar');
let toggleBtn = document.querySelector('.toggle-btn');

toggleBtn.addEventListener('click', showSideBar);

function showSideBar() {
	sideBar.classList.toggle('show');

	//Create Body Overlay
	let bodyOverlay = document.createElement('div');

	// Let Class to div 
	bodyOverlay.classList.add('overlay2');

	//Append The Div To the Body
	document.body.appendChild(bodyOverlay);
}

window.onclick = function (e) {
	if (e.target.classList.contains('overlay2')) {
		e.target.remove();
		sideBar.classList.toggle('show');
	}
}


/***xx****** Header ********xx****/

/************* Main ***************/
/************* Offered Menu ***************/

// Select Elements
let offeredLinks = Array.from(document.querySelectorAll('.offered-menu ul li'));
let allItems = Array.from(document.querySelectorAll('.offered-pic .item'));

offeredLinks.forEach((link, index) => {

	link.onclick = function (e) {

		removeActive();

		offeredLinks[index].classList.add('active');

		removeActiveItem();

		// console.log(typeof(e.target.dataset.ride));

		allItems.forEach((item) => {

			if(item.classList.contains(e.target.dataset.ride)) {
				item.classList.add('active');
			}

		});

	};
});

function removeActive() {
	offeredLinks.forEach((link) => {

		link.classList.remove('active');

	});
}

function removeActiveItem() {
	allItems.forEach((item) => {

		item.classList.remove('active');

	});
}
/*****xx****** Offered Menu *******xx******/
/*****xx****** Main *******xx******/




















