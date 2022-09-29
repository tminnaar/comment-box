const commentBox = document.getElementById("comment");

commentBox.addEventListener("input", (event) => {
  const textLength = commentBox.value.length;

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

function submitForm(form) {
  if (form.comment.value.length > 140) {
    alert("Character limit exceeded!");
    return false;
  }

  const commentElement = document.createElement("p");
  const commentText = document.createTextNode(form.comment.value);
  commentElement.appendChild(commentText);

  const nameElement = document.createElement("h3");
  const nameText = document.createTextNode(form.name.value);
  nameElement.appendChild(nameText);

  const commentContainer = document.createElement("div");
  commentContainer.appendChild(commentElement);
  commentContainer.appendChild(nameElement);
  commentContainer.classList.add("previousComment");

  const commentHistoryContainer = document.getElementById("commentHistory");
  commentHistoryContainer.appendChild(commentContainer);
  commentHistoryContainer.style.visibility = "visible";
}
