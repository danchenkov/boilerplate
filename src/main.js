import './scss/main';

$(document).ready(function(){
	if(Modernizr){
		console.log("Modernizr is active");
	}

	var toggleButton = $('<input/>').attr({ type: 'button', id: 'toggleme', name:'toggleme', class: 'btn btn-primary', value:'Toggle!' });

	$("#main>section").append(toggleButton);

	toggleButton.on("click", function() {
		$("#main>section>.container").toggle();
	});

	Vue.config.devtools = true;

	Vue.component('post', {
		props: ['post'],
		template: '<h3>{{ post.title }}</h3>'
	});

	new Vue({
		el: '#app',
		data: {
		posts: [
			{ id: 1, title: 'Target A1' },
			{ id: 2, title: 'Target B2' },
			{ id: 3, title: 'Target C3' },
			{ id: 4, title: 'Target D4' },
			{ id: 5, title: 'Target E5' },
			{ id: 6, title: 'Target F6' },
			{ id: 7, title: 'Target G7' },
			{ id: 8, title: 'Target H8' }
		]
		}
	});

	console.log("Hello from JavaScript!");
	console.log(moment().startOf('day').fromNow());
});

