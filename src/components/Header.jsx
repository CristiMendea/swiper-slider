import { useContext } from 'react'
import logoImg from '../assets/swiper-logo.png'
import Button from './Button'
import CartContext from '../store/CartContext'
export default function Header(){
   const cartCtx = useContext(CartContext);
   const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item)=> {
    return totalNumberOfItems + item.quantity
   }, 0)
    return (
        <header className="main-header">
             <div className="main-header__container">
                <div className="logo">
                    <img src={logoImg} alt='Swiper Logo'/>
                </div>
                <nav className="cart-button">
                    <Button textOnly>Cart ({totalCartItems})</Button>
                </nav>
            </div>
        </header>
    )
}