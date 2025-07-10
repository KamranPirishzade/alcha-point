import { useGSAP } from '@gsap/react'
import React from 'react'
import { SplitText } from 'gsap/all'
import gsap from 'gsap'

const Hero = () => {
    useGSAP(()=>{
        const titleSplit=new SplitText(".title",{type:"chars, words"});
        const paragraphSplit=new SplitText(".subtitle",{type:"chars"});

        titleSplit.chars.forEach(char=>{
            char.classList.add("text-gradient")
        })

        gsap.from(titleSplit.chars,{
            yPercent:100,
            duration:1.8,
            ease:"expo.out",
            stagger:0.05
        });

        gsap.from(paragraphSplit.chars,{
            yPercent:100,
            opacity:0,
            duration:1.8,
            ease:"expo.out",
            stagger:0.005,
            delay:1
        })

        gsap.timeline({
            scrollTrigger:{
                trigger:"#hero",
                start:"top top",
                end:"bottom top",
                scrub:true,
            }})
            .to(".right-leaf",{y:200},0)
            .to(".left-leaf",{y:-200},0)



    },[])
  return (
    <>
    <section id="hero" className='noisy'>
        <h1 className="title">Alcha Point</h1>
        <img src="/images/hero-left-leaf.png" alt="Leaf image" className='left-leaf'/>
        <img src="/images/hero-right-leaf.png" alt="Leaf image" className='right-leaf'/>
        <div className='body'>
            <div className="content">
                <div className="space-y-5 hidden md:block">
                    <p>berry, fruit, and vine.</p>
                    <p className='subtitle'>
                        Voila
                    </p>
                </div>
            </div>
            <div className="view-cocktails">
                <p className='subtitle'>Every cocktail on our menu is a blend of premium ingredients, creative flair, and timeless recipes — designed to delight your senses. </p>
                <a href="#coctails">View cocktails</a>
            </div>
        </div>
    </section>
    </>
  )
}

export default Hero