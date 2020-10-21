var screenValue = "";

function textToScreen(input) {
    screenValue += input;
    document.getElementById("screen").innerHTML="8";
    return;
}

document.getElementById("key8").addEventListener('click', textToScreen("8"));
          