const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

// Fill Listeners
fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);


function dragStart() {
  this.classList.add('hold')
  setTimeout(() => (this.className = 'invisible'), 1);
}

function dragEnd() {
  this.className = 'fill';
}




// Empties listener
for (const empty of empties) {
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
}

function dragOver(e) {
  // Drop eventi chagirilmir
  e.preventDefault();
}

function dragEnter() {
  this.classList.add('hovered');
}

function dragLeave() {
  this.className = 'empty';
  
}

function dragDrop() {
  this.className = 'empty';
  this.append(fill);
}