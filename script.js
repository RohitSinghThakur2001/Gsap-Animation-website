var tl = gsap.timeline();

gsap.from("#img1",{
    x:-350,
    y:-200,
    duration:2,
    opacity:0,
    rotate:20
  

})
gsap.from("#img2",{
    x:200,
    y:-200,
    duration:2,
    opacity:0,
    rotate:20


})
gsap.from("#img3",{
    x:380,
   duration:2,
   opacity:0,
   rotate:20

})
gsap.from("#img4",{
    x:-380,
    y:100,
    duration:2,
    opacity:0,
    rotate:20

})

gsap.from("nav",
{
    y:-100,
    duration:3,
    opacity:0
})
gsap.from(".page1-center-text>h1",
{
    y:50,
    duration:2,
    stagger:0.2,
    delay:1,
    opacity:0
})
tl.from("#scrollDown",{
    y:5,
    repeat:-1,
    yoyo:true
})

// function loco()
// {
//     gsap.registerPlugin(ScrollTrigger);

// const locoScroll = new LocomotiveScroll({
//   el: document.querySelector("#main"),
//   smooth: true,

//   // for tablet smooth
//   tablet: { smooth: true },

//   // for mobile
//   smartphone: { smooth: true }
// });
// locoScroll.on("scroll", ScrollTrigger.update);

// ScrollTrigger.scrollerProxy("#main", {
//   scrollTop(value) {
//     return arguments.length
//       ? locoScroll.scrollTo(value, 0, 0)
//       : locoScroll.scroll.instance.scroll.y;
//   },
//   getBoundingClientRect() {
//     return {
//       top: 0,
//       left: 0,
//       width: window.innerWidth,
//       height: window.innerHeight
//     };
//   }

// });


// ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// ScrollTrigger.refresh();

// }
// loco();

function page2Edit(){
    let clutter="" ;
    document.querySelector("#page2 h1").textContent.split(" ").forEach((elm)=>{
    clutter+=`<span> ${elm} </span>`;
    })
    document.querySelector("#page2 h1").innerHTML = clutter;

}
page2Edit();

gsap.to("#page2 h1 span ",{
    color:"white",
    stagger:0.2,
    duration:1,
    scrollTrigger:{
        trigger:"#page2 h1 span",
        scroll:"body",
        markers:true,
        end:"top 15%",
        start:"top 95%",
        scrub:1
    }
    
})