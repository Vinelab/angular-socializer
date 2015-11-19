/// <reference path="../typings/angularjs/angular.d.ts" />

((): void => {
  'use strict';

  interface IMyAttributes extends ng.IAttributes {
    text: string;
    shareUrl: string;
    twitterAccount: string;
    hashtags: string;
  }



  angular.module('angularSocializer')
    .directive('twitterShare', twitterShare);

  function twitterShare(socializerConfig): ng.IDirective {
    var directive = <ng.IDirective> {
      restrict: 'A',
      scope: {
        shareUrl: '@',
        text: '@',
        twitterAccount: '@',
        hashtags: '@'
      },
      link: link
    };

    return directive;

    function link(scope: ng.IScope, element: ng.IAugmentedJQuery, attrs: IMyAttributes) {

      console.log(attrs);
      var twitterAccount = attrs.twitterAccount || socializerConfig.twitterAccount;
      var text = attrs.text || '';
      var hashtags = attrs.hashtags || '';

      console.log(twitterAccount);
      element.on('click', openSharer);

      var strWindowFeatures = 'width=600, height=400, left=100, top=100';
      var url = 'https://twitter.com/intent/tweet?url=' + attrs.shareUrl + '&text=' + text + '&via=' + twitterAccount + '&hashtags=' + hashtags + '&counturl=' + encodeURIComponent(attrs.shareUrl);

      function openSharer() {
        var popup = window.open(url, '', strWindowFeatures);
      }
    }
  }
})();
