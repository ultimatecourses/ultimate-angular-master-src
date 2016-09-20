describe('Counter', function () {
  var $compile, $scope, $controller, element;

  beforeEach(module('app'));

  beforeEach(inject(function ($injector) {
    $compile = $injector.get('$compile');

    var $rootScope = $injector.get('$rootScope');

    element = angular.element('<counter></counter>');
    $compile(element)($rootScope.$new());

    $controller = element.controller('counter');
    $scope = element.isolateScope() || element.scope();
  }));

  it('should have an initial count of 0', function () {
    expect($controller.count).toEqual(0);
  });

  it('should increment the counter correctly', function () {
    $controller.increment();

    expect($controller.count).toEqual(1);
  });

  it('should decrement the counter correctly', function () {
    $controller.decrement();

    expect($controller.count).toEqual(-1);
  });
});
