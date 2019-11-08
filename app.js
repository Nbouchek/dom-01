const allLis = document.querySelectorAll('li');
const allLisByTagName = document.getElementsByTagName('li');

for (const iterator of allLis) {
  console.dir(iterator);
}

for (const iterator of allLisByTagName) {
  console.dir(iterator);
}
