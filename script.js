let piachart = document.getElementById('piachart');
let range = document.getElementById('range');

range.addEventListener('input', (e) => {
  piachart.style = `--percentage : ${e.target.value}%`;
})