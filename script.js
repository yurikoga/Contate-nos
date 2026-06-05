document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const btn = this.querySelector('button');
    const originalText = btn.innerText;

    // Simulação de envio
    btn.innerText = 'Sending...';
    btn.style.opacity = '0.7';
    btn.disabled = true;

    setTimeout(() => {
        alert('Message sent successfully!');
        btn.innerText = originalText;
        btn.style.opacity = '1';
        btn.disabled = false;
        this.reset(); // Limpa o formulário
    }, 1500);
});
