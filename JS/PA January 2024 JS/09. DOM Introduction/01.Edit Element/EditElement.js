function editElement(element, match, replacer) {
    let content = element.textContent;
    element.textContent = content.split(match).join(replacer);
}