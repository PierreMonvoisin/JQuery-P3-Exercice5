$(function() {
  $('#carre').css({'height': '100px', 'width': '100px','background-color' : 'red','position' : 'absolute'});
  var windowWidth = $(window).width();
  var windowHeight = $(window).height();

  $('input').keypress(function(e) {
    e.preventDefault();
  });
  $('input').keydown(function(e){
    let direction = e.keyCode;
    // controle si le carré touche les bords
    if ($('#carre').offset().left <= 0){$('#carre').animate({right: '5px'}, 'fast')}
    if (windowWidth < $('#carre').offset().left){$('#carre').animate({left: '5px'}, 'fast')}
    if (windowHeight < $('#carre').offset().top){$('#carre').animate({top: '5px'}, 'fast')}
    if ($('#carre').offset().top <= 0){$('#carre').animate({bottom: '5px'}, 'fast')}
    // controle de la direction en fonction de la fleche appuyée
    if (direction == 37) {
      // gauche
      $('#carre').animate({right: '+=50px'});
    } else if (direction == 38) {
      // haut
      $('#carre').animate({bottom: '+=50px'});
    } else if (direction == 39) {
      // droite
      $('#carre').animate({right: '-=50px'});
    } else if (direction == 40) {
      // bas
      $('#carre').animate({bottom: '-=50px'});
    }
  });

});
