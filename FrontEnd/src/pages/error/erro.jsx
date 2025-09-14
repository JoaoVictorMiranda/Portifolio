import { Link } from 'react-router'
import React from 'react'
import Header from '../../components/Header/Header'
import './erro.scss'

const Erro = () => {
    return (
        <div className='container_erro'>
            <Header />

            <div className="error">
                <h1> 404 NOT FOUND
                    Volte para o Inicio
                    <br />
                    <Link to={'/'}>Voltar</Link>
                </h1>
            </div>
        </div>
    )
}

export default Erro