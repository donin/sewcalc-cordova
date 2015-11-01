angular.module('starter.services', [])


// Product types
.factory('Products', function() {
    /**
     *
     * Extra groups
     * 1 - coat
     * 2 - pants
     * 3 - dress
     * 4 - blouse
     */
    var eg = {
      coat: {group: 1, title: 'Плащи'},
      pants: {group: 2, title: 'Штаны' },
      dress: {group: 3, title: 'Платья'},
      shirt: {group: 4, title: 'Рубашка'}
    };



  var products = [{
    id: 0,
    title: 'Пальто, полупальто зимние',
    titleLong: 'с подкладкой, в т.ч. из искусственного меха, и утепляющей прокладкой',
    checked: false,
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
    ],
    extraGroup: eg.coat.group
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
    ],
    extraGroup: eg.coat.group
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
    ],
    extraGroup: eg.coat.group
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
    ],
    extraGroup: eg.coat.group
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
    ],
    extraGroup: eg.coat.group
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
    ],
    extraGroup: eg.coat.group
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
    ],
    extraGroup: eg.coat.group
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
    ],
    extraGroup: eg.coat.group
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
    ],
    extraGroup: eg.coat.group
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
    ],
    extraGroup: eg.coat.group
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
    ],
    extraGroup: eg.coat.group
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
    ],
    extraGroup: eg.coat.group
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
    ],
    extraGroup: eg.coat.group
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
    ],
    extraGroup: eg.coat.group
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
    ],
    extraGroup: eg.coat.group
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
    ],
    extraGroup: eg.coat.group
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
    ],
    extraGroup: eg.pants.group
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
    ],
    extraGroup: eg.pants.group
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
    ],
    extraGroup: eg.pants.group
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
    ],
    extraGroup: eg.pants.group
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
    ],
    extraGroup: eg.pants.group
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
    ],
    extraGroup: eg.pants.group
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
    ],
    extraGroup: eg.dress.group
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
    ],
    extraGroup: eg.dress.group
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
    ],
    extraGroup: eg.dress.group
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
    ],
    extraGroup: eg.dress.group
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
    ],
    extraGroup: eg.dress.group
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
    ],
    extraGroup: eg.dress.group
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
    ],
    extraGroup: eg.shirt.group
  }];

  return {
    all: function(group){

      // filter product by fabric type group
      var filterProducts = [];
      angular.forEach(products,function(v){
        angular.forEach(v.groupRates,function(g){

          // zero group is equal to first one
          // plus rate*1.2
          if(g.group == group || group == 0 && g.group == 1){
            v.groupRate = g;
            filterProducts.push(v);
          }
        });
      });

      var p = JSON.parse(localStorage.getItem('product') || '{}');
      angular.forEach(filterProducts,function(v){
        v.checked = v.id == p.id;
      });
      return filterProducts;
    },
    save: function(p){
      localStorage.setItem('product',JSON.stringify(p));
    },
    get: function(){
      return JSON.parse(localStorage.getItem('product') || '{}');
    },
    reset: function(){
      localStorage.removeItem('product');
    }
  }
})

