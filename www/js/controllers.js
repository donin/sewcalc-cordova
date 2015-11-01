angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ProductsCtrl', function($scope, Products, $ionicListDelegate){
    $scope.products = Products.all();

    $scope.choose = function(product) {
      // Reset old selection
      Products.reset();

      // Renew products in scope
      $scope.products = Products.all();

      // Check new one
      product.checked=true;

      // Save to local storage
      Products.save(product);

      $ionicListDelegate.closeOptionButtons();
    };

  })

.controller('ExtrasCtrl', function($scope, Extras, $ionicListDelegate){
  $scope.extras = Extras.all();
  $scope.doToggle = function(){
    Extras.save($scope.extras);
  };

  $scope.reset = function(){
    Extras.reset();
    angular.forEach($scope.extras,function(v){
      v.num = 0;
    });
  };

  $scope.increase = function(x){
    x.num++;
  };

  $scope.decrease = function(x){
    if(x.num>0) {
      x.num--;
    }
  };
})

.controller('FabricsCtrl', function($scope, Fabrics, $ionicListDelegate) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    $scope.fabrics = Fabrics.all();
    $scope.choose = function(fabric) {
      localStorage.setItem('fabric',JSON.stringify(fabric));
      $ionicListDelegate.closeOptionButtons();
    };
    $scope.isChosen = function(fabric) {
      var f = JSON.parse(localStorage.getItem('fabric') || '{}');

      if( typeof f.id === "undefined" ){
        return false;
      }
      return parseInt(fabric.group) == parseInt(f.group);
    }
  })

  .controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})




.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
