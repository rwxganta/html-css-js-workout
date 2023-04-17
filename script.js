const box = document.querySelector('.box');

function changeBorderColor() {
    const colors = [
  'tomato',
  'steelblue',
  'dodgerblue',
  'firebrick',
  'forestgreen',
  'fuchsia',
  'gainsboro',
  'lightblue',
  'gold',
  'goldenrod',
  'gray',
  'green',
  'greenyellow',
  'grey',
  'honeydew',
  'hotpink',
  'indianred',
  'indigo',
  'ivory',
  'khaki'
];
    const rand = Math.floor(Math.random() * (colors.length - 1) + 1);
    box.style.borderColor = colors[rand];
}

setInterval(changeBorderColor, 3000);

console.log('Hello from Nerdbord!')