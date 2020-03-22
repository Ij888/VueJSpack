new Vue({//this is the app root, the heart that powers the app
    el: "#app",
    data: {
	   // blakka: "Pluto is no more a planet!
	   blakka: "Vue issa vibe!"
    },
	methods:{
		changeTitle: function(event){
			this.blakka = event.target.value;
		}
	}
	
});
