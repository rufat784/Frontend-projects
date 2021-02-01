// dragula([document.querySelector('#first'), document.querySelector('#second')], {
// //   copy: true,
// });

new Sortable(document.querySelector('.first'), { 
    group: 'shared', 
    animation: 150 
});

new Sortable(document.querySelector('.second'), { 
    group: 'shared', 
    animation: 150 
});


//https://sortablejs.github.io/Sortable/