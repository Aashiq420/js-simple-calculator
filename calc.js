//Function to display buttons that are pressed
function display(val) {
  document.getElementById("disp").value += val;
}

//Function to determine answer of displayed expression
function answer() {
  let current = document.getElementById("disp").value;
  let ans = eval(current);
  document.getElementById("disp").value = ans;
}

//Function to clear display
function blank() {
  document.getElementById("disp").value = "";
}
