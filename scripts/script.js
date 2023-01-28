const clickAdd = document.querySelector('.clickAdd');
const clickSearch = document.querySelector('.clickSearch');
const message = document.querySelector('#msg p');

let dictionary = [];

function addWord() {
    event.preventDefault();
    const word = document.getElementById('addword').value;
    dictionary.push(word);
    document.querySelector('form').reset();
    localStorage.setItem('Dictionary', JSON.stringify(dictionary));
}

clickAdd.addEventListener('click', addWord);

function searchWord() {
    event.preventDefault();
    const wordSearched = document.getElementById('wsearch').value;
    if (dictionary.includes(wordSearched)) {
        message.textContent = `The word ${wordSearched} is in the dictionary.`;
        message.style.background = 'green';
    } else {
        message.textContent = `The word ${wordSearched} is not in the dictionary.`;
        message.style.background = 'red';
    }
    wordSearched.value = '';
}

clickSearch.addEventListener('click', searchWord);