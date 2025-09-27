import {Link} from "react-scroll"
import { Mail, MapPin, Phone } from 'lucide-react'


const Footer = () => {
    return (
        <footer className=" bg-[#e31837] ">
            <div className="max-w-7xl mx-auto px-6 py-5">
                <div className="flex flex-col">
                    <div>
                        <h3 className="text-lg text-center font-semibold mb-2 text-yellow-500">Quick Links</h3>
                        <ul className="flex gap-5 justify-center items-center text-white cursor-pointer">
                            <Link to="home" smooth={true} duration={500}>Home</Link>
                            <Link to="plans" smooth={true} duration={500}>Plans</Link>
                            <Link to="testimonials" smooth={true} duration={500}>Testimonials</Link>
                            <Link to="contact" smooth={true} duration={500}>Contact</Link>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-0 text-yellow-500 text-center mt-5">Contact Us</h3>
                        <div className='lg:flex items-center justify-center gap-5 text-white'>
                            <div className='flex gap-2 justify-center items-center'>
                                <MapPin className='text-yellow-500' />
                                <div>
                                    <p>123, East Andheri</p>
                                    <p>Mumbai, MH 12345</p>
                                </div>
                            </div>
                            <div className='flex gap-2 justify-center items-center'>
                                <Phone className='text-yellow-500 my-4' />
                                <p>Phone: (123) 456-7890</p>
                            </div>
                            <div className='flex gap-2 justify-center items-center '>
                                <Mail className='text-yellow-500' />
                                <p>Email: ielts@fictional.com</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-8 border-t border-black pt-8 text-center text-white">
                    <p>&copy; 2025 <span className='text-yellow-500 font-semibold'>Fictional </span>IELTS. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
