angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ProductsCtrl', function($scope, Products, $ionicListDelegate){
  $scope.products = Products.all();
  $scope.doToggle = function(product){
    Products.save($scope.products);
  };

  $scope.reset = function(){
      Products.reset();
      angular.forEach($scope.products,function(v){
        v.checked = false;
      });
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
