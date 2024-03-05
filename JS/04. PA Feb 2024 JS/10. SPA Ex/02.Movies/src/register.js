export function showRegisterView() {
    document.querySelectorAll('section').forEach(section => section.style.display = 'none');
    document.getElementById('form-sign-up').style.display = 'block';

}


