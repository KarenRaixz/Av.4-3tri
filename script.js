// script.js
document.getElementById('gradeForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o recarregamento da página
    
    // Obtém os valores das notas
    const grade1 = parseFloat(document.getElementById('grade1').value);
    const grade2 = parseFloat(document.getElementById('grade2').value);
    const grade3 = parseFloat(document.getElementById('grade3').value);
    const result = document.getElementById('result');

    // Verifica se as notas são válidas
    if (isNaN(grade1) || isNaN(grade2) || isNaN(grade3)) {
        result.textContent = 'Por favor, insira todas as notas corretamente 🌸';
        result.style.color = 'red';
        return;
    }

    // Calcula a média
    const average = (grade1 + grade2 + grade3) / 3;

    // Define a mensagem com base na média
    if (average >= 6) {
        result.textContent = `Parabéns, você está aprovada(o)! 🌸 Sua média é ${average.toFixed(1)}`;
        result.style.color = '#4b6584'; // Cor azul vintage
    } else {
        result.textContent = `Infelizmente, você está reprovada(o). Sua média é ${average.toFixed(1)}`;
        result.style.color = 'red';
    }
});
