function ReposService($http) {
  this.getRepos = function () {
    return $http
      .get('https://api.github.com/users/toddmotto/repos')
      .then(function (res) {
        return res.data;
      });
  };
}

angular
  .module('repos')
  .service('ReposService', ReposService);
