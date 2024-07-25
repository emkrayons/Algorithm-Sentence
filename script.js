function analyzeSentence(sentence) {
    const vowelsList = 'aeiouAEIOU';
    let length = 0;
    let vowels = 0;
    let words = 0;

    
    const trimmedSentence = sentence.trim();

    
    let inWord = false;

    for (let i = 0; i < trimmedSentence.length; i++) {
        let char = trimmedSentence[i];

        
        if (char === '.' && i === trimmedSentence.length - 1) {
            break;
        }

       
        if (char !== ' ') {
            length++;
        }
        if (vowelsList.includes(char)) {
            vowels++;
        }

        if (char === ' ') {
            inWord = false;
        } else if (!inWord) {
            words++;
            inWord = true;
        }
    }


    if (trimmedSentence.length > 0 && trimmedSentence[trimmedSentence.length - 1] !== '.') {
        if (inWord) {
            words++;
        }
    }

    console.log("Length of the sentence:", length);
    console.log("Number of words in the sentence:", words);
    console.log("Number of vowels in the sentence:", vowels);
}

analyzeSentence("This is an example sentence.");