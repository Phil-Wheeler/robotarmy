
module Models {
    'use strict';
    export class Army {
        public Id: string;
        public Name: string;
        public Owner: string;
        public Robots: Array<Models.Robot>;

        constructor(army) {
            this.Id = army.Id;
            this.Name = army.Name
            this.Owner = army.Owner;
            this.Robots = army.Robots;
        }

        public isEmpty = (): boolean => {
            return (this.Id === '-1' || this.Id === '00000000-0000-0000-0000-000000000000');
        }

        public static createEmpty = (): Models.Army => {
            var army = { Id: Utility.GuidBuilder.New(), Name: '', Owner: '', Robots: [] };
            return new Models.Army(army);
        }
    }

    export class Robot {
        public Id: string;
        public Serial: string;
        public Name: string;
        public Exercises: Array<Models.Exercise>;

        constructor(id: string, serial: string, name: string, exercises: Array<Models.Exercise>) {
            this.Id = id;
            this.Serial = serial;
            this.Name = name;
            this.Exercises = exercises;
        }

        public static createEmpty = (): Models.Robot => {
            var robot = { Id: Utility.GuidBuilder.New(), Name: '', Serial: '', Exercises: [] };

            return new Models.Robot(Utility.GuidBuilder.New(), '', '', []);
            //return new Models.Robot(robot);
        }
    }

    export class Exercise {
        public Id: string;
        public Name: string;
        public Sequence: Number;
        public PointValue: Number;
        public PointThreshold: Number;

        constructor(id: string, name: string, sequence: Number, pointvalue: Number, pointthreshold: Number) {
            this.Id = id;
            this.Name = name;
            this.Sequence = sequence;
            this.PointValue = pointvalue;
            this.PointThreshold = pointthreshold;
        }

        public static createEmpty = (): Models.Exercise => {
            return new Models.Exercise('-1', '', 1, 0, 0);
            //return null;
        }

    }

    export class Training {
        public Id: string;
        public Owner: string;
        public Task: Models.Exercise;
        public Completed: Date;

        constructor(id: string, owner: string, task: Models.Exercise, completed: Date) {
            this.Id = id;
            this.Owner = owner;
            this.Task = task;
            this.Completed = completed;
        }
    }

}
//var Models;
//(function (Models) {
//    'use strict';
//    var Game = (function () {
//        function Game(jsonGame) {
//            var _this = this;
//            this.isEmpty = function () {
//                return (_this.id === '-1' || _this.id === '00000000-0000-0000-0000-000000000000');
//            };
//            console.info("game is" + jsonGame);

//            this.Id = jsonGame.Id;
//            this.Date = dateFns.format(jsonGame.Date, 'DD/MM/YYYY');
//            this.Season = jsonGame.Season;
//            this.Opposition = jsonGame.Opposition;
//            this.Overs = jsonGame.Overs;
//            this.Team = jsonGame.Team;
//        }
//        Game.createEmpty = function () {
//            var gameObj = {};
//            gameObj.Id = '-1';
//            gameObj.Date = new Date();
//            gameObj.Season = '0';
//            gameObj.Opposition = '';
//            gameObj.Overs = [];
//            gameObj.Team = {};
//            return new Models.Game(gameObj);
//        };
//        return Game;
//    } ());
//    Models.Game = Game;
//})(Models || (Models = {}));
