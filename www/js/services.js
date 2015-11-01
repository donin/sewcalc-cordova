angular.module('starter.services', [])

.factory('Products', function() {
  // Products
  var products = [{
    id: 0,
    title: 'Пальто, полупальто зимние',
    titleLong: 'с подкладкой, в т.ч. из искусственного меха, и утепляющей прокладкой',
    checked: false,
    groupRates: [{
      group: 1,
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
    ]
  }, {
    id: 1,
    title: 'Жакет зимний',
    titleLong: 'с подкладкой, в т. ч. из искусственного меха, и утепляющей прокладкой',
    checked: false,
    groupRates: [{
      group: 1,
      timeCutting: 2.64,
      timeSewing: 25.5
    }, {
      group: 2,
      timeCutting: 2.28,
      timeSewing: 22.46
    }, {
      group: 3,
      timeCutting: 2.1,
      timeSewing: 17
    }
    ]
  }, {
    id: 2,
    title: 'Пальто, полупальто с подкладкой',
    titleLong: 'демисезонные, летние, плащ',
    checked: false,
    groupRates: [{
      group: 1,
      timeCutting: 3.25,
      timeSewing: 29.05
    }, {
      group: 2,
      timeCutting: 2.81,
      timeSewing: 25.48
    }, {
      group: 3,
      timeCutting: 2.4,
      timeSewing: 19.1
    }, {
      group: 4,
      timeCutting: 2.12,
      timeSewing: 16.8
    }
    ]
  }, {
    id: 3,
    title: 'Пальто, полупальто без подкладки',
    titleLong: 'летние, плащ',
    checked: false,
    groupRates: [{
      group: 1,
      timeCutting: 2.10,
      timeSewing: 23.49
    }, {
      group: 2,
      timeCutting: 1.79,
      timeSewing: 20.59
    }, {
      group: 3,
      timeCutting: 1.62,
      timeSewing: 15.43
    }, {
      group: 4,
      timeCutting: 1.54,
      timeSewing: 13.6
    }
    ]
  }, {
    id: 4,
    title: 'Пиджак с подкладкой',
    titleLong: '',
    checked: false,
    groupRates: [{
      group: 1,
      timeCutting: 2.76,
      timeSewing: 29.55
    }, {
      group: 2,
      timeCutting: 2.40,
      timeSewing: 25.69
    }, {
      group: 3,
      timeCutting: 1.80,
      timeSewing: 17.72
    }
    ]
  }, {
    id: 5,
    title: 'Пиджак без подкладки',
    titleLong: '',
    checked: false,
    groupRates: [{
      group: 1,
      timeCutting: 1.88,
      timeSewing: 23.80
    }, {
      group: 2,
      timeCutting: 1.66,
      timeSewing: 20.69
    }, {
      group: 3,
      timeCutting: 1.30,
      timeSewing: 14.28
    }
    ]
  }, {
    id: 6,
    title: 'Жакет с подкладкой',
    titleLong: '',
    checked: false,
    groupRates: [{
      group: 1,
      timeCutting: 2.60,
      timeSewing: 25.72
    }, {
      group: 2,
      timeCutting: 2.25,
      timeSewing: 22.36
    }, {
      group: 3,
      timeCutting: 1.66,
      timeSewing: 14.16
    }
    ]
  }, {
    id: 7,
    title: 'Жакет без подкладки',
    titleLong: '',
    checked: false,
    groupRates: [{
      group: 1,
      timeCutting: 1.95,
      timeSewing: 21.23
    }, {
      group: 2,
      timeCutting: 1.73,
      timeSewing: 18.46
    }, {
      group: 3,
      timeCutting: 1.30,
      timeSewing: 12.74
    }
    ]
  }, {
    id: 8,
    title: 'Куртка с подкладкой',
    titleLong: 'в т.ч.из искусственного меха, и утепляющей прокладкой',
    checked: false,
    groupRates: [{
      group: 1,
      timeCutting: 2.38,
      timeSewing: 26.50
    }, {
      group: 2,
      timeCutting: 2,
      timeSewing: 23.90
    }, {
      group: 3,
      timeCutting: 1.63,
      timeSewing: 18.59
    }, {
      group: 4,
      timeCutting: 1.42,
      timeSewing: 16.83
    }
    ]
  }, {
    id: 9,
    title: 'Куртка с подкладкой',
    titleLong: 'без утепляющей прокладки',
    checked: false,
    groupRates: [{
      group: 1,
      timeCutting: 2.19,
      timeSewing: 25.19
    }, {
      group: 2,
      timeCutting: 1.81,
      timeSewing: 22.66
    }, {
      group: 3,
      timeCutting: 1.59,
      timeSewing: 17.71
    }, {
      group: 4,
      timeCutting: 1.38,
      timeSewing: 15.95
    }
    ]
  }, {
    id: 10,
    title: 'Куртка без подкладки',
    titleLong: '',
    checked: false,
    groupRates: [{
      group: 1,
      timeCutting: 1.67,
      timeSewing: 21.30
    }, {
      group: 2,
      timeCutting: 1.45,
      timeSewing: 19.25
    }, {
      group: 3,
      timeCutting: 1.32,
      timeSewing: 14.96
    }, {
      group: 4,
      timeCutting: 1.24,
      timeSewing: 13.5
    }
    ]
  }, {
    id: 11,
    title: 'Жилет с подкладкой',
    titleLong: '',
    checked: false,
    groupRates: [{
      group: 1,
      timeCutting: 0.82,
      timeSewing: 11.88
    }, {
      group: 2,
      timeCutting: 0.71,
      timeSewing: 10.40
    }, {
      group: 3,
      timeCutting: 0.60,
      timeSewing: 5
    }, {
      group: 4,
      timeCutting: 0.60,
      timeSewing: 5
    }
    ]
  }, {
    id: 12,
    title: 'Жилет без подкладки',
    titleLong: '',
    checked: false,
    groupRates: [{
      group: 1,
      timeCutting: 0.68,
      timeSewing: 9.79
    }, {
      group: 2,
      timeCutting: 0.58,
      timeSewing: 8.58
    }, {
      group: 3,
      timeCutting: 0.50,
      timeSewing: 5.98
    }, {
      group: 4,
      timeCutting: 0.50,
      timeSewing: 5.98
    }
    ]
  }, {
    id: 13,
    title: 'Жилет разных фасонов',
    titleLong: 'со стеганым верхом насквозь с подкладкой и утепляющей прокладкой',
    checked: false,
    groupRates: [{
      group: 2,
      timeCutting: 0.71,
      timeSewing: 13.46
    }, {
      group: 3,
      timeCutting: 0.60,
      timeSewing: 9.41
    }, {
      group: 4,
      timeCutting: 0.53,
      timeSewing: 8.28
    }
    ]
  }, {
    id: 14,
    title: 'Жилет под пиджак',
    titleLong: 'смокинг, фрак, визитку (разных фасонов, со спинкой из подкладочной или основной ткани)',
    checked: false,
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
    ]
  }, {
    id: 15,
    title: 'Жилет разных фасонов',
    titleLong: 'с подкладкой из натурального меха, без подбортов',
    checked: false,
    groupRates: [{
      group: 1,
      timeCutting: 0.47,
      timeSewing: 5.44
    }, {
      group: 2,
      timeCutting: 0.40,
      timeSewing: 4.77
    }, {
      group: 3,
      timeCutting: 0.36,
      timeSewing: 3.34
    }, {
      group: 4,
      timeCutting: 0.36,
      timeSewing: 3.44
    }
    ]
  }, {
    id: 16,
    title: 'Жилет разных фасонов',
    titleLong: 'с подкладкой из искусственного меха, без подбортов',
    checked: false,
    groupRates: [{
      group: 1,
      timeCutting: 0.43,
      timeSewing: 4.93
    }, {
      group: 2,
      timeCutting: 0.36,
      timeSewing: 4.33
    }, {
      group: 3,
      timeCutting: 0.33,
      timeSewing: 3.03
    }, {
      group: 4,
      timeCutting: 0.33,
      timeSewing: 3.03
    }
    ]
  }, {
    id: 17,
    title: 'Брюки мужские',
    titleLong: 'длинные и укороченные – длиной ниже коленей (с подкладкой под передние половинки и без подкладки)',
    checked: false,
    groupRates: [{
      group: 1,
      timeCutting: 0.93,
      timeSewing: 8.35
    }, {
      group: 2,
      timeCutting: 0.80,
      timeSewing: 7.33
    }, {
      group: 3,
      timeCutting: 0.66,
      timeSewing: 5.13
    }
    ]
  }, {
    id: 18,
    title: 'Брюки женские',
    titleLong: 'длинные и укороченные – длиной ниже коленей (с подкладкой под передние половинки и без подкладки)',
    checked: false,
    groupRates: [{
      group: 1,
      timeCutting: 0.91,
      timeSewing: 7
    }, {
      group: 2,
      timeCutting: 0.79,
      timeSewing: 6.19
    }, {
      group: 3,
      timeCutting: 0.64,
      timeSewing: 4.27
    }, {
      group: 4,
      timeCutting: 0.64,
      timeSewing: 4.27
    }
    ]
  }, {
    id: 19,
    title: 'Брюки мужские и женские',
    titleLong: 'с утепляющей прокладкой и подкладкой',
    checked: false,
    groupRates: [{
      group: 2,
      timeCutting: 1.04,
      timeSewing: 7.63
    }, {
      group: 3,
      timeCutting: 0.86,
      timeSewing: 5.27
    }
    ]
  }, {
    id: 20,
    title: 'Шорты мужские и женские',
    titleLong: 'разных фасонов, с подкладкой и без подкладки',
    checked: false,
    groupRates: [{
      group: 1,
      timeCutting: 0.64,
      timeSewing: 5.97
    }, {
      group: 2,
      timeCutting: 0.56,
      timeSewing: 5.18
    }, {
      group: 3,
      timeCutting: 0.48,
      timeSewing: 3.63
    }, {
      group: 4,
      timeCutting: 0.48,
      timeSewing: 3.63
    }
    ]
  }, {
    id: 21,
    title: 'Комбинезон без подкладки',
    titleLong: '',
    checked: false,
    groupRates: [{
      group: 1,
      timeCutting: 1.55,
      timeSewing: 21.98
    }, {
      group: 2,
      timeCutting: 1.43,
      timeSewing: 19.29
    }, {
      group: 3,
      timeCutting: 1.29,
      timeSewing: 12.12
    }, {
      group: 4,
      timeCutting: 1.29,
      timeSewing: 12.12
    }
    ]
  }, {
    id: 22,
    title: 'Полукомбинезон',
    titleLong: 'с бретелями и нагрудником, брюки длинные с подкладкой под передние половинки и без подкладки',
    checked: false,
    groupRates: [{
      group: 1,
      timeCutting: 1.26,
      timeSewing: 14.74
    }, {
      group: 2,
      timeCutting: 1.19,
      timeSewing: 13.52
    }, {
      group: 3,
      timeCutting: 1.11,
      timeSewing: 9.44
    }, {
      group: 4,
      timeCutting: 1.11,
      timeSewing: 9.44
    }
    ]
  }, {
    id: 23,
    title: 'Юбка без подкладки',
    titleLong: '',
    checked: false,
    groupRates: [{
      group: 1,
      timeCutting: 0.80,
      timeSewing: 6.44
    }, {
      group: 2,
      timeCutting: 0.68,
      timeSewing: 5.49
    }, {
      group: 3,
      timeCutting: 0.56,
      timeSewing: 4.87
    }, {
      group: 4,
      timeCutting: 0.56,
      timeSewing: 4.87
    }
    ]
  }, {
    id: 24,
    title: 'Платье, сарафан',
    titleLong: '',
    checked: false,
    groupRates: [{
      group: 1,
      timeCutting: 2.27,
      timeSewing: 11.6
    }, {
      group: 2,
      timeCutting: 2.15,
      timeSewing: 8.92
    }, {
      group: 3,
      timeCutting: 1.72,
      timeSewing: 7.80
    }, {
      group: 4,
      timeCutting: 1.54,
      timeSewing: 7.25
    }
    ]
  }, {
    id: 25,
    title: 'Халат',
    titleLong: '',
    checked: false,
    groupRates: [{
      group: 2,
      timeCutting: 2.11,
      timeSewing: 8.88
    }, {
      group: 3,
      timeCutting: 1.69,
      timeSewing: 7.77
    }, {
      group: 4,
      timeCutting: 1.39,
      timeSewing: 7.23
    }
    ]
  }, {
    id: 26,
    title: 'Чехол под платье',
    titleLong: 'разной длины',
    checked: false,
    groupRates: [{
      group: 2,
      timeCutting: 1.12,
      timeSewing: 4.48
    }, {
      group: 3,
      timeCutting: 0.75,
      timeSewing: 4.17
    }, {
      group: 4,
      timeCutting: 0.75,
      timeSewing: 4.17
    }
    ]
  }, {
    id: 27,
    title: 'Юбка нижняя',
    titleLong: 'разной длины',
    checked: false,
    groupRates: [{
      group: 2,
      timeCutting: 0.94,
      timeSewing: 3.63
    }, {
      group: 3,
      timeCutting: 0.74,
      timeSewing: 3.38
    }, {
      group: 4,
      timeCutting: 0.74,
      timeSewing: 3.38
    }
    ]
  }, {
    id: 28,
    title: 'Блузка',
    titleLong: '',
    checked: false,
    groupRates: [{
      group: 1,
      timeCutting: 1.80,
      timeSewing: 9.21
    }, {
      group: 2,
      timeCutting: 1.71,
      timeSewing: 6.92
    }, {
      group: 3,
      timeCutting: 1.46,
      timeSewing: 6.18
    }, {
      group: 4,
      timeCutting: 1.31,
      timeSewing: 5.75
    }
    ]
  }, {
    id: 29,
    title: 'Верхняя сорочка',
    titleLong: 'блуза',
    checked: false,
    groupRates: [{
      group: 1,
      timeCutting: 0.73,
      timeSewing: 5.15
    }, {
      group: 2,
      timeCutting: 0.68,
      timeSewing: 3.96
    }, {
      group: 3,
      timeCutting: 0.56,
      timeSewing: 3.25
    }, {
      group: 4,
      timeCutting: 0.43,
      timeSewing: 3.22
    }
    ]
  }];

  return {
    all: function(){
      var p = JSON.parse(localStorage.getItem('product') || '{}');
      angular.forEach(products,function(v){
        v.checked = v.id == p.id;
      });
      return products;
    },
    save: function(p){
      localStorage.setItem('product',JSON.stringify(p));
    },
    reset: function(){
      localStorage.removeItem('product');
    }
  }
})

