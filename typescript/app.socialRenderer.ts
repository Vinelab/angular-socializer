/// <reference path="../typings/angularjs/angular.d.ts" />
module angularSocializer {
  'use strict';

  class SocialRenderer {
    static $inject = ['$timeout'];

    constructor(public $timeout) {}

    renderFacebook(delay) {

      this.$timeout(() => {
        if (window.FB) {
          window.FB.XFBML.parse();
        } else {
          (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) { return; }
            js = d.createElement(s); js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
          } (document, 'script', 'facebook-jssdk'));
        }
      }, delay || 0);
    }

    renderTwitter(delay) {

      this.$timeout(() => {
        if (window.twttr) {
          window.twttr.widgets.load();
        } else {
          window.twttr = (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0],
              t = window.twttr || {};
            if (d.getElementById(id)) return t;
            js = d.createElement(s);
            js.id = id;
            js.src = "https://platform.twitter.com/widgets.js";
            fjs.parentNode.insertBefore(js, fjs);

            t._e = [];
            t.ready = function(f) {
              t._e.push(f);
            };

            return t;
          } (document, 'script', 'twitter-wjs'));
        }
      }, delay || 0);
    }

  }

  angular.module('angularSocializer')
    .service('socialRenderer', SocialRenderer);
}
