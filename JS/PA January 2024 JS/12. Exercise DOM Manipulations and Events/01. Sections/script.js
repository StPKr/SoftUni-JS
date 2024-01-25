function create(words) {
   const contentRef = document.getElementById('content');
   for (let word of words) {
      const divEl = document.createElement("div");
      const pEl = document.createElement('p');
      pEl.textContent = word;
      pEl.style.display = 'none';
      divEl.addEventListener('click', showText);

      divEl.appendChild(pEl);
      contentRef.appendChild(divEl);
   }

   function showText(e) {
      const target = e.currentTarget; //the div we click on
      const child = target.children[0]; // the p inside the div
      child.style.display = "block";
      // child.style.display = "none" ? "block" : "none" - will alternate between showing/hiding 
   }
}