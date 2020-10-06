function biggerDecorations() {
  setInterval(function(){
    var userText = document.getElementById("userText");
    var fontSize = parseInt(userText.style.fontSize);
    userText.style.fontSize = fontSize + 2 + 'pt';
  }, 500);
}

function igpayAtinlay(){
  var userText = document.getElementById("userText");
  var arrText = userText.value.split(" ");
  var result = "";
  for(text of arrText){
    if (text[0] !== undefined) {
      var firstLetter = text[0].normalize();
      if(['a', 'e', 'i', 'o', 'u', 'y'].includes(firstLetter)) {
        result += text + "-ay ";
      }
      else {
        var txt = text.length > 1 ?
                    text.substring(1, text.length) + "-" + firstLetter + "ay " :
                    "-" + firstLetter + "ay ";
        result += txt;
      }
    }
    else {
      result += text + " ";
    }
  }
  userText.value = result.trim();
}

function malkovitch(){
  var userText = document.getElementById("userText");
  var arrText = userText.value.split(" ");
  var result = "";
  for(text of arrText){
    result += text.length >= 5 ? "Malkovich " : text + " ";
  }
  userText.value = result.trim();
}

function bling() {
  var userText = document.getElementById("userText");
  var blingCheckBox = document.getElementById("bling");
  if (blingCheckBox.checked === true) {
    userText.style.fontWeight = "bold";
    userText.style.color = "green";
    userText.style.textDecoration = "underline";
    document.body.style.backgroundImage = "url('https://images.pexels.com/photos/4173624/pexels-photo-4173624.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')";
  }
  else {
    userText.style.fontWeight = "normal";
    userText.style.color = "black";
    userText.style.textDecoration = "none";
    document.body.style.backgroundImage = "none";
  }
}