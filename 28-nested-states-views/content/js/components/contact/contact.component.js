var contact = {
  template: `
    <div class="contact">
      How would you like to contact me?
      <div class="tabs">
        <a href="#/phone">Phone</a>
        <a href="#/contact/email">Email</a>
      </div>
      <div ui-view></div>
    </div>
  `
};

angular
  .module('contact')
  .component('contact', contact)
  .config(function ($stateProvider) {
    $stateProvider
      .state('contact', {
        redirectTo: 'contact.phone',
        url: '/contact',
        component: 'contact'
      });
  });
