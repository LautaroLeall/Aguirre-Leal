import '../styles/About.css'

export default function About() {
    return (
        <section id="nosotros" className="about py-5">
            <div className="container">

                {/* Título */}
                <div className="text-center mb-5">
                    <h2 className="title-about">Sobre Mi</h2>
                    <p className="subtitle-about">
                        Profesional comprometido con la excelencia jurídica
                    </p>
                </div>

                <div className="row justify-content-center g-4">

                    {/* Abel */}
                    <div className="col-md-5" data-aos="fade-right">
                        <div className="card card-about border-0 shadow text-center p-4 h-100">
                            <img
                                src="/abel-aguirre.png"
                                alt="Abel Aguirre"
                                className="img-about mx-auto mb-3"
                            />
                            <h5 className="name-card fw-bold mb-1">Dr. Abel Aguirre</h5>
                            <p className="text-card mb-2">Abogado</p>
                            <p className="subtext-card">
                                Abogado con amplia experiencia en derecho de familia, penal, civil y previsional, comprometido con la defensa de sus clientes.
                            </p>
                        </div>
                    </div>

                    {/* María */}
                    {/* <div className="col-md-5" data-aos="fade-left">
                        <div className="card card-about border-0 shadow text-center p-4 h-100">
                            <img
                                src="/maria.jpg"
                                alt="María Pía Leal"
                                className="img-about mx-auto mb-3"
                            />
                            <h5 className="name-card fw-bold mb-1">Dra. María Pía Leal</h5>
                            <p className="text-card mb-2">Abogada</p>
                            <p className="subtext-card">
                                Especializada en derecho empresarial y laboral,
                                brindando asesoramiento estratégico a empresas y particulares.
                            </p>
                        </div>
                    </div> */}

                </div>

            </div>
        </section>
    )
}
