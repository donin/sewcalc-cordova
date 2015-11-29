describe('Calculation of option2', function(){
    var $controller;

    // Define mock Data Service
    var eg = {
      coat: {
        group: 1,
        title: 'Плащи',
        groupRates: [{
          group: 1, // fabricGroup
          timeCutting: 0.11,
          timeSewing: 0.9
        }, {
          group: 2,
          timeCutting: 0.11,
          timeSewing: 0.8
        }, {
          group: 3,
          timeCutting: 0.1,
          timeSewing: 0.59
        }, {
          group: 4,
          timeCutting: 0.1,
          timeSewing: 0.59
        }
        ]
      },
      pants: {
        group: 2,
        title: 'Штаны',
        groupRates: [{
          group: 1, // fabricGroup
          timeCutting: 0.1,
          timeSewing: 0.76
        }, {
          group: 2,
          timeCutting: 0.1,
          timeSewing: 0.59
        }, {
          group: 3,
          timeCutting: 0.06,
          timeSewing: 0.51
        }, {
          group: 4,
          timeCutting: 0.06,
          timeSewing: 0.51
        }
        ]
      },
      dress: {
        group: 3,
        title: 'Платья',
        groupRates: [{
          group: 1, // fabricGroup
          timeCutting: 0.09,
          timeSewing: 0.99
        }, {
          group: 2,
          timeCutting: 0.08,
          timeSewing: 0.76
        }, {
          group: 3,
          timeCutting: 0.07,
          timeSewing: 0.69
        }, {
          group: 4,
          timeCutting: 0.07,
          timeSewing: 0.69
        }
        ]
      },
      shirt: {
        group: 4,
        title: 'Рубашка',
        groupRates: [{
          group: 1, // fabricGroup
          timeCutting: 0.075,
          timeSewing: 0.26
        }, {
          group: 2,
          timeCutting: 0.062,
          timeSewing: 0.24
        }, {
          group: 3,
          timeCutting: 0.062,
          timeSewing: 0.24
        }, {
          group: 4,
          timeCutting: 0.047,
          timeSewing: 0.18
        }
        ]
      }
    };
    var mockDataService = {
        storedFabric: function(){
          return {
            id: 0,
            title: 'Шелковый бархат',
            titleLong: '',
            desc: 'На шелковой и хлопчатобумажной основе, вельвет синтетический; ткани со сплошным\
            застилом бисером , другие материалы, аналогичные по трудоемкости обработки.',
            group: 0,
            checked: false,
            showmore: false
          };
        },
        storedProduct: function(){
          return {
            id: 14,
            title: 'Жилет под пиджак',
            titleLong: 'смокинг, фрак, визитку (разных фасонов, со спинкой из подкладочной или основной ткани)',
            checked: false,
            filterGroups:[0,1,2,3],
            groupRates: [{
              group: 1,
              timeCutting: 0.75,
              timeSewing: 9.35
            }, {
              group: 2,
              timeCutting: 0.62,
              timeSewing: 8.21
            }, {
              group: 3,
              timeCutting: 0.55,
              timeSewing: 5.74
            }
            ],
            extraGroup: eg.coat.group
          };
        },
        storedExtras: function(){
          return [];
        },
        getExtraGroups: function(){
          return eg;
        }
    };

    // load the controllers module
    beforeEach(module('starter.controllers'));

    beforeEach(inject(function(_$controller_){
        $controller = _$controller_;
    }));

    it('should calculate', function(){
      var scope = {};


      var controller = $controller('CalcCtrl',{$scope: scope, DataService: mockDataService});
      expect(scope.storedFabric).toBeDefined();
      expect(scope.storedProduct).toBeDefined();
      expect(scope.storedExtras).toEqual([]);
      expect(scope.extraGroups).toBeDefined();

      // (((0.75+9.35)*1)*1.2)*50
      // (Жилет под пиджак(0.75+9.35)x1)x1.2x50
      expect(scope.getTotal()).toEqual(606);

    });
});
