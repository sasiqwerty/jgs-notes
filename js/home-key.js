document.onkeyup = function (e) {
  if (e.key == "d") {
    window.location.href = "../index.html";
  } else if (e.ctrlKey && e.key == ",") {
    window.open("../time-table/timetable.html", "_blank");
  } else if (e.altKey && e.key == "o") {
    window.open("https://jsfiddle.net/", "_blank");
  } else if (e.altKey && e.key == "u") {
    window.open("../update.html", "_blank");
  }
};
