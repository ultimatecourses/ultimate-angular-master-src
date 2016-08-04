angular
	.module('app', [])
	.constant('FIREBASE_CONFIG', {
    apiKey: 'b3oc_09KcKkk3WijJsbc',
    authDomain: 'tm-contacts-manager.firebaseapp.com',
    databaseURL: 'https://tm-contacts-manager.firebaseio.com',
    storageBucket: '',
  })
	.value('EventEmitter', function (event) {
		$event: event
	});
