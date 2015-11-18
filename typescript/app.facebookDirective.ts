/// <reference path="../typings/angularjs/angular.d.ts" />
((): void => {
  'use strict';

  angular.module('angularSocializer')
    .directive('facebookShare', facebookShare);

   function facebookShare() {
     var directive = {
       restrict: 'A',
       scope: {
         shareUrl: '@'
       },
       link: link
     };

     return directive;

     function link(scope, element, attrs) {

       element.on('click', openSharer);

       function openSharer() {

         FB.ui({
           method: 'share',
           href: attrs.shareUrl
         }, (response) => {

           console.log(response);

         });
       }
     }
   }

})();
