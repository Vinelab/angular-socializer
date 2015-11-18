# angular-socializer

## About

angular-socializer is a module to share link to social networks, now it supports facebook and twitter

## Prerequisites (for development)

Nodejs, you can get it from http://nodejs.org/.

Bower, you can get it from http://bower.io/.

## Installation

You can include the javascript directely in the your project from the folder dist/angular-socializer.js after clonnig the repo.

  git clone https://github.com/Vinelab/angular-socializer.git

If you want to change in the typescript files run the following commands.

    bower install
    npm install
  gulp(will watch changes in the typescript file and output it in the dist file)


## How to use



include the module in your index.html file
```javascript

  <script src="path/to/angular-socializer.js"></script>

```

and then inculde it as a dependency in your module.

```javascript

  angular.module('yourApp', ['angularSocializer']).

```

### Configure the module

No configuration is needed to run the module, however if you want to use the facebook share you need to provide an appId in the configuration.

#### example
```javascript
  //configure facebook appId
  angular.module('yourApp', ['angularSocializer'])
    .config(function(socializerConfigProvider){
      socializerConfigProvider.setFacebookAppId('facebook-app-id');
  });

```

you can also configure the twitter account name in the configuration phase to be used globally in the app (can be configured in the twitter directive for each tweet button)

#### example
```javascript
  //configure twitter account name
  angular.module('yourApp', ['angularSocializer'])
    .config(function(socializerConfigProvider){
      socializerConfigProvider.setTwitterAccount('twitter-account-name');
  });

```

### Directives

The module has 2 directives now facebook directive and twitter directive and can be used as attributes on any html element.

### facebook

directive name: **facebook-share**

#### example
```javascript
  // share-url is the url that you want to share can be any url.
  // directive can be used on any html tag
  <span facebook-share share-url="http://www.cnn.com">facebook</span>
```


### Twitter
directive name: **twitter-share**
#### example
```javascript
  // share-url is the url that you want to share can be any url.
  // directive can be used on any html tag
  <span twitter-share share-url="http://www.cnn.com">facebook</span>

  //you can specify a twitter account name on the directive also and it will override the global twitter account name configured in the provider
  <span twitter-share share-url="http://www.cnn.com" twitter-account="your-tiwtter-account">facebook</span>

```
