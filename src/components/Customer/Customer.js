import React from 'react'
import './customer.css'
import Imagen1 from '../../assets/picture_customer.png'
import Imagen2 from '../../assets/star_customer.png'
import Imagen3 from '../../assets/quote-up_customer.png'

export const Customer = () => {
  return (
    <section className='customer'>
        <div className='customer__section'>
            <h1 className='customer__section--title'>What do customers say...</h1>
            <div className='customer__section--all'>
                <div className='customer__section--left'>
                    <img src={Imagen1}></img>
                    <img src={Imagen2}></img>
                </div>
                <div className='customer__section--right'>
                    <img src={Imagen3}></img>
                    <h3>Amazing Service</h3>
                    <p className='customer__section--right-text'>Since the online marketplace can be a scary place, the presence of customer reviews on an online store helps establish authenticity, confidence, and trust among shoppers. </p>
                    <h4>Wade Warren</h4>
                    <p className='customer__section--right-subtitle'>Doctor</p>
                    <div>
                        <label className="fas fa-angle-left"></label>
                        <label className="fas fa-angle-right"></label>
                    </div>
                </div>
            </div>
            
        </div>
    </section>
  )
}
