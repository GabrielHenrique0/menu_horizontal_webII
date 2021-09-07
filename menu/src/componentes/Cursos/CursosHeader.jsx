import React from 'react'

// importar pacote Link que é parte do react-router-dom
import { Link } from 'react-router-dom'

import '../Header/Header.css'

export default function Header() {
    return (
        <div className="menu">
            <nav className="navMenu">
                <ul>
                    <li> <Link to="/"> Voltar </Link> </li>
                    <li> <Link to="/cursos"> Cursos </Link></li>

                    <li> <Link to="/cursos"> Contatos </Link></li>
                    <li> <Link to="/cursos"> Parceiros </Link></li>
                    <li> <Link to="/cursos"> Missão </Link></li>
                    <li> <Link to="/cursos"> Sobre </Link></li>
                </ul>
            </nav>
        </div>
    )
}

