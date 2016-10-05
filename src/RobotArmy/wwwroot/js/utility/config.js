(function () {
    'use strict';
    app.config(function ($routeProvider, $locationProvider) {
        console.info('routes');
        //$templateCache.removeAll();
        $routeProvider.when(Utility.Urls.army, {
            templateUrl: Utility.Templates.army + '?v=112',
            controller: Controllers.Robot
        }).when(Utility.Urls.home, {
            templateUrl: Utility.Templates.home,
            controller: Controllers.Home
        }).otherwise({
            redirectTo: Utility.Urls.home
        });
        $locationProvider.html5Mode(true);
    });
    app.run(function ($rootScope, $location) {
        console.info('running');
        $rootScope.$on('$routeChangeStart', function (event, nextRoute, currentRoute) {
            console.info("Started");
        });
    });
})();
