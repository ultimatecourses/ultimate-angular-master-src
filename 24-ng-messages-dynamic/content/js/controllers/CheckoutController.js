function CheckoutController() {
	this.details = {
		username: '',
		password: '',
		coupon: 'summer-50'
	};
	this.onSubmit = function () {
		console.log(this.details);
	};
	this.passwordErrors = [{
		type: 'minlength',
		text: 'Must be at least 8 characters!!'
	},{
		type: 'maxlength',
		text: 'Must be 20 characters or less!!'
	},{
		type: 'pattern',
		text: 'Password should contain at least one digit, at least one lower case, at least one upper case!!'
	}];
}

angular
	.module('app')
	.controller('CheckoutController', CheckoutController);
