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

export { builderHTML, builderLi };