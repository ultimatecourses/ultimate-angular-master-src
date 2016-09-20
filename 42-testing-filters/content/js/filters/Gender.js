function Gender() {
  return function (value, gender) {
    if (!gender) return value;

    return value.filter(function (item) {
      return item.gender === gender;
    });
  }
}

angular
  .module('app')
  .filter('gender', Gender);
