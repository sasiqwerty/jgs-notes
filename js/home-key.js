document.onkeyup = function (e) {
  if (e.key == "d") {
    // key d - home , takes the current page to home
    window.location.href = "../index.html";
  } else if (e.altKey && e.key == ",") {
    // key alt and , opens a new tab with the timetable
    window.open("../time-table/timetable.html", "_blank");
    // key d - alt and o open a new jsfiddle page
  } else if (e.altKey && e.key == "o") {
    window.open("https://jsfiddle.net/", "_blank");
  } else if (e.altKey && e.key == "u") {
    // key alt and u takes to the secret update and planning page
    window.open("../update.html", "_blank");
  }
};
