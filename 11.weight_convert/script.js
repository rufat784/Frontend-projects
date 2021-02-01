const pound = 2.20462;
const once = 35.274;
const gram = 1000;

// document.getElementById('output').style.visibility = 'hidden';

// document.getElementById('kqInput').addEventListener('input', (e) => {
//   let kq = e.target.value;

//   if (kq === '') {
//     document.getElementById('output').style.visibility = 'hidden';
//   } else {
//     document.getElementById('output').style.visibility = 'visible';

//     if (kq > 0) {
//       gramsOutput.innerHTML = (kq * gram).toFixed(2);
//       ozOutput.innerHTML = (kq * once).toFixed(2);
//       pOutput.innerHTML = (kq * pound).toFixed(2);
//     }
//   }
// });

$(document).ready(function () {
  $('#kqInput').on('input', function () {
    let kq = $(this).val();
    if (kq === '') {
      $('#output').hide();
    } else {
      $('#output').show();
      if (kq > 0) {
        $('#gramsOutput').text(kq * gram);
        $('#pOutput').text((kq * pound).toFixed(2));
        $('#ozOutput').text((kq * once).toFixed(2));
      }
    }
  });
});