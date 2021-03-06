(function () {
  'use strict';

  var app = angular.module('app');

  // Collect the routes
  app.constant('routes', getRoutes());

  // Configure the routes and route resolvers
  app.config(['$stateProvider', '$urlRouterProvider', 'routes', routeConfigurator]);
  function routeConfigurator($stateProvider, $urlRouterProvider, routes) {
    routes.forEach(function (r) {
        $stateProvider.state(r.name, r.config);
    });
    $urlRouterProvider.otherwise('/');
  }

  // Define the routes
  function getRoutes() {
    return [
      {
        name: 'admin',
        config: {
          url: '/admin',
          title: 'admin',
          templateUrl: '/app/admin/admin.html',
        }
      }, {
        name: 'surveys',
        config: {
          url: '/surveys',
          title: 'surveys',
          templateUrl: '/app/surveys/surveys.html'
        }
      }
    ];
  }
})();