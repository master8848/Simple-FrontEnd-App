const space = document.querySelectorAll('.space');
for (let box of space) {
  console.log(box);
  document.addEventListener('keydown', (key) => {
    console.log(key);
    box.innerText = key.key;
  });
}
