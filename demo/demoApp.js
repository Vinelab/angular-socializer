(function(){
  angular.module('sharingApp', ['angularSocializer'])
  .config(function(socializerConfigProvider){
    socializerConfigProvider.setFacebookAppId('947260665329944');
    socializerConfigProvider.setTwitterAccount('globalName');
  })
  .controller('test', function(facebookCount, tweetCount){
    facebookCount.getFacebookCount('http://facebook.com')
      .then(function(response) {
        console.log(response);
      });

    tweetCount.getTweetCount('http://instagram.com')
    .then(function(response) {
      console.log(response);
    });

  });
})();
