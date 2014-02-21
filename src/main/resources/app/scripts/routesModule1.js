'use strict';
(function() {
    angular.module('module1').config([
        '$routeProvider', function($routeProvider) {
            return $routeProvider.when("/", {
                templateUrl: "views/main.html",
                controller: "MainCtrl"
            }).when("/xingrui", {
                    controller: "module1Ctrl",
                    template: "<div>蕊姐</div>"
                }).when("/liyan", {
                    templateUrl: "views/liyan.html"
                }).when("/haowei", {
                    templateUrl: "views/haowei.html"
                }).otherwise({
                    redirectTo: "/"
                });
        }
    ]);

}).call(this);
