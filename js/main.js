

function toggleMenu(){
  var menu = document.getElementById('menu');
  if(menu.style.display != "none"){
    menu.style.display = "none";
  }else{
    menu.style.display = "block";
  }
};

$(window).resize(function () {
    var viewportWidth = $(window).width();
    if (viewportWidth > 768) {
            $("#menu").css("display", "block");
    }
});
