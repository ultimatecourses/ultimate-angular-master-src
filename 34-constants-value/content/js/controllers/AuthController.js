function AuthController(FIREBASE_CONFIG, EventEmitter) {
	console.log(FIREBASE_CONFIG);
	// this.user = 'Todd Motto';
	// this.onUpdate(EventEmitter({
	// 	user: this.user
	// }));
}

angular
	.module('app')
	.controller('AuthController', AuthController);
