module Utility {
    'use strict';
    export class Resources {
        public static appName: string = 'RobotArmy';
    }

    export class Base {
        public static url: string = '/';
        public static cacheTimeout: number = 600000;// in ms 600000 = 10min - 20000 = 20sec
    }

    export class GuidBuilder {
        public static New = () => {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
        }
    }

    export class Urls {
        public static templates: string = Utility.Base.url + 'templates/';
        public static api: string = Utility.Base.url + 'api/';
        public static home: string = '/';
        public static robot: string = '/robot';
        public static training: string = '/training';
        public static army: string = '/army';
    }

    export class Templates {
        public static home: string = Utility.Urls.templates + 'home.html';
        public static login: string = Utility.Urls.templates + 'login.html';
        public static army: string = Utility.Urls.templates + 'army.html';
        public static training: string = Utility.Urls.templates + 'training.html';
        //public static score: string = Utility.Urls.templates + 'score.html?v=1';
    }

    export class ApiEndPoints {
        public static armies: string = Utility.Urls.api + 'armies';
        public static tasks: string = Utility.Urls.api + 'training';
    }

    export class Angular {
        public static $scope: string = '$scope';
        public static $location: string = '$location';
        public static $routeParams: string = '$routeParams';
        public static $timeout: string = '$timeout';
    }

    export class Services {
        public static robotService: string = 'robotService';
        public static trainingService: string = 'trainingService';
    }

    export class Filters {
        public static dateFilter: string = 'dateFilter';
    }
}