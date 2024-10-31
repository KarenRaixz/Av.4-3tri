// script.js
document.getElementById('gradeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const grade = parseFloat(document.getElementById('grade').value);
    const result = document.getElementById('result');
    
    if (isNaN(grade)) {
        result.textContent = 'Por favor, insira uma média válida 🌷';
        result.style.color = 'red';
        return;
    }

    if (grade >= 6) {
        result.textContent = 'Parabens, voce foi aprovada (o)! ';
        result.style.color = '#4b6584'; /* azul vintage */
    } else {
        result.textContent = 'Poxa, não foi dessa vez';
        result.style.color = 'red';
    }
});
