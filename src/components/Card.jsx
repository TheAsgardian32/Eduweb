import {motion} from "framer-motion"
const Card = ({cards}) => {
  return (
    <motion.div 
    initial={{y:100,opacity:0}}
    whileInView ={{y:0,opacity:1}}
    transition={{duration:1}}
    className='rounded-lg  border-red-500 flex flex-col items-center space-y-4 py-4 px-6 bg-orange-50 shadow-md shadow-orange-500 '>
      <img src={cards.image} alt="food" className='w-48'/>
      <h2 className='text-2xl font-semibold'>{cards.name}</h2>
      <p>{cards.desc}</p>
      <button className='px-3 py-2 bg-red-500 text-white rounded-lg w-full'>Explore Now</button>
    </motion.div>
  )
}

export default Card
