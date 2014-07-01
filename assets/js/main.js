//= include ../../packages/angular/angular.min.js
//= include ../../packages/angular/angular-ui-router.min.js
//= include ../../packages/angular/angular-animate.min.js
//= include ../../packages/angular/ui-bootstrap-tpls-0.11.0.min.js
//= include ../../packages/angular/angular-breadcrumb.min.js
//= include ../../packages/TweenMax.min.js
//= include ../../packages/ng-Fx.min.js
var apiKey = "fea6f7d9ec0b31e256a673114792cb17";
angular.module('pemiluApp',['ui.router','ngAnimate','ui.bootstrap','ncy-angular-breadcrumb','fx.animations']).run(
      [        '$rootScope', '$state', '$stateParams',
      function ($rootScope,   $state,   $stateParams) {

        // It's very handy to add references to $state and $stateParams to the $rootScope
        // so that you can access them from any scope within your applications.For example,
        // <li ui-sref-active="active }"> will set the <li> // to active whenever
        // 'contacts.list' or one of its decendents is active.
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
      }]);;
//= include config.js
//= include controller/mainCtrl.js
//= include controller/homeCtrl.js
//= include controller/calegCtrl.js
//= include controller/beritaCtrl.js
//= include controller/faqCtrl.js