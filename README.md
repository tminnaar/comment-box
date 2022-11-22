# Comment Box 

A very simple comment box with 2 inputs for Name and Email Address as well as a text area input for the comment field. I included placeholder text. The comment text area has a character limit of 140 that will turn red when exceded, as well as a required attribute in all fields.
On submit, comments are displayed below and persist when a new comment is added.

Using a Form element I created inputs for Name and Email Address and a textarea for the comment. I learnt about focus and active and used stylings to highlight which input was currently active.
Using DOM Manipulation the saved comments are added below using .appendChild.
I also learnt about alerts and utilised them to alert the user if the character limited has been exceeded when trying to submit.