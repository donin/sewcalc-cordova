angular.module('starter.controllers', [])

.controller('InfoCtrl', function($scope, $state, DataService, $ionicHistory, $ionicSlideBoxDelegate) {
  $scope.navGoBack = function(){
    $state.go('tab.products');
  };
})


.controller('CalcCtrl', function($scope, DataService, $filter) {
    $scope.storedFabric = DataService.storedFabric();
    $scope.storedProduct = DataService.storedProduct();
    $scope.storedExtras = DataService.storedExtras();
    $scope.extraGroups = DataService.getExtraGroups();

    $scope.fatalError = false;
    if( !angular.isObject($scope.storedFabric) || !angular.isObject($scope.storedProduct)){
      $scope.fatalError = true;
      return false;
    }


    $scope.extraLength = {
      value: 1
    };

    $scope.personalRate = {
      value: 50
    };

    $scope.getExtraRate = function (rates, group) {
      var r;
      if (group == rates.coat.group) {
        r = $filter('filter')(rates.coat.groupRates, {group: group});
      }
      if (group == rates.pants.group) {
        r = $filter('filter')(rates.pants.groupRates, {group: group});
      }
      if (group == rates.dress.group) {
        r = $filter('filter')(rates.dress.groupRates, {group: group});
      }
      if (group == rates.shirt.group) {
        r = $filter('filter')(rates.shirt.groupRates, {group: group});
      }
      return r[0];
    };


    $scope.totalAmount = 0;
    $scope.error = null;
    $scope.isZeroGroup = false;
    $scope.isValidate = false;
    $scope.formulaText = '';

    $scope.getTotal = function(){
      var totalExtra = 0;
      var group = null;
      var formulaTextExtra = '';
      var timeCutting = 0;
      var timeSewing = 0;

      // Get fabric group
      if (typeof $scope.storedFabric.group === "undefined") {
        $scope.isValidate = false;
        $scope.error = 'Fabric group is unknown';
        return false;
      }

      group = parseInt($scope.storedFabric.group);

      // Zero group verification
      if (group === 0) {
        $scope.isZeroGroup = true;
        group = 1;
      }

      // Check if product type exists
      if (typeof $scope.storedProduct.groupRates === "undefined") {
        $scope.isValidate = false;
        $scope.error = 'Product type is unknown';
        return false;
      }

      // Check if rates for current group exist
      var groupRates = $filter('filter')($scope.storedProduct.groupRates, {group: group});
      if (groupRates.length <= 0) {
        $scope.isValidate = false;
        $scope.error = 'Rates for group are undefined';
        return false;
      }
      timeCutting = groupRates[0].timeCutting;
      timeSewing = groupRates[0].timeSewing;

      // Update formula text
      $scope.formulaText = $scope.storedProduct.title
        + "(" + timeCutting + "+" + timeSewing + ")";
      // _Update formula text

      // Extra length
      if (parseFloat($scope.extraLength.value) > 0) {
        $scope.formulaText += "x" + parseFloat($scope.extraLength.value);
      }

      // Here extra with time rates
      angular.forEach($scope.storedExtras, function (v) {
        formulaTextExtra += " + " + v.title + "(";

        var r = $scope.getExtraRate($scope.extraGroups, group);
        formulaTextExtra += "" + r.timeCutting + "+" + r.timeSewing;
        totalExtra = totalExtra + r.timeCutting + r.timeSewing;

        formulaTextExtra += ")";
        if (v.num > 1) {
          formulaTextExtra += "x" + v.num;
        }
      });
      // end of Here extra with time rates

      // Extra length
      if (parseFloat($scope.extraLength.value) > 0) {
        timeCutting = timeCutting * parseFloat($scope.extraLength.value);
        timeSewing = timeSewing * parseFloat($scope.extraLength.value);
      }

      $scope.totalAmount = timeCutting + timeSewing;
      $scope.formulaText += "" + formulaTextExtra;

      // Add global brakets
      $scope.formulaText = "(" + $scope.formulaText + ")";

      $scope.totalAmount = $scope.totalAmount + totalExtra;
      if ($scope.isZeroGroup) {
        $scope.formulaText += "x1.2";
        $scope.totalAmount * 1.2
      }

      // Personal rate
      $scope.formulaText += "x" + $scope.personalRate.value;
      $scope.totalAmount = $scope.totalAmount * parseFloat($scope.personalRate.value);
      $scope.totalAmount = Math.round($scope.totalAmount);


      $scope.isValidate = true;
      $scope.error = '';

      return $scope.totalAmount;
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

.controller('ProductsCtrl', function($scope, DataService, $filter, $ionicListDelegate, $ionicTabsDelegate){

  $scope.navInfo = function(){
    $ionicTabsDelegate.select(4);
  };

  // Get fabric object stored in local storage
  $scope.fabric = DataService.storedFabric();

  if( !angular.isObject($scope.fabric) ){
    return false;
  }


  /**
   * Filter products by fabric group
   * @param products
   * @param fabric
   * @returns {*}
   */
  $scope.filter = function(products,fabric){
    return $filter('filter')(products,function(v){

      if (v.filterGroups.indexOf(fabric.group) > -1){
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
    if(!angular.isObject($scope.product)){
      return false;
    }

    $scope.extraGroupTitle = DataService.getExtraGroupTitle($scope.product.extraGroup);

    /**
     * Filter extras by product extra group
     * @param extras
     * @param group
     * @returns {*}
     */
    $scope.filter = function(extras,group){
      return $filter('filter')(extras,function(v){

        if (v.extraGroups.indexOf(group) > -1){
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
