import React from 'react'
import Header from '../../components/Header/Header.jsx'
import './Index.scss'


const Index = () => {
    return (
        <div className='container_home'>
            <Header />
            <h1>Prazer sou.</h1>
            <h1 className='nome'>João Victor Miranda</h1>
        </div>
    )
}

export default Index