/// <reference path="../typings/angularjs/angular.d.ts" />
((): void => {

  angular.module('angularSocializer')
    .run(runner);

  function runner(socializerConfig) {
    window.fbAsyncInit = function() {
      FB.init(socializerConfig.facebookConfig);
    };
  }
})();
