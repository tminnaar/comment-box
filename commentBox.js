const commentBox = document.getElementById("comment");
commentBox.addEventListener("input", (event) => {
  const textLength = commentBox.value.length;
  console.log(textLength);
  const charLengthDisplay = document.getElementById("lengthDisplay");
  charLengthDisplay.textContent = `${textLength}/140`;
  if (textLength > 140) {
    commentBox.style.color = "red";
    charLengthDisplay.style.color = "red";
  } else {
    commentBox.style.color = "black";
    charLengthDisplay.style.color = "black";
  }
});
