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
      var listOfItems = $scope.listOfItems.split(',');
      if($scope.listOfItems == ""){
        $scope.message = "Please enter data first";
        $scope.color = "red";
        $scope.borderSize = "1";
      }
      else if(listOfItems.length > 0 && listOfItems.length < 4){
        $scope.message = "Enjoy!";
        $scope.color = "green";
        $scope.borderSize = "1";
      }
      else {
        $scope.message = "Too much!";
        $scope.color = "green";
        $scope.borderSize = "1";
      }
    };
  }
})();
