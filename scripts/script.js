const clickAdd = document.querySelector('.clickAdd');
const clickSearch = document.querySelector('.clickSearch');
const message = document.querySelector('#msg p');
const clearButton = document.querySelector('.clearButton');

let dictionary;

function addWord() {
    const word = document.getElementById('addword').value;
    dictionary = JSON.parse(localStorage.getItem('Dictionary') || "[]");
    dictionary.push(word);
    console.log(dictionary);
    localStorage.setItem('Dictionary', JSON.stringify(dictionary));
    document.querySelector('form').reset();
}

clickAdd.addEventListener('click', addWord);

function searchWord() {
    const wordSearched = document.getElementById('wsearch').value;
    dictionary = JSON.parse(localStorage.getItem('Dictionary') || "[]");
    if (dictionary.includes(wordSearched)) {
        message.textContent = `The word ${wordSearched} is in the dictionary.`;
        message.style.background = 'green';
        localStorage.setItem('message', message.textContent);
        localStorage.setItem('style', message.style.background);
    } else {
        message.textContent = `The word ${wordSearched} is not in the dictionary.`;
        message.style.background = 'red';
        localStorage.setItem('message', message.textContent);
        localStorage.setItem('style', message.style.background);
    }
    wordSearched.value = '';
}

window.addEventListener('load', () => {
    const messageContent = localStorage.getItem('message');
    const messageStyle = localStorage.getItem('style');
    if (messageContent) {
        message.textContent = messageContent;
        message.style.background = messageStyle;
    }
});

clickSearch.addEventListener('click', searchWord);

clearButton.addEventListener('click', () => {
    localStorage.removeItem('Dictionary');
    localStorage.removeItem('message');
    localStorage.removeItem('style');
    message.textContent = '';
    message.style.display = 'none';
});