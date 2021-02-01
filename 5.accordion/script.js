const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach((accordionItem) => {
  const btn = accordionItem.querySelector('.accordion-item-btn');

  btn.addEventListener('click', () => {
    accordionItems.forEach((item) => {
      if (item !== accordionItem) {
        item.classList.remove('show-content');
      }
    });

    accordionItem.classList.toggle('show-content');
  });
});