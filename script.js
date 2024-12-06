const form = document.getElementById('recuerdos-form');
const lista = document.getElementById('recuerdos-lista');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const texto = document.getElementById('recuerdo').value;
    if (texto) {
        const nuevoRecuerdo = document.createElement('p');
        nuevoRecuerdo.textContent = texto;
        lista.appendChild(nuevoRecuerdo);
        form.reset();
    }
});
