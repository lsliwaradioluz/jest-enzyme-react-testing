export const getLettersMatchCount = (guessedWord, secretWord) => {
  const lettersMatchCount = []
  for (let letter of guessedWord) {
    const occursInSecretWord = secretWord.split("").filter(l => l === letter).length
    const occursInLettersMatchCount = lettersMatchCount.filter(l => l === letter).length
    if (occursInSecretWord && occursInLettersMatchCount !== occursInSecretWord) {
      lettersMatchCount.push(letter)
    }
  } 
  return lettersMatchCount.length
}

// export const getLettersMatchCount = (guessedWord, secretWord) => {
//   const secretLetterSet = new Set(secretWord.split(''))
//   const guessedLetterSet = new Set(guessedWord.split(''))
//   return [...secretLetterSet].filter(letter => guessedLetterSet.has(letter)).length
// }