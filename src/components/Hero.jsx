import star from "../assets/star.png"
import starOutline from "../assets/star-outline.png"
import time from "../assets/time.png"
import heroimg from "../assets/pngegg(1).png
import { motion } from "framer-motion"

const frleft = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 100,
        transition: { duration: 0.5, delay: delay }
    }
})

const Hero = () => {
    return (
        <section id="home" className=' bg-orange-50 h-[600px] '>
            <div className='flex lg:flex-row flex-col items-center justify-center p-5 lg:max-w-7xl mx-auto relative'>
                <motion.div
                    variants={frleft(0)}
                    initial="hidden"
                    animate="visible"
                    className='lg:w-1/2 lg:space-y-6 lg:px-10 relative z-20' >

                    <h1 className='font-bold text-4xl lg:text-6xl tracking-normal mt-4 lg:mt-0'>

                        <span className='text-red-500'>IELTS</span><br></br> Made easy with our Customised Training Plans</h1>
                    <p className='text-sm text-gray-600 my-3'>We, at Fictional IELTS have an integrated way of teaching and that helps you to pursue the exam with atmost ease.</p>
                    <div className='flex gap-3'>
                        <button className='bg-red-500 px-3 py-2  rounded-lg text-white hover:bg-red-600 hover:scale-110 transition-all'>Join Now</button>
                        <button className='bg-white px-3 py-2 rounded-lg border z-20 border-red-500 text-red-500 hover:bg-white hover:scale-110 transition-all'>Contact Us</button>
                    </div>

                </motion.div>
                <div className='lg:w-1/2 w-[275px]  relative'>
                    <img src={heroimg} alt="food" className=' mx-auto spin' />
                    <div variant="outline" className='bg-red-50 gap-1 text-lg flex border-red-200 border  items-center absolute bottom-16  lg:right-14 px-4 py-2 rounded-full'>
                        <img src={time} alt='time' className='lg:w-12 lg:h-12 w-6' />
                        <p className='leading-4 text-sm font-semibold'>Timely Module<br /> Completion</p>
                    </div>
                    <div variant="outline" className='bg-red-50 leading-none flex flex-col gap-1 text-lg px-4 py-2 border-red-200 border  absolute top-10 right-36 rounded-full items-center'>
                        <p className='leading-4 text-sm font-semibold '>Training Rating</p>
                        <div className='flex '>
                            <img src={star} width={15} height={15} alt='star' />
                            <img src={star} width={15} height={15} alt='star' />
                            <img src={star} width={15} height={15} alt='star' />
                            <img src={star} width={15} height={15} alt='star' />
                            <img src={starOutline} width={15} height={15} alt='star' />

                        </div>
                    </div>
                    <div variant="outline" className=' flex flex-col bg-red-50 border-red-200 border  px-6 py-2 absolute top-32 left-44 lg:top-16 lg:left-24  rounded-full items-center'>
                        <h1 className=' text-red-500 lg:text-2xl text-xl font-bold'>10000+ </h1>
                        <p className=' text-sm font-semibold'>IELTS Achievers </p>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Hero