.factory('Extras', function() {

  var extras = [{
    id: 0,
    title: 'Рельефы, бочки, швы клиньев',
    titleLong: 'Рельефы или отрезные бочки, или швы в изделии включая швы клиньев, ­ не более двух',
    num: 1
  }];

  return {
    all: function(){
      return JSON.parse(localStorage.getItem('extras')) || extras;
    },
    save: function(x){
      localStorage.setItem('extras',JSON.stringify(x));
    },
    reset: function(){
      localStorage.removeItem('extras');
    }
  }
})

.factory('Fabrics', function() {
    // Might use a resource here that returns a JSON array

    // Fabrics array
    var fabrics = [{
      id: 0,
      title: 'Шелковый бархат',
      desc: 'На шелковой и хлопчатобумажной основе, вельвет синтетический; ткани со сплошным\
      застилом бисером , другие материалы, аналогичные по трудоемкости обработки.',
      group: 0,
      checked: false
    }, {
      id: 1,
      title: 'Натуральные',
      desc: 'кожа, замша;  парча и шерстяные, шелковые материалы с содержанием металлических нитей;\
        шелковые: кружевные полотна, гипюр, шитье, шифон;  шерстяной габардин для всех видов одежды;\
        хлопчатобумажный бархат;  синтетические ткани и трикотажные полотна с ворсовой поверхностью;  другие\
        материалы, аналогичные по трудоемкости обработки.',
      group: 1,
      checked: false
    }, {
      id: 2,
      title: 'Шерстяные ткани',
      desc: 'кроме габардина; в том числе с содержанием синтетических волокон;\
       искусственный мех; Шерстяные ткани (кроме габардина); в том числе с содержанием синтетических волокон;\
       искусственный мех; трикотажные полотна;  искусственные: кожа, замша;\
       плащевые ткани (кроме синтетических тканей с пленочным покрытием типа «болонья»);\
       эластичные материалы, стеганые полотна;  шерстяные и шелковые нетканые текстильные материалы;\
       хлопчатобумажные: кружевные полотна, гипюр, шитье, вельвет, габардин, джинсовая ткань,\
       кирза и ткани с содержанием металлических нитей; другие материалы, аналогичные по трудоемкости обработки.',
      group: 2,
      checked: false
    }, {
      id: 3,
      title: 'Хлопчатобумажные и льняные',
      desc: 'пальтовые, костюмные ткани и нетканые текстильные материалы; \
      дублированные материалы;  хлопчатобумажные ткани: типа батиста, маркизета, махровая ткань,\
      синтетические ткани с пленочным покрытием типа «болонья»;  другие материалы, аналогичные по трудоемкости обработки.',
      group: 3,
      checked: false
    }, {
      id: 4,
      title: 'Хлопчатобумажные и льняные',
      desc: 'плательные, сорочечные и корсетные ткани и нетканые текстильные ' +
      'материалы;  другие материалы, аналогичные по трудоемкости обработки.',
      group: 4,
      checked: false
    }
    ];

    return {
      all: function(){
        var f = JSON.parse(localStorage.getItem('fabric') || '{}');
        angular.forEach(fabrics,function(v){
          v.checked = v.id == f.id;
        });
        return fabrics;
      },
      save: function(f){
        localStorage.setItem('fabric',JSON.stringify(f));
      },
      reset: function(){
        localStorage.removeItem('fabric');
      }
    };
  });
