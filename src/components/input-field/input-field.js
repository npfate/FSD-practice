let inputFields = document.querySelectorAll(".input-field")
let inputFieldsInput = document.querySelectorAll(".input-field__input");

for (let i = 0; i < inputFields.length; i++) {
  let iconButtons = inputFieldsInput[i].parentElement.querySelector(".icons--dropdown");
  let dropdown = inputFieldsInput[i].parentElement.querySelector(".dropdown");
  inputFieldsInput[i].addEventListener("focus", function() {
    inputFieldsInput[i].parentElement.classList.add("input-field--focused");
  });
  inputFieldsInput[i].addEventListener("blur", function() {
    inputFieldsInput[i].parentElement.classList.remove("input-field--focused");
  });
  if (iconButtons !== null || dropdown !== null) {
    iconButtons.addEventListener("click", function() {
      inputFieldsInput[i].parentElement.classList.toggle("input-field--focused");
      dropdown.classList.toggle("dropdown--expanded");
    });
  }
  document.addEventListener("click", function(event) {
    if (event.target.closest(".input-field")) return;
    inputFieldsInput[i].parentElement.classList.remove("input-field--focused");
  });
}


// document.addEventListener("click", (evt) => {
//   const flyoutElement = document.getElementById("flyout-example");
//   let targetElement = evt.target; // clicked element

//   do {
//     if (targetElement == flyoutElement) {
//       // This is a click inside. Do nothing, just return.
//       document.getElementById("flyout-debug").textContent = "Clicked inside!";
//       return;
//     }
//     // Go up the DOM
//     targetElement = targetElement.parentNode;
//   } while (targetElement);

//   // This is a click outside.
//   document.getElementById("flyout-debug").textContent = "Clicked outside!";
// });