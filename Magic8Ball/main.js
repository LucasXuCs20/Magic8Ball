function getResponse(q) {
  if (q.length == 0) {
    return "Please ask a question...";
  } else if (q == "does a magic 8 ball actually work?") {
    return "How dare you doubt me!";
  } else if (q == "is javascript awesome?") {
    return "Of course!";
  } else {
    return randomResponse();
  }
}

function randomResponse() {
  let num = Math.round(Math.random() * (5 - 1) + 1);
  if (num == 1) {
    return "Without a Doubt.";
  } else if (num == 2) {
    return "As I see it, yes.";
  } else if (num == 3) {
    return "Concentrate and ask again.";
  } else if (num == 4) {
    return "Don't count on it.";
  } else if (num == 5) {
    return "Outlook not so good.";
  }
}

function generate() {
  let q = document.getElementById("question").value.toLowerCase();
  document.getElementById("return").innerHTML = getResponse(q);
}
