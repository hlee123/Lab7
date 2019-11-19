function init(){
  var click = document.getElementById("entrybutton");
  click.addEventListener("click",showAlert);

  function showAlert(){
    var text = document.getElementById("entryinput")
    var output = document.getElementById("textoutput");

    output.innerHTML = text.value;

    alert("Hojin Lee:" + text.value);
  }
};

window.addEventListener('load', init);
