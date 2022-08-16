import React, {useRef} from 'react';
import logo from '../../assets/images/Mc Logo.png';
import { NavLink, Link } from 'react-router-dom';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { AiOutlineUser } from 'react-icons/ai';
import { AiOutlineMenu } from 'react-icons/ai';
import { HiLocationMarker } from 'react-icons/hi';
import '../../styles/Header.css'
const nav__links = [
    {
        display: 'Home',
        path: '/home'
    },
    {
        display: 'Foods',
        path: '/foods'
    },
    {
        display: 'Cart',
        path: '/cart'
    },
    {
        display: 'Contact',
        path: '/contact'
    },
]

const Header = () => {

    const menuRef = useRef(null)
    const toggleMenu = ()=> menuRef.current.classList.toggle('show__menu')

    return (
        <div className='max-w-7xl mx-auto sticky top-0 px-5'>
            <div className='nav__wrapper flex items-center justify-between mt-6'>
                <div className='logo'>
                    <img src={logo} alt="" srcset="" />
                </div>
                {/* ---------- menu --------------- */}
                <div className='navigation' ref={menuRef}  onClick={toggleMenu}>
                    <div className='menu flex-row items-center gap-5'>
                        {
                            nav__links.map((item,index)=>(
                                <NavLink to={item.path} key={index}
                                className={navClass => navClass.isActive ? 'active__menu' : ''}
                                >{item.display}</NavLink>
                            ))
                        }
                    </div>
                    </div>
                    {/* ------------- nav right icon -------- */}
                    <div className='nav__right flex items-center gap-4'>
                        <span className='online__order'> <small>ONLINE ORDER</small></span>
                        <span className='online__location'> <i><HiLocationMarker/></i> <small>Location</small></span>
                        <span className='cart__icon flex items-center'><i><HiOutlineShoppingCart/></i>
                        <span className='cart__badge'>2</span>
                        </span>
                        <span className='user'>
                            <Link to='/login'><i><AiOutlineUser/></i></Link>
                        </span>
                        <span className='mobile__menu' onClick={toggleMenu}>
                            <i><AiOutlineMenu/></i>
                        </span>
                    </div>
            </div>
        </div>
    );
};

export default Header;