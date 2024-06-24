function valorInput() {
    var valorInput = document.getElementById('inputValor').value;
    var paragrafo = document.getElementById('valorExibido');
    paragrafo.textContent = "O valor digitado é: " + valorInput;
}
