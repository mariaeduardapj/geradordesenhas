// Alternar entre abas
function showTab(tabName) {
    document.getElementById('generate').style.display = tabName === 'generate' ? 'block' : 'none';
    document.getElementById('evaluate').style.display = tabName === 'evaluate' ? 'block' : 'none';
}

// Gerador de senha
function generatePassword() {
    const customWord = document.getElementById('custom-word').value.trim();
    let password = '';

    if (customWord) {
        password += customWord;
    }

    const length = parseInt(document.getElementById('length').value);
    const useUppercase = document.getElementById('uppercase').checked;
    const useLowercase = document.getElementById('lowercase').checked;
    const useNumbers = document.getElementById('numbers').checked;
    const useSpecial = document.getElementById('special').checked;

    let characters = '';
    if (useUppercase) characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (useLowercase) characters += 'abcdefghijklmnopqrstuvwxyz';
    if (useNumbers) characters += '0123456789';
    if (useSpecial) characters += '!@#$%^&*()_+[]{}|;:,.<>?';

    if (characters === '') {
        alert('Selecione pelo menos um conjunto de caracteres!');
        return;
    }

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters.charAt(randomIndex);
    }
    document.getElementById('generated-password').innerText = password;
}

// Avaliação de senha
function evaluatePassword() {
    const password = document.getElementById('password-input').value;
    let strength = "Fraca";

    if (password.length >= 8) {
        if (/[A-Z]/.test(password) && /[0-9]/.test(password) && /[\W_]/.test(password)) {
            strength = "Forte";
        } else if (/[A-Z]/.test(password) || /[0-9]/.test(password) || /[\W_]/.test(password)) {
            strength = "Média";
        }
    }

    document.getElementById('password-strength').innerText = strength;
}
