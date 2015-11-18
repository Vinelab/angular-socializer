/// <reference path="../typings/angularjs/angular.d.ts" />

module angularSocializer {
  'use strict';

  class SocializerConfig {

    private facebookAppId: string;
    private twitterAccount: string;

    constructor() {}

    public $get() {
        return {
            facebookAppId: this.facebookAppId,
            twitterAccount: this.twitterAccount
        };
    }

    public setFacebookAppId(appId: string) {
        this.facebookAppId = appId;
    }

    public setTwitterAccount(twitterAccount: string) {
        this.twitterAccount = twitterAccount;
    }
  }


  angular.module('angularSocializer')
      .provider('socializerConfig', SocializerConfig);
}
