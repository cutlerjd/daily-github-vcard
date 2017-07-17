let user = undefined
function reqListener () {
  user = JSON.parse(this.responseText);
}

let req = new XMLHttpRequest();
req.open("GET", "https://api.github.com/users/cutlerjd");
req.addEventListener("load", reqListener);
req.send();
