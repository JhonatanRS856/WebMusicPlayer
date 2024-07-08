document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('myForm');
    const input1 = document.getElementById('input1');
    const input2 = document.getElementById('input2');
    const warningMessage1 = document.getElementById('warningMessage1');
    const warningMessage2 = document.getElementById('warningMessage2');

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Evita el envío del formulario
        let valid = true;

        if (input1.value.trim() === '') {
            input1.classList.add('input-warning');
            warningMessage1.classList.remove('hidden');
            valid = false;
        } else {
            input1.classList.remove('input-warning');
            warningMessage1.classList.add('hidden');
        }

        if (input2.value.trim() === '') {
            input2.classList.add('input-warning');
            warningMessage2.classList.remove('hidden');
            valid = false;
        } else {
            input2.classList.remove('input-warning');
            warningMessage2.classList.add('hidden');
        }

        if (valid) {
            window.location.href = '../paginas/index.html'; // Redirige a la página deseada
        }
    });

    input1.addEventListener('input', () => {
        if (input1.value.trim() !== '') {
            input1.classList.remove('input-warning');
            warningMessage1.classList.add('hidden');
        }
    });

    input2.addEventListener('input', () => {
        if (input2.value.trim() !== '') {
            input2.classList.remove('input-warning');
            warningMessage2.classList.add('hidden');
        }
    });
});