const random = (len) => {
  return Math.floor(Math.random() * len);
};

const builderLi = (text, suffics) => {
  const span = document.createElement('span');
  const b = document.createElement('b');

  b.innerHTML = text;

  span.append(b);

  if (suffics) {
    span.append(suffics);
  }

  return span.outerHTML;
};

const list = {
  infoText: [
    {
      tagName: 'LI',
      className: 'time',
      innerHTML: `Оставшееся время: ${builderLi('60', 'с')}`,
    },
    {
      tagName: 'LI',
      className: 'right',
      innerHTML: `Верные нажатия: ${builderLi('0')}`,
    },
    {
      tagName: 'LI',
      className: 'error',
      innerHTML: `Неверные нажатия: ${builderLi('0')}`,
    },
    {
      tagName: 'LI',
      className: 'precision',
      innerHTML: `Аккуратность: ${builderLi('0', '%')}`,
    }
  ],
  btnContainer: [
    {
      tagName: 'button',
      className: 'btnStart',
      innerText: 'Новая попытка',
    },
    {
      tagName: 'button',
      className: 'btnStop',
      innerText: 'Остановить',
    }
  ],
  showResultForm: [
    {
      tagName: 'LABEL',
      className: 'inpLevel',
      for: 'inpLevel',
      innerText: 'Сохранить или показать результат:',
    },
    {
      tagName: 'INPUT',
      className: 'inputNameUser',
      type: 'text',
      placeholder: 'Введите имя'
    }
  ],
  showResult: [
    {
      tagName: 'BUTTON',
      className: 'btnSaveResult',
      innerText: 'Сохранить',
    },
    {
      tagName: 'BUTTON',
      className: 'btnShowResult',
      innerText: 'Показать',
    }
  ]
};

const builderHTML = (list, key, parent) => {
  let elem = '';

  list[key].forEach((item) => {
    elem = document.createElement(item.tagName);

    if (item.hasOwnProperty('innerHTML')) {
      elem.innerHTML = item.innerHTML;
    }

    if (item.hasOwnProperty('innerText')) {
      elem.innerText = item.innerText;
    }

    if (item.hasOwnProperty('for')) {
      elem.setAttribute('for', item.for);
    }

    if (item.hasOwnProperty('placeholder')) {
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

  const divContainer = document.createElement('div');
  divContainer.className = 'container';
  divWrapper.append(divContainer);

  const divContent = document.createElement('div');
  divContent.className = 'content';
  divContent.append(paragraph);
  divContainer.append(divContent);

  const divShowResultForm = document.createElement('div');
  divShowResult.append(divShowResultForm);

  const ulInfoText = document.createElement('ul');
  ulInfoText.className = 'typingMetrics';
  divInfo.append(ulInfoText);

  const divForm = document.createElement('div');
  divInfo.append(divForm);

  const labelLevel = document.createElement('label');
  labelLevel.for = 'selectLevel';
  labelLevel.innerText = 'Выбор уровня:';
  divForm.append(labelLevel);

  const inputLevel = document.createElement('input');
  inputLevel.className = 'level';
  inputLevel.type = 'number';
  inputLevel.name = 'selectLevel';
  inputLevel.max = 3;
  inputLevel.min = 1;
  inputLevel.value = 1;
  divForm.append(inputLevel);

  const divBtnContainer = document.createElement('div');
  divBtnContainer.className = 'btnContainer';
  divInfo.append(divBtnContainer);

  const parents = {
    infoText: ulInfoText,
    btnContainer: divBtnContainer,
    showResultForm: divShowResultForm,
    showResult: divShowResult
  };

  Object.keys(parents).forEach((key) => {
    builderHTML(list, key, parents);
  });
};

export { random, renderHTML };