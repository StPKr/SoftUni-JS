window.addEventListener("load", solve);

function solve() {
  console.log('it works')
  const inputs = {
    snowName: document.getElementById('snowman-name'),
    snowHeight: document.getElementById('snowman-height'),
    snowLocation: document.getElementById('location'),
    snowCreator: document.getElementById('creator-name'),
    snowAttribute: document.getElementById('special-attribute')
  };

  const addBtn = document.querySelector('.add-btn');
  addBtn.addEventListener('click', onAddClick);

  const snowballRef = document.querySelector('.snowman-preview');
  const snowCloudRef = document.querySelector('.snow-list');

  const mainRef = document.getElementById('hero');
  const backImg = document.getElementById('back-img');
  const bodySec = document.querySelector('.body');

  function onAddClick(event) {
    event.preventDefault();

    if (inputs.snowName.value == '' ||
      inputs.snowHeight.value == '' ||
      inputs.snowLocation.value == '' ||
      inputs.snowCreator.value == '' ||
      inputs.snowAttribute.value == '') {
      return;
    }

    const snowName = inputs.snowName.value;
    const snowHeight = inputs.snowHeight.value;
    const snowLocation = inputs.snowLocation.value;
    const snowCreator = inputs.snowCreator.value;
    const snowAttribute = inputs.snowAttribute.value;

    addBtn.parentElement.reset();
    addBtn.disabled = true;

    const result = createPreview(snowName, snowHeight, snowLocation, snowCreator, snowAttribute);
    snowballRef.appendChild(result);

  }

  function createInfo(snowName, snowHeight, snowLocation, snowCreator, snowAttribute) {
    const element = e('li');
    element.className = 'snowman-info';

    const article = e('article');
    article.appendChild(e('p', `Name: ${snowName}`));
    article.appendChild(e('p', `Height: ${snowHeight}`));
    article.appendChild(e('p', `Location: ${snowLocation}`));
    article.appendChild(e('p', `Creator: ${snowCreator}`));
    article.appendChild(e('p', `Attribute: ${snowAttribute}`));

    element.appendChild(article);

    return element;
  }

  function createPreview(snowName, snowHeight, snowLocation, snowCreator, snowAttribute) {
    const element = createInfo(snowName, snowHeight, snowLocation, snowCreator, snowAttribute);

    const editBtn = e('button', 'Edit');
    editBtn.className = 'edit-btn';
    editBtn.addEventListener('click', () => onEditClick(snowName, snowHeight, snowLocation, snowCreator, snowAttribute));

    const nextBtn = e('button', 'Next');
    nextBtn.className = 'next-btn';
    nextBtn.addEventListener('click', onNextClick.bind(null, snowName, snowHeight, snowLocation, snowCreator, snowAttribute))

    element.appendChild(editBtn);
    element.appendChild(nextBtn);

    return element;

  }

  function onEditClick(snowName, snowHeight, snowLocation, snowCreator, snowAttribute) {
    inputs.snowName.value = snowName;
    inputs.snowHeight.value = snowHeight;
    inputs.snowLocation.value = snowLocation;
    inputs.snowCreator.value = snowCreator;
    inputs.snowAttribute.value = snowAttribute;

    snowballRef.textContent = ''; // removes all children
    addBtn.disabled = false;

  }

  function onNextClick(snowName, snowHeight, snowLocation, snowCreator, snowAttribute) {
    const result = createInfo(snowName, snowHeight, snowLocation, snowCreator, snowAttribute);
    const sendBtn = e('button', 'Send');
    sendBtn.className = 'send-btn';
    sendBtn.addEventListener('click', () => onSendClick(snowName, snowHeight, snowLocation, snowCreator, snowAttribute));

    snowCloudRef.appendChild(result);
    snowCloudRef.children[0].children[0].appendChild(sendBtn);
    snowballRef.textContent = '';
  }

  function onSendClick() {

    addBtn.disabled = false;
    snowCloudRef.textContent = '';

    mainRef.remove();

    backImg.removeAttribute('hidden');

    const backBtn = e('button', 'Back');
    backBtn.id = 'back-btn';
    backBtn.addEventListener('click', onBackClick);

    bodySec.appendChild(backBtn);
  }

  function onBackClick() {
    location.reload();
  }


  function e(type, content) {
    const element = document.createElement(type);

    if (content) {
      element.textContent = content;
    }

    return element
  }
}
