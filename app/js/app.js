
gsap.registerPlugin(ScrollTrigger);
// *****************  Progress bar ********************* \\
gsap.to('progress', {
    value: 100,
    ease: 'none', 
    scrollTrigger: { scrub: 0.3}
});


// ***************** Loading Animation ****************** \\
let intro = document.querySelector('.top');
let rotate = document.querySelector('.top-log')
window.addEventListener('load',()=>{
    gsap.to('.top-t',{
        opacity:1,
        x:-600,
        duration:4,
    })
    gsap.to('.line',{
        height:0,
        duration:3,
    })
    setTimeout(()=>{
        rotate.classList.add('rotate')
    },100)
    setTimeout(()=>{
        document.body.classList.remove('overflow')
        gsap.to('.top-log',{
        scale: 0,
        duration:1,
    })
    },2500)
    setTimeout(()=>{
        document.body.classList.remove('overflow')
        intro.style.transform = 'translateY(-100%)'
        // intro.style.opacity = '0.5'
        document.body.classList.remove('overflow')
    },3300)
})


// ************** Dark Mode Toggle ***************** \\
const toggle = document.querySelector('.toggle');
const slider = document.querySelector('.ball-slider');
const mainTag = document.querySelector('main')
const footer = document.querySelector('footer')
const namingAudIn = document.querySelector('#naming-audIn')
const namingAudOut = document.querySelector('#naming-audOut')

toggle.addEventListener('click',()=>{
    slider.classList.toggle('on')
    mainTag.classList.toggle('main-tag')
    footer.classList.toggle('m')
    namingAudOut.play();
})
// ***************************************************** \\

