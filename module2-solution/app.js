(function(){
  'use strict';
  angular.module('ShoppingListCheckOff',[])
  .controller('ToAddToShoppingListController', ToAddToShoppingListController)
  .controller('ToBuyShoppingController', ToBuyShoppingController)
  .controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToAddToShoppingListController.$inject = ['ShoppingListCheckOffService'];
  function ToAddToShoppingListController(ShoppingListCheckOffService){
    var addToBuy = this;

    addToBuy.itemName = "";
    addToBuy.itemQuantity = "";

    addToBuy.addItem = function(){
      ShoppingListCheckOffService.addItem(addToBuy.name, addToBuy.quantity);
    };
  }

  ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyShoppingController(ShoppingListCheckOffService){
    var showBuy = this;
    showBuy.items = ShoppingListCheckOffService.getItemsToBuy();
    showBuy.moveToBought = function(index){
      ShoppingListCheckOffService.moveToBoughtList(index);
    };
  }

  AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtShoppingController(ShoppingListCheckOffService){
    var showBought = this;
    showBought.items = ShoppingListCheckOffService.getBoughtItems();
    showBought.moveToBuy = function(index){
      ShoppingListCheckOffService.moveToBuyList(index);
    };
  }

  function ShoppingListCheckOffService(){
    var service = this;
    var itemsToBuy = [
      { name: "cookies", quantity: 10 },
      { name: "chips", quantity: 5 },
      { name: "sodas", quantity: 3 },
      { name: "pop-corns", quantity: 12 },
      { name: "brownies", quantity: 8 }
    ];
    var itemsBought = [];
    service.addItem = function (itemName,itemQuantity){
      itemsToBuy.push({name: itemName, quantity: itemQuantity})
    };
    service.getItemsToBuy = function (){
      return itemsToBuy;
    };
    service.getBoughtItems = function (){
      return itemsBought;
    };
    service.moveToBoughtList = function (index){
      itemsBought.push.apply(itemsBought,itemsToBuy.splice(index, 1));
    };
    service.moveToBuyList = function (index){
      itemsToBuy.push.apply(itemsToBuy,itemsBought.splice(index, 1));
    };
  }
})();
