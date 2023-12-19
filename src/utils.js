const random = (len) => {
  return Math.floor(Math.random() * len);
};

const renderHTML = () => {
  const root = document.querySelector('.root');

  const divWrapper = document.createElement('div');
  divWrapper.className = 'wrapper';
  root.append(divWrapper);

  const divContainer = document.createElement('div');
  divContainer.className = 'container';
  divWrapper.append(divContainer);

  const divContent = document.createElement('div');
  divContent.className = 'content';
  divContent.innerHTML = '<p></p>';
  divContainer.append(divContent);

  const divInfo = document.createElement('div');
  divInfo.className = 'info';
  divContainer.append(divInfo);

  const ulInfoText = document.createElement('ul');
  ulInfoText.className = 'info-text';
  divInfo.append(ulInfoText);

  const liTime = document.createElement('li');
  liTime.className = 'time';
  liTime.innerHTML = 'Оставшееся время:<span><b>60</b>c</span>';
  ulInfoText.append(liTime);

  const liRight = document.createElement('li');
  liRight.className = 'right';
  liRight.innerHTML = 'Верные нажатия:<span><b>0</b></span>';
  ulInfoText.append(liRight);

  const liError = document.createElement('li');
  liError.className = 'error';
  liError.innerHTML = 'Неверные нажатия:<span><b>0</b></span>';
  ulInfoText.append(liError);

  const liPrecision = document.createElement('li');
  liPrecision.className = 'precision';
  liPrecision.innerHTML = 'Аккуратность:<span><b>0</b>%</span>';
  ulInfoText.append(liPrecision);

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