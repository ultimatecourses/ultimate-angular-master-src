describe('RemoveVowels', function () {
  var $filter;

  beforeEach(module('app'));

  beforeEach(inject(function ($injector) {
    $filter = $injector.get('$filter');
  }));

  it('should remove the vowels out of a word', function () {
    var result = $filter('removeVowels')('asdijadijsdoijzolaplwo');
    expect(result).toEqual('sdjdjsdjzlplw');
  });
});
