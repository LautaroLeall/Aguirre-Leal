import {
    FaPhoneAlt,
    FaEnvelope,
    FaWhatsapp,
    FaGoogle,
    FaFacebookF,
    FaMobileAlt,
    FaMapMarkerAlt
} from 'react-icons/fa'


import '../styles/Contact.css'

export default function Contact() {
    return (
        <section id="contacto" className="contact py-5">
            <div className="container">

                {/* Título */}
                <div className="text-center mb-5">
                    <h2 className="title-contact fw-bold">Contacto</h2>
                    <p className="subtitle-contact">
                        Atención personalizada y respuesta inmediata
                    </p>
                </div>

                {/* Frase destacada */}
                <div
                    className="container-banner d-flex align-items-center justify-content-center mb-5"
                    data-aos="fade-up"
                >
                    <div
                        className="contact-banner text-center py-2 px-4"
                    >
                        <p className="m-0 p-0">
                            Tu consulta es importante. Comunicate directamente conmigo.
                        </p>
                    </div>
                </div>

                {/* Abogados */}
                <div className="row g-5 justify-content-center">

                    {/* Abel */}
                    <div className="col-md-6" data-aos="fade-right">

                        <div className="card card-contact border-0 shadow text-center p-4 h-100">
                            
                            <h4 className="name-card">Dr. Abel Aguirre</h4>
                            <span className="text-card">Abogado</span>

                            <div className="subtext-card mt-3">

                                {/* Teléfono */}
                                <div className="info-item">
                                    <FaPhoneAlt className="icon-contact" />
                                    <a
                                        href="https://wa.me/543815446799"
                                        target="_blank"
                                        className="text-decoration-none text-muted"
                                    >
                                        <span className='info-phone'>+54 9 3815 44-6799</span>
                                    </a>

                                    <a
                                        href="https://wa.me/543815446799"
                                        target="_blank"
                                        className="btn-contact whatsapp text-decoration-none"
                                    >
                                        <FaWhatsapp className='fs-4' />
                                    </a>
                                </div>

                                {/* Email */}
                                <div className="info-item">
                                    <FaEnvelope className="icon-contact" />
                                    <a
                                        href="mailto:abelhumbertoaguirre@gmail.com"
                                        className="text-decoration-none text-muted"
                                    >
                                        <span className='info-email'>abelhumbertoaguirre@gmail.com</span>
                                    </a>

                                    <a
                                        href="mailto:abelhumbertoaguirre@gmail.com"
                                        className="btn-contact gmail text-decoration-none"
                                    >
                                        <FaGoogle className='fs-5' />
                                    </a>
                                </div>

                                {/* Facebook */}
                                <div className="info-item">
                                    <FaMobileAlt className="icon-contact" />
                                    <a
                                        href="https://www.facebook.com/abelhumberto.aguirre"
                                        target="_blank"
                                        className="text-decoration-none text-muted"
                                    >
                                        <span className='info-facebook'>Abel Humberto Aguirre</span>
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
                    </div>

                    {/* María Pia */}
                    {/* <div className="col-md-6" data-aos="fade-left">
                        <div className="lawyer-box">
                            <h4 className="lawyer-name">Dra. María Pia Leal</h4>
                            <span className="lawyer-role">Abogada</span>
                            <div className="lawyer-info">
                                <div className="info-item">
                                    <FaPhoneAlt />
                                    <span>+54 381 555-2222</span>
                                    <a
                                        href="https://wa.me/543815552222"
                                        target="_blank"
                                        className="btn-contact whatsapp"
                                    >
                                        <FaWhatsapp />
                                    </a>
                                </div>
                                <div className="info-item">
                                    <FaEnvelope />
                                    <span>maria@gmail.com</span>
                                    <a
                                        href="mailto:maria@gmail.com"
                                        className="btn-contact gmail"
                                    >
                                        <FaGoogle />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div> */}

                </div>

                {/* Ubicación */}
                <div
                    className="location-card text-center mt-5"
                    data-aos="zoom-in"
                >
                    <FaMapMarkerAlt className="location-icon" />

                    <p>
                        San Miguel de Tucumán, Argentina
                    </p>
                </div>

            </div>
        </section>
    )
}
