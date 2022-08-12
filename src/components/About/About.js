import React from 'react'
import './about.css'
import Imagen1 from '../../assets/image1_about.png'
import Imagen2 from '../../assets/image2_about.png'
import Imagen3 from '../../assets/image3_about.png'
import Imagen4 from '../../assets/image4_about.png'

const About = () => {
  return (
    <section id='about-us' className='about'>
        <div className='about__section'>
            <div className='about__left'>
                <h1 className='about__left--title'>About us</h1>
                <p className='about__left--text'>Comfort is key and how you feel about your chair will <br></br>affect how you feel and your mood.</p>
                <div className='about__left--numeration'>
                    <div className='about__left--numeration-one'>
                        <h1 className='about__left--numeration-number'>1</h1>
                        <p className='about__left--numeration-title'>Mission</p>
                        <p className='about__left--numeration-text'>It makes people at ease and feel like they want to open up.</p>
                    </div>
                    <div className='about__left--numeration-three'>
                        <h1 className='about__left--numeration-number'>2</h1>
                        <p className='about__left--numeration-title'>Motivation</p>
                        <p className='about__left--numeration-text'>The perfect mix of art that complements the room's style.</p>
                    </div>
                    <div className='about__left--numeration-two'>
                        <h1 className='about__left--numeration-number'>3</h1>
                        <p className='about__left--numeration-title'>Vision</p>
                        <p className='about__left--numeration-text'>Along with a healthy dose of negative space to give the eyes spots to rest.</p>
                    </div>
                    <div className='about__left--numeration-four'>
                        <h1 className='about__left--numeration-number'>4</h1>
                        <p className='about__left--numeration-title'>Goal</p>
                        <p className='about__left--numeration-text'>Art that has meaning to the people who live in the space.</p>
                    </div>
                </div>
            </div>
            <div className='about__center'>
                <div className='about__center--first'>
                    <img src={Imagen1}></img>
                    <img src={Imagen2}></img>
                </div>
            </div>
            <div className='about__right'>
                <div className='about__right--first'>
                    <img src={Imagen3}></img>
                    <img src={Imagen4}></img>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About