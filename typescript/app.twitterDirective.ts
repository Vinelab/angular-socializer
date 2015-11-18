/// <reference path="../typings/angularjs/angular.d.ts" />

((): void => {
  'use strict';

  angular.module('angularSocializer')
    .directive('twitterShare', twitterShare);

  function twitterShare(socializerConfig) {
    var directive = {
      restrict: 'A',
      scope: {
        shareUrl: '@',
        title: '@',
        accountName: '@'
      },
      link: link
    };

    return directive;

    function link(scope, element, attrs) {

      var twitterAccount = attrs.twitterAccount || socializerConfig.twitterAccount;

      element.on('click', openSharer);

      var strWindowFeatures = 'width=600, height=400, left=100, top=100';
      var url = 'https://twitter.com/intent/tweet?url=' + attrs.shareUrl + '&text=' + attrs.title + '&via=' + twitterAccount + '&counturl=' + encodeURIComponent(attrs.countUrl);

      function openSharer() {
        var popup = window.open(url, '', strWindowFeatures);
      }
    }
  }
})();
