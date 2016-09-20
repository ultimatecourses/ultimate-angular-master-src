angular
  .module('app', ['ui.router'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/home.html'
      })
      .state('user', {
        url: '/user/:name',
        templateUrl: 'views/user.html',
        controller: 'UserController as user',
        resolve: {
          user: function ($http, $stateParams) {
            return $http.get('/users/' + $stateParams.name)
          }
        }
      })
      .state('user.settings', {
        url: '/settings',
        templateUrl: 'views/user/settings.html',
        controller: 'UserSettingsController as user'
      })
      .state('user.notes', {
        url: '/notes',
        templateUrl: 'views/user/notes.html',
        controller: 'UserNotesController as user'
      });

    $urlRouterProvider.otherwise('/');
  });
