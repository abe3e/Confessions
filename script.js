document.getElementById('submit').addEventListener('click', function() {
    const passwordInput = document.getElementById('pswd').value;
    const correctPassword = 'admin';

    if (passwordInput === correctPassword) {
        window.location.href = 'confessions.html';
    } else {
        const messageElement = document.getElementById('message');
        messageElement.innerText = 'Incorrect password. Please try again.';
        messageElement.style.display = 'block'; 
        document.getElementById('password').value = ''; 
        document.getElementById('password').focus();
    }
});
