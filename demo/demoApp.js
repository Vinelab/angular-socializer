(function(){
  angular.module('sharingApp', ['angularSocializer'])
  .config(function(socializerConfigProvider){

    socializerConfigProvider.setFacebookConfig({
      appId: '947260665329944',
      xfbml: true,
      version: 'v2.5'
    });

    socializerConfigProvider.setTwitterAccount('globalName');
  })
  .controller('test', function(facebookCount, socialRenderer){

    socialRenderer.renderFacebook();
    socialRenderer.renderTwitter();

    facebookCount.getFacebookCount('http://facebook.com')
      .then(function(response) {
        console.log(response);
      });
  });
})();
