function LongestWord(sen) { 

    const lettersOnly = (w) => w.replace(/[^A-Za-z]/g, "") // O(n)
    let longestWord = '' // O(1)
    
    sen.split(" ").forEach((w) => { // O(n)
      const word = lettersOnly(w)
      if (word.length > longestWord.length) { // O(1)
        longestWord = word
      }
    }) 
    return longestWord; 
  
  }
     
  console.log(LongestWord("Hello world %^&*() test1234567890 Villavicencio"));