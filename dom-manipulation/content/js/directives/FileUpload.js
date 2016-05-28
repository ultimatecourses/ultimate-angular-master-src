function FileUpload() {
	return {
		scope: {},
		template: `
			<div class="upload">
        <div class="upload-zone">
					<p>Drop your files here!</p>
					<a href="" ng-click="upload.uploadFiles();">
						Upload
					</a>
				</div>
				<ul>
					<li ng-repeat="file in upload.files">
						{{ file.name }}
					</li>
				</ul>
      </div>
		`,
		controller: function () {
			this.files = [];
      this.registerFiles = function (files) {
				Array.prototype.push.apply(this.files, files);
      };
			this.uploadFiles = function () {
				if (!this.files.length) {
					return;
				}
				// pass to parent Directive or Service for uploading
				console.log(this.files);
			};
		},
		controllerAs: 'upload',
		link: function ($scope, $element, $attrs, $ctrl) {

      var upload = $element[0].querySelector('.upload-zone');
			function onDrop(e) {
				if (e.dataTransfer && e.dataTransfer.files) {
					$ctrl.registerFiles(e.dataTransfer.files);
					$scope.$apply();
				}
			}
			upload.addEventListener('drop', onDrop, false);

			// preventDefaults
      function preventDefault(e) {
        e.preventDefault();
      }
      upload.addEventListener('dragenter', preventDefault, false);
      upload.addEventListener('dragleave', preventDefault, false);
      upload.addEventListener('dragover', preventDefault, false);
      upload.addEventListener('drop', preventDefault, false);
    }
	}
}

angular
	.module('app')
	.directive('fileUpload', FileUpload);
