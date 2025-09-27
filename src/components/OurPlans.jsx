
import Card from './Card'
import sp from '../assets/speakingpract.png'
import mockimg from '../assets/mocktests.png'
import bandscore from '../assets/bandscore.png'
import { motion } from "framer-motion"

const OurPlans = () => {

    const cards = [
        {
            id: 1,
            image: sp,
            name: "Speaking Practice",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo laudantium hic voluptas.",
            rating: 4
        },
        {
            id: 2,
            image: mockimg,
            name: "Mock Tests",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo laudantium hic voluptas.ygc yc ihd",
            rating: 4
        },
        {
            id: 3,
            image: bandscore,
            name: "AI Band Score",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo laudantium hic voluptas.",
            rating: 4
        },
    ]

    return (
        <section
            id="plans" className='py-10 px-5 lg:px-0 lg:py-20 bg-gray-800' >
            <div className='text-center max-w-7xl mx-auto'>
                <h1 className='text-3xl lg:text-4xl font-bold text-red-500'>Our Plans</h1>
                <motion.p
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className='lg:text-xl text-sm pt-2 text-white'>Check out our most popular and customised Plans.</motion.p>
                <div className='grid grid-cols-1 lg:grid-cols-3 pt-11 gap-7'>
                    {
                        cards.map((item) => {
                            return <Card key={item.id} cards={item} />
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default OurPlans