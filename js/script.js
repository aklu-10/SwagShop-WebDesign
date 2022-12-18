let menu=document.querySelector(".menu");

window.addEventListener("resize",setMenuWidth);
window.addEventListener("load",setMenuWidth);

function setMenuWidth()
{
    window.innerWidth<900? menu.style.maxWidth='0px':menu.style.maxWidth='60vw';
}

function toggleMenu()
{
    if (menu.style.maxWidth=='0px')
    {
        menu.style.maxWidth='60vw';
    }
    else
    {
        menu.style.maxWidth='0px';
    }
}

window.onscroll=()=>
{
    let header=document.querySelector(".header");
    if(window.scrollY>0)
    {
        header.classList.add("active");
    }
    else
    {
        header.classList.remove("active");
    }
}

let parentslider=document.querySelector(".images");
let slider=document.querySelector(".allslides");
let slides=document.querySelectorAll(".slide");
let leftarrow=document.querySelector(".leftarrow");
let rightarrow=document.querySelector(".rightarrow");

let slidenum=1
let totalslides=slides.length

const nextSlide=()=>
{
    slider.style.transform=`translateX(-${400*slidenum}px)`;
    slidenum++;
}

const getFirstSlide=()=>
{
    slider.style.transform=`translateX(0px)`;
    slidenum=1;
}


const prevSlide=()=>
{
    console.log(slidenum);
    console.log(400*slidenum)
    slider.style.transform=`translateX(${4}%)`;
    slidenum--;
}

const getLastSlide=()=>
{
    slider.style.transform=`translateX(-${50}%)`;
    slidenum=totalslides-1;
}



rightarrow.addEventListener("click",(e)=>
{   
    slidenum<totalslides-1? nextSlide() : getFirstSlide(); 
})

leftarrow.addEventListener("click",(e)=>
{   
    e.stopPropagation();
    slidenum > 2 ? prevSlide() : getLastSlide(); 
})




