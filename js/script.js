let inputValue = "";
let image = document.getElementById('muñeco');
let words = [];
let buttonEncrypt = document.getElementById('encrypt');
let buttonDecrypt = document.getElementById('decrypt');
let buttonCopy = document.getElementById('copy');
let copyText = "";
let firstTextArea;
let specialCharacteres = "!@#$%^&*():'";
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let encryptedWords = [];

let vowels = {
  'a': 'ai',
  'e': 'enter',
  'i': 'imes',
  'o': 'ober',
  'u': 'ufat'
};

assignTextToElement('h2','Ningún mensaje fue encontrado');
assignTextToElement('p',"Ingresa el texto que desees desencriptar");

function assignTextToElement(element, text) {
    let elementHTML = document.querySelector(element);
    elementHTML.innerHTML = text;
}

buttonEncrypt.addEventListener('click', ()=>{
  inputValue = document.getElementById('firstTextArea').value;
  console.log(inputValue);
  if (inputValue.length === 0) {
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
    captureMsg(inputValue);
  }
})
let currentWord = [];

buttonCopy.addEventListener('click', ()=>{
    copyText = document.getElementById('copyText');
    navigator.clipboard.writeText(copyText.innerHTML);
    assignTextToElement('p',"Texto copiado!");
   cleanField();
})


buttonDecrypt.addEventListener('click', ()=>{
  inputValue = document.getElementById('firstTextArea').value;

  if (inputValue.length === 0) {
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
  } 
  let decryptedWords = []; // Aquí usamos un arreglo vacío
      for (let i = 0; i < words.length; i++) {
        let decrypt = words[i]
            .replace(/(ai|enter|imes|ober|ufat)/g, function(letter) {
                switch (letter) {
                    case "ai":
                        return "a";
                    case "enter":
                        return "e";
                    case "imes":
                        return "i";
                    case "ober":
                        return "o";
                    case "ufat":
                        return "u";
                }
            });

        decryptedWords.push(decrypt); // Aquí podemos usar el método push sin problemas
    }

      image.style.display="none";
   assignTextToElement('h2',decryptedWords.join(" ")); // Aquí usamos el método join para convertir el arreglo en una cadena
   assignTextToElement('p',"Texto desencriptado!");
      buttonCopy.style.display="flex";
      cleanField();

  }   
)

let cleanField = ()=>{
    firstTextArea = document.getElementById('firstTextArea').value = "";
}



let captureMsg = ()=>{
    console.log("Ingreso a la funcion");
    typeof(inputValue);
    //firstTextArea = document.getElementById('firstTextArea').value;
    console.log(inputValue);
    

        // Obtener el valor actual del textarea
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
      for (let i = 0; i < words.length; i++) {
          let encryptedWord = words[i]
              .replace(/[aeiou]/g, function(letter) {
                  switch (letter) {
                      case "a":
                          return "ai";
                      case "e":
                          return "enter";
                      case "i":
                          return "imes";
                      case "o":
                          return "ober";
                      case "u":
                          return "ufat";
                  }
              });
  
          encryptedWords.push(encryptedWord);
      }
} 
      console.log("mensaje encriptado: " + encryptedWords);
      showEncriptedMsg(encryptedWords);
      buttonCopy.style.display = "flex";
  }

        
function showEncriptedMsg(encryptedWords) {
  let encriptedWords = "";
  for (let i = 0; i < encryptedWords.length; i++) {
      encriptedWords += encryptedWords[i].replace(/,/g, " ") + " ";
  }

  image.style.display = "none";
  assignTextToElement('h2', encriptedWords.trim());
  assignTextToElement('p', "");
}


