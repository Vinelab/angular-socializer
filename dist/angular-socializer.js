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
                url: "//graph.facebook.com/?id=" + encodeURIComponent(url)
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
                facebookConfig: this.facebookConfig,
                twitterAccount: this.twitterAccount
            };
        };
        SocializerConfig.prototype.setFacebookConfig = function (config) {
            this.facebookConfig = config;
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
            FB.init(socializerConfig.facebookConfig);
        };
    }
})();
/// <reference path="../typings/angularjs/angular.d.ts" />
var angularSocializer;
(function (angularSocializer) {
    'use strict';
    var SocialRenderer = (function () {
        function SocialRenderer($timeout) {
            this.$timeout = $timeout;
        }
        SocialRenderer.prototype.renderFacebook = function (delay) {
            this.$timeout(function () {
                if (window.FB) {
                    window.FB.XFBML.parse();
                }
                else {
                    (function (d, s, id) {
                        var js, fjs = d.getElementsByTagName(s)[0];
                        if (d.getElementById(id)) {
                            return;
                        }
                        js = d.createElement(s);
                        js.id = id;
                        js.src = "//connect.facebook.net/en_US/sdk.js";
                        fjs.parentNode.insertBefore(js, fjs);
                    }(document, 'script', 'facebook-jssdk'));
                }
            }, delay || 0);
        };
        SocialRenderer.prototype.renderTwitter = function (delay) {
            this.$timeout(function () {
                if (window.twttr) {
                    window.twttr.widgets.load();
                }
                else {
                    window.twttr = (function (d, s, id) {
                        var js, fjs = d.getElementsByTagName(s)[0], t = window.twttr || {};
                        if (d.getElementById(id))
                            return t;
                        js = d.createElement(s);
                        js.id = id;
                        js.src = "https://platform.twitter.com/widgets.js";
                        fjs.parentNode.insertBefore(js, fjs);
                        t._e = [];
                        t.ready = function (f) {
                            t._e.push(f);
                        };
                        return t;
                    }(document, 'script', 'twitter-wjs'));
                }
            }, delay || 0);
        };
        SocialRenderer.$inject = ['$timeout'];
        return SocialRenderer;
    })();
    angular.module('angularSocializer')
        .service('socialRenderer', SocialRenderer);
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
