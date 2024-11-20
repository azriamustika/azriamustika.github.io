document.querySelectorAll('.item').forEach(item => {
    item.addEventListener('click', () => {
        alert('Anda memilih: ' + item.querySelector('h3').innerText);
    });
});
