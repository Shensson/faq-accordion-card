function opena1(){
    document.getElementById("answer1").classList.toggle("show");
    document.getElementById("arrow1").classList.toggle("rotate-arrow");
  }
  function opena2(){
    document.getElementById("answer2").classList.toggle("show");
    document.getElementById("arrow2").classList.toggle("rotate-arrow");
  }
  function opena3(){
    document.getElementById("answer3").classList.toggle("show");
    document.getElementById("arrow3").classList.toggle("rotate-arrow");
  }
  function opena4(){
    document.getElementById("answer4").classList.toggle("show");
    document.getElementById("arrow4").classList.toggle("rotate-arrow");
  }
  function opena5(){
    document.getElementById("answer5").classList.toggle("show");
    document.getElementById("arrow5").classList.toggle("rotate-arrow");
  }

  window.onclick = function(event) {
if (!event.target.matches('.dropbtn')) {
  var dropdowns = document.getElementsByClassName("dropbtn");
  var i;
  for (i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show')) {
      openDropdown.classList.remove('show');
    }
  }
}
}