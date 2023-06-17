export default function decorate(block) {

  const existingDiv = block.querySelector('div:last-of-type'); // selecting existing child div
  const customTitle = document.createElement('h1'); // creating blockquote element
  customTitle.innerHTML = `<strong>${existingDiv.innerHTML}</strong>`; // Adding inner html
  existingDiv.replaceWith(customTitle); // replacing with created div
  
}
