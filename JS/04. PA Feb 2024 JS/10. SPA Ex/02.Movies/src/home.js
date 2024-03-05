export function showHome() {
    document.querySelectorAll('section').forEach(section => section.style.display = 'none');
    document.getElementById('home-page').style.display = 'block';
}