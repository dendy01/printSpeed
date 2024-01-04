const random = (len) => {
  return Math.floor(Math.random() * len);
};

const list = {
  infoText: [
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
  ],
  showResultForm: [
    {
      className: 'inpLevel',
      for: 'inpLevel',
      innerText: 'Сохранить или показать результат:',
    },
    {
      className: 'inputNameUser',
      type: 'text',
      placeholder: 'Введите имя'
    }
  ],
  showResult: [
    {
      className: 'btnSaveResult',
      innerText: 'Сохранить',
    },
    {
      className: 'btnShowResult',
      innerText: 'Показать',
    }
  ]
};

const builderHTML = (list, key, parent) => {
  let elem = '';

  list[key].map((item) => {
    if (parent[key].tagName === 'UL') {
      elem = document.createElement('li');
    } else if (parent[key].tagName === 'FORM') {
      elem = document.createElement('form');
    } else if (item.className === 'btnSaveResult' || item.className === 'btnShowResult') {
      elem = document.createElement('button');
    } else {
      elem = document.createElement('div');
    }

    if (item.innerHTML) {
      elem.innerHTML = item.innerHTML;
    }

    if (item.innerText) {
      elem.innerText = item.innerText;
    }

    if (item.className === 'inpLevel') {
      elem = document.createElement('lebal');
      elem.setAttribute('for', item.for);
      elem.innerText = item.innerText;
    }

    if (item.className === 'inputNameUser') {
      elem = document.createElement('input');
      elem.setAttribute('placeholder', item.placeholder);
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

  const divInfo = document.createElement('div');
  divInfo.className = 'info';
  divWrapper.append(divInfo);

  const divShowResult = document.createElement('div');
  divShowResult.className = 'showResult';
  divWrapper.append(divShowResult);

  const divShowResultForm = document.createElement('form');
  divShowResult.append(divShowResultForm);
  
  const ulInfoText = document.createElement('ul');
  ulInfoText.className = 'info-text';
  divInfo.append(ulInfoText);

  const parents = {
    infoText: ulInfoText,
    showResultForm: divShowResultForm,
    showResult: divShowResult
  };

  Object.keys(parents).forEach((key) => {
    builderHTML(list, key, parents);
  });

  const divForm = document.createElement('form');
  divInfo.append(divForm);

  const labelLevel = document.createElement('lebal');
  labelLevel.for = 'inpLevel';
  labelLevel.innerText = 'Выбор уровня:';
  divForm.append(labelLevel);

  const inputLevel = document.createElement('input');
  inputLevel.className = 'level';
  inputLevel.type = 'number';
  inputLevel.name = 'inpLevel';
  inputLevel.max = 3;
  inputLevel.min = 1;
  inputLevel.value = 1;
  divForm.append(inputLevel);

  const divBtnContainer = document.createElement('div');
  divBtnContainer.className = 'btnContainer';
  divInfo.append(divBtnContainer);

  const btnStart = document.createElement('button');
  btnStart.className = 'btnStart';
  btnStart.innerText = 'Новая попытка';
  divBtnContainer.append(btnStart);

  const btnStop = document.createElement('button');
  btnStop.className = 'btnStop';
  btnStop.innerText = 'Остановить';
  divBtnContainer.append(btnStop);

  const divContainer = document.createElement('div');
  divContainer.className = 'container';
  divWrapper.append(divContainer);

  const divContent = document.createElement('div');
  divContent.className = 'content';
  divContent.append(paragraph);
  divContainer.append(divContent);
};

export { random, renderHTML };