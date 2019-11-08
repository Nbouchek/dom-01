const h1 = document.getElementById('main-title');
h1.textContent = 'Nacer';

h1.style.color = 'black';
h1.style.backgroundColor = 'green';

const allLis = document.querySelectorAll('li');
const allLisByTagName = document.getElementsByTagName('li');

for (const iterator of allLis) {
  console.dir(iterator);
}

for (const iterator of allLisByTagName) {
  console.dir(iterator);
}
