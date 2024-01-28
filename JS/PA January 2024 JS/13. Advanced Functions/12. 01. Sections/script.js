const createPara = (textContent) => createElement('p', { textContent });
const createDiv = (content) => createElement('div', {}, content);

function create(words) {
   const contentRef = document.getElementById('content');
   for (let word of words) {

      const p = createPara(word);
      p.style.display = 'none';
      const div = createDiv(p);
      contentRef.appendChild(div)

      div.addEventListener('click', showText);

      function showText() {
         p.style.display = '';
      }
   }
}

function createElement(type, attr, content) {
   const element = document.createElement(type);
   if (attr) {
      Object.assign(element, attr);
   }
   if (content !== undefined) {
      element.appendChild(content);
   }
   return element;
}
//  partial application solution(Decoration)