/// <reference path="../typings/angularjs/angular.d.ts" />

((): void => {
  'use strict';

  interface IMyAttributes extends ng.IAttributes {
    title: string;
    shareUrl: string;
    twitterAccount: string;
  }



  angular.module('angularSocializer')
    .directive('twitterShare', twitterShare);

  function twitterShare(socializerConfig): ng.IDirective {
    var directive = <ng.IDirective> {
      restrict: 'A',
      scope: {
        shareUrl: '@',
        title: '@',
        twitterAccount: '@'
      },
      link: link
    };

    return directive;

    function link(scope: ng.IScope, element: ng.IAugmentedJQuery, attrs: IMyAttributes) {

      var twitterAccount = attrs.twitterAccount || socializerConfig.twitterAccount;

      console.log(twitterAccount);
      element.on('click', openSharer);

      var strWindowFeatures = 'width=600, height=400, left=100, top=100';
      var url = 'https://twitter.com/intent/tweet?url=' + attrs.shareUrl + '&text=' + attrs.title + '&via=' + twitterAccount + '&counturl=' + encodeURIComponent(attrs.shareUrl);

      function openSharer() {
        var popup = window.open(url, '', strWindowFeatures);
      }
    }
  }
})();
