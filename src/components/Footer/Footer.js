import React from 'react'
import './footer.css'
import Logo from '../../assets/Logo.png'

export const Footer = () => {
  return (
    <>
      <section className='footer'>
        <div className='footer__section'>
          <div className='footer__section--one'>
            <img src={Logo}></img>
            <p>4517 Washington Ave. Manchester, Kentucky 39495</p>
          </div>
          <div className='footer__section--two'>
            <h3>Quick Links</h3>
            <ul>
              <a href=''><li>Gallery</li></a>
              <a href=''><li>About us</li></a>
              <a href=''><li>By online</li></a>
            </ul>
          </div>
          <div className='footer__section--three'>
            <h3>Policy</h3>
            <ul>
              <a href=''><li>Terms & conditionsy</li></a>
              <a href=''><li>Privacy policy</li></a>
            </ul>
          </div>
          <div className='footer__section--four'>
            <h3>Social</h3>
            <ul>
              <a href=''><li>Facebook</li></a>
              <a href=''><li>Instagram</li></a>
              <a href=''><li>LinkedIn</li></a>
            </ul>
          </div>
        </div>
      </section>
      <div className='footer__rights'>
        <p>Copyright ©2022 Zing Inc. All right reserved.</p>
      </div>
    </>
  )
}
