import { Menu } from 'lucide-react';
import { useState } from 'react'
import { Link } from "react-scroll"
import { motion } from "framer-motion"

function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <header className={`sticky mx-auto top-0 z-30 p-3 bg-[#e31837] border-2 border-[#d4af37] transition-all`}>
      <div className="max-w-7xl mx-auto ">
        {/* MobileNav */}
        <div className='flex md:hidden justify-between px-4'>
          <div href="/" className="text-primary  flex gap-1 items-center">
            <h1 className='text-yellow-500 font-bold text-xl '>
              Fictional
              <span className="text-white font-semibold">IELTS</span>
            </h1>
          </div>
          <div className='flex gap-8'>

            <button className='' onClick={() => setMobileNavOpen(prev => !prev)}>
              <Menu className='' />
            </button>
          </div>
        </div>
        {mobileNavOpen && (
          <ul
            onClick={() => setMobileNavOpen(false)}
            className='md:hidden p-4  bg-orange-100 rounded-lg font-semibold text-xl mt-2 flex flex-col gap-2 text-center'>
            <Link to="home" smooth={true} duration={500}>Home</Link>
            <Link to="plans" smooth={true} duration={500}>Plans</Link>
            <Link to="testimonials" smooth={true} duration={500}>Testimonials</Link>
            <Link to="contact" smooth={true} duration={500}>Contact</Link>

          </ul>

        )}

        {/* computerNav */}
        <div className='hidden md:flex justify-between items-center px-10 '>
          <div href="/" className="text-primary font-semibold flex gap-1 items-center">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{
                x: 0,
                opacity: 1,
                transition: { duration: 0.5, delay: 0.2 }
              }}
              className='text-[#d4af37] text-3xl font-bold'>
              Fictional{" "}
              <span className="text-white font-semibold">IELTS</span>
            </motion.div>
          </div>
          <div className='flex items-center gap-x-6'>
            {/* nav */}
            <ul className="flex items-center cursor-pointer gap-8 text-white font-semibold">
              <Link className='hover:text-yellow-400 transition-all' to="home" smooth={true} duration={500}>Home</Link>
              <Link className='hover:text-yellow-400 transition-all' to="plans" smooth={true} duration={500}>Plans</Link>
              <Link className='hover:text-yellow-400 transition-all' to="testimonials" smooth={true} duration={500}>Testimonials</Link>
              <Link className='hover:text-yellow-400 transition-all' to="contact" smooth={true} duration={500}>Contact</Link>
              <button className='bg-[#d4af37] px-4 py-2 text-white rounded-lg hover:bg-white transition-all hover:text-[#e31837]'>Join Now</button>
            </ul>
          </div>
        </div>
      </div>
    </header >

  )
}

export default Header
