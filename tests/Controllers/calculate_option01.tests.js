describe('Calculation of option1', function(){
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
            id: 1,
            title: 'Натуральные',
            titleLong: 'кожа, замша, парча',
            desc: 'кожа, замша;  парча и шерстяные, шелковые материалы с содержанием металлических нитей;\
              шелковые: кружевные полотна, гипюр, шитье, шифон;  шерстяной габардин для всех видов одежды;\
              хлопчатобумажный бархат;  синтетические ткани и трикотажные полотна с ворсовой поверхностью;  другие\
              материалы, аналогичные по трудоемкости обработки.',
            group: 1,
            checked: false,
            showmore: false
          };
        },
        storedProduct: function(){
          return {
            id: 0,
            title: 'Пальто, полупальто зимние',
            titleLong: 'с подкладкой, в т.ч. из искусственного меха, и утепляющей прокладкой',
            checked: false,
            filterGroups:[0,1,2,3],
            groupRates: [{
              group: 1, // fabricGroup
              timeCutting: 3.35,
              timeSewing: 33.66
            }, {
              group: 2,
              timeCutting: 2.9,
              timeSewing: 29.48
            }, {
              group: 3,
              timeCutting: 2.88,
              timeSewing: 22.18
            }
            ],
            extraGroup: eg.coat.group
          };
        },
        storedExtras: function(){
          return [
            {
              id: 0,
              title: 'Рельефы',
              titleLong: 'Отрезные бочки, швы в изделии включая швы клиньев, ­ не более двух',
              num: 2,
              weight:1,
              extraGroups: [eg.coat.group,eg.pants.group,eg.dress.group,eg.shirt.group]
            },
            {
              id: 1,
              title: 'Выточки',
              titleLong: 'по линии талии полочек и спинки',
              num: 1,
              weight: 1,
              extraGroups: [eg.coat.group,eg.pants.group,eg.dress.group,eg.shirt.group]
            }
          ];
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
      expect(scope.storedExtras).toBeDefined();
      expect(scope.extraGroups).toBeDefined();

      // ((3.35+33.66)+((0.11+0.9)*2)+(0.11+0.9))*50
      // (Пальто, полупальто зимние(3.35+33.66)x1 + Рельефы(0.11+0.9)x2 + Выточки(0.11+0.9))x50
      expect(scope.getTotal()).toEqual(2002);

    });
});
