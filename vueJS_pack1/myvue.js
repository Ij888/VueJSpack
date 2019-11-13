new Vue({
    el: "#app",
    data: {
        blakka: "Pluto is no more a planet!"
    },
	methods:{
		changeTitle: function(event){
			this.blakka = event.target.value;
		}
	}
	
});
