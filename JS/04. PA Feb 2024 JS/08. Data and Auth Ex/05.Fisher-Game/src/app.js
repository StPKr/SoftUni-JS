document.querySelector('a[id="home"]').classList.add('active');
let userData = JSON.parse(sessionStorage.getItem('userData'));

if (userData) {
    document.querySelector('a[id="login"]').style.display = 'none';
    document.querySelector('a[id="register"]').style.display = 'none';
    document.querySelector('a[id="logout"]').style.display = 'inline-block'

} else {
    document.querySelector('a[id="login"]').style.display = 'inline-block';
    document.querySelector('a[id="register"]').style.display = 'inline-block';
    document.querySelector('a[id="logout"]').style.display = 'none'
}