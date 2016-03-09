/// <reference path="../typings/angularjs/angular.d.ts" />
((): void => {
	angular.module('angularSocializer').run(runner);

	runner.$inject = ["socializerConfig", "$window", "$rootScope"];
	function runner(socializerConfig, $window, $rootScope) {
        
		$rootScope.$on("fb.init.ready", () => {
			$window.FB.init(socializerConfig.facebookConfig);
			console.log("fb.init.ready");
		});
	}
})();
