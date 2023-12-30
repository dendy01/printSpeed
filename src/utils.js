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

  const divInfo = document.createElement('div');
  divInfo.className = 'info';
  divWrapper.append(divInfo);

  const divShowResult = document.createElement('div');
  divShowResult.className = 'showResult';
  divWrapper.append(divShowResult);

  const divShowResultForm = document.createElement('form');
  divShowResult.append(divShowResultForm);

  const labelName = document.createElement('lebal');
  labelName.for = 'inpLevel';
  labelName.innerText = 'Сохранить или показать результат:';
  divShowResultForm.append(labelName);

  const inputNameUser = document.createElement('input');
  inputNameUser.className = 'inputNameUser';
  inputNameUser.type = 'text';
  inputNameUser.placeholder = 'Введите имя';
  divShowResultForm.append(inputNameUser);

  const btnSaveResult = document.createElement('button');
  btnSaveResult.className = 'btnSaveResult';
  btnSaveResult.innerText = 'Сохранить';
  divShowResult.append(btnSaveResult);

  const btnShowResult = document.createElement('button');
  btnShowResult.className = 'btnShowResult';
  btnShowResult.innerText = 'Показать';
  divShowResult.append(btnShowResult);

  const ulInfoText = document.createElement('ul');
  ulInfoText.className = 'info-text';
  divInfo.append(ulInfoText);

  const parents = {
    info: ulInfoText
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