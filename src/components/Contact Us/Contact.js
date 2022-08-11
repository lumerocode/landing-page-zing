import React from 'react'
import './contact.css'
import Imagen1 from '../../assets/Image1_contact.png'
import Imagen2 from '../../assets/Image2_contact.png'
import Imagen3 from '../../assets/Image3_contact.png'
import Imagen4 from '../../assets/Image4_contact.png'

export const Contact = () => {
  return (
    <section className='contact'>
        <div className='contact__section'>
            <div className='contact__all--left'>
                <div className='contact__left'>
                    <div className='contact__left--first'>
                        <img src={Imagen1}></img>
                        <img src={Imagen2}></img>
                    </div>
                </div>
                <div className='contact__center'>
                    <div className='contact__center--first'>
                        <img src={Imagen3}></img>
                        <img src={Imagen4}></img>
                    </div>
                </div>
            </div>
            <div className='contact__right'>
                <h1 className='contact__right--title'>Contact Us</h1>
                <p className='contact__right--text'>Our team would love to hear from you!</p>
                <form className='contact__right--form'>
                    <div className='contact__form--first'>
                        <input type='text'placeholder='First name'/>   
                        <input type='text' placeholder='Last name' />
                    </div>
                    <input className='contact__form--second' type='text' placeholder='Email address'/>
                    <textarea className='contact__form--third' type='text' placeholder='Message'/>
                    <button className='contact__form--fourth'>Send message</button>
                </form>
            </div>
        </div>
    </section>
  )
}
