const input = document.getElementById("comment");
input.addEventListener("input", (event) => {
  const textLength = input.value.length;

  if (textLength > 140) {
    input.style.color = "red";
  }

  const charLengthDisplay = document.getElementById("lengthDisplay");
  charLengthDisplay.textContent = `${textLength}/140`;
});
