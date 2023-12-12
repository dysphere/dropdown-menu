import './style.css'

const drop = document.querySelector(".dropdown")
drop.addEventListener('click', () => {
const list = document.querySelector('.content');
list.style.visibility = "visible";
})

const content = document.querySelector('.content')
content.addEventListener('mouseover', () => {
    const list = document.querySelector('.content');
list.style.visibility = "visible";
})

content.addEventListener('mouseout', () => {
    const list = document.querySelector('.content');
list.style.visibility = "hidden";
})