var repos = {
  bindings: {
    list: '<'
  },
  template: `
		<div class="repos">
			My Repos:
      <div class="repo-search">
  		  <form ng-submit="$ctrl.submitForm()">
  			  <input ng-model="$ctrl.name">
  			  <button type="submit">View repos</button>
        </form>
  		</div>
			<ul>
        <li ng-hide="$ctrl.list.length">
          Nothing here yet, type and search!
        </li>
				<li ng-repeat="repo in $ctrl.list">
					<a href="{{ repo.html_url }}">
						{{ repo.name }}
					</a>
					({{ repo.stargazers_count }} stars)
				</li>
			</ul>
		</div>
	`,
  controller: function ($state) {
    this.submitForm = function () {
      $state.go('repos', {
        username: this.name
      });
    };
  }
};

angular
	.module('repos')
	.component('repos', repos)
  .config(function ($stateProvider) {
    $stateProvider
      .state('repos', {
        url: '/repos?username',
        component: 'repos',
        params: {
          username: null
        },
        resolve: {
          list: function (ReposService, $transition$) {
            var params = $transition$.params().username;
            if (!params) return;
            return ReposService.getRepos(params);
          }
        }
      });
  });
