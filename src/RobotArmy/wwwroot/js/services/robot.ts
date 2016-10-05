/// <reference path="../app.ts" />
/// <reference path="../models/army.ts" />

module Services {
    'use strict';
    app.service(Utility.Services.robotService, function ($http, $q, $location) {

        this.armies = (): Models.Army => {

            console.info("In game service");

            return $http.get(Utility.ApiEndPoints.armies).then((result) => {
                return result.data;
            });
        };

        this.get = function (id: string): Models.Army {
            return $http.get(Utility.ApiEndPoints.armies + '/' + id).then((result) => {

                var gameData = result.data;
                var army = new Models.Army(gameData);
                console.info(army);
                return army;
            });
        };


        //this.getCategories = (): Models.Category => {
        //    return $http.get(Utility.ApiEndPoints.category).then((result) => {
        //        var response = result.data;
        //        var categories = response;

        //        return categories;
        //    });
        //};


        //this.addCategory = (cat: Models.Category) => {

        //    console.info(cat);
        //    $http.post(Utility.ApiEndPoints.category, { category:  cat }).then((result) => {
        //        console.info(result);
        //    });

        //}

        //this.addNomination = (nomination: Models.Nomination) => {
        //    console.info(nomination);
        //    console.info(nomination.category);
        //    $http.post(Utility.ApiEndPoints.nomination, { nomination: nomination }).then((result) => {
        //        //console.info(result);
        //    });
        //}

        //this.nominations = () => {
        //    return $http({
        //        url: Utility.ApiEndPoints.nomination,
        //        method: 'POST',
        //        data: {},
        //        headers: { 'Content-Type': 'application/json' }
        //    }).then((response) => {
        //        var data = response.data;
        //        var noms = [];
        //        //_.each(data, (nom: any) => {
        //        //    noms.push(new Models.Nomination(nom.Id, nom.Nominee, nom.Category.Name, nom.Description, nom.DateNominated, nom.Winner ));
        //        //});
        //        return noms;
        //    });
        //}
    });
} 