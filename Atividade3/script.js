document.getElementById('somarBtn').addEventListener('click', function() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    if (!isNaN(num1) && !isNaN(num2)) {
        const soma = num1 + num2;
        document.getElementById('resultado').innerText = soma;
    } else {
        document.getElementById('resultado').innerText = 'Por favor, insira números válidos.';
    }
});

document.getElementById('confirmarBtn').addEventListener('click', function() {
    alert('Operação confirmada!');
});
