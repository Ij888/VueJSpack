new Vue({
    el: '#app',
    data: {
        title: 'printAllMessages!'
    },
    methods: {
        changeTitle: function(event){
            this.title = event.target.value;
        }
    }
    
})
