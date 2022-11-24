const commentBox = document.getElementById("comment");

commentBox.addEventListener("input", (event) => {
	const textLength = commentBox.value.length;

	//string interpolation to display current character count.
	const charLengthDisplay = document.getElementById("lengthDisplay");
	charLengthDisplay.textContent = `${textLength}/140`;

	//styles input box border and text red if limit exceeded.
	if (textLength > 140) {
		commentBox.style.color = "red";
		charLengthDisplay.style.color = "red";
	} else {
		commentBox.style.color = "black";
		charLengthDisplay.style.color = "black";
	}
});

function submitForm(form) {
	//if clicked when character limit exceeded, function is not excecuted and alert pops up.
	if (form.comment.value.length > 140) {
		alert("Character limit exceeded!");
		return false;
	}

	//creates and appends a new <p> element containing the value from the forms text input.
	const commentElement = document.createElement("p");
	const commentText = document.createTextNode(form.comment.value);
	commentElement.appendChild(commentText);

	//creates and appends a new <h3> element containing the value from the forms name input.
	const nameElement = document.createElement("h3");
	const nameText = document.createTextNode(form.name.value);
	nameElement.appendChild(nameText);

	//when another comment is submitted creates and appends a new <div> element containing the value from the previous comment.
	const commentContainer = document.createElement("div");
	commentContainer.appendChild(commentElement);
	commentContainer.appendChild(nameElement);
	commentContainer.classList.add("previousComment");

	//creates and appends a new <div> element containing the submitted comments and sets visibility to visible.
	const commentHistoryContainer = document.getElementById("commentHistory");
	commentHistoryContainer.appendChild(commentContainer);
	commentHistoryContainer.style.visibility = "visible";
}
