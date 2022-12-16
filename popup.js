function copyText() {
  // Get the text from the text box
  var text = document.getElementById("textbox").value;

  // Create a temporary element for copying the text
  var temp = document.createElement("textarea");
  temp.value = text;
  document.body.appendChild(temp);

  // Select the text and copy it to the clipboard
  temp.select();
  document.execCommand("copy");

  // Remove the temporary element
  document.body.removeChild(temp);
}
  