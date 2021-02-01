const draggables = document.querySelectorAll('.draggable');
const lists = document.querySelectorAll('.lists');

draggables.forEach((draggable) => {
  draggable.addEventListener('dragstart', () => {
    draggable.classList.add('dragging');
  });
  draggable.addEventListener('dragend', () => {
    draggable.classList.remove('dragging');
  });
});

lists.forEach((list) => {
  list.addEventListener('dragover', (e) => {
    let current_draggable = document.querySelector('.dragging');

    let after_element = getDragAfterElement(list, e.clientY);

    if (after_element == null) {
      list.appendChild(current_draggable);
    } else {
      list.insertBefore(current_draggable, after_element);
    }
  });
});

const getDragAfterElement = (list, clientY) => {
  let draggable_elements = Array.from(list.querySelectorAll('.draggable:not(.dragging)'));

  return draggable_elements.reduce(
    (closest, current_element) => {
      const current_element_coordinates = current_element.getBoundingClientRect();
      const offset = clientY - current_element_coordinates.top - current_element_coordinates.height / 2;

      if (offset < 0 && offset > closest.offset) {
        return { offset, current_element };
      } else {
        return closest;
      }
    },
    { offset: -Infinity }
  ).current_element;
};