/// <reference path="../typings/angularjs/angular.d.ts" />

module angularSocializer {
  'use strict';

  class TweetCount {
    constructor(public $http: ng.IHttpService) {

    }

    getTweetCount(url: string): ng.IPromise<any> {
      return this.$http.jsonp("http://cdn.api.twitter.com/1/urls/count.json?callback=JSON_CALLBACK&url=" + encodeURIComponent(url))
        .then((response) => {
          return response.data;
        }, (reason) => {
          return reason;
        });
    }
  }

  angular.module('angularSocializer')
    .service('tweetCount', TweetCount);
}
