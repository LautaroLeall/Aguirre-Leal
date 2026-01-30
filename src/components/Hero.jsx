// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import '../styles/Hero.css'

export default function Hero() {
    return (
        <section
            id="inicio"
            className="hero d-flex align-items-center"
        >
            <div className="container">
                <div className="row align-items-center">

                    {/* Texto */}
                    <div className="col-md-6">

                        <motion.h1
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="title-hero display-5"
                        >
                            Defensa Legal Confiable <br />
                            para Vos y tu Empresa
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="text-hero mt-3"
                        >
                            En Aguirre & Leal brindamos asesoramiento jurídico
                            profesional, transparente y personalizado.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="mt-4"
                        >
                            <a href="#contacto" className="btn btn-lg btn-consulta me-4">
                                Consultar Ahora
                            </a>

                            <a href="#servicios" className="btn btn-lg btn-servicios">
                                Ver Servicios
                            </a>
                        </motion.div>
                    </div>

                    {/* Imagen */}
                    <div className="col-md-6 text-center mt-5 mt-md-0">

                        <motion.img
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            src="/logo.png"
                            alt="Estudio Jurídico"
                            className="img-fluid img-hero"
                        />

                    </div>

                </div>
            </div>
        </section>
    )
}
