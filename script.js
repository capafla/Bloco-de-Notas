const fonteMenos = document.getElementById("fonte-menos");
const fonteMais = document.getElementById("fonte-mais");
const textArea = document.getElementById("texto");
let font = 18

fonteMenos.addEventListener("click", () => {
    font -= 2;
    textArea.style.fontSize = font + 'px';
})

fonteMais.addEventListener("click", () => {
    font += 2;
    textArea.style.fontSize = font + 'px';
})