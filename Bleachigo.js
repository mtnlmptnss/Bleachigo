document.addEventListener('DOMContentLoaded', function() {
    const toggleMenuButton = document.querySelector('.toggle-menu');
    const menu = document.querySelector('.menu');

    toggleMenuButton.addEventListener('click', function() {
        menu.classList.toggle('visible');
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const articles = document.querySelectorAll('.style');

    articles.forEach(article => {
        article.addEventListener('click', () => {
            const link = article.getAttribute('data-link');
            if (link) {
                window.location.href = link;
            }
        });
    });
});


document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
});


document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращает отправку формы
    
    // Показываем уведомление
    const notification = document.getElementById('notification');
    notification.classList.add('show');

    // Через 3 секунды скрываем уведомление
    setTimeout(function() {
        notification.classList.remove('show');
    }, 4000);

    // Очистка полей формы (опционально)
    this.reset();
});
