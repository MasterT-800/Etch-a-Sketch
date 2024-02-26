const container = document.querySelector('#container');

// Create 256 boxes for 16 x 16 grid 
for (let i = 1; i <=256; i++) {
    const box = document.createElement('div');
    box.innerText = i;
    container.appendChild(box);
  }