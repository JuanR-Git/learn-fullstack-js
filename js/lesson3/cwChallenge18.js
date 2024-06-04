/*
Write a function to split a string and convert it into an array of words.

Examples (Input ==> Output):
"Robin Singh" ==> ["Robin", "Singh"]

"I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]
*/

// solution

function stringToArray(string) {
    return string.split(" ");
}

// other options
// const stringToArray = string => string.split(' ');