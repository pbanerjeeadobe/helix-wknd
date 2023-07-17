export default function decorate(block) {
  const cols = [...block.firstElementChild.children];
  block.classList.add(`columns-${cols.length}-cols`);
  console.log("This is cols:");
  console.log( block );
  

  const existingDiv = block.querySelector('div:last-of-type'); // selecting existing child div
  const paragraphDiv = existingDiv.querySelector('p:last-of-type');
  
  const newDiv = document.createElement('div');
  newDiv.classList.add('kuch-bhi');
  

  const customTitle = document.createElement('h1'); 
  customTitle.innerHTML =  `<strong> ${paragraphDiv.innerHTML} </strong>`; // Adding inner html
  //existingDiv.(customTitle); //
  newDiv.append(customTitle);
 // existingDiv.append(newDiv);

  
}

// 'append' method adds an element inside the target element.