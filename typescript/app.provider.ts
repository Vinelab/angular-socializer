/// <reference path="../typings/angularjs/angular.d.ts" />

module angularSocializer {
  'use strict';

  class SocializerConfig {

    private facebookConfig: Object;
    private twitterAccount: string;

    constructor() {}

    public $get() {
        return {
            facebookConfig: this.facebookConfig,
            twitterAccount: this.twitterAccount
        };
    }

    public setFacebookConfig(config: Object) {
        this.facebookConfig = config;
    }

    public setTwitterAccount(twitterAccount: string) {
        this.twitterAccount = twitterAccount;
    }
  }


  angular.module('angularSocializer')
      .provider('socializerConfig', SocializerConfig);
}
