const random = (len) => {
  return Math.floor(Math.random() * len);
};

const list = {
  info: [
    {
      className: 'time',
      innerHTML: 'Оставшееся время:<span><b>60</b>c</span>',
    },
    {
      className: 'right',
      innerHTML: 'Верные нажатия:<span><b>0</b></span>',
    },
    {
      className: 'error',
      innerHTML: 'Неверные нажатия:<span><b>0</b></span>',
    },
    {
      className: 'precision',
      innerHTML: 'Аккуратность:<span><b>0</b>%</span>',
    }
  ]
};

const builderHTML = (list, key, parent) => {
  let elem = '';

  console.log(list);
  console.log(key);
  console.log(parent);

  list[key].map((item) => {
    if (parent[key].tagName === 'UL') {
      elem = document.createElement('li');
    } else {
      elem = document.createElement('div');
    }

    if (item.innerHTML) {
      elem.innerHTML = item.innerHTML;
    }

    elem.className = item.className;
    parent[key].append(elem);
  });
};

const renderHTML = () => {
  const root = document.querySelector('.root');
  const paragraph = document.createElement('p');

  const divWrapper = document.createElement('div');
  divWrapper.className = 'wrapper';
  root.append(divWrapper);

  const divContainer = document.createElement('div');
  divContainer.className = 'container';
  divWrapper.append(divContainer);

  const divContent = document.createElement('div');
  divContent.className = 'content';
  divContent.append(paragraph);
  divContainer.append(divContent);

  const divInfo = document.createElement('div');
  divInfo.className = 'info';
  divContainer.append(divInfo);

  const ulInfoText = document.createElement('ul');
  ulInfoText.className = 'info-text';
  divInfo.append(ulInfoText);

  const parents = {
    info: ulInfoText
  };

  console.log(parents);

  Object.keys(parents).forEach((key) => {
    console.log(key);

    builderHTML(list, key, parents);
  });

  const labelLevel = document.createElement('lebal');
  labelLevel.for = 'inpLevel';
  labelLevel.innerText = 'Уровень:';
  divInfo.append(labelLevel);

  const inputLevel = document.createElement('input');
  inputLevel.className = 'level';
  inputLevel.type = 'number';
  inputLevel.name = 'inpLevel';
  inputLevel.max = 3;
  inputLevel.min = 1;
  inputLevel.value = 1;
  divInfo.append(inputLevel);

  const btn = document.createElement('button');
  btn.className = 'btn';
  btn.innerText = 'Новая попытка';
  divInfo.append(btn);
};

export { random, renderHTML };