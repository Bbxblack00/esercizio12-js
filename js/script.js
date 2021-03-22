

// function sayHello() {
//   console.log('hello world');
// }
//
// function init() {
//
//   sayHello();
  // down serve per far apparire
  // $('#title').slideDown(5000);
  // up serve per nascondere
  // $('#title').slideUp(5000);






  // $('#title').slideToggle(5000);
  // $('#title').slideToggle(5000, function() {
  //
  //   console.log('end animation');
  //
  // });





//   $('#title1').slideToggle(5000, function() {
//
//     $('#title2').slideToggle(5000, function() {
//
//       $('#title3').slideToggle(5000);
//
//     });
//
//   });
//
//
// }
//
//  $(document).ready(init);









// -----------------------------------------------------------------------------







// function openClick() {
//
//   $('.box').slideUp(2500);
//
// }
//
//
// function init() {
//
//   $('#button').click(openClick);
//
// }









// WARNING: MEGLIO USARE IL METODO DI SOPRA
// function init() {
//
//   $('#button').click(function() {
//     $('.box').slideUp(2500);
//   })
//
// }








// function openClick() {
//
//   $('#box-left').slideToggle(2500, function() {
//     $('#box-right').slideToggle(2500, function() {
//       console.log('end animation');
//     });
//   });
//
// }
//
//
// function init() {
//
//   $('#button').click(openClick);
//
// }
//
// $(document).ready(init);






// ------------------------------------------------------------------------------




// function titleClick() {

  // $('.title').slideToggle(2500);


  // il this in questo caso fa riferimento all'elemento, tra tanti selezionati, quello su cui si scatena l'evento
//   $(this).slideToggle(2500);
//
// }
//
//
// function init() {
//
//   $('.title').click(titleClick);
//
// }






function questionClick() {

  // console.log($(this).html());
  // console.log($(this).attr('text'));
  // console.log($(this).find('span').text());

  
  $(this).find('span').slideToggle();


  // $('#testImput').val('mio testo');
  $('#testImput').attr('text', 'button');
}

function init() {
  $('li').click(questionClick);
}




$(document).ready(init);
