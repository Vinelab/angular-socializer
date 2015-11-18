/// <reference path="../typings/angularjs/angular.d.ts" />
(function () {
    angular.module('angularSocializer', []);
})();
/// <reference path="../typings/angularjs/angular.d.ts" />
(function () {
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
                }, function (response) {
                    console.log(response);
                });
            }
        }
    }
})();
/// <reference path="../typings/angularjs/angular.d.ts" />
var angularSocializer;
(function (angularSocializer) {
    'use strict';
    var SocializerConfig = (function () {
        function SocializerConfig() {
        }
        SocializerConfig.prototype.$get = function () {
            return {
                facebookAppId: this.facebookAppId,
                twitterAccount: this.twitterAccount
            };
        };
        SocializerConfig.prototype.setFacebookAppId = function (appId) {
            this.facebookAppId = appId;
        };
        SocializerConfig.prototype.setTwitterAccount = function (twitterAccount) {
            this.twitterAccount = twitterAccount;
        };
        return SocializerConfig;
    })();
    angular.module('angularSocializer')
        .provider('socializerConfig', SocializerConfig);
})(angularSocializer || (angularSocializer = {}));
/// <reference path="../typings/angularjs/angular.d.ts" />
(function () {
    angular.module('angularSocializer')
        .run(runner);
    function runner(socializerConfig) {
        window.fbAsyncInit = function () {
            FB.init({
                appId: socializerConfig.facebookAppId,
                xfbml: false,
                version: 'v2.5'
            });
        };
    }
})();
/// <reference path="../typings/angularjs/angular.d.ts" />
(function () {
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
