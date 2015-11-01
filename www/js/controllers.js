angular.module('starter.controllers', [])

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

.controller('CalcCtrl', function($scope, Fabrics, Products, Extras){
    $scope.fabric = Fabrics.getStored();

})

.controller('FabricsCtrl', function($scope, Fabrics, $ionicListDelegate) {
    $scope.fabrics = Fabrics.all();

    $scope.choose = function(fabric) {
      // Reset old selection
      Fabrics.reset();

      // Renew in scope
      $scope.fabrics = Fabrics.all();

      // Check new one
      fabric.checked=true;

      // Save to local storage
      Fabrics.save(fabric);

      $ionicListDelegate.closeOptionButtons();
    };
  });
