import React from 'react'
import './Header.scss'
import { Link } from 'react-router'

const Header = () => {
    return (
        <div className='container_header'>
            <nav>
                <ul>
                    <li><Link to={'/'}>João</Link></li>
                    <li><Link to={'/'}>Inicio</Link></li>
                    <li><Link to={'/'}>Contatos</Link></li>
                    <li><Link to={'/'}>Serviços</Link></li>
                    <li><Link to={'/'}>Sobre Mim</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header