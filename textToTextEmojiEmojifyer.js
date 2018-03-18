function textToTextEmoji(text) {
  var textReplaced = text.replace(/\s/g, "_");
  return ":" + textReplaced + ":";
}

var result = textToTextEmoji("fodido")
var resultWithSpace = textToTextEmoji("estou fodido");
var resultWithSeveralSpaces =  textToTextEmoji("estou bastante fodido");

console.log(result);
console.log(resultWithSpace);
console.log(resultWithSeveralSpaces);
