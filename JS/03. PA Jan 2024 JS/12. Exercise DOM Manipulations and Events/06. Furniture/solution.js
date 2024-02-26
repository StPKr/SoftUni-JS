function solve() {
  const [inputTextAreaRef, resultTextAreaRef] = document.querySelectorAll('textarea');
  const [generateBtnRef, buyBtnRef] = document.querySelectorAll('button');
  const tableBodyRef = document.querySelector('tbody');

  generateBtnRef.addEventListener('click', generate);
  buyBtnRef.addEventListener('click', buy);

  function generate() {
    let data = JSON.parse(inputTextAreaRef.value);

    for (let item of data) {
      createRowAndAppend(item);
    }
  }

  function createRowAndAppend(item) {
    const tr = document.createElement('tr');
    // const imgTd = document.createElement("td");
    // const img = document.createElement("img");
    // imgTd.appendChild(img);
    // tr.appendChild(imgTd); - вместо с innerHTML, за всяко долу се правят тези
    tr.innerHTML += createTableData(`<img src=${item.img}>`);
    tr.innerHTML += createTableData(`<p>${item.name}</p>`);
    tr.innerHTML += createTableData(`<p>${item.price}</p>`);
    tr.innerHTML += createTableData(`<p>${item.decFactor}</p>`);
    tr.innerHTML += createTableData(`<input type="checkbox">`);
    tableBodyRef.appendChild(tr);
  }

  function createTableData(item) {
    return `<td>${item}</td>`
  }

  function buy(e) {
    let name = [];
    let price = 0;
    let sumDecFac = 0;
    let selectedRows = document.querySelectorAll('input[type="checkbox"]:checked');

    for (let checkbox of selectedRows) {
      let [imgRef, nameRef, priceRef, decFacRef] = Array.from(checkbox.parentElement.parentElement.children);
      let nameValue = nameRef.children[0].textContent;
      let priceValue = Number(priceRef.children[0].textContent);
      let decFacValue = Number(decFacRef.children[0].textContent);

      name.push(nameValue);
      price += priceValue;
      sumDecFac += decFacValue;
    }
    let res = "Bought furniture: ";
    res += name.join(", ");
    res += "\n";
    res += `Total price: ${price.toFixed(2)}\n`;
    res += `Average decoration factor: ${sumDecFac / name.length}`;
    resultTextAreaRef.value = res;
  }
}