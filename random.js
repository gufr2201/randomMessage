// Create a random message generator. 

function getRandomMessage(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);

    const message = arr[randomIndex];
    return message;
}


const array = ['Hello', 'How are you?', 'I am fine', 'How old are you?', 'What is your name?'];

const result = getRandomMessage(array);
console.log(result);
