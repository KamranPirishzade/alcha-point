import React from 'react'
import { navLinks } from '../../constants/navLinks'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
const Navbar = () => {
    useGSAP(() => {
        const navTween = gsap.timeline({
            scrollTrigger: {
                trigger: "nav",
                start: "bottom top",
            }
        })
        navTween.fromTo("nav", {
            backgroundColor: "transparent",
        }, {
            backgroundColor: "#00000050",
            backgroundFilter: "blur(10px)",
            duration: 1,
            ease: "power1.inOut"
        })

        
    });
    return (
        <nav>
            <div>
                <a href="#home" className='flex items-center gap-2'>
                    <img src='/images/logo.svg' alt="Logo image" width={40} />
                    <p>Alcha Point</p>
                </a>
                <ul className='flex-center'>
                    {navLinks.map(item => (
                        <li key={item.id}>
                            <a href={`#${item.id}`}>{item.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>

    )
}

export default Navbar