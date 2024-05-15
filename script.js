function page1Animation(){
    var tl = gsap.timeline()

tl.from("nav h1, nav h4, nav button, nav #menu i", {
    y: -40,
    duration: 0.7,
    delay: 0.5,
    opacity: 0,
    stagger: 0.15
})

tl.from(".center-part1 h1", {
    x: -200,
    opacity: 0,
    duration: 0.5
})

tl.from(".center-part1 p", {
    x: -100,
    opacity: 0,
    duration: 0.4
})
tl.from(".center-part1 button", {
    opacity: 0,
    duration: 0.4
})

tl.from(".center-part2 img", {
    opacity: 0,
    duration: 0.5
},"-=0.5")

tl.from(".section1bottom img", {
    opacity: 0,
    y:30,
    stagger:0.15,
    duration: 0.5
})

}

page1Animation()


function page2Animation(){
    var tl2 = gsap.timeline({
        scrollTrigger:{
            trigger:".section2",
            scroller:"body",
            // markers:true,
            start:"top 50%",
            scrub:2,
            end:"top -60%"
        }
    })
    
    tl2.from(".services",{
        y:-30,
        opacity:0,
        duration:0.5
    })
    tl2.from(".elem.line1.left",{
        x:-100,
        opacity:0,
        duration:1
    },"anim")
    tl2.from(".elem.line1.right",{
        x:100,
        opacity:0,
        duration:1
    },"anim")
    tl2.from(".elem.line2.left",{
        x:-100,
        opacity:0,
        duration:1
    },"anim2")
    tl2.from(".elem.line2.right",{
        x:100,
        opacity:0,
        duration:1
    },"anim2")
    tl2.from(".elem.line3.left",{
        x:-100,
        opacity:0,
        duration:1
    },"anim3")
    tl2.from(".elem.line3.right",{
        x:100,
        opacity:0,
        duration:1
    },"anim3")
    tl2.from(".elem.line4.left",{
        x:-100,
        opacity:0,
        duration:1
    },"anim4")
    tl2.from(".elem.line4.right",{
        x:100,
        opacity:0,
        duration:1
    },"anim4")

    tl2.from(".section3 h1,.section3 p",{
        y:-30,
        duration:0.3,
        opacity:0,
        stagger:0.15
    },"anim5")

    tl2.from(".section3 chatbtn",{
        opacity: 0,
    duration: 0.3
    },"anim5")
    tl2.from(".imgSmile",{
        x:60,
        opacity: 0,
    duration: 0.3
    },"anim5")
}

page2Animation()




