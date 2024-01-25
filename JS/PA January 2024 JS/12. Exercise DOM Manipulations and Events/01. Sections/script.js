function create(words) {
   for (let el of words) {
      const div = document.createElement("div");
      const paragraph = document.createElement('p');
      paragraph.style.display = 'none';
      paragraph.textContent = el;
      div.appendChild(paragraph);
      const list = document.getElementById('content');
      list.appendChild(div);
   }
   let divList = Array.from(document.getElementById('content').children);
   for (let el of divList) {
      el.addEventListener('click', showText);
   }
   function showText(e){
      const div = e.target;
      div.children[0].style.display = "block";
   }
}