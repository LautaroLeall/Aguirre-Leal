import { FaBalanceScale } from 'react-icons/fa'
import '../styles/Navbar.css'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg fixed-top">
            <div className="container">

                <a className="navbar-brand fw-bold fs-4 title-nav" href="#">
                    <FaBalanceScale className="me-2" />
                    Aguirre & Leal  
                </a>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">

                        <li className="nav-item">
                            <a className="nav-link" href="#inicio">Inicio</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#nosotros">Sobre Nosotros</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#servicios">Servicios</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#contacto">Contacto</a>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    )
}
