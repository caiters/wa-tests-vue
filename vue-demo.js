var navdemo = new Vue({

	// A DOM element to mount our view model.
	el: '#main',

    // This is the model.
	// Define properties and give them initial values.
	data: {
		active: 'home'
	},

	// Functions we will be using.
	methods: {
		makeActive: function(item){
			// When a model is changed, the view will be automatically updated.
			this.active = item;
		}
	}
});

var hello = new Vue({
  el: '#hello',
  data() {
    return {
      name: 'Caitlin',
      list: [
        'Warcraft'
      ],
      game: ''
    }
  },
  methods: {
    addGame(game) {
      this.list.push(game)
      this.game = '';
    }
  }
});
