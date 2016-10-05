/// <reference path="../services/robot.ts" />
var Controllers;
(function (Controllers) {
    'use strict';
    var Home = (function () {
        function Home($scope, robotService) {
            $scope.vm = this;
            console.info("In Game Controller");
            //$scope.newCategory = new Models.Category(Utility.GuidBuilder.New(), '', '');
            $scope.robots = [];
            $scope.exercies = [];
            $scope.Army = {};
            //$scope.newNomination = new Models.Nomination(Utility.GuidBuilder.New(), '', null, '', new Date(), false);
            //this.location = $location;
            robotService = robotService;
            $scope.hideSelected = true;
            robotService.armies().then(function (g) {
                $scope.games = g;
            });
            $scope.get = function (id) {
                $scope.Army = robotService.get(id);
                $scope.hideSelected = false;
                console.info($scope.Army);
                return $scope.Army;
            };
            //nominationService.get().then((noms: Array<Models.Nomination>) => {
            //    $scope.nominations = noms;
            //});
            //nominationService.getCategories().then((cats: Array<Models.Category>) => {
            //    $scope.categories = cats;
            //    console.info($scope.categories);
            //});
            //$scope.nominate = function () {
            //    var nominee = $scope.newNomination;
            //    gameService.addNomination(nominee);
            //};
            //$scope.addCategory = function () {
            //    var model = $scope.newCategory;
            //    var result = gameService.addCategory(model);
            //};
        }
        Home.$inject = [
            Utility.Angular.$scope, Utility.Services.robotService
        ];
        return Home;
    }());
    Controllers.Home = Home;
})(Controllers || (Controllers = {}));
