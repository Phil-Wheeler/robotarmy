/// <reference path="../services/robot.ts" />


module Controllers {
    'use strict';

    export class Robot {
        static $inject = [
            Utility.Angular.$scope, Utility.Services.robotService
        ];
        //public nominations: Array<Models.Nomination>;
        //public categories: Array<Models.Category>;
        //private location;
        //public newCategory: Models.Category;
        //public newNomination: Models.Nomination;
        //public nominee: Models.Nomination;
        private robotService;
        //public addCategory: Function;
        public Armies: Array<Models.Army>;
        public Army: Models.Army;
        public get: Function;

        constructor($scope: any, robotService) {
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


            robotService.armies().then((g: Array<Models.Army>) => {
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


    }
}

