// importar toda a biblioteca react
import React from 'react'

import './Titulo.css'

export default function Titulo(props) {
    return (
        <div className="Titulo">

            <h4> {props.texto} </h4>

        </div>
    )
}