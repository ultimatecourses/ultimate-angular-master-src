function DateController() {
	this.date = new Date();
}

angular
	.module('app')
	.controller('DateController', DateController);
