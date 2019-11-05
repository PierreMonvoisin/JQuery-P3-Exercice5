$(function() {
  $('#carre').css({'height': '100px', 'width': '100px','background-color' : 'red'});
  let i = 10;

  $('input').keypress(function(e) {
    e.preventDefault();
  });
  $('input').keyup(function(e){
    let direction = e.keyCode;
    if (direction == 37) {
      var left = $('#carre').offset().left;
      $('carre').css('left', left);
      $('#carre').animate({left: '10px'}, 'fast');
    } else if (direction == 38) {
      alert('haut');
    } else if (direction == 39) {
      alert('droite');
    } else if (direction == 40) {
      alert('bas');
    }
  });

});
