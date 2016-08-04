function ReposService($http) {
  this.getRepos = function (params) {
    return $http
      .get(`https://api.github.com/users/${params}/repos`)
      .then(function (res) {
        return res.data;
      });
  };
}

angular
  .module('repos')
  .service('ReposService', ReposService);
