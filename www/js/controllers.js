angular.module('starter.controllers', [])




.controller('CalcCtrl', function($scope, Fabrics, Products, Extras, $filter){
    $scope.storedFabric = Fabrics.get();
    $scope.storedProduct = Products.get();
    $scope.storedExtras = Extras.get();

    console.log("Stored extras: " + angular.toJson($scope.storedExtras));

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

.controller('FabricsCtrl', function($scope, DataService, $filter, $ionicListDelegate) {
    DataService.resetFabrics();
    $scope.fabrics = DataService.getFabrics();


    // Restore fabric selection
    var storedFabric = DataService.storedFabric();
    if( storedFabric ) {
      angular.forEach($scope.fabrics, function (v) {
        if (v.id == storedFabric.id) {
          v.checked = true;
        }
      });
    }

    // Choose only one element at same time
    $scope.choose = function(f){

      // Reset checked status on all fabrics
      DataService.resetFabrics();
      // Remove selected product from local storage
      DataService.storeProduct();

      // Set checked flag on current fabric
      f.checked = true;

      // Store fabric in Local Storage service
      DataService.storeFabric(f);

      // Close option buttons
      $ionicListDelegate.closeOptionButtons();

      // I don't sure if I need to do it =)
      //$scope.$digest();
    }
})

.controller('ProductsCtrl', function($scope, DataService, $filter, $ionicListDelegate){

  // Get fabric object stored in local storage
  $scope.fabric = DataService.storedFabric();
  console.log("fabric group: " + $scope.fabric.group);


  /**
   * Filter products by fabric group
   * @param products
   * @param fabric
   * @returns {*}
   */
  $scope.filter = function(products,fabric){
    return $filter('filter')(products,function(v){

      if (v.filterGroups.indexOf(fabric.group) > -1){
        console.log("v: " + angular.toJson(v.filterGroups));
        return true;
      }
      return false;
    });
  };

  // Reset products selection
  DataService.resetProducts();

  // Filter products
  $scope.products = $scope.filter(DataService.getProducts(),$scope.fabric);

  // Restore product selection
  var storedProduct = DataService.storedProduct();
  if( storedProduct ) {
    angular.forEach($scope.products, function (v) {
      if (v.id == storedProduct.id) {
        v.checked = true;
      }
    });
  }


  // Choose only one element at same time
  $scope.choose = function(p){

    // Reset checked status on all products
    DataService.resetProducts();
    // Clear extras in local storage
    DataService.storeExtras();

    // Set checked flag on current product
    p.checked = true;

    // Store product in Local Storage service
    DataService.storeProduct(p);

    // Close option buttons
    $ionicListDelegate.closeOptionButtons();

    // I don't sure if I need to do it =)
    //$scope.$digest();
  }

  $scope.reset = function(){
    DataService.storeProduct();
    DataService.resetProducts();
  }

})

.controller('ExtrasCtrl', function($scope, DataService, $filter, $ionicListDelegate){

    // Get Product object stored in local storage
    $scope.product = DataService.storedProduct();

    // Show extras only if product has been chosen
    if(!$scope.product){
      return false;
    }

    $scope.extraGroupTitle = DataService.getExtraGroupTitle($scope.product.extraGroup);
    console.log("product extra group: " + $scope.product.extraGroup);

    /**
     * Filter extras by product extra group
     * @param extras
     * @param group
     * @returns {*}
     */
    $scope.filter = function(extras,group){
      return $filter('filter')(extras,function(v){

        if (v.extraGroups.indexOf(group) > -1){
          console.log("v: " + angular.toJson(v.extraGroups));
          return true;
        }
        return false;
      });
    };

    // Reset extras selection
    DataService.resetExtras();

    // Filter extras
    $scope.extras = $scope.filter(DataService.getExtras(),$scope.product.extraGroup);


    // Restore extras selection
    var storedExtras = DataService.storedExtras();
    console.log("storedExtras: "+ angular.toJson(storedExtras));
    if( storedExtras ) {
      angular.forEach(storedExtras, function (v) {
        angular.forEach($scope.extras, function(ex){
          if(v.id == ex.id ){
            ex.num = v.num;
          }
        });
      });
    }

    $scope.increase = function(ex){
      ex.num++;
      DataService.storeExtras($scope.extras);
    };

    $scope.decrease = function(ex){
      if( ex.num >0 ) {
        ex.num--;
        DataService.storeExtras($scope.extras);
      }
    };

    $scope.reset = function(){
      DataService.storeExtras();
      DataService.resetExtras();
    }
});
