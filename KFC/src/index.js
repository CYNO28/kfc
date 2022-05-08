import {navbar}from '../component/navbar.js';
import footer from '../component/footer.js';
// let cart_total=`0`;
// let user=`Sign In`;


let user=localStorage.getItem("user")||`Sign In`;


let navbar1 =document.getElementById('navbar');
navbar1.innerHTML = navbar();
let footerC=document.getElementById('footerC');
footerC.innerHTML = footer();

