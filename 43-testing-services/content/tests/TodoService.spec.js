describe('TodoService', function () {
  var TodoService, $httpBackend;

  beforeEach(module('app'));

  beforeEach(inject(function ($injector) {
    TodoService = $injector.get('TodoService');
    $httpBackend = $injector.get('$httpBackend');

    $httpBackend
      .when('GET', 'http://jsonplaceholder.typicode.com/todos')
      .respond(
        [
          {
            id: 1,
            title: 'Fake Title',
            userId: 1
          }
        ]
      );

    $httpBackend
      .when('DELETE', 'http://jsonplaceholder.typicode.com/todos/1')
      .respond({})
  }));

  it('should get a list of todos from the server', function (done) {
    $httpBackend.expectGET('http://jsonplaceholder.typicode.com/todos');

    TodoService
      .query()
      .$promise
      .then(function (res) {
        if (res[0].title === 'Fake Title') {
          done();
        }
      });

    $httpBackend.flush();
  });

  it('should delete todo items from the server', function () {
    $httpBackend.expectDELETE('http://jsonplaceholder.typicode.com/todos/1');

    TodoService
      .delete({
        id: 1
      });

    $httpBackend.flush();
  });
});
