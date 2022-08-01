
movement();
function movement(){
const container = document.querySelector(".container");
const signUpBtn = document.querySelector(".green-bg button");
const loginbtn = document.querySelector(".log-in-form");



signUpBtn.addEventListener("click", () => {
  container.classList.toggle("change");
});
loginbtn.addEventListener("click", () => {
  container.classList.toggle("change1")
});

}

function checkifempty(){
  document.querySelectorAll(".signup-form").forEach()
  

}

