let totalCost = 56000;

function intr(principal, time, rate) {
  interest = (principal * (time / 12) * rate) / 100;
  return interest;
}
for (let index = 0; index < 13; index++) {
  pp(`a1`, index + `--` + Math.round(intr(totalCost, index, 15)));
}

// the function to output data to screen
function pp(a, output) {
  const body = document.getElementById(a);
  const p = document.createElement("li");
  const text = document.createTextNode(output);
  p.appendChild(text);
  console.log(p);
  let result = body.appendChild(p);
  return result;
}
