window.addEventListener('load', solution);

function solution() {
  const submitButton = document.getElementById('submitBTN');
  const editButton = document.getElementById('editBTN');
  const continueButton = document.getElementById('continueBTN');

  const infoPreviewElement = document.getElementById('infoPreview');

  submitButton.addEventListener('click', previewInfo);
  editButton.addEventListener('click', editInfo);
  continueButton.addEventListener('click', reserve);

  const person = {};

  function previewInfo() {

    const inputFields = Array.from(document.getElementById('form').children).map(div => div.children[1]);
    inputFields.pop();

    if (inputFields.filter(el => el.id == 'fname' || el.id == 'email').every(el => el.value != '')) {

      submitButton.disabled = true;
      editButton.removeAttribute('disabled');
      continueButton.removeAttribute('disabled');

      for (let input of inputFields) {
        person[input.id] = input.value;
        input.value = '';
      }

      for (let item in person) {
        const newLi = document.createElement('li');
        newLi.textContent = `${document.getElementById(item).parentElement.children[0].textContent} ${person[item]}`;
        infoPreviewElement.appendChild(newLi);
      }
    }
  }

  function editInfo() {
    editButton.disabled = true;
    continueButton.disabled = true;
    submitButton.removeAttribute('disabled');

    for (let key in person) {
      document.getElementById(key).value = person[key];
    }
    infoPreviewElement.innerHTML = '';
  }

  function reserve() {
    const block = document.getElementById('block');
    block.innerHTML='';
    const successMessageElement = document.createElement('h3');
    successMessageElement.textContent = 'Thank you for your reservation!';
    block.appendChild(successMessageElement);
  }
}
