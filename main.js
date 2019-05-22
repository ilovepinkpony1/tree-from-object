'use strict';

const container = document.getElementById('container');
const data = {
  'Рыбы': {
    'Форель': {},
    'Щука': {}
  },

  'Деревья': {
    'Хвойные': {
      'Лиственница': {},
      'Ель': {}
    },
    'Цветковые': {
      'Берёза': {},
      'Тополь': {}
    }
  }
};

function createTree(place, tree) {
  const ul = document.createElement('ul');

  if (place) {
    place.append(ul);

    Object.keys(tree).forEach(node => {
      const li = document.createElement('li');
      li.textContent = node;
      ul.append(li);
  
         if (Object.keys(tree[node]).length > 0) {
          createTree(li, tree[node]);
      }
    });
  }
}

createTree(container, data);
