const textInput = document.getElementById("textInput");
const wordcount = document.getElementById("wordcount");
const sentenceCount = document.getElementById("sentenceCount");

// Add an input event listener to the textInput element
textInput.addEventListener("input", () => {
  // Retrieve and trim the text from the textInput field
  const text = textInput.value.trim();

  // Compute the word count
  const words = text.split(/\s+/).filter(word => word.length > 0);
  wordcount.textContent = "Words: " + words.length;

  // Compute the sentence count
  const sentences = text.split(/[.!?]+(?:\s|$)/).filter(sentence => sentence.trim().length > 0);
  sentenceCount.textContent = "Sentences: " + sentences.length;
});

