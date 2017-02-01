

function toggleMenu(){
  var menu = document.getElementById('menu');
  if(menu.style.display != "block"){
    menu.style.display = "block";
    $('#icon').removeClass('fa-bars');
    $('#icon').addClass('fa-times');
  }else{
    menu.style.display = "none";
    $('#icon').addClass('fa-bars');
  }
};

$(window).resize(function () {
    var viewportWidth = $(window).width();
    if (viewportWidth > 768) {
            $("#menu").css("display", "block");
    }
});
