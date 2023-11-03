// Initialize counters
let sentenceLength = 0;
let wordCount = 0;
let vowelCount = 0;

// Read the sentence from the user
const sentence = prompt("Enter a sentence:");

// Iterate over each character in the sentence
for (let i = 0; i < sentence.length; i++) {
  const character = sentence[i];

  // Increment the sentence length counter
  sentenceLength++;

  // Check if the character is a space or a point
  if (character === " " || character === ".") {
    // Increment the word count counter if the character is a space or a point
    wordCount++;
  }

  // Check if the character is a vowel (assuming vowels are 'aeiou')
  if ("aeiou".includes(character.toLowerCase())) {
    // Increment the vowel count counter
    vowelCount++;
  }
}

// Output the results
console.log("Length of the sentence:", sentenceLength);
console.log("Number of words in the sentence:", wordCount);
console.log("Number of vowels in the sentence:", vowelCount);