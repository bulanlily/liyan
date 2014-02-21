'use strict';
(function () {
    angular.module('module1', [])
        .controller('MainCtrl', function ($scope, $q, R2) {
            $scope.awesomeThings = [
                'xingrui',
                'liyan',
                'haowei'
            ];

            var d = $q.defer();
            d.promise.then(
                function() {
                    console.log("Hahaha 1!");
//                    var o = $q.defer();
//                    o.promise.then(
//                        function() {
//                            console.log("Hahaha 3!");
//                        },
//                        function() {
//                            console.log("Wawawa 3!");
//                        }
//                    )
//                    o.reject("sss");
                    return $q.reject();
                },
                function() {
                    console.log("Wawawa 1!");
                }
            ).then(
                function() {
                    console.log("Hahaha 2!");
                },
                function() {
                    console.log("Wawawa 2!");
                }
            );

            $scope.rejectFunc = function() {
                d.resolve();
                R2({msg: "Lalala!"});
            }
        })
        .factory('R', function() {
            return {
                says: function () {
                    console.log("R says...");
                }
            }
        })
        .factory('R2', function() {
            return function() {
                console.log("R2 says... " + '@msg');
            }
        })
}).call(this)
