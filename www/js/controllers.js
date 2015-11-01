angular.module('starter.controllers', [])

.controller('ProductsCtrl', function($scope, Products, Fabrics, $ionicListDelegate){

    $scope.error = null;
    $scope.fabric = Fabrics.get();

    console.log("Fabric group:" + $scope.fabric.group);

    // No fabric group - no product types
    if( typeof $scope.fabric.group === "undefined"  ){
      console.log("Fabric group is undefined!:" + $scope.fabric.group);
      $scope.error = 'Please choose fabric type first';
      return false;
    }

    $scope.products = Products.all($scope.fabric.group);
    if( typeof $scope.products === "undefined" || $scope.products.length ==0 ){
      console.log("Products list are empty!");
      $scope.error = 'Products are not found. Please choose fabric.';
      return false;
    }

    console.log("Total products:" + $scope.products.length);
    $scope.choose = function(product) {
      // Reset old selection
      Products.reset();

      // Renew products in scope
      $scope.products = Products.all($scope.fabric.group);

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

.controller('CalcCtrl', function($scope, Fabrics, Products, Extras, $filter){
    $scope.storedFabric = Fabrics.get();
    $scope.storedProduct = Products.get();
    $scope.storedExtras = Extras.get();
    $scope.extraLength = {
      text: 1,
    };
    $scope.personalRate = {
      text: 50,
      pattern: /^[0-9]+.?[0-9]?$/
    };

    $scope.calculator = {
      isValidate: false,
      error: null,
      group: null,
      timeCutting: null,
      timeSewing: null,
      total: function(){

        // Get fabric group
        if (typeof $scope.storedFabric.group === "undefined"){
          this.isValidate = false;
          this.error = 'Fabric group is unknown';
          return 0;
        }
        this.group = parseInt($scope.storedFabric.group);
        console.log("Group: " + this.group);

        // Check if product type exists
        if( typeof $scope.storedProduct.groupRates === "undefined" ){
          this.isValidate = false;
          this.error = 'Product type is unknown';
          return 0;
        }

        // Check if rates for current group exist
        var groupRates = $filter('filter')($scope.storedProduct.groupRates,{group:this.group});
        console.log(angular.toJson($scope.storedProduct));
        console.log(angular.toJson(groupRates));
        if(  groupRates.length <=0 ){
          this.isValidate = false;
          this.error = 'Rates for group are undefined';
          return 0;
        }
        this.timeCutting = groupRates[0].timeCutting;
        this.timeSewing = groupRates[0].timeSewing;

        // Here extra with time rates
        // end of Here extra with time rates

        this.isValidate = true;
        this.error = '';
        return 0;
      }
    };

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
