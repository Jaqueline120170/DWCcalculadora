// main.js
import { sumar, restar, multiplicar, dividir } from './operaciones.js';

function calcular(operacion) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('resultado').textContent = 'Error: Ingrese números válidos';
        return;
    }

    let resultado;

    switch (operacion) {
        case 'sumar':
            resultado = sumar(num1, num2);
            break;
        case 'restar':
            resultado = restar(num1, num2);
            break;
        case 'multiplicar':
            resultado = multiplicar(num1, num2);
            break;
        case 'dividir':
            resultado = dividir(num1, num2);
            break;
        default:
            resultado = 'Operación no válida';
    }

    // Mostrar el resultado
    document.getElementById('resultado').textContent = `Resultado: ${resultado}`;
}

// Añadir eventos a los botones
document.getElementById('btn-sumar').addEventListener('click', () => calcular('sumar'));
document.getElementById('btn-restar').addEventListener('click', () => calcular('restar'));
document.getElementById('btn-multiplicar').addEventListener('click', () => calcular('multiplicar'));
document.getElementById('btn-dividir').addEventListener('click', () => calcular('dividir'));
