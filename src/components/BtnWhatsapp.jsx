import { FaWhatsapp } from 'react-icons/fa'
import '../styles/BtnWhatsapp.css'

export default function BtnWhatsapp() {
    return (
        <a
            href="https://wa.me/543815446799"
            target="_blank"
            className="btn-whatsapp text-decoration-none"
        >
            <FaWhatsapp className='fs-3' />
        </a>
    )
}