/// <reference path="../typings/angularjs/angular.d.ts" />
((): void => {
  'use strict';

  interface IMyAttributes extends ng.IAttributes {
    shareUrl: string;
  }

  angular.module('angularSocializer')
    .directive('facebookShare', facebookShare);

   function facebookShare(): ng.IDirective {
     var directive = <ng.IDirective> {
       restrict: 'A',
       scope: {
         shareUrl: '@'
       },
       link: link
     };

     return directive;

     function link(scope: ng.IScope, element: ng.IAugmentedJQuery, attrs: IMyAttributes) {

       element.on('click', openSharer);

       function openSharer() {

         FB.ui({
           method: 'share',
           href: attrs.shareUrl
         }, (response: any) => {

           console.log(response);

         });
       }
     }
   }

})();