.factory('Extras', function() {

    /**
     *
     * Extra groups
     * 1 - coat
     * 2 - pants
     * 3 - dress
     * 4 - blouse
     */
    var eg = {
      coat: {group: 1, title: 'Плащи'},
      pants: {group: 2, title: 'Штаны' },
      dress: {group: 3, title: 'Платья'},
      shirt: {group: 4, title: 'Рубашка'}
    };

  var extras = [{
    id: 0,
    title: 'Рельефы',
    titleLong: 'Отрезные бочки, швы в изделии включая швы клиньев, ­ не более двух',
    num: 0,
    weight:1,
    extraGroups: [eg.coat.group,eg.pants.group,eg.dress.group,eg.shirt.group]
  }, {
    id: 1,
    title: 'Выточки',
    titleLong: 'по линии талии полочек и спинки',
    num: 0,
    weight: 1,
    extraGroups: [eg.coat.group,eg.pants.group,eg.dress.group,eg.shirt.group]
}, {
    id: 2,
    title: 'Складки разных видов',
    titleLong: '',
    num: 0,
    weight: 1,
    extraGroups: [eg.coat.group,eg.pants.group,eg.dress.group,eg.shirt.group]
}, {
    id: 3,
    title: 'Складки мягкие',
    titleLong: 'по всей юбке (в том числе юбке в отрезном изделии)',
    num: 0,
    weight: 2,
    extraGroups: [eg.dress.group]
}, {
    id: 4,
    title: 'Клинья, рельефы',
    titleLong: 'втачанные в швы, рельефы (в юбке или отрезном по линии талии изделии ­ не более двух клиньев)',
    num: 0,
    weight: 1,
    extraGroups: [eg.coat.group,eg.dress.group]
}, {
    id: 5,
    title: 'Шлицы, разрезы',
    titleLong: 'одна любой длины',
    num: 0,
    weight: 1,
    extraGroups: [eg.coat.group,eg.pants.group,eg.dress.group,eg.shirt.group]
}, {
    id: 6,
    title: 'Шлицы, разрезы',
    titleLong: 'две длиной до 15 см',
    num: 0,
    weight: 1,
    extraGroups: [eg.coat.group,eg.pants.group,eg.dress.group,eg.shirt.group]
}, {
    id: 7,
    title: 'Шлицы, разрезы',
    titleLong: 'третий шов юбки и расположенная в нем шлица',
    num: 0,
    weight: 1,
    extraGroups: [eg.coat.group,eg.dress.group]
}, {
    id: 8,
    title: 'Подрезы',
    titleLong: 'два, симметрично расположенные',
    num: 0,
    weight: 1,
    extraGroups: [eg.coat.group,eg.dress.group,eg.shirt.group]
}, {
    id: 9,
    title: 'Подрезы',
    titleLong: 'один асимметрично расположенный подрез со сборками, мягкими складками или без них',
    num: 0,
    weight: 1,
    extraGroups: [eg.coat.group,eg.dress.group,eg.shirt.group]
}, {
    id: 10,
    title: 'Драпировка несложная',
    titleLong: 'по плечевым швам, переводному плечу изделий, середине \
    переда, отрезной линии талии, бедер, кокетки или на других участках полочек и \
    спинки, половинок брюк, юбки',
    num: 0,
    weight: 1,
    extraGroups: [eg.coat.group,eg.pants.group,eg.dress.group,eg.shirt.group]
}, {
    id: 11,
    title: 'Драпировка сложная',
    titleLong: 'глубокая полочек (переда) или спинки',
    num: 0,
    weight: 4,
    extraGroups: [eg.pants.group,eg.dress.group,eg.shirt.group]
}, {
    id: 12,
    title: 'Кулиса',
    titleLong: 'в один­два ряда по линии талии или плечевым швам, или на других участках \
    изделия (не более двух участков)',
    num: 0,
    weight: 1,
    extraGroups: [eg.coat.group,eg.pants.group,eg.dress.group,eg.shirt.group]
}, {
    id: 13,
    title: 'Тесьма эластичная, шнур',
    titleLong: 'по краям деталей( по горловине, краю юбки, низу изделия и рукавов)',
    num: 0,
    weight: 1,
    extraGroups: [eg.coat.group,eg.pants.group,eg.dress.group,eg.shirt.group]
}, {
    id: 14,
    title: 'Детали, отрезные горизонтально',
    titleLong: 'полочки и спинка по линии  талии,  бедер  или  на  других  участках, ' +
    'половинки  брюк,  переводное  плечо изделия;',
    num: 0,
    weight: 1,
    extraGroups: [eg.coat.group,eg.pants.group,eg.dress.group,eg.shirt.group]
}, {
    id: 15,
    title: 'Детали, отрезные горизонтально',
    titleLong: 'две  отрезные  линии  пальто  на  полочках  или  только  на  спинке,  или  на  одном \
    полотнище юбки',
    num: 0,
    weight: 2,
    extraGroups: [eg.coat.group,eg.dress.group]
}, {
    id: 16,
    title: 'Застежка',
    titleLong: 'на обметанные петли и пуговицы или кнопки или крючки с петлями, или \
    молнию (кроме предусмотренных в описании минимальной сложности); обработка \
    планки в потайной застежке',
    num: 0,
    weight: 1,
    extraGroups: [eg.coat.group,eg.pants.group,eg.dress.group,eg.shirt.group]
}, {
    id: 17,
    title: 'Лацканы',
    titleLong: 'большие (верхняя петля застежки расположена на линии талии или ниже) в \
    верхней одежде',
    num: 0,
    weight: 1,
    extraGroups: [eg.coat.group]
}, {
    id: 18,
    title: 'Воротник',
    titleLong: 'притачной: драпированный с вытачками, отложной с отрезной стойкой или \
    с обтачкой по отлету; воротник­шарф, воротник­галстук, воротник матросский и т.п., \
    усложненной конструкции или вырез горловины сложный, или капюшон вместо воротника',
    num: 0,
    weight: 1,
    extraGroups: [eg.coat.group,eg.dress.group,eg.shirt.group]
}, {
    id: 19,
    title: 'Капюшон и воротник',
    titleLong: 'притачной, пристегивающийся',
    num: 0,
    weight: 2,
    extraGroups: [eg.coat.group]
}, {
    id: 20,
    title: 'Капюшон или воротник',
    titleLong: 'меховой  пристегивающиеся  к  изделию  (без  скорняжных работ)',
    num: 0,
    weight: 4,
    extraGroups: [eg.coat.group]
}, {
    id: 21,
    title: 'Карман',
    titleLong: '(в швах или прорезные, накладные: внутренние в подкладке, без отделки и т.д.)',
    num: 0,
    weight: 1,
    extraGroups: [eg.coat.group,eg.pants.group,eg.dress.group,eg.shirt.group]
}, {
    id: 22,
    title: 'Клапаны',
    titleLong: 'отделочные с обметанными на спецмашине петлями и пуговицами или без \
    них (не более четырех клапанов)',
    num: 0,
    weight: 1,
    extraGroups: [eg.coat.group,eg.pants.group,eg.dress.group,eg.shirt.group]
}, {
    id: 23,
    title: 'Кокетка простая',
    titleLong: 'притачная на полочках и спинке; полуотлетная на полочках или спинке',
    num: 0,
    weight: 1,
    extraGroups: [eg.coat.group,eg.pants.group,eg.dress.group,eg.shirt.group]
}, {
    id: 24,
    title: 'Кокетка сложная',
    titleLong: 'притачная на полочках, спинке и одновременно идущая по рукавам',
    num: 0,
    weight: 2,
    extraGroups: [eg.coat.group,eg.dress.group,eg.shirt.group]
}, {
    id: 25,
    title: 'Кокетка сложная',
    titleLong: 'отлетная (типа пелерины) на полочках и спинке',
    num: 0,
    weight: 2,
    extraGroups: [eg.coat.group,eg.dress.group,eg.shirt.group]
}, {
    id: 26,
    title: 'Кокетка сложная',
    titleLong: 'в мужской сорочке, блузе кокетка прямая на переде или фигурная на переде и спинке',
    num: 0,
    weight: 1,
    extraGroups: [eg.shirt.group]
}, {
    id: 27,
    title: 'Вставка',
    titleLong: '',
    num: 0,
    weight: 1,
    extraGroups: [eg.coat.group,eg.pants.group,eg.dress.group,eg.shirt.group]
}, {
    id: 28,
    title: 'Планка',
    titleLong: 'по борту полочек верхней одежды',
    num: 0,
    weight: 1,
    extraGroups: [eg.coat.group,eg.dress.group,eg.shirt.group]
}, {
    id: 29,
    title: 'Баска',
    titleLong: 'с подкладкой и без подкладки',
    num: 0,
    weight: 2,
    extraGroups: [eg.coat.group,eg.dress.group]
}, {
    id: 30,
    title: 'Пелерина притачная',
    titleLong: '',
    num: 0,
    weight: 2,
    extraGroups: [eg.coat.group,eg.dress.group]
}, {
    id: 31,
    title: 'Пелерина съемная',
    titleLong: 'с подкладкой и без подкладки',
    num: 0,
    weight: 4,
    extraGroups: [eg.coat.group,eg.dress.group]
}, {
    id: 32,
    title: 'Палантин или тюни',
    titleLong: 'к изделию или дополнительный слой юбки',
    num: 0,
    weight: 4,
    extraGroups: [eg.coat.group,eg.dress.group]
}, {
    id: 33,
    title: 'Бретели',
    titleLong: 'с разными вариантами застегивания в юбке, брюках',
    num: 0,
    weight: 1,
    extraGroups: [eg.pants.group,eg.dress.group]
}, {
    id: 34,
    title: 'Нагрудник',
    titleLong: 'с бретелями в юбке с разными вариантами застегивания бретелей.' +
    ' Полочки и спинка в полукомбинезоне.',
    num: 0,
    weight: 2,
    extraGroups: [eg.pants.group,eg.dress.group]
}, {
    id: 35,
    title: 'Спинка в полукомбинезоне',
    titleLong: '',
    num: 0,
    weight: 1,
    extraGroups: [eg.pants.group]
}, {
    id: 36,
    title: 'Отлетное полотнище юбки',
    titleLong: 'втачанное в боковой шов и в пояс',
    num: 0,
    weight: 2,
    extraGroups: [eg.dress.group]
}, {
    id: 37,
    title: 'Пояс съемный',
    titleLong: 'кроме отделочного',
    num: 0,
    weight: 1,
    extraGroups: [eg.coat.group,eg.pants.group,eg.dress.group,eg.shirt.group]
}, {
    id: 38,
    title: 'Пояс­кулиса',
    titleLong: '',
    num: 0,
    weight: 2,
    extraGroups: [eg.dress.group,eg.shirt.group]
}, {
    id: 39,
    title: 'Хлястики разных фасонов',
    titleLong: '',
    num: 0,
    weight: 1,
    extraGroups: [eg.coat.group,eg.pants.group,eg.dress.group,eg.shirt.group]
}, {
    id: 40,
    title: 'Детали накладные мелкие',
    titleLong: 'паты, шлевки, погоны, патронташ и другие с разными \
    видами застегивания (не более четырех)',
    num: 0,
    weight: 1,
    extraGroups: [eg.coat.group,eg.pants.group,eg.dress.group,eg.shirt.group]
}, {
    id: 41,
    title: 'Рукава короткие цельновыкроенные',
    titleLong: 'без ластовиц разной ширины в изделиях легкой \
    одежды (длина рукавов от уровня подмышечной впадины до линии локтя)',
    num: 0,
    weight: 1,
    extraGroups: [eg.dress.group]
}, {
    id: 42,
    title: 'Рукава разных покроев',
    titleLong: 'в изделиях легкой одежды',
    num: 0,
    weight: 2,
    extraGroups: [eg.dress.group,eg.shirt.group]
}, {
    id: 43,
    title: 'Рукава сложные',
    titleLong: 'в мужской сорочке, блузе покроя реглан или комбинированного, или цельновыкроенные, без манжет',
    num: 0,
    weight: 2,
    extraGroups: [eg.coat.group,eg.dress.group,eg.shirt.group]
}, {
    id: 44,
    title: 'Особенности фасонов рукавов',
    titleLong: 'в изделиях верхней и легкой одежды (складки, \
    сборки, расклешенные, с ластовицей т.п.)',
    num: 0,
    weight: 1,
    extraGroups: [eg.coat.group,eg.dress.group,eg.shirt.group]
}, {
    id: 45,
    title: 'Оформление низа рукава',
    titleLong: '',
    num: 0,
    weight: 1,
    extraGroups: [eg.coat.group,eg.dress.group,eg.shirt.group]
}, {
    id: 46,
    title: 'Рукава заплиссированные',
    titleLong: 'или загофрированные (за расклешение дополнительная \
    плата не взимается)',
    num: 0,
    weight: 2,
    extraGroups: [eg.dress.group,eg.shirt.group]
}, {
    id: 47,
    title: 'Пройма',
    titleLong: 'квадратная, фигурная, глубокая или настрочная',
    num: 0,
    weight: 1,
    extraGroups: [eg.coat.group,eg.dress.group,eg.shirt.group]
}, {
    id: 48,
    title: 'Подгонка рисунка ткани',
    titleLong: '',
    num: 0,
    weight: 1,
    extraGroups: [eg.coat.group,eg.pants.group,eg.dress.group,eg.shirt.group]
}, {
    id: 49,
    title: 'Обработка белой ткани',
    titleLong: '',
    num: 0,
    weight: 1,
    extraGroups: [eg.coat.group,eg.pants.group,eg.dress.group,eg.shirt.group]
}, {
    id: 50,
    title: 'Обработка ткани 0 и 1 группы',
    titleLong: '',
    num: 1,
    weight: 1,
    extraGroups: [eg.coat.group,eg.pants.group,eg.dress.group,eg.shirt.group]
}, {
    id: 51,
    title: 'Обработка кружевом',
    titleLong: 'не более 1 метра',
    num: 0,
    weight: 1,
    extraGroups: [eg.coat.group,eg.pants.group,eg.dress.group,eg.shirt.group]
}, {
    id: 52,
    title: 'Обработка пальтовой ткани',
    titleLong: 'легкой одежды',
    num: 0,
    weight: 1,
    extraGroups: [eg.pants.group,eg.dress.group]
}, {
    id: 53,
    title: 'Обработка разнородных по структуре материалов',
    titleLong: 'изделия с деталями из замши, кожи, меха, трикотажа и других \
    разнородных по структуре материалов (не более трех деталей). Парные детали: \
      рукава, лацканы, части полочек, спинки и т.д. считаются за одну деталь. Не \
    засчитываются за усложняющий элемент трикотажные манжеты и притачной пояс по низу изделия',
    num: 0,
    weight: 1,
    extraGroups: [eg.coat.group,eg.pants.group,eg.dress.group,eg.shirt.group]
}, {
    id: 54,
    title: 'Обработка трикотажного полотна',
    titleLong: '',
    num: 0,
    weight: 1,
    extraGroups: [eg.coat.group,eg.pants.group,eg.dress.group]
}, {
    id: 55,
    title: 'Обработка гофрированной ткани',
    titleLong: 'Обработка изделия с заплиссированными или загофрированными деталями или \
    гофрированной ткани (юбка или цельновыкроенное платье без рукавов, или перед и \
      спинка отрезного по линии талии изделия, или баска). За расклешение \
    дополнительная плата не взимается',
    num: 0,
    weight: 2,
    extraGroups: [eg.dress.group,eg.shirt.group]
}, {
    id: 56,
    title: 'Силуэт и сложные узлы',
    titleLong: 'варианты форм, созданные соединением срезов \
    сложных криволинейных конфигураций или требующих сложных приемов влажно­тепловой обработки;',
    num: 0,
    weight: 4,
    extraGroups: [eg.coat.group,eg.pants.group,eg.dress.group,eg.shirt.group]
}, {
    id: 57,
    title: 'Силуэт и сложные узлы',
    titleLong: 'варианты расширенных книзу форм (от плеча, уровня груди, талии, бедер), изделие с фалдами и т.п.',
    num: 0,
    weight: 4,
    extraGroups: [eg.coat.group,eg.pants.group,eg.dress.group,eg.shirt.group]
}, {
    id: 58,
    title: 'Изделие расклешенное',
    titleLong: 'превышающее расклешение, предусмотренное минимальной сложностью',
    num: 0,
    weight: 1,
    extraGroups: [eg.coat.group,eg.pants.group,eg.dress.group,eg.shirt.group]
}, {
    id: 59,
    title: 'Юбка полусолнце',
    titleLong: 'в том числе в отрезном изделии, юбка ­ брюки',
    num: 0,
    weight: 2,
    extraGroups: [eg.coat.group,eg.pants.group,eg.dress.group]
}, {
    id: 60,
    title: 'Юбка солнце',
    titleLong: '',
    num: 0,
    weight: 4,
    extraGroups: [eg.coat.group,eg.dress.group]
}, {
    id: 61,
    title: 'Брюки разных покроев',
    titleLong: 'галифе, бриджи, "бананы" и др.; широкие – шириной по низу \
    свыше 30 см; с отрезными манжетами (со сборками, мягкими складками по низу, с двумя петлями \
    и пуговицами на каждой манжете)',
    num: 0,
    weight: 1,
    extraGroups: [eg.pants.group]
}, {
    id: 62,
    title: 'Детали раскроенные по косой',
    titleLong: 'полочки или спинки, или рукава (кроме рукавов "крылышки"), ' +
    'или юбка, или части основных деталей (любое количество)',
    num: 0,
    weight: 1,
    extraGroups: [eg.coat.group,eg.pants.group,eg.dress.group,eg.shirt.group]
}, {
    id: 63,
    title: 'Накладки плечевые верхние',
    titleLong: 'разных форм в изделиях легкой одежды',
    num: 0,
    weight: 1,
    extraGroups: [eg.coat.group,eg.dress.group]
}, {
    id: 64,
    title: 'Низ изделия сложный',
    titleLong: 'обработанный обтачкой, швом вподгибку с прокладыванием \
    тесьмы эластичной в два­три ряда, окантовочным швом ­ руликом; расклешенный \
    низ, обработанный на машине зигзагообразной строчки',
    num: 0,
    weight: 1,
    extraGroups: [eg.coat.group,eg.pants.group,eg.dress.group,eg.shirt.group]
}, {
    id: 65,
    title: 'Окантовка подбортов',
    titleLong: 'внутреннего края или подгибки низа изделия',
    num: 0,
    weight: 1,
    extraGroups: [eg.coat.group,eg.pants.group,eg.dress.group,eg.shirt.group]
}, {
    id: 66,
    title: 'Дублирование деталей',
    titleLong: 'полочек, спинки, рукавов',
    num: 0,
    weight: 1,
    extraGroups: [eg.coat.group,eg.pants.group,eg.dress.group,eg.shirt.group]
}, {
    id: 67,
    title: 'Детали на подкладке',
    titleLong: 'в легкой одежде и комбинезоне; полочки; спинка; рукава;',
    num: 0,
    weight: 1,
    extraGroups: [eg.coat.group,eg.pants.group,eg.dress.group]
}, {
    id: 68,
    title: 'Детали на подкладке',
    titleLong: 'части полочек и спинки (кокетка, баска и т.п.);',
    num: 0,
    weight: 1,
    extraGroups: [eg.coat.group,eg.dress.group]
}, {
    id: 69,
    title: 'Детали на подкладке',
    titleLong: 'в брюках, полукомбинезоне задние половинки;',
    num: 0,
    weight: 1,
    extraGroups: [eg.pants.group]
}, {
    id: 70,
    title: 'Детали на подкладке',
    titleLong: 'в верхней одежде;',
    num: 0,
    weight: 1,
    extraGroups: [eg.coat.group]
}, {
    id: 71,
    title: 'Детали на подкладке',
    titleLong: 'муфты рукавов',
    num: 0,
    weight: 1,
    extraGroups: [eg.coat.group]
}, {
    id: 72,
    title: 'Подкладка',
    titleLong: 'в юбке, жакете, блузке без рукавов',
    num: 0,
    weight: 2,
    extraGroups: [eg.coat.group,eg.dress.group]
}, {
    id: 73,
    title: 'Подкладка',
    titleLong: 'в платье и комбинезоне без рукавов',
    num: 0,
    weight: 3,
    extraGroups: [eg.pants.group,eg.dress.group]
}, {
    id: 74,
    title: 'Прокладка утепляющая',
    titleLong: 'полочки и спинки до линии талии, бедер в демисезонном пальто',
    num: 0,
    weight: 2,
    extraGroups: [eg.coat.group]
}, {
    id: 75,
    title: 'Прокладка утепляющая',
    titleLong: 'в полочки и спинку до низа в демисезонном пальто или в комбинезоне с рукавами',
    num: 0,
    weight: 3,
    extraGroups: [eg.coat.group,eg.pants.group]
}, {
    id: 76,
    title: 'Прокладка утепляющая',
    titleLong: 'в полочки и спинку халата, жакета, или в юбку, или в рукава стеганых изделий',
    num: 0,
    weight: 1,
    extraGroups: [eg.coat.group,eg.dress.group]
}];

  return {
    all: function(){
      return JSON.parse(localStorage.getItem('extras')) || extras;
    },
    save: function(x){
      localStorage.setItem('extras',JSON.stringify(x));
    },
    get: function(){
      var chosenExtras = [];
      angular.forEach(this.all(),function(v){
        if( v.num >0 ) {
          chosenExtras.push(v);
        }
      });
      return chosenExtras;
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
      get: function(){
        return JSON.parse(localStorage.getItem('fabric') || '{}');
      },
      save: function(f){
        localStorage.setItem('fabric',JSON.stringify(f));
      },
      reset: function(){
        localStorage.removeItem('fabric');
      }
    };
  });
