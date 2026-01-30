import { FaGavel, FaHandshake, FaBuilding, FaUserShield } from 'react-icons/fa'
import '../styles/Services.css'

export default function Services() {
    return (
        <section id="servicios" className="services py-5">
            <div className="container">

                {/* Título */}
                <div className="text-center mb-5">
                    <h2 className="title-services fw-bold">Servicios</h2>
                    <p className="subtitle-services">
                        Asesoramiento legal integral para personas y empresas
                    </p>
                </div>

                {/* Cards */}
                <div className="container-cards row g-4 justify-content-center">

                    {/* Servicio 1 */}
                    <div
                        className="col-md-6 col-lg-3"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        <div className="card card-services h-100 shadow-sm border-0 text-center p-4">

                            <FaHandshake size={40} className="icon-services mb-3" />

                            <h5 className="title-card fw-bold">Derecho Civil</h5>

                            <p className="subtext-card">
                                Asesoramos en contratos, daños, propiedad, posesión y responsabilidad civil, brindando soluciones legales claras y efectivas.
                            </p>

                        </div>
                    </div>

                    {/* Servicio 2 */}
                    <div className="col-md-6 col-lg-3" data-aos="fade-up">
                        <div className="card card-services h-100 shadow-sm border-0 text-center p-4">

                            <FaGavel size={40} className="icon-services mb-3" />

                            <h5 className="title-card fw-bold">Sucesiones</h5>

                            <p className="subtext-card">
                                Brindamos asesoramiento en herencias, testamentos, legados y planificación sucesoria, garantizando seguridad jurídica.
                            </p>

                        </div>
                    </div>

                    {/* Servicio 3 */}
                    <div
                        className="col-md-6 col-lg-3"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        <div className="card card-services h-100 shadow-sm border-0 text-center p-4">

                            <FaBuilding size={40} className="icon-services mb-3" />

                            <h5 className="title-card fw-bold">Divorcios</h5>

                            <p className="subtext-card">
                                Asesoramos y representamos en divorcios de mutuo acuerdo o contenciosos, priorizando sus derechos e intereses.
                            </p>

                        </div>
                    </div>

                    {/* Servicio 4 */}
                    <div
                        className="col-md-6 col-lg-3"
                        data-aos="fade-up"
                        data-aos-delay="300"
                    >
                        <div className="card card-services h-100 shadow-sm border-0 text-center p-4">

                            <FaUserShield size={40} className="icon-services mb-3" />

                            <h5 className="title-card fw-bold">Derecho Laboral</h5>

                            <p className="subtext-card">
                                Asesoramos en relaciones laborales, contratos, despidos y defensa de derechos, con respaldo profesional.
                            </p>

                        </div>
                    </div>

                    {/* Servicio 5 */}
                    <div
                        className="col-md-6 col-lg-3"
                        data-aos="fade-up"
                        data-aos-delay="300"
                    >
                        <div className="card card-services h-100 shadow-sm border-0 text-center p-4">

                            <FaUserShield size={40} className="icon-services mb-3" />

                            <h5 className="title-card fw-bold">Usucapion</h5>

                            <p className="subtext-card">
                                Asesoramos en prescripción adquisitiva para regularizar terrenos, viviendas y propiedades, garantizando seguridad legal.
                            </p>

                        </div>
                    </div>

                    {/* Servicio 6 */}
                    <div
                        className="col-md-6 col-lg-3"
                        data-aos="fade-up"
                        data-aos-delay="300"
                    >
                        <div className="card card-services h-100 shadow-sm border-0 text-center p-4">

                            <FaUserShield size={40} className="icon-services mb-3" />

                            <h5 className="title-card fw-bold">Contratos</h5>

                            <p className="subtext-card">
                                Redactamos y revisamos contratos civiles y comerciales, asegurando claridad, respaldo legal y protección jurídica.
                            </p>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
