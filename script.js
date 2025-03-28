// Formani tekshirish va xabarni ko'rsatish
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Shaklni avtomatik jo'natishni oldini oladi

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        document.getElementById('form-message').textContent = 'Xabaringiz muvaffaqiyatli yuborildi!';
        document.getElementById('form-message').style.color = 'green';

        // Shaklni tozalash
        this.reset();
    } else {
        document.getElementById('form-message').textContent = 'Iltimos, barcha maydonlarni to\'ldiring!';
        document.getElementById('form-message').style.color = 'red';
    }
});
