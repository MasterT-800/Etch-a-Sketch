const container = document.querySelector('#container');

// Create 256 boxes for 16 x 16 grid 
for (let i = 0; i <16; i++) {
    const column = document.createElement('div');
    column.classList.add('column'); 
    container.appendChild(column);
    for (let j = 0; j <16; j++) {
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