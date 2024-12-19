// Seleciona o botão de alternar tema
const themeToggleButton = document.getElementById('themeToggle');

// Adiciona um ouvinte de evento para o clique
themeToggleButton.addEventListener('click', () => {
    // Alterna a classe 'dark-mode' no body
    document.body.classList.toggle('dark-mode');

    // Atualiza o texto do botão de acordo com o tema atual
    if (document.body.classList.contains('dark-mode')) {
        themeToggleButton.textContent = 'Alternar para Tema Claro';
    } else {
        themeToggleButton.textContent = 'Alternar para Tema Escuro';
    }
});

// Formulário de contato
const contactForm = document.getElementById('contactForm');

// Adiciona um ouvinte de evento para o envio do formulário
contactForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Impede o envio do formulário por padrão

    // Aqui você pode adicionar o código para processar o envio do formulário

    // Limpa os campos do formulário
    contactForm.reset();

    // Exibe uma mensagem de sucesso
    alert('Mensagem enviada com sucesso!');
});
