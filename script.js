//Plan to have three arrays of the following word types
//verbs
//adjectives
//nouns

//will develop an array of phrases - anywhere that a phrase has the word
//noun, verb, or adjective, it will be replaced with a random word
//from the respective array
//phrases



const phrase = [
    'Yesterday, I ',
    'verb',
    ' to the ',
    'noun',
    ' and ',
    'verb',
    ' ',
    'adjective',
    ' ',
    'noun',
    's on the ',
    'noun',
    '.'
]

const verbs = ['found', 'went', 'pondered', 'skipped'];
const nouns = ['bird', 'store', 'house', 'park', 'grape'];
const adjectives = ['blue', 'big', 'small'];

const getRandomElement = array => array[Math.floor(Math.random()*array.length)];

const randomPhraseGenerator = () => {
    let randomPhrase = '';
    for(let i = 0; i < phrase.length; i++){
        let wordToAdd = phrase[i];
        if(wordToAdd == 'verb')
        {
            wordToAdd = getRandomElement(verbs);
        }
        else if (wordToAdd == 'noun')
        {
            wordToAdd = getRandomElement(nouns);
        }
        else if (wordToAdd == 'adjective')
        {
            wordToAdd = getRandomElement(adjectives);
        }
        randomPhrase += wordToAdd;
    }
    return randomPhrase;
}

console.log(randomPhraseGenerator());