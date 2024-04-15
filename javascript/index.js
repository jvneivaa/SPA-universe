import { Router } from './router.js'

const router = new Router()
router.add('/', 'pages/home.html')
router.add('/the-universe', '/pages/the-universe.html')
router.add('/exploration', '/pages/exploration.html')
router.add(404, '/pages/404.html')

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()

document.getElementById('Home').addEventListener('click', function() {
    document.querySelectorAll('nav a').forEach(link => {
        link.classList.remove('active');
    });
    document.body.style.backgroundImage = "url('./img/mountains-universe-1.png')";
    this.classList.add('active');
});

document.getElementById('Universe').addEventListener('click', function() {
    document.querySelectorAll('nav a').forEach(link => {
        link.classList.remove('active');
    });
    document.body.style.backgroundImage = "url('./img/mountains-universe02.png')"
    this.classList.add('active');
});

document.getElementById('Exploration').addEventListener('click', function() {
    document.querySelectorAll('nav a').forEach(link => {
        link.classList.remove('active');
    });
    document.body.style.backgroundImage = "url('../img/mountains-universe-3.png')"
    this.classList.add('active');
});