

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







function openClick() {

  $('.box').slideUp(2500);

}


function init() {

  $('#button').click(openClick);

}

$(document).ready(init);
