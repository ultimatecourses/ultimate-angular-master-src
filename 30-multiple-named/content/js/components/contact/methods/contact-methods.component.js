var contactMethods = {
  template: `
    <div>
      <ul>
        <li>
          <a href="#/phone">Phone</a>
        </li>
        <li>
          <a href="#/contact/email">Email</a>
        </li>
        <li>
          <a href="#/contact/post">Post</a>
        </li>
      </ul>
    </div>
  `
};

angular
  .module('contact')
  .component('contactMethods', contactMethods);
