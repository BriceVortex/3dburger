// MOVEMENT ANIMATION TO HAPPEN
const container = document.querySelector('.container');
const card = document.querySelector('.card');

// MOVEMENT ITEMS
const title = document.querySelector('.info h1');
const subTitle = document.querySelector('.info h3');
const burger = document.querySelector('.burger img');
const flavors = document.querySelector('.flavors');
const purchase = document.querySelector('.purchase');

// MOVING ANIMATION EVENT
container.addEventListener('mousemove', (e) => {
    // console.log(e.pageX);
    if(navigator.userAgent.indexOf("Firefox") != -1 ) 
    {
        let xAxis = (window.innerWidth / 2 - e.pageX) / -14;
        let yAxis = (window.innerHeight / 2 - e.pageY) / 26;
        card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    } else {
        let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
        let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
        card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    }
    
})

// ANIMATE IN
container.addEventListener('mouseenter', (e) =>{
    card.style.transition = 'none';
    burger.classList.add('animBurger');
    title.classList.add('animTitle');
    subTitle.classList.add('animSubTitle');
    flavors.classList.add('animFlavors');
    purchase.classList.add('animPurchase');
})

// ANIMATE OUT
container.addEventListener('mouseleave', (e) => {
    card.style.transition = 'all .3s ease-out';
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    burger.classList.remove('animBurger');
    title.classList.remove('animTitle');
    subTitle.classList.remove('animSubTitle');
    flavors.classList.remove('animFlavors');
    purchase.classList.add('animPurchase');
})