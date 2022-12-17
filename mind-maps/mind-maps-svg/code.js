// container element
var draw = SVG().addTo("body").size(1000, 1000);
var nested = draw.nested();
var rect = nested.rect(1000, 1000).attr({ fill: "#addadd" });
var text = nested
  .text("This is a test line")
  .font({ fill: "#000", family: "Fira Sans", size: 28 })
  .center(500, 500);
