const resH1 = document.querySelector('#number');
const resDiv = document.querySelector('#results');
const resBtn = document.querySelector('#getData');



resBtn.addEventListener('click', () => {
  getAdvice();
});

window.onload = () => {
  getAdvice();
};

function getAdvice() {
  fetch('https://api.adviceslip.com/advice').then(response => {
    return response.json();
  }).then(adviceData => {
    const Adviceobj = adviceData.slip;
    resH1.innerHTML = `<h1>Advice #${Adviceobj.id}</h1>`;
    resDiv.innerHTML = `<p> “${Adviceobj.advice}”</p>`;
  }).catch(error => {
    console.log(error);
  });
}