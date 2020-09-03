const colorBtn = document.querySelector('.colorBtn');
const bodyBcg = document.querySelector('body');


const colors = ['limegreen','whitesmoke','blue','crimson','yellow','violet','pink'];

colorBtn.addEventListener('click',changeColor);


function changeColor(){

// bodyBcg.style.backgroundColor = 'red';

let random  = Math.floor(Math.random()*colors.length);
 bodyBcg.style.backgroundColor = colors[random];

}
