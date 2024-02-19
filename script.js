function confirmAge(age){
  if (age >= 18){
    alert("You are of ripe age.");
    return 0;
  }
  else {
    let consent = confirm("Can you take your own responsibility?");
    if (consent) {
      alert("Great! You are on your own now");
    }
    else {
      alert("keep growing!!!");
    }
  }
}

function grantAccess(age) {
  if (confirmAge(age)){
    alert("Access granted!");
  }
  else{
    alert("Access denied!");
  }
}

let age = prompt("Your age plz: ");

grantAccess(age);