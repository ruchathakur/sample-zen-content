(function() {
  'use strict';

  angular.module('application', [
    'ui.router',
    'ngAnimate',

    //foundation
    'foundation',
    'foundation.dynamicRouting',
    'foundation.dynamicRouting.animations'
  ])
    .config(config)
    .run(run)
    .controller('menuGroup', menuGroup);
  ;

  config.$inject = ['$urlRouterProvider', '$locationProvider'];

  function config($urlProvider, $locationProvider) {
    $urlProvider.otherwise('/');

    $locationProvider.html5Mode({
      enabled:false,
      requireBase: false
    });

    $locationProvider.hashPrefix('!');
  }

  function run() {
    FastClick.attach(document.body);
  }

  function menuGroup($scope){
    $scope.menuGroupLeft = [
      { 
        title: 'Dashboard', 
        href:'#',
        sub_menu: [
        ]
      },
      { 
        title: 'Projects', 
        href:'#',
        sub_menu: [
          { title: 'Project setup', href: 'project_setup' },
          { title: 'My projects', href: '#' }
        ]
      },
      { 
        title: 'Reports', 
        href:'#',
        sub_menu: [
          { title: 'Dashboard', href: '#' }
        ]
      },
      { 
        title: 'Contacts', 
        href:'#',
        sub_menu: [
          { title: 'Dashboard', href: '#' }
        ]
      },
      { 
        title: 'Settings',
        href:'#',
        sub_menu: [
          { title: 'Dashboard', href: '#' }
        ]
      }
    ];
  }

})();
