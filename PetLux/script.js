//Controle dos submenus
document.querySelectorAll('.menu-toggle').forEach(item => {
    item.addEventListener('click', e => {
        e.preventDefault(); // impede navegação
        const li = item.closest('.item-menu');
        li.classList.toggle('active');
    });
});
