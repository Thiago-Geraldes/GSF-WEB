document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('alert-button').addEventListener('click', function() {
        alert('Wave is here');
    });

    // Validação de Login, funcionável?
    document.getElementById('login-form').addEventListener('submit', function(event) {
        event.preventDefault();
        let username = document.getElementById('username').value;
        let password = document.getElementById('password').value;
        if (username === 'admin' && password === '1234') {
            document.getElementById('login-message').innerText = 'Login realizado com sucesso!';
        } else {
            document.getElementById('login-message').innerText = 'Usuário ou senha incorretos!';
        }
    });
});