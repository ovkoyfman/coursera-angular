(function(){
  'use strict';
  angular.module('lunchCheck',[])
  .controller('lunchCheckController',lunchCheckController);
  lunchCheckController.$inject = ['$scope'];
  function lunchCheckController($scope){
    $scope.message = "";
    $scope.listOfItems = "";
    $scope.checkLunch = function(){
      var listOfItems = $scope.listOfItems.split(',');
      if($scope.listOfItems == ""){
        $scope.message = "Please enter data first";
      }
      else if(listOfItems.length > 0 && listOfItems.length < 4){
        $scope.message = "Enjoy!";
      }
      else {
        $scope.message = "Too much!";
      }
    };
  }
})();
