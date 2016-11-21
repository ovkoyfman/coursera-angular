(function(){
  'use strict';
  angular.module('NarrowItDownApp',[])
  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService', MenuSearchService)
  .directive('foundItems', FoundItems);

function FoundItems(){
  var ddo = {
    restrict: 'E',
    templateUrl: 'foundItems.html',
    scope: {
      menu: '<foundItems',
      onRemove: '&'
    }
  };

  return ddo;
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService){
  var controller = this;
  var foundItems = [];
  controller.removeItem = function(itemIndex) {
    console.log(itemIndex);
    controller.found.splice(itemIndex, 1);

  };
  controller.getResults = function(){
    foundItems = [];
    if (controller.searchItem !=""){
      var promice = MenuSearchService.getMatchedMenuItems();
      promice.then(function (result) {

        for(var i=0; i < result.data.menu_items.length; i++){
          if (result.data.menu_items[i].description.toLowerCase().indexOf(controller.searchItem) > -1){

            foundItems.push(result.data.menu_items[i]);
          }
        }
      })
      .catch(function (error){
        console.log("There is a problem with your request.");
      });
    }
    controller.found = foundItems;
  };


}
MenuSearchService.$inject = ['$http'];
function MenuSearchService($http){
  var service = this;
  service.getMatchedMenuItems = function(){
    return $http({
      method: "GET",
      url:("https://davids-restaurant.herokuapp.com/menu_items.json")
    })
  };

}
})()
