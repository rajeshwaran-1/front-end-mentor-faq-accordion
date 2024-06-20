document.querySelectorAll('.accordion-btn').forEach(button => {
    button.addEventListener('click', function() {
        var content = this.nextElementSibling;
        var iconPlus = this.querySelector('.icon-plus');
        var iconMinus = this.querySelector('.icon-minus');
        
        content.classList.toggle('hidden');
        iconPlus.classList.toggle('hidden');
        iconMinus.classList.toggle('hidden');
    });
});
