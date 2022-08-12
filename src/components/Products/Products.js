import React from 'react'
import './products.css'
import Arrow from '../../assets/arrow-right_prouct.png'
import Imagen1 from '../../assets/Stool_product.png'
import Imagen2 from '../../assets/Tea-table_product.png'
import Imagen3 from '../../assets/Sofa-light_product.png'
import Imagen4 from '../../assets/Sofa-dark_product.png'
import Imagen5 from '../../assets/Table-lamp_product.png'
import Imagen6 from '../../assets/Chair_product.png'
import Imagen7 from '../../assets/Bedside-table_product.png'
import Imagen8 from '../../assets/Light-chair_product.png'

const Products = () => {
  return (
    <section className='products'>
        <div  className='products__section'>
            <div id='products' className='products__up'>
                <h1 className='products__up--title'>Products</h1>
                <div className='products__up--sections'>
                    <ul className='products__up--links'>
                        <li className='products__up--link products__up--link-active'>All</li>
                        <li className='products__up--link'>Chair</li>
                        <li className='products__up--link'>Table</li>
                        <li className='products__up--link'>Bed</li>
                        <li className='products__up--link'>Closet</li>
                        <li className='products__up--link'>Sofa</li>
                        <li className='products__up--link'>Cabinet</li>
                    </ul>
                </div>
            </div>
            <div className='products__down'>
                <div className='products__down--first'>
                    <div className='product__down--one'>
                        <img className='product__down--single' src={Imagen1}></img>
                        <h3>Stool</h3>
                        <div>
                            <p>$200</p>
                            <img src={Arrow}></img>
                        </div>
                    </div>
                    <div className='product__down--one'>
                        <img className='product__down--single' src={Imagen2}></img>
                        <h3>Tea Table</h3>
                        <div>
                            <p>$150</p>
                            <img src={Arrow}></img>
                        </div>
                    </div>
                    <div className='product__down--one'>
                        <img className='product__down--single' src={Imagen3}></img>
                        <h3>Sofa - Light</h3>
                        <div>
                            <p>$300</p>
                            <img src={Arrow}></img>
                        </div>
                    </div>
                    <div className='product__down--one'>
                        <img className='product__down--single' src={Imagen4}></img>
                        <h3>Sofa - Dark</h3>
                        <div>
                            <p>$300</p>
                            <img src={Arrow}></img>
                        </div>
                    </div>
                </div>
                <div className='products__down--second'>
                    <div className='product__down--one'>
                        <img className='product__down--single' src={Imagen5}></img>
                        <h3>Table Lamp</h3>
                        <div>
                            <p>$50</p>
                            <img src={Arrow}></img>
                        </div>
                    </div>
                    <div className='product__down--one'>
                        <img className='product__down--single' src={Imagen6}></img>
                        <h3>Chair</h3>
                        <div>
                            <p>$200</p>
                            <img src={Arrow}></img>
                        </div>
                    </div>
                    <div className='product__down--one'>
                        <img className='product__down--single' src={Imagen7}></img>
                        <h3>Bedside Table</h3>
                        <div>
                            <p>$100</p>
                            <img src={Arrow}></img>
                        </div>
                    </div>
                    <div className='product__down--one'>
                        <img className='product__down--single' src={Imagen8}></img>
                        <h3>Light Dark</h3>
                        <div>
                            <p>$80</p>
                            <img src={Arrow}></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Products