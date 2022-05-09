import {navbar}from '../component/navbar.js';
import footer from '../component/footer.js';


let navbar1 =document.getElementById('navbar');
navbar1.innerHTML = navbar();
let ft=document.querySelector('#footer');
ft.innerHTML=footer();

