'use strict';

const container = document.getElementById('container');
const data = {
  "Рыбы": {
    "Форель": {},
    "Щука": {}
  },

  "Деревья": {
    "Хвойные": {
      "Лиственница": {},
      "Ель": {}
    },
    "Цветковые": {
      "Берёза": {},
      "Тополь": {}
    }
  }
};

function createTree(place, tree) {
  let ul = document.createElement('ul');
  place.append(ul);

  for (let key in tree) {
    let li = document.createElement('li');
    ul.append(li);
    li.innerHTML = key; 
    
    if (Object.keys(tree[key]).length > 0) {
      createTree(li, tree[key]);
    }
  }
}

createTree(container, data);