(function(){
	var app = angular.module('photo_module', []);

	app.controller('NatureController', function(){
		this.items = imgs_nature;
	});

	var imgs_nature = [
		{
			description: 'The woods are lovely, dark and deep. But I have promises to keep, and miles to go before I sleep!',
			image: 'images/nature/woods_pic.jpg',
		},

		{
			description: 'Nature\'s own golden filter.',
			image: 'images/nature/yarra_pic.jpg',
		},

		{
			description: 'Spring, where you really at? Pretty flowers, yet freezing cold.',
			image: 'images/nature/flowers_pic.jpg',
		}
	];

	app.controller('CitiesController', function(){
		this.items = imgs_cities;
	});

	var imgs_cities = [
		{
			description: 'One word - Paris.',
			image: 'images/cities/paris_pic.jpg',
		},

		{
			description: 'Gothic Quarter - Barcelona.',
			image: 'images/cities/barcelona_pic.jpg',
		},

		{
			description: 'Not sure if postcard or a little French town.',
			image: 'images/cities/france_pic.jpg',
		},

		{
			description: 'Classic London Scene.',
			image: 'images/cities/london_pic.jpg',
		}
	];

	app.controller('WeddingsController', function(){
		this.items = imgs_weddings;
	});

	var imgs_weddings = [
		{
			description: 'Romance is the glamour which turns the dust of everyday life into a golden haze.',
			image: 'images/weddings/romance_pic.jpg',
		},

		{
			description: 'Reaction and expressions of a bride after her makeup artist has worked her magic on her.',
			image: 'images/weddings/makeup_pic.jpg',
		}
	];

})();
