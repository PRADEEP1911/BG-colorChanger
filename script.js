const color = document.getElementById("color");
const btn = document.getElementById("btn");
const wrap = document.getElementById("wrap");
const head = document.getElementById("heading");

const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

btn.addEventListener('click',changebg=()=>{
    let hexclr = '#';
    for(let i=1; i<=6; i++){
        hexclr+=randhex();
    }
    

    wrap.style.backgroundColor=hexclr;
    head.style.color=hexclr;
    btn.style.color=hexclr;
    color.textContent = hexclr;
});

function randhex(){
    let ind = Math.floor(Math.random()*16);
    
    return hex[ind];
};

// function changebg(){
//     let hexclr = '#';
//     for(let i=1; i<=6; i++){
//         hexclr+=randhex();
//     }
    

//     wrap.style.backgroundColor=hexclr;
//     color.textContent = hexclr;
// }




