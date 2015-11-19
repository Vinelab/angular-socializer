/// <reference path="../typings/angularjs/angular.d.ts" />
(function () {
    angular.module('angularSocializer', []);
})();
/// <reference path="../typings/angularjs/angular.d.ts" />
var angularSocializer;
(function (angularSocializer) {
    'use strict';
    var FacebookCount = (function () {
        function FacebookCount($http) {
            this.$http = $http;
        }
        FacebookCount.prototype.getFacebookCount = function (url) {
            return this.$http({
                method: "GET",
                url: "http://graph.facebook.com/?id=" + encodeURIComponent(url)
            })
                .then(function (response) {
                return response.data;
            }, function (reason) {
                return reason;
            });
        };
        FacebookCount.$inject = ['$http'];
        return FacebookCount;
    })();
    angular.module('angularSocializer')
        .service('facebookCount', FacebookCount);
})(angularSocializer || (angularSocializer = {}));
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
var angularSocializer;
(function (angularSocializer) {
    'use strict';
    var TweetCount = (function () {
        function TweetCount($http) {
            this.$http = $http;
        }
        TweetCount.prototype.getTweetCount = function (url) {
            return this.$http.jsonp("http://cdn.api.twitter.com/1/urls/count.json?callback=JSON_CALLBACK&url=" + encodeURIComponent(url))
                .then(function (response) {
                return response.data;
            }, function (reason) {
                return reason;
            });
        };
        return TweetCount;
    })();
    angular.module('angularSocializer')
        .service('tweetCount', TweetCount);
})(angularSocializer || (angularSocializer = {}));
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
                text: '@',
                twitterAccount: '@',
                hashtags: '@'
            },
            link: link
        };
        return directive;
        function link(scope, element, attrs) {
            var twitterAccount = attrs.twitterAccount || socializerConfig.twitterAccount;
            var text = attrs.text || '';
            var hashtags = attrs.hashtags || '';
            element.on('click', openSharer);
            var strWindowFeatures = 'width=600, height=400, left=100, top=100';
            var url = 'https://twitter.com/intent/tweet?url=' + attrs.shareUrl + '&text=' + text + '&via=' + twitterAccount + '&hashtags=' + hashtags;
            function openSharer() {
                var popup = window.open(url, '', strWindowFeatures);
            }
        }
    }
})();
