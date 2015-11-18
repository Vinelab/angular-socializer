(function(){
  angular.module('sharingApp', ['angularSocializer'])
  .config(function(socializerConfigProvider){
    socializerConfigProvider.setFacebookAppId('947260665329944');
    socializerConfigProvider.setTwitterAccount('globalName');
  })
  .controller('test', function(socializerConfig){
  });
})();
