let inputValue = "";
let image = document.getElementById('muñeco');
let words = [];
let buttonEncrypt = document.getElementById('encrypt');
let buttonDecrypt = document.getElementById('decrypt');
let buttonCopy=document.getElementById('copy');
let copyText="";
let firstTextArea="";

assignTextToElement('h2','Ningún mensaje fue encontrado');
assignTextToElement('p',"Ingresa el texto que desees desencriptar");

function assignTextToElement(element, text) {
    let elementHTML = document.querySelector(element);
    elementHTML.innerHTML = text;
}

buttonEncrypt.addEventListener('click', (e)=>{
    captureMsg();
})

buttonCopy.addEventListener('click', (e)=>{
    copyText = document.getElementById('copyText');
    navigator.clipboard.writeText(copyText.innerHTML);
    assignTextToElement('p',"Texto copiado!");
   cleanField();
})

buttonDecrypt.addEventListener('click', (e)=>{
    assignTextToElement('h2',inputValue);
    assignTextToElement('p',"Texto desencriptado!");
    cleanField();
})

let cleanField = ()=>{
    firstTextArea = document.getElementById('firstTextArea').value = "";
}

let captureMsg = ()=>{
    firstTextArea = document.getElementById('firstTextArea').value;

        // Obtener el valor actual del textarea
        inputValue = firstTextArea;

        words = inputValue.split(" ");
       
        if (words.length !== 0) {
            for (let i= 0; i < words.length; i++){
                             if (words[i].includes("a") || words[i].includes("e") || words[i].includes("i")|| words[i].includes("o") || words[i].includes("u")) {
                                words[i] = words[i].replace(/a/g, "ai"); //la g corresponde a una busqueda global de coincidencias
                                words[i] = words[i].replace(/e/g, "enter");
                                words[i] = words[i].replace(/i/g, "imes");
                                words[i] = words[i].replace(/o/g, "ober");
                                words[i] = words[i].replace(/u/g, "ufat");
                                console.log("Dentro del ciclo for: "+words);
                             }           
            }
   
            showEncriptedMsg(words);
            buttonCopy.style.display="flex";
       }
    
}


        
function showEncriptedMsg(words) {
    let encriptedWords="";
    for (let i = 0; i < words.length; i++) {
        encriptedWords += words[i].replace(/,/g, " ") + " ";
    }
   
        image.style.display="none";
        assignTextToElement('h2',encriptedWords.trim()); //.trim() asi me elimina el ultimo espacio
        assignTextToElement('p',"");
}


