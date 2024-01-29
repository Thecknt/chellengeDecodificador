let inputValue = "";
let image = document.getElementById('muñeco');
let words = [];
let buttonEncrypt = document.getElementById('encrypt');
let buttonDecrypt = document.getElementById('decrypt');
let buttonCopy=document.getElementById('copy');
let copyText="";
let firstTextArea;
let specialCharacteres= "=!@#$%^&*():{}";
let upperCase= "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

assignTextToElement('h2','Ningún mensaje fue encontrado');
assignTextToElement('p',"Ingresa el texto que desees desencriptar");

function assignTextToElement(element, text) {
    let elementHTML = document.querySelector(element);
    elementHTML.innerHTML = text;
}

buttonEncrypt.addEventListener('click', ()=>{
  inputValue = document.getElementById('firstTextArea').value;
  console.log(inputValue);
  if (inputValue.length == 0) {
    const Toast = Swal.mixin({
      toast: true,
      position: "center-left",
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    });
    Toast.fire({
      icon: "error",
      title: "Por favor debe Ingresar algun texto"
    });
  } else {
    captureMsg();
  }
})

buttonCopy.addEventListener('click', (e)=>{
    copyText = document.getElementById('copyText');
    navigator.clipboard.writeText(copyText.innerHTML);
    assignTextToElement('p',"Texto copiado!");
   cleanField();
})

buttonDecrypt.addEventListener('click', (e)=>{
  inputValue = document.getElementById('firstTextArea').value;

  if (inputValue.length == 0) {
    const Toast = Swal.mixin({
      toast: true,
      position: "center-left",
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    });
    Toast.fire({
      icon: "error",
      title: "Debe ingresar al menos algun texto"
    });
  } else {
    words = inputValue.split(", ");
    console.log(inputValue);
      for (let i= 0; i < words.length; i++){
                       if (words[i].includes("ai") || words[i].includes("enter") || words[i].includes("imes")|| words[i].includes("ober") || words[i].includes("ufat")) {
                        words[i] = words[i].replace(/ai/g, "a"); //la g corresponde a una busqueda global de coincidencias
                        words[i] = words[i].replace(/enter/g, "e");
                        words[i] = words[i].replace(/imes/g, "i");
                        words[i] = words[i].replace(/ober/g, "o");
                        words[i] = words[i].replace(/ufat/g, "u");
                          console.log("Dentro del ciclo for: "+words);
                       }           
      }
      console.log(words);
    assignTextToElement('h2',words);
    assignTextToElement('p',"Texto desencriptado!");
      buttonCopy.style.display="flex";
      cleanField();
 
  }   
})

let cleanField = ()=>{
    firstTextArea = document.getElementById('firstTextArea').value = "";
}

let captureMsg = ()=>{
    console.log("Ingreso a la funcion");
    firstTextArea = document.getElementById('firstTextArea').value;
    console.log(firstTextArea);

        // Obtener el valor actual del textarea
        inputValue = firstTextArea;

        words = inputValue.split(" ");

       for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < specialCharacteres.length; j++) {
            if (words[i].includes(specialCharacteres[j])) {
                
                  const Toast = Swal.mixin({
                    toast: true,
                    position: "center-left",
                    showConfirmButton: false,
                    timer: 2000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                      toast.onmouseenter = Swal.stopTimer;
                      toast.onmouseleave = Swal.resumeTimer;
                    }
                  });
                  Toast.fire({
                    icon: "error",
                    title: "Por favor No ingrese caracteres especiales"
                  });
              cleanField();
              return;  
            };
            for (let k = 0; k < upperCase.length; k++) {
            if (words[i].includes(upperCase[k])) {
                const Toast = Swal.mixin({
                    toast: true,
                    position: "center-left",
                    showConfirmButton: false,
                    timer: 2000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                      toast.onmouseenter = Swal.stopTimer;
                      toast.onmouseleave = Swal.resumeTimer;
                    }
                  });
                  Toast.fire({
                    icon: "error",
                    title: "Por favor No ingrese letras Mayusculas"
                  });
                cleanField();
                return;
            }
            }  
        }
    }
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


