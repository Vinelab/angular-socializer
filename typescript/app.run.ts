/// <reference path="../typings/angularjs/angular.d.ts" />
((): void => {

  angular.module('angularSocializer')
    .run(runner);

  function runner(socializerConfig) {
    window.fbAsyncInit = function() {
      FB.init({
        appId: socializerConfig.facebookAppId,
        xfbml: false,
        version: 'v2.5'
      });
    };
  }
})();
