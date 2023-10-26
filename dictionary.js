let url="https://api.dictionaryapi.dev/api/v2/entries/en/";
let dispWord = document.getElementById("dispWord");
let meaning = document.getElementById("meaning");
let wordType = document.getElementById("wordType");
let meaning2 = document.getElementById("meaning2");
let btn = document.getElementById("button");
let result = document.getElementById("result");
let sound = document.getElementById("sound");

btn.addEventListener("click", () => {
    let inpWord = document.getElementById("inpWord").value;
    
    fetch(`${url}${inpWord}`).then((response) => { return response.json()})
    .then((data) => {
        console.log(data);

        result.innerHTML = `            
        <div id="word">
            <h2 id="dispWord">${inpWord}</h2>
            <button onclick="playAudio()">
                <i class="ri-volume-up-fill"></i>
            </button>
        </div>

        <div id="details">
            <h5 id="wordType">${data[0].meanings[0].partOfSpeech}</h5>
            <h5 id="wordType">${data[0].phonetic}</h5>
        </div>
        <div id="word-meaning">
            <p id="meaning">${data[0].meanings[0].definitions[0].definition}</p>
            <p id="meaning2">Example : ${data[0].meanings[0].definitions[0].example || ""}</p>
        </div>
        </div>`
    sound.setAttribute("src",`https:${data[0].phonetics[0].audio}`);
    }).catch( () => {
        result.innerHTML = `<h3 class="error"><i class="ri-error-warning-line"> </i>Error : Couldn't Find such Word</h3>`
    });
}); 

function playAudio(){
    sound.play();
}
