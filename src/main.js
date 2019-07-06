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
	  props: ['title'],
	  template: '<h3>{{ title }}</h3>'
	});

	new Vue({
	  el: '#app'
	  // data: {
	  //   posts: [
	  //     { id: 1, title: 'My journey with Vue' },
	  //     { id: 2, title: 'Blogging with Vue' },
	  //     { id: 3, title: 'Why Vue is so fun' }
	  //   ]
	  // }
	});
});

