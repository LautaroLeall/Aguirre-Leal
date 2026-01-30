import {
    FaGavel,
    FaHandshake,
    FaUsers,
    FaBriefcase,
    FaBalanceScale,
    FaUserClock
} from 'react-icons/fa'

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
                    <div className="col-md-6 col-lg-4" data-aos="fade-up">
                        <div className="card card-services h-100 shadow-sm border-0 text-center p-4">
                            <FaUsers size={40} className="icon-services mb-3" />
                            <h5 className="title-card fw-bold">Derecho de Familia</h5>
                            <p className="subtext-card">
                                Asesoramos en divorcios, alimentos, régimen de visitas y conflictos familiares, protegiendo sus derechos.
                            </p>
                        </div>
                    </div>

                    {/* Servicio 2 */}
                    <div className="col-md-6 col-lg-4" data-aos="fade-up">
                        <div className="card card-services h-100 shadow-sm border-0 text-center p-4">
                            <FaGavel size={40} className="icon-services mb-3" />
                            <h5 className="title-card fw-bold">Defensas y Querellas</h5>
                            <p className="subtext-card">
                                Defensa penal, querellas y representación legal en procesos judiciales, con compromiso profesional.
                            </p>
                        </div>
                    </div>

                    {/* Servicio 3 */}
                    <div className="col-md-6 col-lg-4" data-aos="fade-up">
                        <div className="card card-services h-100 shadow-sm border-0 text-center p-4">
                            <FaBriefcase size={40} className="icon-services mb-3" />
                            <h5 className="title-card fw-bold">Derecho Laboral</h5>
                            <p className="subtext-card">
                                Asesoramiento en despidos, contratos, reclamos laborales y defensa de derechos del trabajador.
                            </p>
                        </div>
                    </div>

                    {/* Servicio 4 */}
                    <div className="col-md-6 col-lg-4" data-aos="fade-up">
                        <div className="card card-services h-100 shadow-sm border-0 text-center p-4">
                            <FaBalanceScale size={40} className="icon-services mb-3" />
                            <h5 className="title-card fw-bold">Sucesiones</h5>

                            <p className="subtext-card">
                                Gestión de herencias, testamentos y trámites sucesorios, brindando seguridad jurídica.
                            </p>
                        </div>
                    </div>

                    {/* Servicio 5 */}
                    <div className="col-md-6 col-lg-4" data-aos="fade-up">
                        <div className="card card-services h-100 shadow-sm border-0 text-center p-4">
                            <FaHandshake size={40} className="icon-services mb-3" />
                            <h5 className="title-card fw-bold">Procesos Civiles</h5>
                            <p className="subtext-card">
                                Representación en juicios civiles y administrativos, defendiendo sus intereses legales.
                            </p>
                        </div>
                    </div>

                    {/* Servicio 6 */}
                    <div className="col-md-6 col-lg-4" data-aos="fade-up">
                        <div className="card card-services h-100 shadow-sm border-0 text-center p-4">
                            <FaUserClock size={40} className="icon-services mb-3" />
                            <h5 className="title-card fw-bold">Previsional</h5>
                            <p className="subtext-card">
                                Tramitamos jubilaciones, pensiones y beneficios previsionales de forma segura y eficiente.
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}
