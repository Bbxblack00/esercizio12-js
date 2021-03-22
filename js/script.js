

function sayHello() {
  console.log('hello world');
}

function init() {

  // $('#title').slideDown(5000);
  // $('#title').slideUp(5000);

  // $('#title').slideToggle(5000);
  // $('#title').slideToggle(5000, function() {
  //
  //   console.log('end animation');
  //
  // });

  $('#title1').slideToggle(5000, function() {

    $('#title2').slideToggle(5000, function() {

      $('#title3').slideToggle(5000);

    });

  });


}

 $(document).ready(init);
