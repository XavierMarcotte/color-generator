// const limite = 256;
// let nouveauParagraphe = document.createElement("p");

// let var1 = Math.floor(Math.random() * limite);
// // console.log(var1);
// let var2 = Math.floor(Math.random() * limite);
// // console.log(var2);
// let var3 = Math.floor(Math.random() * limite);
// // console.log(var3);


// let texte = document.createTextNode(`Rgb : ${var1}, ${var2}, ${var3}`);
// nouveauParagraphe.appendChild(texte);


// document.body.appendChild(nouveauParagraphe);
// document.body.style.backgroundColor = `rgb(${var1}, ${var2}, ${var3})`;


function getColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
  
    const color = `rgb(${r}, ${g}, ${b})`;
  
    document.body.style.background = color;
    document.body.innerHTML = `<h2>${color}</h2>`;
  }
  
  setInterval(getColor, 2000);