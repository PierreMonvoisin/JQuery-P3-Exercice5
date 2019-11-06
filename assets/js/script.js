$(function() {
  $('#carre').css({'height': '150px', 'width': '150px','background-color' : 'red','position' : 'absolute'});
  var windowWidth = $(window).width();
  var windowHeight = $(window).height();

  // empeche d'écrire dans l'input mais le laisse selectionnable
  $('input').keypress(function(e) {
    e.preventDefault();
  });
  $('input').keydown(function(e){
    let direction = e.keyCode;
    // controle de la direction en fonction de la fleche appuyée
    if (direction == 37) {
      // gauche
      $('#carre').animate({right: '+=20px'}, function(){
        if ($('#carre').offset().left <= 0){$('#carre').animate({right: '0px'}, 'fast')};
        console.log($('#carre').offset().left);
      });
    } else if (direction == 38) {
      // haut
      $('#carre').animate({bottom: '+=20px'}, function(){
        if ($('#carre').offset().top <= 0){$('#carre').animate({bottom: '0px'}, 'fast')};
        console.log($('#carre').offset().top);
      });
    } else if (direction == 39) {
      // droite
      $('#carre').animate({right: '-=20px'}, function(){
        if (windowWidth <= ($('#carre').offset().left) + $('#carre').width()){$('#carre').animate({left: '0px'}, 'fast')};
        console.log(($('#carre').offset().left) + $('#carre').width());
      });
    } else if (direction == 40) {
      // bas
      $('#carre').animate({bottom: '-=20px'}, function(){
        if (windowHeight <= ($('#carre').offset().top) + $('#carre').height()){$('#carre').animate({top: '0px'}, 'fast')};
        console.log(($('#carre').offset().top) + $('#carre').height())
      });
    }
  });

});
