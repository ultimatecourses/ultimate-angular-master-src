describe('Counter', function () {
  var $componentController, controller, initialCount = 200;

  beforeEach(module('app'));

  beforeEach(inject(function ($injector) {
    $componentController = $injector.get('$componentController');
    controller = $componentController('counter',
      { $scope: {}},
      { initialCount: initialCount }
    );
  }));

  it('should have an initial count of 0', function () {
    expect(controller.count).toEqual(0);
  });

  it('should initialize to the correct count', function() {
    expect(controller.count).toEqual(0);
    controller.$onInit();
    expect(controller.count).toEqual(initialCount);
  });

  it('should increment the counter correctly', function () {
    controller.increment();

    expect(controller.count).toEqual(1);
  });

  it('should decrement the counter correctly', function () {
    controller.decrement();

    expect(controller.count).toEqual(-1);
  });
});
