angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'https://pbs.twimg.com/profile_images/598205061232103424/3j5HUXMY.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})

.factory('Fabrics', function() {
    // Might use a resource here that returns a JSON array

    // Fabrics array
    var fabrics = [{
      id: 0,
      title: 'Шелковый бархат',
      desc: 'На шелковой и хлопчатобумажной основе, вельвет синтетический; ткани со сплошным\
      застилом бисером , другие материалы, аналогичные по трудоемкости обработки.',
      group: 0
    }, {
      id: 1,
      title: 'Натуральные',
      desc: 'кожа, замша;  парча и шерстяные, шелковые материалы с содержанием металлических нитей;\
        шелковые: кружевные полотна, гипюр, шитье, шифон;  шерстяной габардин для всех видов одежды;\
        хлопчатобумажный бархат;  синтетические ткани и трикотажные полотна с ворсовой поверхностью;  другие\
        материалы, аналогичные по трудоемкости обработки.',
      group: 1
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
      group: 2
    }, {
      id: 3,
      title: 'Хлопчатобумажные и льняные',
      desc: 'пальтовые, костюмные ткани и нетканые текстильные материалы; \
      дублированные материалы;  хлопчатобумажные ткани: типа батиста, маркизета, махровая ткань,\
      синтетические ткани с пленочным покрытием типа «болонья»;  другие материалы, аналогичные по трудоемкости обработки.',
      group: 3
    }, {
      id: 4,
      title: 'Хлопчатобумажные и льняные',
      desc: 'плательные, сорочечные и корсетные ткани и нетканые текстильные ' +
      'материалы;  другие материалы, аналогичные по трудоемкости обработки.',
      group: 4
    }
    ];

    return {
      all: function() {
        return fabrics;
      }
    };
  });
