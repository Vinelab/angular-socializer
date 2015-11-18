(function(){
  angular.module('sharingApp', ['angularSocializer'])
  .config(function(socializerConfigProvider){
    socializerConfigProvider.setFacebookAppId('947260665329944');
    socializerConfigProvider.setTwitterAccount('globalName');
  })
  .controller('test', function(facebookCount){
    facebookCount.getFacebookCount('http://google.com')
      .then(function(response) {
        console.log(response);
      });
  });
})();
