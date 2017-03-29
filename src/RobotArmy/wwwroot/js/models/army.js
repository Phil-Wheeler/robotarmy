var Models;
(function (Models) {
    'use strict';
    var Army = (function () {
        function Army(army) {
            this.Id = army.Id;
            this.Name = army.Name;
            this.Owner = army.Owner;
            this.Robots = army.Robots;
        }
        //public isEmpty = (): boolean => {
        //    return (this.Id === '-1' || this.Id === '00000000-0000-0000-0000-000000000000');
        //}
        Army.createEmpty = function () {
            var army = { Id: Utility.GuidBuilder.New(), Name: '', Owner: Utility.GuidBuilder.New(), Robots: [] };
            return new Models.Army(army);
        };
        return Army;
    }());
    Models.Army = Army;
    var Robot = (function () {
        function Robot(id, serial, name, exercises) {
            this.Id = id;
            this.Serial = serial;
            this.Name = name;
            this.Exercises = exercises;
        }
        Robot.createEmpty = function () {
            var robot = { Id: Utility.GuidBuilder.New(), Name: '', Serial: '', Exercises: [] };
            return new Models.Robot(Utility.GuidBuilder.New(), '', '', []);
            //return new Models.Robot(robot);
        };
        return Robot;
    }());
    Models.Robot = Robot;
    var Exercise = (function () {
        function Exercise(id, name, sequence, pointvalue, pointthreshold) {
            this.Id = id;
            this.Name = name;
            this.Sequence = sequence;
            this.PointValue = pointvalue;
            this.PointThreshold = pointthreshold;
        }
        Exercise.createEmpty = function () {
            return new Models.Exercise('-1', '', 1, 0, 0);
            //return null;
        };
        return Exercise;
    }());
    Models.Exercise = Exercise;
    var Training = (function () {
        function Training(id, owner, task, completed) {
            this.Id = id;
            this.Owner = owner;
            this.Task = task;
            this.Completed = completed;
        }
        return Training;
    }());
    Models.Training = Training;
})(Models || (Models = {}));
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
