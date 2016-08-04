function DemoService($q, $http) {

  var todos = 'http://jsonplaceholder.typicode.com/todos';
  var comments = 'http://jsonplaceholder.typicode.com/comments';

  this.getTodos = function () {
    var defer = $q.defer();
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          defer.resolve(JSON.parse(xhr.responseText));
        } else {
          defer.reject(JSON.parse(xhr.responseText));
        }
      }
    };
    xhr.open('GET', todos, true);
    xhr.send();
    return defer.promise;
  };

  this.getComments = function () {
    return $q(function (resolve, reject) {
      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            resolve(JSON.parse(xhr.responseText));
          } else {
            reject(JSON.parse(xhr.responseText));
          }
        }
      };
      xhr.open('GET', comments, true);
      xhr.send();
    });
  };

  this.getAll = function () {
    var promiseOne = $http.get(todos);
    var promiseTwo = $http.get(comments);
    return $q.all([promiseOne, promiseTwo]);
  };

  this.getFirstResolved = function () {
    var promiseOne = $http.get(todos);
    var promiseTwo = $http.get(comments);
    return $q.race([promiseOne, promiseTwo]);
  };

}

angular
  .module('app')
  .service('DemoService', DemoService);
