$(document).ready(function() {

function initparticles() {
   lines();
}

function lines() {
   $.each($(".stretch-horz.lines"), function(){
      var linecount = ($(this).width()/50)*2;
      for(var i = 0; i <= linecount; i++) {
         $(this).append('<span class="particle" style="top:' + $.rnd(-10,30) + '%; left:' + $.rnd(-10,110) + '%;width:' + $.rnd(1,1) + 'px; height:' + $.rnd(10,30) + '%;animation-delay: -' + ($.rnd(0,60)/10) + 's;"></span>');
      }
   });
   $.each($(".stretch-one.lines"), function(){
      var linecount = ($(this).width()/100)*2;
      for(var i = 0; i <= linecount; i++) {
         $(this).append('<span class="particle" style="top:' + $.rnd(-10,30) + '%; left:' + $.rnd(-10,110) + '%;width:' + $.rnd(1,1) + 'px; height:' + $.rnd(10,30) + '%;animation-delay: -' + ($.rnd(0,60)/10) + 's;"></span>');
      }
   });
   $.each($(".stretch-two.lines"), function(){
      var linecount = ($(this).width()/50)*2;
      for(var i = 0; i <= linecount; i++) {
         $(this).append('<span class="particle" style="top:' + $.rnd(-30,30) + '%; left:' + $.rnd(-10,110) + '%;width:' + $.rnd(1,1) + 'px; height:' + $.rnd(10,30) + '%;animation-delay: -' + ($.rnd(0,60)/10) + 's;"></span>');
      }
   });
   $.each($(".stretch-three.lines"), function(){
      var linecount = ($(this).width()/10)*2;
      for(var i = 0; i <= linecount; i++) {
         $(this).append('<span class="particle" style="top:' + $.rnd(-30,30) + '%; left:' + $.rnd(-10,110) + '%;width:' + $.rnd(1,1) + 'px; height:' + $.rnd(10,30) + '%;animation-delay: -' + ($.rnd(0,60)/10) + 's;"></span>');
      }
   });

   $.each($(".stretch-four.lines"), function(){
      var linecount = ($(this).width()/10)*2;
      for(var i = 0; i <= linecount; i++) {
         $(this).append('<span class="particle" style="top:' + $.rnd(-30,30) + '%; left:' + $.rnd(-10,110) + '%;width:' + $.rnd(1,1) + 'px; height:' + $.rnd(10,30) + '%;animation-delay: -' + ($.rnd(0,60)/10) + 's;"></span>');
      }
   });

}

jQuery.rnd = function(m,n) {
      m = parseInt(m);
      n = parseInt(n);
      return Math.floor( Math.random() * (n - m + 1) ) + m;
}

initparticles();

});
