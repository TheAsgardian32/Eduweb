
import { Quote, Star } from 'lucide-react';
import {motion} from "framer-motion"

const Testimonial = () => {

  const testimonials = [
    {
      id: 1,
      name: "Aditya Kumar",
      rating: 5,
      text: "This website made IELTS preparation so simple! Clear lessons, practice tests, and strategies helped me achieve my target band."
    },
    {
      id: 2,
      name: "Ali Shaik",
      rating: 4,
      text: "Great platform for IELTS prep. The tips, mock tests, and guidance boosted my confidence and improved my overall performance."
    },
    {
      id: 4,
      name: "Joseph",
      rating: 5,
      text: "I loved the step-by-step lessons and practice exercises. Very effective for improving writing and speaking skills for IELTS."
    },

  ]

  return (
    <div id="testimonials" className='py-10 '>
      <h1 className='text-center text-3xl lg:text-4xl font-bold'>What Our Students Say</h1>
      <div className=' max-w-6xl mx-auto py-10 px-3 lg:flex lg:gap-3'>
        {
          testimonials.map((item) => {
            return <div key={item.id}>
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                whileInView={{
                  x: 0,
                  opacity: 100,
                  transition: { duration:2}
                }}
                className='border border-gray-400 shadow-md shadow-orange-500 rounded-lg flex flex-col p-4 w-xl'>
                {item.rating === 4 ? (<div className='flex'>
                  <Star fill='true' />
                  <Star fill='true' />
                  <Star fill='true' />
                  <Star fill='true' />
                  <Star />
                </div>) : (<div className='flex'>
                  <Star fill='true' />
                  <Star fill='true' />
                  <Star fill='true' />
                  <Star fill='true' />
                  <Star fill='true' />
                </div>)}

                <p className='py-3'>{item.text}</p>
                <div className='flex justify-between items-center'>
                  <div>
                    <h3 className='font-semibold text-red-500 text-lg'>{item.name}</h3>
                    <p className='text-sm mt-1'>Student, Fictional IELTS</p>
                  </div>
                  <Quote className='text-red-400' />
                </div>


              </motion.div>
            </div>
          })
        }
      </div>

    </div >
  )
}

export default Testimonial
