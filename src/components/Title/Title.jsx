import React from 'react'
import EstilosTitle from './Title.css'

export const Title = (props) => {
    return (
        <h1 className='title__catalog'>{props.greeting}</h1>
    );
}

export default Title;