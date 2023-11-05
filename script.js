let crsr = document.querySelector('#cursur')
let crsrblr = document.querySelector('#cursur-blur')
let navh4 = document.querySelectorAll('.nav h4, .btn1, .card, .elem, .foot h3, .arrow, .toggle, .rispon-nav h4')
let toggle = document.querySelector(".toggle")


navh4.forEach((elem)=>{
    elem.addEventListener('mouseenter',()=>{
        crsr.style.scale = 2
        crsr.style.border = '1px solid white'
        crsr.style.backgroundColor = 'transparent'
    })
    elem.addEventListener('mouseleave',()=>{
        crsr.style.scale = 1
        crsr.style.border = '0px solid #bbff00'
        crsr.style.backgroundColor = '#bbff00'
    })
})



document.addEventListener('mousemove',(dets)=>{
    crsr.style.left = dets.x- -8 + 'px'
    crsr.style.top = dets.y- -8 + 'px'
    crsrblr.style.left = dets.x - 150 + 'px'
    crsrblr.style.top = dets.y - 150 + 'px'
})



let ris = 0

let risponnav = document.querySelector('.rispon-nav')
toggle.addEventListener('click',()=>{
    if (ris<=0) {
        risponnav.style.display = 'block'
        risponnav.style.width = 100 + '%'
        risponnav.style.height = 100 + 'vh' 
        ris = 1

    }else{
        risponnav.style.display = 'none'
        risponnav.style.width = 0 + '%'
        risponnav.style.height = 0 + 'vh'
        ris = 0
    }
})


gsap.to('.nav',{
    backgroundColor: 'black',
    height:'80px',
    scrollTrigger:{
        Trigger:'.nav',
        scroll:'body',
        // markers:true,
        start:'top -10%',
        end:'top -11%',
        scrub:2
    }
})

gsap.to('.main',{
    backgroundColor:'black',
    scrollTrigger:{
        Trigger:'.main',
        scroll:'body',
        // markers:true,
        start:'top -30%',
        end:'top -80%',
        scrub:3,
    }
})


gsap.from('.about-us img, .about-in',{
    y:50,
    opacity:0,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
        trigger:'.about-us',
        scroll:'body',
        // markers:true,
        start:'top 60%',
        end:'top 50%',
        scrub:3
    }
})

gsap.from('.card',{
    scale:0.8,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:'.card',
        scroll:'body',
        // markers:true,
        start:'top 60%',
        end:'top 50%',
        scrub:2
    }
})


gsap.from('#col1',{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:'#col1',
        scroll:'body',
        // markers: true,
        start:'top 40%',
        end:'top 30%',
        scrub:3
    }
})

gsap.from('#col2',{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:'#col2',
        scroll:'body',
        // markers: true,
        start:'top 85%',
        end:'top 80%',
        scrub:3
    }
})

gsap.from('.page4 h1',{
    y:50,
    scrollTrigger:{
        trigger:'.page4 h1',
        scroll:'.body',
        scrub:3,
        // markers:true,
        start:'top 70%',
        end:'top 65%',
    }
})





// The End fuck yess 