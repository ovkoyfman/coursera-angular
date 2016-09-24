(function(){
  'use strict';
  angular.module('lunchCheck',[])
  .controller('lunchCheckController',lunchCheckController);
  lunchCheckController.$inject = ['$scope'];
  function lunchCheckController($scope){
    $scope.message = "";
    $scope.listOfItems = "";
    $scope.borderSize = "0";
    $scope.checkLunch = function(){
      $scope.borderSize = "1";
      var listOfItems = $scope.listOfItems.split(',');
      if($scope.listOfItems == ""){
        $scope.message = "Please enter data first";
        $scope.color = "red";
      }
      else {
        $scope.color = "green";
        (listOfItems.length > 0 && listOfItems.length < 4) ? $scope.message = "Enjoy!" : $scope.message = "Too much!";
      }
    };
  }
})();
