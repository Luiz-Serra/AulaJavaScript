function calcular() {
    numero1 = parseFloat(numero1);
    
    if (!isNaN(numero)) {
        let quadrado = numero1 ** 2;
        let cubo = numero1 ** 3;
        
        document.getElementById("resultado").innerHTML = 
            `<p>O quadrado de ${numero1} é ${quadrado}</p>
             <p>O cubo de ${numero1} é ${cubo}</p>`;
    } else {
        alert("Por favor, digite um número válido.");
    }

    

}