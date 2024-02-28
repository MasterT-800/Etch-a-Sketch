const container = document.querySelector('#container');

// Promt user for grid size and create grid based on input
function createGrid(){
  let size = 16;
  do {
    size = prompt('Grid Size?', 16);
  } while (size > 100);
  for (let i = 0; i <size; i++) {
      const column = document.createElement('div');
      column.classList.add('column'); 
      container.appendChild(column);
      for (let j = 0; j <size; j++) {
        const boxes = document.createElement('div');
        boxes.classList.add('boxes'); 
        column.appendChild(boxes);
      }
    }
      // Change color of box div on mouse over
  const boxes = document.querySelectorAll('.boxes')

  // Iterate through nodelist
  boxes.forEach((box) => {

    // For each one add a 'mouseover' listener
    box.addEventListener('mouseover', () => {
      box.style.background = 'red';
    });
  });
}


// Button event asks user for grid size and creates grid based on input
const btn = document.querySelector('button');
btn.addEventListener('click', createGrid);

