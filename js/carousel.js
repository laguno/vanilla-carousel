var options1 = {
	container: "my-carousel",
	title: "Fresh and just uploaded content",
	subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
	fetchCards: function () {
		// Function that returns "chunkSize" card object to be displayed in the carousel
		// Each card object is structured as follows:
		const type = ["video", "elearning", "learning plan", "playlist"];
		const randomType = type[Math.floor(Math.random() * type.length)];

		const titles = ["Printer Plus", "Rollers Robot", "Crab Dog", "Body Leash", "Printer Plants", "Male Crab", "Flowers Dislike", "Laptop Solar", "Floppy Disk Settings", "Dog Shower"];
		const randomTitle = titles[Math.floor(Math.random() * titles.length)];

		function getTime(min, max) {
			min = Math.ceil(min);
			max = Math.floor(max);
			let duration = Math.floor(Math.random() * (max - min + 1)) + min;
			if (duration < 3600) {
				return Math.floor(duration % 3600 / 60) + ":" + Math.floor(duration % 3600 % 60);
			} else {
				return Math.floor(duration / 3600) + "h " + Math.floor(duration % 3600 / 60) + "m";
			}
		}
		var randomPic = Math.floor(Math.random() * (1000 - 1 + 1)) + 1;

		return {
			image: `https://picsum.photos/seed/${randomPic}/300/200`, //url or random image taken from the web
			type: randomType, // a string with the following allowed values (video, elearning, learning_plan, playlist)",
			duration: getTime(60, 7200), // a duration in number of seconds (to be converted in human readable format, see mockup)
			title: randomTitle,
			cardinality: "single" // Whether this card is single or a stack of cards. Possible values = "single" or "collection"
		};
		// Simulate a random delay of an API call here, to demonstrate the usage of card placeholders
	}
};
class Carousel {
	constructor(obj) {
		this.container = obj.container;
		this.title = obj.title;
		this.subtitle = obj.subtitle;
		this.fetchCards = obj.fetchCards();
	}
	createCards(chunkSize) {
		for (let i = 0; i < chunkSize; i++) {
			//Creating single Card
			let data = this.fetchCards;

			let cardItem = document.createElement("DIV"),
				carouselSlider = document.getElementById("" + this.container + "").querySelector(".carousel_container .carousel_slider");

			cardItem.classList.add("card_item", "card_item--" + i);
			carouselSlider.appendChild(cardItem);
			//Adding items to single card, 
			//Image,Type,Duration
			let imageContainer = document.createElement("DIV"),
				type = document.createElement("DIV"),
				duration = document.createElement("DIV");

			imageContainer.classList.add("card_image","p-rel");
			cardItem.appendChild(imageContainer);
			imageContainer.style.backgroundImage = "url(" + options1.fetchCards().image + ")";

			imageContainer.appendChild(type);
			imageContainer.appendChild(duration);

			type.classList.add("card_details", "card_details-type","l-0");
			duration.classList.add("card_details", "card_details-duration","r-0");

			type.innerHTML = options1.fetchCards().type;
			duration.innerHTML = options1.fetchCards().duration;

			//Set card title
			let lowerCardContainer = document.createElement("DIV"),
				lowerCardTitle = document.createElement("H3");

			cardItem.appendChild(lowerCardContainer);
			lowerCardContainer.appendChild(lowerCardTitle);

			lowerCardContainer.classList.add("card_item-lower");
			lowerCardTitle.classList.add("card_title");

			lowerCardTitle.innerHTML = options1.fetchCards().title;








		}
	}
	createContainer() {
		let carousel = document.getElementById("" + this.container + ""),
			carouselHeader = document.createElement("DIV"),
			carouselContainer = document.createElement("DIV"),
			carouselSlider = document.createElement("DIV"),
			carouselArrows = document.createElement("DIV"),
			carouselArrowPrev = document.createElement("BUTTON"),
			carouselArrowSpanPrev = document.createElement("SPAN"),
			carouselArrowNext = document.createElement("BUTTON"),
			carouselArrowSpanNext = document.createElement("SPAN"),
			titleElem = document.createElement("H2"),
			subTitleElem = document.createElement("H5"),
			title = document.createTextNode(this.title),
			subtitle = document.createTextNode(this.subtitle);

		carousel.classList.add("carousel");
		//Carousel Header
		carousel.appendChild(carouselHeader);
		carouselHeader.classList.add("carousel_header");
		carouselHeader.appendChild(titleElem);
		carouselHeader.appendChild(subTitleElem);
		titleElem.appendChild(title);
		subTitleElem.appendChild(subtitle);
		//Carousel Container
		carousel.appendChild(carouselContainer);
		carouselContainer.classList.add("carousel_container","p-rel");
		//Slider Container
		carouselContainer.appendChild(carouselSlider);
		carouselSlider.classList.add("carousel_slider","p-rel");
		//Buttons Container
		carouselContainer.appendChild(carouselArrows);
		carouselArrows.classList.add("carousel_arrows","p-abs");
		//Prev Button
		carouselArrows.appendChild(carouselArrowPrev);
		carouselArrowPrev.classList.add("carousel_button", "carousel_button--prev","l-0");
		carouselArrowPrev.appendChild(carouselArrowSpanPrev);
		carouselArrowSpanPrev.classList.add("material-icons");
		carouselArrowSpanPrev.innerHTML = "chevron_left";
		//Next Button
		carouselArrows.appendChild(carouselArrowNext);
		carouselArrowNext.classList.add("carousel_button", "carousel_button--next","r-0");
		carouselArrowNext.appendChild(carouselArrowSpanNext);
		carouselArrowSpanNext.classList.add("material-icons");
		carouselArrowSpanNext.innerHTML = "chevron_right";

	}
	init() {
		let firstChunk = 5;
		this.createContainer();
		this.createCards(firstChunk);
	}
}


var options2 = {
	container: "my-carousel2",
	title: "Another carousel instance title",
	subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
	fetchCards: function (chunkSize) {
		// see otions1 for the specifications of this function
	}
};
document.addEventListener('DOMContentLoaded', (event) => {
	var carousel1 = new Carousel(options1);
	carousel1.init();
	var carousel2 = new Carousel(options2);
	carousel2.init();
});