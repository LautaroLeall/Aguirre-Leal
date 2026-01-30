import {
    FaFacebookF,
    FaGoogle,
    FaWhatsapp,
    FaGithub,
    FaLinkedin
} from 'react-icons/fa'
import '../styles/Footer.css'

export default function Footer() {
    return (
        <footer className="footer pt-5 pb-3">
            <div className="container">

                <div className="row g-4">

                    {/* Marca */}
                    <div className="col-md-4">
                        <h5 className="title-footer fw-bold mb-3">Abel Humberto Aguirre</h5>

                        <p className="text-footer text-muted">
                            Estudio jurídico especializado en brindar soluciones
                            legales eficientes y personalizadas.
                        </p>
                    </div>

                    {/* Links */}
                    <div className="col-md-4">
                        <h5 className="fw-bold mb-3 subtitle-footer">Enlaces</h5>

                        <ul className="list-unstyled">
                            <li>
                                <a href="#inicio" className="text-decoration-none link-footer">
                                    Inicio
                                </a>
                            </li>
                            <li>
                                <a href="#nosotros" className="text-decoration-none link-footer">
                                    Sobre Mi
                                </a>
                            </li>
                            <li>
                                <a href="#servicios" className="text-decoration-none link-footer">
                                    Servicios
                                </a>
                            </li>
                            <li>
                                <a href="#contacto" className="text-decoration-none link-footer">
                                    Contacto
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Redes */}
                    <div className="col-md-4">
                        <h5 className="fw-bold mb-3 subtitle-footer">Contactate Conmigo</h5>

                        <div className="d-flex gap-3 fs-4">
                            <a
                                href="https://wa.me/543815446799"
                                target="_blank"
                                className="btn-contact whatsapp text-decoration-none"
                            >
                                <FaWhatsapp className='fs-4' />
                            </a>
                            <a
                                href="mailto:abelhumbertoaguirre@gmail.com"
                                className="btn-contact gmail text-decoration-none"
                            >
                                <FaGoogle className='fs-5' />
                            </a>
                            <a
                                href="https://www.facebook.com/abelhumberto.aguirre"
                                target="_blank"
                                className="btn-contact facebook text-decoration-none"
                            >
                                <FaFacebookF className='fs-5' />
                            </a>
                        </div>

                    </div>

                </div>

                {/* Línea final */}
                <hr className="border-secondary my-4" />

                <div className="footer-botton d-flex align-items-center">

                    <div className="redes-dev d-flex align-items-center gap-4">
                        <a href="https://github.com/LautaroLeall"
                            target="_blank"
                            className='github text-decoration-none'>
                            <FaGithub className='fs-4' />
                        </a>
                        <a href="https://www.linkedin.com/in/lauldp/"
                            target="_blank"
                            className='linkedin text-decoration-none'>
                            <FaLinkedin className='fs-4' />
                        </a>
                    </div>

                    <div className="text-center text-muted footer-dev mx-auto my-0">
                        © {new Date().getFullYear()} Lautaro Leal Del Prete
                    </div>
                </div>

            </div>
        </footer>
    )
}
