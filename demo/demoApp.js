(function(){
  angular.module('sharingApp', ['angularSocializer'])
  .config(function(socializerConfigProvider){

    socializerConfigProvider.setFacebookConfig({
      appId: '947260665329944',
      xfbml: false,
      version: 'v2.5'
    });

    socializerConfigProvider.setTwitterAccount('globalName');
  })
  .controller('test', function(facebookCount, tweetCount){
    facebookCount.getFacebookCount('http://facebook.com')
      .then(function(response) {
        console.log(response);
      });
  });
})();
